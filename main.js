(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),c=n.n(s),d=new URL(n(989),n.b),l=i()(a()),u=c()(d);l.push([e.id,`* {\n    box-sizing: border-box;\n    font-family: 'Times New Roman', Times, serif\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1 1 1 ;\n    background: url(${u});\n}\n\nheader {\n    padding: 10px;\n    align-items: center;\n}\n\n.title {\n    display: grid;\n    justify-content: center;\n    background-color: rgba(240, 255, 247, 0.692);\n \n    font-size: 5rem;\n\n    padding: 40px 0px;\n    margin: 0px 0px;\n    border-radius: 10px;\n   \n}\n\n\nnav {\n\n}\n\n\nbutton {\n    background-color: rgba(240, 255, 247, 0.692);\n    color: Black;\n    padding: 15px;\n    margin: 5px;\n    border-radius: 5px;\n    border-width: 0px;\n\n    font-size: 1.3rem;\n\n\n  }\n\n  #content {\n    background-color: rgba(240, 255, 247, 0.692);\n\n  }\n\n  .categoryDiv {\n    font-size: 2rem;\n  }\n\n  .menuItem {\n    padding: 5px 15px;\n  }`,""]);const p=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},989:(e,t,n)=>{e.exports=n.p+"08abbfa6ea372cf8e0b7.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),c=n.n(s),d=n(540),l=n.n(d),u=n(113),p=n.n(u),m=n(208),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;var h=n(989);const v=document.createElement("div"),g=new Image;g.src=h,v.appendChild(g),console.log("hiya"),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>{switch(console.log(e.textContent),document.querySelector("#content").textContent="",e.textContent){case"Home":!function(){const e=document.createElement("p");e.innerHTML="Restaurant Main Page Mother Fuckers!",document.querySelector("#content").appendChild(e)}();break;case"Menu":!function(){const e=document.createElement("p"),t=[];function n(e){t.push(e)}function r(e,t,n){this.category=e,this.dish=t,this.description=n}const a=new r("Appetizers","Root Vegetable Fritters","Crispy fritters made from a blend of shredded carrot, beetroot, and potato trimmings, served with a tangy yogurt dipping sauce."),o=new r("Appetizers","Stuffed Bell Pepper Skins","Roasted bell pepper skins filled with a savory mixture of leftover quinoa, diced tomatoes, and minced vegetable scraps, topped with melted vegan cheese."),i=new r("Appetizers","Crispy Broccoli Stems","Tempura-battered and fried broccoli stems served with a sweet and spicy chili dipping sauce."),s=new r("Soups & Salads","Minestrone Soup","A hearty Italian soup made with a rich vegetable broth, diced tomato trimmings, zucchini ends, carrot tops, and a medley of beans and pasta. "),c=new r("Soups & Salads","Kale Stem Caesar Salad","Fresh kale leaves tossed with crunchy kale stem croutons, homemade vegan Caesar dressing, and topped with roasted chickpeas and nutritional yeast."),d=new r("Soups & Salads","Gazpacho"," A refreshing Spanish chilled soup made with ripe tomato trimmings, cucumber ends, bell pepper scraps, and a hint of garlic and vinegar. "),l=new r("Main Courses","Vegetable Scrap Stir-Fry","A colorful stir-fry featuring an assortment of vegetable scraps such as broccoli florets, cauliflower leaves, bell pepper tops, and carrot peels, tossed in a savory soy-ginger sauce and served over steamed rice. "),u=new r("Main Courses","Potato Peel Tacos"," Soft corn tortillas filled with seasoned mashed potato peels, black bean and corn salsa, shredded lettuce, and a drizzle of creamy avocado-lime sauce."),p=new r("Main Courses","Zucchini Noodle Primavera","Spiralized zucchini noodles sautéed with cherry tomato trimmings, garlic, onion scraps, and spinach stems, finished with a sprinkle of vegan Parmesan cheese. "),m=new r("Desserts","Banana Peel Bread","Moist and flavorful banana bread made from ripe banana peels, walnuts, and cinnamon, served warm with a dollop of coconut whipped cream. "),f=new r("Desserts","Carrot Top Cake"," A decadent carrot cake featuring finely chopped carrot tops, shredded carrots, and crushed pineapple, topped with a luscious vegan cream cheese frosting."),h=new r("Desserts","Apple Core Crisp","Baked apple cores topped with a crunchy oat and nut crumble, sweetened with maple syrup and cinnamon, served with a scoop of dairy-free vanilla ice cream. "),v=new r("Beverages","Scrappy Smoothie","A nutritious blend of leftover fruits and vegetable scraps, such as kale stems, apple cores, banana peels, and citrus rinds, blended with almond milk and a touch of honey. "),g=new r("Beverages","Herb-Infused Iced Tea","Refreshing iced tea brewed with leftover herb stems and citrus peels, sweetened with agave syrup and garnished with fresh mint leaves."),y=new r("Beverages","Scraps-to-Sips Cocktail","A creative cocktail crafted from kitchen scraps, featuring muddled cucumber ends, lemon and lime peels, simple syrup, and your choice of gin or vodka, served over ice and garnished with a citrus twist.");n(a),n(o),n(i),n(s),n(c),n(d),n(l),n(u),n(p),n(m),n(f),n(h),n(v),n(g),n(y),function(t){let n;console.log("called displaymnu");for(const r of t){if(n!==r.category){n=r.category;const t=document.createElement("div");t.setAttribute("class","categoryDiv"),t.innerHTML=n,e.appendChild(t)}console.log(n);const t=document.createElement("p");t.innerHTML=`<div> <b>${r.dish}</b>, <br> ${r.description}</div>`,t.setAttribute("class","menuItem"),e.appendChild(t)}}(t),document.querySelector("#content").appendChild(e)}();break;case"About":!function(){const e=document.createElement("p");e.innerHTML="<p>In the heart of our vibrant city lies a culinary sanctuary unlike any other – welcome to Trimmings Bistro. Here, we proudly redefine the essence of sustainable dining by exclusively crafting our dishes from vegetable trimmings and kitchen scraps. Prepare to be amazed as we transform humble scraps into culinary treasures, all under the expert guidance of our visionary head chef, Oliva – an esteemed microbiologist turned culinary virtuoso.</p>  <p>Step into our inviting space, where rustic charm meets contemporary flair, and embark on a gastronomic adventure that champions mindful eating and sustainability. As you peruse our menu, you'll be delighted to discover that every dish reflects our unwavering commitment to utilizing every last bit of nature's bounty. </p>  <p> Begin your journey with our Watermelon Rind Gazpacho, a refreshing symphony of flavors crafted from discarded watermelon rinds and heirloom tomatoes. Or, indulge in our Mushroom Stem Croquettes, where leftover mushroom stems are transformed into crispy bites of perfection, infused with aromatic herbs and spices. </p>    For the main course, immerse yourself in the vibrant fusion of Portuguese and Southern California cuisine with our Grilled Vegetable Espetada. Skewered vegetables, marinated in a zesty chimichurri sauce made from herb stems and citrus peels, showcase the artistry of utilizing every part of the plant. Alternatively, savor the essence of California with our Avocado Tacos, featuring creamy avocado slices nestled in warm tortillas and topped with a tangy salsa crafted from vegetable scraps.  <p> Save room for dessert, where our commitment to sustainability shines brightly. Indulge in our Chocolate Avocado Mousse, a velvety delight created from ripe avocados and cocoa bean husks, or cleanse your palate with our Citrus Sorbet, made from leftover citrus peels and sweetened with natural agave nectar. <p> At Trimmings Bistro, we invite you to join us in celebrating the beauty of plant-based cuisine and the magic of culinary innovation. With every bite, you'll not only savor exquisite flavors but also contribute to a more sustainable future. So gather your loved ones and immerse yourself in an unforgettable dining experience where every ingredient tells a story of sustainability, creativity, and culinary excellence.",document.querySelector("#content").appendChild(e)}();break;case"Contact":!function(){const e=document.createElement("p");e.innerHTML="Contact details",document.querySelector("#content").appendChild(e)}();break;default:console.log("default - do I need some logic?")}}))}))})()})();