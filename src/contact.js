export function contactTab(){
    const divContent = document.querySelector('#content');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';
    
    divContent.append(contactTitle);

    divContent.append(contactItem(
        'name',
        'position',
        'phone',
        'email'
    ));

    divContent.append(contactItem(
        'name',
        'position',
        'phone',
        'email'
    ));

    divContent.append(contactItem(
        'name',
        'position',
        'phone',
        'email'
    ));
}

function contactItem(name, position, phone, email){
    const div = document.createElement('div');
    const nameE = document.createElement('h3');
    const positionE = document.createElement('p');
    const phoneE = document.createElement('p');
    const emailE = document.createElement('p');

    nameE.textContent = name;
    positionE.textContent = position;
    phoneE.textContent = phone;
    emailE.textContent = email;

    div.className = 'contactItem';

    div.append(nameE);
    div.append(positionE);
    div.append(phoneE);
    div.append(emailE);

    return div;
}