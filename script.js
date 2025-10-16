document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.classList.add("ativo");
        }
    });

    // Transição suave entre páginas
    document.body.style.opacity = 1;
    document.querySelectorAll("a[href$='.html']").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
});
