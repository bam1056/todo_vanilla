// global variables to keep track of completed and total items
let numTodos = 0
let numCompletedTodos = 0

// function to delete an item from the todo list. If the item is
// already completed, deleting will remove from number of completed
// todos. If unchecked, only the total num of todos is updated
const deleteItem = (event) => {
  const parent = event.target.parentNode.parentNode
  const child = event.target.parentNode
  const todos = document.querySelector('.todos')
  const countTotal = document.querySelector('.total')
  const countComplete = document.querySelector('.complete')
  const bool = child.children[0].checked
  parent.removeChild(child)
  countTotal.textContent = todos.children.length
  if (bool === true){
    numCompletedTodos <= 0 ? countComplete.textContent = 0 + '/' : countComplete.textContent = --numCompletedTodos + '/'
  }
}

// strikethrough list item that has been checked off as complete,
// unchecking removes from list of completes and removes strikethrough
const completeItem = (event) => {
  const listItem = event.target.parentNode.children[1]
  const countComplete = document.querySelector('.complete')
  event.target.checked ? (listItem.style = 'text-decoration:line-through; margin: 5px;') : (listItem.style = 'text-decoration: none; margin: 5px;')
  event.target.checked ? countComplete.textContent = ++numCompletedTodos + '/': countComplete.textContent = --numCompletedTodos + '/'
}

// adds a todo on submit from text input with a checkbox and delete button
const addTodo = (event) => {
  const countTotal = document.querySelector('.total')
  const newTodo = document.querySelector('.new-todo')
  const insert = document.querySelector('.todos')

  const deleteButton = document.createElement('button')
  deleteButton.style = 'background-color:red; font-size: 0.5em; font-family: Oxygen; margin-left: 15px;'
  deleteButton.textContent = 'X'
  deleteButton.addEventListener('click', deleteItem)

  const itemDiv = document.createElement('div')
  itemDiv.style = 'display: flex; align-items:center; justify-content:center; width: 500px;'

  const item = document.createElement('p')
  item.style = 'margin: 5px 5px;'
  item.textContent = newTodo.value

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.style = 'zoom: 1.75;'
  check.addEventListener('click', completeItem)

  itemDiv.appendChild(check)
  itemDiv.appendChild(item)
  itemDiv.appendChild(deleteButton)
  insert.appendChild(itemDiv)
  countTotal.textContent = insert.children.length
  newTodo.value = ''
}

// main function fires on document load, renders most static DOM elements
const init = () => {
  const footer = document.createElement('footer')
  footer.textContent = 'Brett Macy Productions 2016'
  footer.style = 'position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: white; margin: 10px;'

  const countTotal = document.createElement('span')
  countTotal.textContent = 0
  countTotal.className = 'total'

  const countComplete = document.createElement('span')
  countComplete.textContent = 0 + '/'
  countComplete.className = 'complete'

  const body = document.querySelector('body')
  body.style = 'display: flex; flex-direction: column; align-items: center; background-color: #28D6A2'

  const countText = document.createElement('p')
  countText.style ='text-align: center; color: white; font-family: Oxygen; font-size: 1em;'
  countText.textContent = `Completed Tasks: `
  countText.appendChild(countComplete)
  countText.appendChild(countTotal)

  const head = document.createElement('h1')
  head.textContent = 'TODO LIST: VANILLA STYLE'
  head.style = 'font-family: Indie Flower; text-align: center; color: white;'

  const todo = document.createElement('div')
  todo.className = 'todos'
  todo.style = 'display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: Oxygen; font-size: 1.5em; color: white;'

  const todoInput = document.createElement('input')
  todoInput.type = 'text'
  todoInput.className = 'new-todo'
  todoInput.style = 'margin-top: 25px; background-color: white; opacity: 0.5; font-size: 1.5em;'

  const todoSubmit = document.createElement('input')
  todoSubmit.style = 'background-color:#ED5050; margin-top: 5px; font-size: 1em'
  todoSubmit.type = 'button'
  todoSubmit.value = 'Submit ToDo'
  todoSubmit.addEventListener('click', addTodo)

  body.appendChild(head)
  body.appendChild(todo)
  body.appendChild(todoInput)
  body.appendChild(todoSubmit)
  body.appendChild(countText)
  body.appendChild(footer)
}

document.addEventListener('DOMContentLoaded', init)
