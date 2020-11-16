// check if there is not a value in local storage
if(!localStorage.getItem('counter')){
    // if not, set the counter to 0 in local storage
    localStorage.setItem('counter', 0)
}


count = () => {
    // retrieve counter value from local storage
    let counter = localStorage.getItem('counter');
    // update counter
    counter++;
    document.querySelector('h1').innerHTML = counter;

    // if (counter % 10 === 0){
    //     alert(`Count is now ${counter}`)
    // }

    // store in local storage
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', () => {
    // set heading to the current value inside local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');

    document.querySelector('button').onclick = count;

    // setInterval(count, 1000)
});