const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
    console.log('⌨️ Enter pressionado - tarefa adicionada');
  }
});

function addTask(text = null) {
  const taskText = text || taskInput.value.trim();
  if (taskText === '') {
    console.log('❌ Campo vazio. Tarefa não adicionada.');
    return;
  }

  console.log('✅ Adicionando tarefa:', taskText);

  const li = document.createElement('li');

  const taskGroup = document.createElement('div');
  taskGroup.style.display = 'flex';
  taskGroup.style.alignItems = 'center';
  taskGroup.style.flex = '1';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskSpan = document.createElement('span');
  taskSpan.className = 'task-text';
  taskSpan.textContent = taskText;

  checkbox.addEventListener('change', () => {
    taskSpan.classList.toggle('completed', checkbox.checked);
    console.log(checkbox.checked ? '☑️ Tarefa concluída: ' : '⬜ Tarefa desmarcada: ', taskSpan.textContent);
  });

  taskGroup.appendChild(checkbox);
  taskGroup.appendChild(taskSpan);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    console.log('🗑️ Tarefa deletada:', taskSpan.textContent);
    li.remove();
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  editBtn.onclick = () => {
    const newTask = prompt('Edit task:', taskSpan.textContent);
    if (newTask) {
      console.log('✏️ Tarefa editada:', taskSpan.textContent, '➡️', newTask.trim());
      taskSpan.textContent = newTask.trim();
    }
  };

  actions.appendChild(deleteBtn);
  actions.appendChild(editBtn);

  li.appendChild(taskGroup);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = '';
  console.log('📋 Lista atualizada com nova tarefa.\n');
}
