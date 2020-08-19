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

changeWords();