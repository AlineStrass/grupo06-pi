function acaoModal(){
    let msgModal = document.querySelector('.msg-modal-carrinho')

    msgModal.innerHTML = "Produto adicionado ao carrinho"
    msgModal.style.display = 'block';
    // msgModal.style.transitionDuration = "2s";
}


function fecharModal(){
    let msgModal = document.querySelector('.fecharModal')

    msgModal.style.display = 'none'
}

