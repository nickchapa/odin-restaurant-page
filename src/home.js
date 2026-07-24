import restaurantImage from "./dining-area.jpg";

export function homeTab(){
    const divContent = document.getElementById('content');

    const image = document.createElement('img');
    const restName = document.createElement('h1');

    image.src = restaurantImage;
    restName.textContent = 'My Restaurant';

    setImageSize(image);

    divContent.append(image);
    divContent.append(restName);
    divContent.append(descriptionDiv());
    divContent.append(hoursDiv());
    divContent.append(locationDiv());
}

function setImageSize(img){
    img.style.width = '100px';
    img.style.height = '100px';
}

function descriptionDiv(){
    const div = document.createElement('div');
    const description = document.createElement('p');
    const signature = document.createElement('h2');

    description.textContent = 'restaurant description';
    signature.textContent = 'signature';

    div.append(description);
    div.append(signature);

    return div;
}

function hoursDiv(){
    const hoursDiv = document.createElement('div');
    const title = document.createElement('h2');
    const hours = document.createElement('div');
    const weekends = document.createElement('p');
    const weekdays = document.createElement('p');

    // set textcontent
    title.textContent = 'Hours';
    weekends.textContent = 'Weekends: Closed';
    weekdays.textContent = 'Weekdays: 9am - 5pm';

    // append to hoursDiv
    hours.append(weekends);
    hours.append(weekdays);
    hoursDiv.append(title);
    hoursDiv.append(hours);

    return hoursDiv;
}

function locationDiv(){
    //create div
    //create h2
    //create p

    const locationDiv = document.createElement('div');
    const title = document.createElement('h2');
    const address = document.createElement('p');

    //h2, p text content
    title.textContent = 'Location';
    address.textContent = '123 Choco Lane, Princessland';

    //append h2, p to div
    locationDiv.append(title);
    locationDiv.append(address);

    //return div
    return locationDiv;
}