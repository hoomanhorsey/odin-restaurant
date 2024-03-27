function consolecall() {
    console.log('Hey Im alive!')
   
}

consolecall();

function buttonListener() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((e) => {
        e.addEventListener('click', () => {
            console.log(e.innerHTML)})
        });
};

buttonListener();