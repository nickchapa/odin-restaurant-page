import restaurantImage from "./dining-area.jpg";

export function homeTab(){
    const divContent = document.getElementById('content');

    const image = document.createElement('img');
    const restName = document.createElement('h1');
    const description = document.createElement('p');

    image.src = restaurantImage;
    restName.textContent = 'My Restaurant';
    description.textContent = 'restaurant description';

    description.style.color = 'red';

    image.style.width = '100px';
    image.style.height = '100px';

    divContent.append(image);
    divContent.append(restName);
    divContent.append(description);
}

function setImageSize(img){
    img.style.width = '100';
}