function toggleMenu() {
    const nav = document.getElementById('navlinks');
    const btn = document.querySelector('.menu');
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
}
function closeMenu() {
    document.getElementById('navlinks').classList.remove('open');
    document.querySelector('.menu').setAttribute('aria-expanded', 'false');
}

document.getElementById('year').textContent = new Date().getFullYear();

function closeHead(id) {
    document.getElementById(id).style.display = 'none';

}
