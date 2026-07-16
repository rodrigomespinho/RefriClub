const modal=document.getElementById("modal")
const botoes=document.querySelectorAll(".experimentar")
const fechar=document.querySelector(".fechar")
const formulario=document.getElementById("formulario")

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        modal.classList.add("ativo")

    })

})

fechar.addEventListener("click",fecharModal)

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        fecharModal()

    }

})

window.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        fecharModal()

    }

})

function fecharModal(){

    modal.classList.remove("ativo")

}

formulario.addEventListener("submit",(e)=>{

    e.preventDefault()

    const nome=document.getElementById("nome").value.trim()

    const email=document.getElementById("email").value.trim()

    const cidade=document.getElementById("cidade").value.trim()

    if(nome.length<3){

        alert("Digite um nome válido.")

        return

    }

    if(!email.includes("@")){

        alert("Digite um e-mail válido.")

        return

    }

    if(cidade.length<2){

        alert("Digite sua cidade.")

        return

    }

    const codigo=gerarCodigo()

    alert(

`🎉 Solicitação enviada!

Código: ${codigo}

Obrigado por participar do Programa RefriClub Labs.

Em breve você receberá um e-mail.

*Projeto fictício.*`

    )

    formulario.reset()

    fecharModal()

})

function gerarCodigo(){

    const numero=Math.floor(Math.random()*9000)+1000

    return "RFC-"+numero

}