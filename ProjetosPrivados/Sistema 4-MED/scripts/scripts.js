/*// Ao clicar no botão um novo item é acrescentado à lista
window.onload = function(){
    const btnAdict = document.querySelector("button");
    btnAdict.addEventListener("click", adicionaItem);
}
function adicionaItem (){
    const campoItem = document.querySelector("#item");
    const listaItem = document.querySelector ("ol");
    const novoItem= document.createElement("li");
    novoItem.textContent= campoItem.value;
    listaItem.appendChild(novoItem);
    campoItem.value='';
}
//--------------------------------------------------------

window.onload = function(){
    const campoItem = document.querySelector("#item");
    const campoItem.addEventListener,(keyup", e => {
        if (e.key === "Enter")
        adicionaItem();
    });
}
function adicionaItem(){
    const campoItem = document.querySelector("#item");
    const listaItem = document.querySelector("ol");
    const novoItem = document.createElement("li");
    const novoSpan = document.createElement("span");
    const novoBotao = document.createElement("button");
    novoSpan.textContent = campoItem.value;
    novoBotao.textContent = 'X';
    novoItem.appendChild(novoSpan);
    novoItem.appendChild(novoBotao);
    listaItem.appendChild(novoItem);
    novoBotao.onclick = function(){
        listaItem.removChild(novoItem);
        // ou novoItem.remove();
        // ou novoItem.parentNode.removeChild(novoItem);
    }    
        campoItem.value='';
}*/

window.onload = function(){
    document.forms.formCadastro.onsubmit = validaForm;
}
function validaForm (e){
    let form = e.target;
    let formValido = true;

    const spanUsuario = form.usuario.nextElementSibling;
    const spanSenha = form.senha.nextElementSibling;
    const spanEmail = form.email.nextElementSibling;

    spanUsuario.textContent = "";
    spanSenha.textContent = "";
    spanEmail.textContent = "";

    if (form.usuario.value === ""){
        spanUsuario.textContent = 'O usuario deve ser preenchido';
        formValido = false;
    }

    if (form.senha.value === ""){
        spanSenha.textContent = 'A senha deve ser preenchida';
        formValido = false;
    }

    if (form.email.value === ""){
        spanEmail.textContent = 'O email deve ser preenchido';
        formValido = false;
    }

    if (! formValido){
        e.preventDefault();
    }
}