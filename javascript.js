function changeWords () {
    const content = document.getElementById('content');

    const words = ['important', 'air', 'life', 'survival']
    let flag = 0

    setInterval(() => {
        content.style.animation = 'none'

        setTimeout(function () { // delay for wait the css remove animation
            content.textContent = words[flag]
            content.style.animation = 'show 4s normal'

            if (flag < words.length - 1)
                flag++
            else
                flag = 0
        }, 1000);
    }, 4000)
}

function clickMenu () {
    const burguer = document.getElementById('burguer')
    const navBar = document.querySelector('nav')
    const backdrop = document.querySelector('div.backdrop')

    burguer.addEventListener('click', () => {
        navBar.style.transform = 'translateX(0%)'
        backdrop.style.display = 'block'
    })

    backdrop.addEventListener('click', () => {
        backdrop.style.display = 'none'
        navBar.style.transform = 'translateX(-100%)'
    })
}

changeWords();
clickMenu();