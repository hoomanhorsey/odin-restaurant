export default function contact() {

    const element = document.createElement('p')
    element.setAttribute('class', 'contact')

    element.innerHTML = "Trimmings Bistro <br>  Address: 456 Ocean Avenue, Seaside Haven, CA 90210 <br>     Phone: +1 (555) 555-6789 <br>     Email: info@trimmingsbistro.com <br> Website: www.trimmingsbistro.com <br>     Instagram: @trimmingsbistro_seaside <br>     Facebook: facebook.com/trimmingsbistroseaside <br>    Twitter: @trimmings_CA <br>     TripAdvisor: Trimmings Bistro - Seaside Haven <br>    OpenTable: Trimmings Bistro - Seaside Haven"

    const content = document.querySelector('#content')

    content.appendChild(element)


}