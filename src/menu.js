export default function menu() {

    const element = document.createElement('p')


    const Menu = [];

    function addItemtoMenu(MenuItem) {
        Menu.push(MenuItem);
        };

    function MenuItem(category, dish, description) {
        this.category = category;
        this.dish = dish;
        this.description = description;
    };

    const a = new MenuItem('Appetizers','Root Vegetable Fritters','Crispy fritters made from a blend of shredded carrot, beetroot, and potato trimmings, served with a tangy yogurt dipping sauce.');
    const b = new MenuItem('Appetizers', 'Stuffed Bell Pepper Skins', 'Roasted bell pepper skins filled with a savory mixture of leftover quinoa, diced tomatoes, and minced vegetable scraps, topped with melted vegan cheese.');
    const c = new MenuItem('Appetizers', 'Crispy Broccoli Stems','Tempura-battered and fried broccoli stems served with a sweet and spicy chili dipping sauce.')
    const d = new MenuItem('Soups & Salads','Minestrone Soup', 'A hearty Italian soup made with a rich vegetable broth, diced tomato trimmings, zucchini ends, carrot tops, and a medley of beans and pasta. ')
    const e = new MenuItem('Soups & Salads','Kale Stem Caesar Salad', 'Fresh kale leaves tossed with crunchy kale stem croutons, homemade vegan Caesar dressing, and topped with roasted chickpeas and nutritional yeast.' )
    const f = new MenuItem('Soups & Salads','Gazpacho',' A refreshing Spanish chilled soup made with ripe tomato trimmings, cucumber ends, bell pepper scraps, and a hint of garlic and vinegar. ')
    const g = new MenuItem('Main Courses','Vegetable Scrap Stir-Fry','A colorful stir-fry featuring an assortment of vegetable scraps such as broccoli florets, cauliflower leaves, bell pepper tops, and carrot peels, tossed in a savory soy-ginger sauce and served over steamed rice. ' )
    const h = new MenuItem('Main Courses','Potato Peel Tacos', ' Soft corn tortillas filled with seasoned mashed potato peels, black bean and corn salsa, shredded lettuce, and a drizzle of creamy avocado-lime sauce.' )
    const i = new MenuItem('Main Courses','Zucchini Noodle Primavera', 'Spiralized zucchini noodles sautéed with cherry tomato trimmings, garlic, onion scraps, and spinach stems, finished with a sprinkle of vegan Parmesan cheese. ')
    const j = new MenuItem('Desserts','Banana Peel Bread', 'Moist and flavorful banana bread made from ripe banana peels, walnuts, and cinnamon, served warm with a dollop of coconut whipped cream. ')
    const k = new MenuItem('Desserts','Carrot Top Cake' , ' A decadent carrot cake featuring finely chopped carrot tops, shredded carrots, and crushed pineapple, topped with a luscious vegan cream cheese frosting.')
    const l = new MenuItem('Desserts','Apple Core Crisp', 'Baked apple cores topped with a crunchy oat and nut crumble, sweetened with maple syrup and cinnamon, served with a scoop of dairy-free vanilla ice cream. ')
    const m = new MenuItem('Beverages','Scrappy Smoothie' , 'A nutritious blend of leftover fruits and vegetable scraps, such as kale stems, apple cores, banana peels, and citrus rinds, blended with almond milk and a touch of honey. ')
    const n = new MenuItem('Beverages','Herb-Infused Iced Tea'  , 'Refreshing iced tea brewed with leftover herb stems and citrus peels, sweetened with agave syrup and garnished with fresh mint leaves.')
    const o = new MenuItem('Beverages','Scraps-to-Sips Cocktail' , 'A creative cocktail crafted from kitchen scraps, featuring muddled cucumber ends, lemon and lime peels, simple syrup, and your choice of gin or vodka, served over ice and garnished with a citrus twist.' )
                            
addItemtoMenu(a);addItemtoMenu(b);addItemtoMenu(c);addItemtoMenu(d);addItemtoMenu(e);addItemtoMenu(f);addItemtoMenu(g);
addItemtoMenu(h);addItemtoMenu(i);addItemtoMenu(j);addItemtoMenu(k);addItemtoMenu(l);addItemtoMenu(m);addItemtoMenu(n);
addItemtoMenu(o);


function displayMenu(menu) {

    console.log('called displaymnu')


    let categoryState;
    for (const item of menu) {
    
        if (categoryState !== item.category) {
            categoryState = item.category
            const categoryDiv = document.createElement('div');
            categoryDiv.setAttribute('class', 'categoryDiv');   
            categoryDiv.innerHTML = categoryState;
            element.appendChild(categoryDiv);
        }

        console.log(categoryState)

        
    const displayItem = document.createElement('p');
          
    displayItem.innerHTML= `<div> <b>${item.dish}</b> <br> ${item.description}</div>`;
    displayItem.setAttribute('class', 'menuItem');
    element.appendChild(displayItem);
    }
}

displayMenu(Menu);


    // element.innerHTML = ['hi!'];

    const content = document.querySelector('#content')

    content.appendChild(element)

   
}