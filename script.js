const menu = document.getElementById("menu");
menu.innerHTML = `
  <ul id="menu-links">
    <li><a href="index.html" id="nav-index">História</a></li>
    <li><a href="projetos.html" id="nav-projetos">Projetos</a></li>
    <li><a href="valores.html" id="nav-valores">Missão, visão e valores</a></li>
    <li><a href="contato.html" id="nav-contato">Contato</a></li>
  </ul>
`;

const paginaAtual = window.location.pathname.split("/").pop();

if (paginaAtual === "index.html" || paginaAtual === "") {
    document.getElementById("nav-index").classList.add("active");
} else if (paginaAtual === "projetos.html") {
    document.getElementById("nav-projetos").classList.add("active");
} else if (paginaAtual === "valores.html") {
    document.getElementById("nav-valores").classList.add("active");
} else if (paginaAtual === "contato.html") {
    document.getElementById("nav-contato").classList.add("active");
}
