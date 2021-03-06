import  Modal  from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');



const checkButtons = document.querySelectorAll(".actions a.check");

//Pegar todos os botões existente com a classe check
checkButtons.forEach( button => {
    button.addEventListener("click", handleClick);
});

const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach( button => {
    button.addEventListener("click", (event) => handleClick(event, false));
});


function handleClick(event, check = true){
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionid = event.target.dataset.id

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/room/${roomId}/${questionid}/${slug}`);

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
    //Abrir modal
    modal.open();
}

