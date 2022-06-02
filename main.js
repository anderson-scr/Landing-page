let sky = document.getElementById("sky")
let montain_01 = document.getElementById("montain_01")
let montain_02 = document.getElementById("montain_02")
let main_text = document.getElementById("main_title")
let btnScrollDown = document.getElementsByClassName("scrollDown")

let elementsReveal = document.querySelectorAll(".reveal")

let montain_01_topValue = parseInt(getComputedStyle(montain_01).top.slice(0, 3))
let montain_02_topValue = parseInt(getComputedStyle(montain_02).top.slice(0, 3))


window.addEventListener("scroll", () => {
  let value = window.scrollY
  let checkpoint = 530

  // Montain moviment with scroll
  sky.style.bottom = 75 + value + "px"
  montain_01.style.top = montain_01_topValue - (value * 0.1) + "px"
  montain_02.style.top = montain_02_topValue - (value * 0.4) + "px"

  // Text opacity with scroll
  if (value <= checkpoint) {
    main_text.style.visibility = "visible"
    opacity = 1 - value / checkpoint
  } else {
    opacity = 0
    main_text.style.visibility = "collapse"
  }
  main_text.style.opacity = opacity

  for ([i, imagem] of elementsReveal.entries()) {
    let windowHeight = window.innerHeight
    let revealTop = imagem.getBoundingClientRect().top
    let revealPoint = 550

    if(revealTop < windowHeight - revealPoint) {
      i === 1 ? imagem.classList.add("activeL") : imagem.classList.add("active")
    } else {
      imagem.classList.remove("active")
      imagem.classList.remove("activeL")
    }
  }
})

function scroll_post01() {
  window.scrollTo({ top: 1000, behavior: 'smooth' })
}