import restaurantImage from "./dining-area.jpg";

export function homeTab(){
    const divContent = document.getElementById('content');
    const image = document.createElement('img');
    const description = document.createElement('p');

    // append to div#content
    image.src = restaurantImage;
    description.textContent = 'restaurant description';

    description.style.color = 'red';

    image.style.width = '100px';
    image.style.height = '100px';

    //setImageSize(image);

    divContent.append(image);
    divContent.append(description);
    /*
    <img src="dining-area.jpg" alt="image of dining area" style="width: 100px; height: 100px;">
            <h2>Restaurant Name</h2>
            <p>Description of Restaurant</p>
    */

}

function setImageSize(img){
    img.style.width = '100';
}