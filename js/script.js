document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得（ただの直書き）
    const nav  = document.querySelector('#navArea');
    const btn  = document.querySelector('.toggle_btn');
    const mask = document.querySelector('#mask');

    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    mask.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});