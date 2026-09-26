document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  // Paso 1: Leyendo navegador
  setTimeout(() => {
    progress.style.width = "33%";
    step1.classList.add("active");
  }, 800);

  // Paso 2: Analizando conexión
  setTimeout(() => {
    progress.style.width = "66%";
    step2.classList.add("active");
  }, 2000);

  // Paso 3: Comparando registro
  setTimeout(() => {
    progress.style.width = "100%";
    step3.classList.add("active");

    // Redirección o acción final tras verificar
    setTimeout(() => {
      window.location.href = "https://discord.com/channels/@me";
    }, 1200);
  }, 3200);
});