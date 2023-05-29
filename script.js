const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {

  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })

})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}





const openModalButton = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const listContent = document.getElementById(".listContent");
const originalList = document.getElementById('.originalList');


const fade = document.querySelector("#fade");


const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

openModalButton.addEventListener('click', () => {
  // Limpar a lista do modal antes de carregar os novos itens
  //listContent.innerHTML = '';

  // Copiar os itens da lista original para o modal
  const listItems = originalList.querySelectorAll('.li');
  listItems.forEach((item) => {
    console.log(item);
    listContent.appendChild(item.cloneNode(true));
  });

  // Exibir o modal
  modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target === modal || event.target.classList.contains('close')) {
    modal.style.display = 'none';
  }
});