let decades =[]

fetch('http://localhost:3000/details')
.then(response => response.json())
.then(sasData => {
    console.log(`sasquatch data:`, sasData)
    decades = sasData
    sasData.forEach(sasquatchSighting => {
        renderSasquatchCard(sasquatchSighting)
    })
}
)

const photoList = document.querySelector(`#photo-list`)
const decadeStories = document.querySelector(`#decade-dropdown-stories`)
const decadeDropdown = document.querySelector(`#decade-dropdown`)
const sightingsForm = document.querySelector(`#sightings-report`)
const submitBtn = document.querySelector(`.btn-primary`)

function renderSasquatchCard(sasquatchSighting) {
    const divElement = document.createElement("div");
    divElement.classList.add("sasquatch-card");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay")
    const image1 = document.createElement("img");
    const likes = document.createElement("p");
    const dislikes = document.createElement("p");
    const btnLikes = document.createElement("button");


    const btnDislikes = document.createElement("button");
    divElement.className = "card";
    image1.src = sasquatchSighting.image;
    btnLikes.classname= "like-btn";
    btnLikes.textContent = (sasquatchSighting.likes + " Likes 👍 ")
    btnDislikes.classname= "dislike-btn";
    btnDislikes.textContent =  (sasquatchSighting.dislikes + " Dislikes 👎 ")
    divElement.append(image1,likes,btnLikes,btnDislikes);
    photoList.append(divElement);
    
    btnLikes.addEventListener("click", () => addLikes(btnLikes))
    btnDislikes.addEventListener("click", () => addDislikes(btnDislikes))


    let number = sasquatchSighting.likes
    let numberDislikes = sasquatchSighting.dislikes
    
    function addLikes(btnElement) {
        number++;
        btnElement.textContent = number + ` ` + ` Likes 👍 ` 
    }

    function addDislikes(btnElement) {
        numberDislikes++;
        btnElement.textContent = numberDislikes + ` ` + ` Dislikes 👎 `
    }} 


decadeDropdown.addEventListener("change", (e) => {
    selectDecade(e.target.value)
})

function renderSasquatchStories(decade) {
    const liElement = document.createElement("li")
    liElement.innerText = decades.description
    decadeStories.append(liElement)
}

function selectDecade(decade) {
    console.log(`decade:`, decade)
  if (decade > `1950` && decade > `1960`) {
    renderSasquatchStories(decade)
  } else if(decade >'1960' && decade < '1970') {
    return 'That will be twenty bucks.'
}}



function SasquatchStory(year) {
    const dates = [Object.keys(decades)]
    const date = (year) => dates().find(date => date.allDates === year)
    return dates(year).description
} 



// function goodPractices() {
//     let game = gameObject();
//     for (let gameKey in game) {

//       let teamObj = game[gameKey];
//       for (let teamKey in teamObj) {

//         let data = teamObj.player;
//         for (let key in data) 
//       }
         
// function findMatchingDecade(date) {
//     const
// }


// function scuberGreetingForFeet(distance){
//   if (distance <= '400') {
//     return 'This one is on me!'
//   } else if(distance >'400' && distance < '2000') {
//     return 'That will be twenty bucks.'
//   } else if (distance >'2000' && distance <'2500') {
//     return 'I will gladly take your thirty bucks.'
//   } else if (distance > '2500') {
//     return 'No can do.'
//   }
// }

sightingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const date = e.target.date.value
    const location = e.target.location.value
    const image = e.target.image.value
    const description = e.target["sighting-story"].value
    const likes = "0"
    const dislikes = "0"

    const newStory = {
        name,
        date,
        location,
        image,
        description,
        likes,
        dislikes
    }
    renderSasquatchCard(newStory)
    sightingsForm.reset()
})


