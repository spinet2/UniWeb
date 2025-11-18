// ===============================
// Ejercicio 1 — Palíndromo
// ===============================
document.getElementById("pal-btn").addEventListener("click", () => {
  const s = document.getElementById("pal-input").value;

  // Normalizar: minúsculas, quitar acentos, quitar espacios y símbolos
  const norm = s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  // Comparar con la cadena invertida
  const es = norm && norm === [...norm].reverse().join("");

  document.getElementById("pal-res").textContent =
    es ? "Es palíndromo" : "No lo es";
});


// ===============================
// Ejercicio 2 — Mayor de dos números
// ===============================
document.getElementById("mayor-btn").addEventListener("click", () => {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  let r = "";
  if (n1 > n2) r = n1;
  else if (n2 > n1) r = n2;
  else r = "Son iguales";

  document.getElementById("mayor-res").textContent = r;
});


// ===============================
// Ejercicio 3 — Vocales presentes
// ===============================
document.getElementById("voc-btn").addEventListener("click", () => {
  const s = document.getElementById("voc-input").value.toLowerCase();
  const vocales = ["a", "e", "i", "o", "u"];

  // Filtrar solo las vocales que están presentes en la frase
  const presentes = vocales.filter(v => s.includes(v));

  document.getElementById("voc-res").textContent =
    presentes.length ? presentes.join(", ") : "No hay vocales";
});


// ===============================
// Ejercicio 4 — Conteo de vocales
// ===============================
document.getElementById("voc2-btn").addEventListener("click", () => {
  const s = document.getElementById("voc2-input").value.toLowerCase();
  const vocales = ["a", "e", "i", "o", "u"];
  const conteo = { a:0, e:0, i:0, o:0, u:0 };

  // Contar cada vocal encontrada
  for (const ch of s) {
    if (conteo.hasOwnProperty(ch)) conteo[ch]++;
  }

  const partes = vocales.map(v => `${v}: ${conteo[v]}`);
  document.getElementById("voc2-res").textContent = partes.join(" | ");
});


// ===============================
//              AJAX
// ===============================

// Al cargar la página, escribir la URL actual en el input
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ajax-url").value = location.href;
});

document.getElementById("ajax-btn").addEventListener("click", () => {
  const url = document.getElementById("ajax-url").value;
  const req = new XMLHttpRequest();

  // Mostrar en qué estado se encuentra la petición
  req.onreadystatechange = () => {
    document.getElementById("ajax-states").textContent =
      `readyState: ${req.readyState}`;
  };

  // Cuando la respuesta llega completamente
  req.onload = () => {
    document.getElementById("ajax-content").textContent = req.responseText;
    document.getElementById("ajax-headers").textContent = req.getAllResponseHeaders();
    document.getElementById("ajax-status").textContent = `${req.status} ${req.statusText}`;
  };

  // Si hay problemas de red o CORS
  req.onerror = () => {
    document.getElementById("ajax-content").textContent =
      "Error al cargar la URL.";
  };

  req.open("GET", url, true);
  req.send();
});
