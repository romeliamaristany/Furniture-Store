let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menu.onclick = () =>{
    navbar.classList.toggle('active')
}

window.onscroll = () => { //Cuando hace scroll elimina la clase active y desaparece el menu
    navbar.classList.remove('active')

}   