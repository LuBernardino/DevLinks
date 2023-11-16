function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    // Adiciona uma classe temporária para a animação
    img.classList.add("rotate");

    // Adiciona um ouvinte de evento para detectar o término da animação
    img.addEventListener("animationend", () => {
        // Remove a classe temporária após a animação
        img.classList.remove("rotate");

        // Se desejar trocar a imagem do perfil, descomente o seguinte bloco
        // if (html.classList.contains("light")) {
        //     img.setAttribute("src", "images/sun.png");
        // } else {
        //     img.setAttribute("src", "images/moonstars.png");
        // }
    });
}



