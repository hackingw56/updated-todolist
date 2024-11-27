





document.querySelectorAll('.data div').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color'); // Get the color attribute
        const container = document.getElementById('colorContainer');
        const todoContainer = document.querySelector('.todo-container');
        const ul = document.querySelector('#ul');
        const input = document.querySelector('#input');

        // Apply styles based on the selected color
        if (color === 'black') {
            // Apply the "Black" theme
            container.style.backgroundColor = 'black';
            container.style.color = 'white'; // Text color for general elements
            todoContainer.style.backgroundColor = 'white';
            todoContainer.style.color = 'black';
            ul.style.backgroundColor = 'black';
            ul.style.color = 'white';
            input.style.backgroundColor = 'white';
            input.style.color = 'black';
        } else if (color === 'white') {
            // Apply the "White" theme
            container.style.backgroundColor = 'white';
            container.style.color = 'black'; // Text color for general elements
            todoContainer.style.backgroundColor = 'black';
            todoContainer.style.color = 'white';
            ul.style.backgroundColor = 'black';
            ul.style.color = 'white';
            input.style.backgroundColor = '#333'; // Slightly darker gray for input
            input.style.color = 'white';
        }
    });
});

// Set default theme to "Black" when the page loads
window.onload = () => {
    const container = document.getElementById('colorContainer');
    const todoContainer = document.querySelector('.todo-container');
    const ul = document.querySelector('#ul');
    const input = document.querySelector('#input');

    // Default styles for "Black" theme
    container.style.backgroundColor = 'black';
    container.style.color = 'white'; // Text color for general elements
    todoContainer.style.backgroundColor = 'white';
    todoContainer.style.color = 'black';
    ul.style.backgroundColor = 'white';
    ul.style.color = 'black';
    input.style.backgroundColor = 'white';
    input.style.color = 'black';
};





//typed js//

var typed = new Typed('#element', {
    strings: [
        'just <span style="color: #4CAF50; font-weight: bold;">do</span>' +
        '<span style="text-decoration: line-through; color: red; ">nt</span> it'
    ],
    typeSpeed: 70,
});




let ul = document.querySelector("#ul")
let input = document.querySelector("#input");

function start() { 
    
    
    
    
    //sb se pehle field yani input ko barabar leliya input.value ke 
    let inputValue = input.value;

    if(inputValue === ""){
        alert("Empty Field Not Allowed")
    }
    else{

        let li = document.createElement('li');
    
    
        let liValue = document.createTextNode(inputValue);
    
        li.appendChild(liValue)
        ////////////////////////////////////////////////////////////////////////////////////////////
        let div = document.createElement('div');
        li.appendChild(div)
        ////////////////////////////////////////////////////////////////////////////////////////////////
    
        //editicon//
    
    
        let editIcon = document.createElement('i');
        editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
        editIcon.setAttribute("onclick", "editItem(this)")
        div.appendChild(editIcon);
    
    
    
    
    
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////
    
        //deleteIcon//
    
        let deleteIcon = document.createElement('i');
        deleteIcon.setAttribute("class", "fa-solid fa-trash");
        deleteIcon.setAttribute("onclick", "deleteItem(this)")
    
        div.appendChild(deleteIcon);
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ul.appendChild(li)
        input.value = ""
    }

    






}
function editItem(e){
let updatedValue = prompt("enter Updated Value",e.parentNode.parentNode.firstChild.nodeValue)

if(updatedValue == ""){
    alert("empty value not allowed")
}
else{
    e.parentNode.parentNode.firstChild.nodeValue = updatedValue
}
}

function deleteItem(e){
    console.log(e.parentNode.parentNode.remove())
}



/*
                  <ul class="mt-2" id="ul">
                      <li class="li ">have meeting at 10
                          <div>
                              <i class="fa-solid fa-pen-to-square"></i>
                              <i class="fa-solid fa-trash"></i>
                          </div>
                      </li>
                      <li class="">have meeting at 10
                          <div>
                              <i class="fa-solid fa-pen-to-square"></i>
                              <i class="fa-solid fa-trash"></i>
                          </div>
                      </li>

                  </ul>

                     */ 