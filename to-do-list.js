const newArray = [{
   name: 'dancing',
   dueDate: '2-01-2024'
}, {
   name: 'wash clothes',
   dueDate: '5-07-2023'
}];

renderList();

function renderList() {
let listElement = '';
 
for (let i = 0; i<newArray.length; i++) {
   const newArrayObject = newArray[i];
   // const dueDate = newArrayObject.dueDate;
   const { name, dueDate } = newArrayObject;


   const html = `
      <div><input type="radio">${name}</div>
      <div>${dueDate}</div>
      <button onclick="
         newArray.splice(${i}, 1);
         renderList();
         " class="delete-button">Delete</button>
         <button onclick="

         " class="modify-button">Modify</button>
      `;
   listElement += html;
}
console.log(listElement);

document.querySelector('.js-new-input')
      .innerHTML = listElement;
}

function addToDo() {
   const inputElement =  document.querySelector('.js-input-item');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   newArray.push({
      name,
      dueDate
   });

   inputElement.value = '';

   renderList();
}