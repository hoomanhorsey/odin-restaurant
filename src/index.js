import main from './main.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';


function hello() {
    console.log('hiya')

}



function clearPage() {
    const content = document.querySelector('#content')
    content.textContent = '';


}
function buttonSelection () {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((e) => {
        e.addEventListener('click', () => {
            console.log(e.textContent);
            clearPage();
            switch (e.textContent) {
                case 'Home':                   
                    main();
                    break;
                case 'Menu':
                    menu();
                    break;
                case 'About':
                    about();
                    break;
                case 'Contact':
                    contact();
                    break
                default:
                    console.log('default - do I need some logic?')



            }
            // if (e.textContent === 'Menu') {
            //     menu();
            // }
        } )

    })
}
hello();

buttonSelection();
// mainpage();