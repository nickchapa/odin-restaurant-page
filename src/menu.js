export function menuTab(){
    const divContent = document.querySelector('#content');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';

    const menuCategory = document.createElement('h2');
    menuCategory.textContent = 'Category 1';

    const item1 = menuItem('item1', 'description', '$price');
    const item2 = menuItem('item2', 'description', '$price')
    const item3 = menuItem('item3', 'description', '$price')
    
    divContent.append(menuTitle);
    divContent.append(menuCategory);
    divContent.append(item1);
    divContent.append(item2);
    divContent.append(item3);
}

function menuItem(title, description, price, image){
    // create elements
    // div, title, description, price, img
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');

    // use parameters to input text content for title, desc, price, add img
    h3.textContent = title;
    p.textContent = description;
    h4.textContent = price;
    // img.src = '';

    // append children elements to parent div
    div.append(h3);
    div.append(p);
    div.append(h4);
    div.append(img);

    return div;
}