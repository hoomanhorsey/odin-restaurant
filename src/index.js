import mainpage from './main';

function hello() {
    console.log('hiya')

}





function buttonSelection () {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((e) => {
        e.addEventListener('click', () => {
            console.log(e.textContent);
        } )

    })
}
hello();

buttonSelection();
mainpage();