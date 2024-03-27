export default function menu() {

    const element = document.createElement('p')

    element.textContent = "All the delicious things"

    const content = document.querySelector('#content')

    content.appendChild(element)


}