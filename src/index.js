// write your code here

//Create Functions 

const baseUrl = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector("#ramen-menu") 
//console.log(baseUrl)
const ramenDetail = document.querySelector("#ramen-detail")
const ramenImage = document.querySelector(".detail-image")
const detailImg = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")
const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")
const ramenForm = document.querySelector("#new-ramen")
const newName = document.querySelector("new-name")
const newRestaurant = document.querySelector("#new-restaurant")
const newImage = document.querySelector("new-image")
const newRating = document.querySelector("new-rating")
const newComment = document.querySelector("new-comment")

//Get Data from Server
fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramens => ramens.forEach(ramen => displayRamen(ramen)))


//Render Display to the DOM
function displayRamen(ramen) {
    let img = document.createElement('img')
    img.src = ramen.image
    ramenMenu.appendChild(img)
    //console.log(ramenMenu)
    img.addEventListener('click', (e) =>
            displayDetails(ramen))
}

//Render Details of Ramen
function displayDetails(ramen) {
    currentRamen = ramen
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant 
    ratingDisplay.textContent = ramen.rating
    commentDisplay.textContent = ramen.comment
    ramenImage.src = ramen.image

}

//Create New Ramen Form
ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newRamen = {
        name: e.target['new-name'].value,
        restaurant: e.target['new-restaurant'].value,
        image: e.target['new-image'].value,
        rating: e.target['new-rating'].value,
        comment: e.target['new-comment'].value,
    }
    displayRamen(newRamen)
})
