// Modal Variables
var aboutNav = document.querySelector("#about-modal")
var modalBackground = document.querySelector(".modal-background")
var modal = document.querySelector(".modal")

// Click on about and Modal appears
aboutNav.addEventListener("click", function (){
    modal.classList.add("is-active");
})

// Removes Modal from screen
modalBackground.addEventListener("click", function(){
    modal.classList.remove("is-active");
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Search Button Variables (Seperate Modal for this)
var searchbtnModal = document.querySelector("#searchButton")
var modalTwo = document.querySelector("#modalTwo")
var modalBackground2 = document.querySelector("#modal-backgroundTwo")

// Click on Search Button (if no text exists) and Modal Appears
searchbtnModal.addEventListener("click", function (){
    modalTwo.classList.add("is-active");
})

// Removes Modal from Screen
modalBackground2.addEventListener("click", function (){
    modalTwo.classList.remove("is-active")
})

