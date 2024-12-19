// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!");
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            alert(Você clicou em: ${link.textContent});
        });
    });
});