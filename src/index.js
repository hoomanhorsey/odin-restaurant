import './style.css';
import vegImage from './veg.jpg'


import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';


function hello() {
    console.log('hiya')

}

// Add the image to our existing div.
  const imageElement = document.createElement('div');
    const myIcon = new Image();
  myIcon.src = vegImage;

  imageElement.appendChild(myIcon);

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
                    home();
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
   
        } )

    })
}
hello();

buttonSelection();
home();
// mainpage();