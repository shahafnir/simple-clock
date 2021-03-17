const node = document.querySelector('#clock')

setInterval(() => {
    const currentDate = new Date()

    const timeToShow = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    node.textContent = timeToShow
}, 1000)
