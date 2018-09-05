//document.addEventListener('DomContentLoaded', () => {
const form = document.getElementById('registrar');
const input = document.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
const lit = document.getElementsByTagName('li');

// create the filter div
const div = document.createElement('div');

// create filter label and append to filter div
const filterLabel = document.createElement('label');
filterLabel.textContent = 'Those who have not responded';
div.appendChild(filterLabel);

// create filter checkbox and append to filter div
const filterCheckBox = document.createElement('input');
filterCheckBox.type = 'checkbox';
div.appendChild(filterCheckBox);

// insert filter div to main div
mainDiv.insertBefore(div, ul);

filterCheckBox.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    const list = ul.children;

    if (isChecked) {
        for (let i = 0; i < list.length; i++) {
            listItems = list[i];
            if (listItems.className === 'responded') {
                listItems.style.display = '';
            } else {
                listItems.style.display = 'none';
            }
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            listItems = list[i];
            listItems.style.display = '';
        }
    }
})

//    
//  validateInput = () => {
//    // validate input received
//    formContent = input.value
//    
//    for (let item of li) {
//      liContent = item.firstElementChild.textContent
//      if (  liContent.toLowerCase() === formContent.toLowerCase() ) {
//        input.placeholder = 'Name already Exists!';
//      }
//    }
//    
//    if ( formContent === '' ) {
//       input.placeholder = 'You must enter a name!';
//    }
//  }
createGuestList = () => {
    // add a guest to the guest list
    const li = document.createElement('li');
    const span = document.createElement('span')
    formContent = input.value



    // append the guest to invited list and clear the input field
    ul.appendChild(li);
    input.value = '';

    // create a label element
    const label = document.createElement('label')
    label.textContent = 'Confirmed';

    // create checkbox and append it to label element
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);

    //creates the edit button and append it to label element
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit';
    label.appendChild(editButton);

    //creates the delete button and append it to label element
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Remove';
    label.appendChild(deleteButton);

    //append label to li element
    li.appendChild(label);

    return li;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createGuestList();
});

ul.addEventListener('change', (event) => {
    const checkbox = event.target;
    listItem = checkbox.parentNode.parentNode;

    if (checkbox.checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
})

// Edit, save and remove event handler
ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {

        const button = event.target
        const content = event.target.parentNode.parentNode;
        const ul = content.parentNode;

        removeName = () => {
            ul.removeChild(content);
        }
        editName = () => {
            const span = content.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            content.insertBefore(input, span);
            content.removeChild(span);
            button.textContent = 'Save';
        }

        saveName = () => {
            const input = content.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            content.insertBefore(span, input);
            content.removeChild(input);
            button.textContent = 'Edit';
        }

        if (button.textContent === 'Remove') {
            removeName();
        } else if (button.textContent === 'Edit') {
            editName();
        } else if (button.textContent === 'Save') {
            saveName();
        }
    }
});
//});