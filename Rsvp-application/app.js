//document.addEventListener('DomContentLoaded', () => {
const form = document.getElementById('registrar');
const input = document.querySelector('input');
const button = document.querySelector('button');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
let listItems = document.getElementsByTagName('li');

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
}) // end change

const validateInput = (formInput, list) => {
    // validate input received
    let validateObject = {};

    if (input.value.length >= 16) {
        validateObject.error = alert('Maximum characters is 15!');
        validateObject.isValid = false;
        return validateObject;
    }

    if (formInput === '') {
        validateObject.error = alert('You must enter a name!');
        validateObject.isValid = false;
        return validateObject;
    }
    console.log(list);
    for (let item of list) {
        let liContent = item.firstElementChild.textContent;

        if (liContent.toLowerCase() === formInput.toLowerCase().trim()) {
            validateObject.error = alert('Name already Exists!');
            validateObject.isValid = false;
            input.value = '';
            return validateObject;
        }
    }
    validateObject.isValid = true;
    return validateObject;

} // end validateInput

const createGuestList = () => {

    // create li and span html elements
    const li = document.createElement('li');
    const span = document.createElement('span')

    // get content from form
    formContent = input.value

    // validate the content
    const validationObject = validateInput(formContent, listItems)

    if (!validationObject.isValid) {
        validationObject.error
    } else {
        span.textContent = formContent;
        li.appendChild(span);
        ul.appendChild(li);
        input.value = '';
    }

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
} // end createGuestList

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createGuestList();
}); // end submit

ul.addEventListener('change', (event) => {
    const checkbox = event.target;
    listItem = checkbox.parentNode.parentNode;

    if (checkbox.checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
}); // end change

// Edit, save and remove event handler
ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {

        const button = event.target
        const content = event.target.parentNode.parentNode;
        const ul = content.parentNode;

        const removeName = () => {
            ul.removeChild(content);

        } // end removeName

        const editName = () => {
            const span = content.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            content.insertBefore(input, span);
            content.removeChild(span);
            button.textContent = 'Save';

        } // end editName

        const saveName = () => {
            const input = content.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;

            // validate the content
            const validationObject = validateInput(span.textContent, listItems)

            if (!validationObject.isValid) {
                validationObject.error;
                return;
            } else {
                content.insertBefore(span, input);
                content.removeChild(input);
                button.textContent = 'Edit';
            }
        } // end saveName

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