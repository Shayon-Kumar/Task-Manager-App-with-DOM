function add(event) {
  event.preventDefault();

  // Input value
  let input = document.querySelector('#input');
  let inputValue = input.value.trim();
  if (inputValue === '') {
    alert('Hey! Did you forget to write your task?');
    return;
  }

  // Create task container
  let taskContainer = document.createElement('div');
  taskContainer.className =
    'task-item border border-dark m-1 p-1 d-flex justify-content-between'; // Flexbox class for alignment

  // Create data container
  let dataContainer = document.createElement('div');

  // Create button container
  let buttonContainer = document.createElement('div');

  // Create checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create task text
  let taskbox = document.createElement('strong');
  taskbox.textContent = inputValue;

  // Create edit and delete buttons
  let edit = document.createElement('button');
  edit.textContent = 'Edit';
  edit.className = 'btn btn-warning btn-sm'; // Add some Bootstrap classes for styling

  let deletebu = document.createElement('button');
  deletebu.textContent = 'Delete';
  deletebu.className = 'btn btn-danger btn-sm';

  // Add event listener to the checkbox
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // Convert <strong> to <del> when checked
      let del = document.createElement('del');
      del.textContent = taskbox.textContent;
      dataContainer.replaceChild(del, taskbox); // Replace the task text in the data container
      taskbox = del; // Update reference to <del>
    } else {
      // Convert back to <strong> when unchecked
      let strong = document.createElement('strong');
      strong.textContent = taskbox.textContent;
      dataContainer.replaceChild(strong, taskbox); // Replace the task text in the data container
      taskbox = strong; // Update reference to <strong>
    }
  });

  // Add event listener to the edit button
  edit.addEventListener('click', function () {
    let newTask = prompt('Edit your task:', taskbox.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      taskbox.textContent = newTask;
    }
  });

  // Add event listener to the delete button
  deletebu.addEventListener('click', function () {
    if (confirm('Are you sure you want to delete this task?')) {
      let container = document.querySelector('#task');
      container.removeChild(taskContainer); // Remove the task if confirmed
      alert('Task deleted successfully!');
    }
  });

  // Append checkbox, text, edit, and delete buttons to their respective containers
  dataContainer.appendChild(checkbox);
  dataContainer.appendChild(taskbox);

  buttonContainer.appendChild(edit);
  buttonContainer.appendChild(deletebu);

  // Append data and button containers to the task container
  taskContainer.appendChild(dataContainer);
  taskContainer.appendChild(buttonContainer);

  // Append task container to the main task list
  let container = document.querySelector('#task');
  container.appendChild(taskContainer);

  // Clear input
  input.value = '';
}
