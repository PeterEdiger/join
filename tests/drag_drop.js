let todos = [
  {
    'id': 0,
    'title': 'Putzen',
    'category': 'open'
  },
  {
    'id': 1,
    'title': 'Kochen',
    'category': 'open'
  },
  {
    'id': 2,
    'title': 'Einkaufen',
    'category': 'closed'
  },
];

let currentDraggedElement;


/**
 * Gets called onload and on changes.
 * Filters todos JSON array.
 * Cleans the fields.
 * Renders todos into the apropriate fields.
*/
function updateHTML() {
  let areaNames = ["open", "closed"];
  for (let i = 0; i < areaNames.length; i++) {
    let fieldName = areaNames[i];
    document.getElementById(fieldName).innerHTML = '';
    let currentField = todos.filter(todo => todo['category'] == fieldName);
    for (let index = 0; index < currentField.length; index++) {
      const todo = currentField[index];
      document.getElementById(fieldName).innerHTML += generateTodoHTML(todo);
    }
  }
}


/**
 * @param {number} id
 *
 */
function startDragging(id) {
  currentDraggedElement = id;
}


/**
 * @param {object} todo single todo object holding todo informations. 
 */
function generateTodoHTML(todo) {
  return `<div draggable="true" ondragstart="startDragging(${todo['id']})" class="todo">${todo['title']}</div>`;
}


/**
 * @param {Event} ev event Object 
 *
 */
function allowDrop(ev) {
  ev.preventDefault();
}


function moveTo(category) {
  todos[currentDraggedElement]['category'] = category;
  updateHTML();
}


function highlight(id) {
  document.getElementById(id).classList.add('drag-area-highlight');
}


function removeHighlight(id) {
  document.getElementById(id).classList.remove('drag-area-highlight');
}