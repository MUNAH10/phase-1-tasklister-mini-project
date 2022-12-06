document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  addTask(e.target.task.value);
  //form.reset();
})
});

function addTask(e){
  var li = document.createElement('li')
  li.textContent = e
  document.querySelector('#list').appendChild(li)
  //const parent = document. getElementById('tasks')
  //parent.appendChild(li)
  //li.appendChild(btn)
}
