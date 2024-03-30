export default function about() {

    const element = document.createElement('p')
    element.setAttribute('class', 'about');  

    element.innerHTML = "<p>Welcome to Trimmings Bistro, where sustainability meets sensational flavor in the heart of Seaside Haven, Southern California.</p> <p> Nestled along the picturesque coastline, Trimmings Bistro offers a unique dining experience that celebrates the beauty of vegan cuisine while championing environmental stewardship. Our award-winning restaurant is not only a culinary destination but also a testament to the innovative spirit of our head chef, Olivia, an internationally renowned microbiologist.</p> <p>At Trimmings Bistro, we take pride in our commitment to sustainability. One of our most distinctive features is our dedication to sourcing ingredients from vegetable trimmings and kitchen scraps, transforming them into exquisite dishes that delight the palate and nourish the soul. Every plate tells a story of resourcefulness and creativity, showcasing the endless possibilities of plant-based cuisine.  </p> <p> Indulge in our signature dishes, each crafted with precision and passion. Savor the crispy perfection of our Crispy Broccoli Stems, or experience the refreshing crunch of our Kale Stem Caesar Salad. Delight in the comforting warmth of our Banana Peel Bread, a true testament to the magic of upcycling. And don't forget to quench your thirst with our innovative Scraps-to-Sips Cocktail, a refreshing libation made from leftover fruit peels and herbs.</p> <p>  Whether you're a dedicated vegan or simply curious about plant-based dining, Trimmings Bistro welcomes you with open arms. Join us on a culinary journey where sustainability, flavor, and innovation converge to create an unforgettable dining experience by the sea.</p>"

    const content = document.querySelector('#content')

    content.appendChild(element)

}