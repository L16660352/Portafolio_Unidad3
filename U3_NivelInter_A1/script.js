const nuevaTareaInput = document.getElementById('nuevaTarea');
const agregarBtn = document.getElementById('agregar');
const tareasList = document.getElementById('tareas');
let tareas = [];

function agregarTarea() {
    const input=document.getElementById("nuevaTarea")
  const tarea = input.value.trim();
  if (tarea !== '') {
    tareas.push({});
    renderizarTareas();
    nuevaTareaInput.value = '';
  }
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  renderizarTareas();
}

function marcarCompleta(index) {
  tareas[index] = {
    texto: tareas[index],
    completada: true
  };
  renderizarTareas();
}

function renderizarTareas() {
  tareasList.innerHTML = '';
  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completada || false;
    checkbox.addEventListener('change', () => marcarCompleta(index));
    const textoTarea = document.createTextNode(tarea.texto);
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => eliminarTarea(index));
    li.appendChild(checkbox);
    li.appendChild(textoTarea);
    li.appendChild(eliminarBtn);
    if (tarea.completada) {
      li.classList.add('completada');
    }
    tareasList.appendChild(li);
  });
}

agregarBtn.addEventListener('click', agregarTarea);                                   