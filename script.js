// alert('Connected');

// var h  = document.createElement('h1')

// var myValue = document.createTextNode('hello World !')

// h.appendChild(myValue)

// document.querySelector('h1').appendChild(h);

// Global
var ul = document.getElementById('list');
var li;



// Adding Items
var addButton = document.getElementById('add');

addButton.addEventListener('click', addItem);


function addItem() {
    var input = document.getElementById('input');
    var item = input.value
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false
        // Add a Tag and assign a value of "Enter todo"
    } else {
        // create li
        li = document.createElement('li')
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')
        // create label
        var label = document.createElement('label');

        // add these ele to webpage

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);

        ul.insertBefore(li, ul.childNodes[0]);
        


        setTimeout(() => {
            li.className = 'visual';
        },2)

        input.value = ""
    }
}

// Removing the done items
var removeButton = document.getElementById('remove');

removeButton.addEventListener('click', removeItem);


function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}

// clearing all item's

var removeButton1 = document.getElementById('removeAll');

removeButton1.addEventListener('click', removeItem1);


function removeItem1() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }
        
    }
}