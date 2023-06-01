const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const boxnivel = document.querySelectorAll('.box-nivel')


draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
    containers.forEach(container => {
      container.classList.remove('container-dragging-over')

      const boxNivel = container.closest('.box-nivel');
      boxNivel 
      if (boxNivel && boxNivel.contains(draggable)) {
        const list = boxNivel.querySelector('.container');
        list.appendChild(draggable);
      }
    })
  })
})


/*
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
    
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
    itemQnt();
  })
})
*/














containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }

    const boxNiveis = container.querySelectorAll('.box-nivel');
    boxNiveis.forEach(boxNivel => {
      const boxNivelRect = boxNivel.getBoundingClientRect();
      const draggableRect = draggable.getBoundingClientRect();
      if (draggableRect.left >= boxNivelRect.left && draggableRect.right <= boxNivelRect.right && draggableRect.top >= boxNivelRect.top && draggableRect.bottom <= boxNivelRect.bottom) {
        boxNivel.style.border = '6px dashed red';
      } else {
        boxNivel.style.border = 'none';
      }
    });
  });

  container.addEventListener('dragleave', e => {
    const boxNiveis = container.querySelectorAll('.box-nivel');
    boxNiveis.forEach(boxNivel => {
      boxNivel.style.border = 'none';
    });
  });
});


containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    container.classList.add('container-dragging-over')
  })

  container.addEventListener('dragleave', () => {
    container.classList.remove('container-dragging-over')
  })
})



















/*
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
  
    const boxNiveis = document.querySelectorAll('.box-nivel');
    boxNiveis.forEach(boxNivel => {
      const boxNivelRect = boxNivel.getBoundingClientRect();
      const draggableRect = draggable.getBoundingClientRect();
      if (draggableRect.left >= boxNivelRect.left && draggableRect.right <= boxNivelRect.right && draggableRect.top >= boxNivelRect.top && draggableRect.bottom <= boxNivelRect.bottom) {
        boxNivel.style.border = '6px dashed red';
      } else {
        boxNivel.style.border = 'none';
      }
    });
  })
  
});*/

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

/* EXPORT ITEM UNI*/
function exportarItem(item){

  var lista1 = document.querySelector(".destinationList");
  var lista2 = document.querySelector(".listConsultores");

  lista2.appendChild(item); 
  lista1.removeChild(item); 


  





  var icon = item.querySelector(".info .iconClick");
  if (icon) {
    icon.classList.remove("uil-draggabledots");
    icon.classList.add("uil-trash-alt");
  }
}

var listConsultoresItems = document.querySelectorAll(".listConsultores .draggable");
for (var i = 0; i < listConsultoresItems.length; i++) {
  listConsultoresItems[i].onclick = function() {
    exportarItem(this);
  };



}

/*EXPORT ITEMS LIST*/
function exportList(listId) {
  var listaOrigem = document.getElementById(listId);
  var listaDestino = document.querySelector('.destinationList');
  var itensOrigem = listaOrigem.getElementsByTagName('li');

  while (itensOrigem.length > 0) {
    var item = itensOrigem[0];
    listaDestino.appendChild(item);
  }


    /* Troca Icon */ 
    var icon = item.querySelector('.uil-draggabledots');
    icon.classList.remove('uil-draggabledots');
    icon.classList.add('uil-trash-alt');
  
}

/*UPDATING QNT LIST*/
function itemQnt() {
  var itemList = document.querySelector(".listConsultores");
  var itemCount = document.querySelector(".itemCountDisponivies");
  var itemOcupados = document.querySelector(".itemCountOcupados");

  itemCount.innerHTML = "Disponíveis - " + itemList.children.length;  
  itemOcupados.innerHTML = "Em tarefas - " + (6-itemList.children.length);


}

/*RETURN CONSULTORES NUM*/
function consultoresQnt(){
  var listModal = document.querySelector('.destinationList');
  var countUp = document.querySelector('.itemCountConsultores');

  countUp.innerHTML = listModal.children.length ;
}


/*ATUALIZA OS DADOS_TIMER*/
function atualizaDados(){
  itemQnt();
  consultoresQnt();
}



setInterval(atualizaDados, 500);