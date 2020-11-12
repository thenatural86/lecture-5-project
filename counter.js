let counter = 0;

count = () => {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0){
        alert(`Count is now ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = count;

    setInterval(count, 1000)
});