let todoList = [
  {
    item: 'Buy Milk', 
    dueDate: '1/09/2024'
  }, 
  {
    item:'Go to College',
    dueDate: '1/09/2024'
  }
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});  
  inputElement.value='';
  dateElement.value='';

  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHTML= '';
for(let i=0; i < todoList.length; i++){
  // let item= todoList[i].item;
  // let dueDate= todoList[i].dueDate;
  let {item, dueDate} = todoList[i];
  newHTML += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="button-delete"onclick="todoList.splice(${i}, 1);displayItems();">Delete</button>
  `;

  
  }
  containerElement.innerHTML = newHTML;  
}