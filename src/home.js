// import bistroImage from './bistro.jpeg'

export default function homepage() {

    const element = document.createElement('Div')

    element.innerHTML = "Trimmings Bistro, a haven of sustainability and culinary innovation nestled along the breathtaking coastline of Seaside Haven, Southern California."
    element.setAttribute('class', 'homeDiv');   
    const content = document.querySelector('#content')
    content.appendChild(element)


    // const imageElement = document.createElement('div');
    // const bistro = new Image();
    // bistro.src = bistroImage;
    // imageElement.appendChild(bistro);

}

// Led by our esteemed head chef, Olivia, an internationally renowned microbiologist, our award-winning restaurant redefines vegan cuisine with a commitment to sourcing ingredients from vegetable trimmings and kitchen scraps. Each dish reflects our dedication to environmental stewardship and creativity, offering a dining experience that celebrates the endless possibilities of plant-based cooking.