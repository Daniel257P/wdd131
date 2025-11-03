const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.trim () != '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
        }); 
            li.appendChild(deleteButton);
            list.appendChild(li);

            input.value = '';
            input.focus();
    }
})

