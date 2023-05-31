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









/*ABRE E FECHA MODAL*/
function abrirModal(carregarModal){
/*  console.log("Carregar a janela modal: " + carregarModal); */
  let modal = document.getElementById(carregarModal);

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.getElementById
}

function fecharModal(fecharModal){
/*  console.log("Fechar a janela modal: " + fecharModal); */
  let modal = document.getElementById(fecharModal);

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*EXPORT ITEMS LIST*/
function exportList(listId) {
  var listaOrigem = document.getElementById(listId);
  var listaDestino = document.querySelector(".destinationList");

  var itensOrigem = listaOrigem.getElementsByTagName('li');

  console.log("a lista contem "+itensOrigem.length+" elementos");

  while (itensOrigem.length > 0) {
    var item = itensOrigem[0];
    listaDestino.appendChild(item);
  }
}

/*  MOVE ITEM - INCOMPLETE*/
function moveItem() {
  var sourceList = document.getElementById("sourceList");
  var destinationList = document.getElementById("destinationList");
  var selectedItem = sourceList.options[sourceList.selectedIndex];
  if (selectedItem) {
    destinationList.appendChild(selectedItem);
  }
}
