export default function about() {

    const element = document.createElement('p')

    element.textContent = "All about this amazing restaurant"

    const content = document.querySelector('#content')

    content.appendChild(element)

}