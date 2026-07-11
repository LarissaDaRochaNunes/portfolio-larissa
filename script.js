const menu = document.getElementById("menu");
menu.innerHTML = `
  <ul id="menu-links">
    <li><a href="#historia" class="nav-link">História</a></li>
    <li><a href="#projetos" class="nav-link">Projetos</a></li>
    <li><a href="#missao" class="nav-link">Missão, visão e valores</a></li>
    <li><a href="#contatos" class="nav-link">Contato</a></li>
  </ul>
`;

const secoes = document.querySelectorAll("main > section");
const linksMenu = document.querySelectorAll(".nav-link");
const opcoes = {
    rootMargin: "-100px 0px -40% 0px" 
};

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const idSecao = entrada.target.getAttribute("id");
            linksMenu.forEach(link => link.classList.remove("active"));
            const linkAtivo = document.querySelector(`a[href="#${idSecao}"]`);
            if (linkAtivo) {
                linkAtivo.classList.add("active");
            }
        }
    });
}, opcoes);

secoes.forEach(secao => {
    observador.observe(secao);
});
