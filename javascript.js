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
        navBar.style.transform = 'translateX(-105%)'
    })
}

function animateBorbolet () {
    const randon = (min, max) => Math.floor(Math.random() * (max - min) + min)

    const borbolets = document.querySelectorAll('li img')

    borbolets.forEach(element => {
        element.animate([
            // keyframes
            { transform: `translateX(0px) translateY(0px)` },
            { transform: `translateX(${randon(-400, -600)}px) translateY(${randon(50, 200)}px)` },
            { transform: `translateX(${randon(-600, -900)}px) translateY(${randon(-50, 100)}px)` },
            { transform: `translateX(${randon(-1100, -1300)}px) translateY(${randon(50, 200)}px)` },
            { transform: `translateX(${randon(-1500, -1700)}px) translateY(${randon(-50, -200)}px)` }
        ], {
            // timing options
            duration: randon(20000, 30000),
            iterations: Infinity
        });
    })
}

changeWords();
clickMenu();
animateBorbolet();