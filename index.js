let decades =[]
let allArray = []
const url = 'http://localhost:3000/details'

fetch(url)
.then(response => response.json())
.then(sasData => {
    console.log(`sasquatch data:`, sasData)
    sasData.forEach(sasquatchSighting => {
        renderSasquatchCard(sasquatchSighting)
    })
})

const photoList = document.querySelector(`#photo-list`)
const decadeStories = document.querySelector(`#decade-dropdown-stories`)
const sightingsForm = document.querySelector(`#sightings-report`)
const submitBtn = document.querySelector(`.btn-primary`)
const decadeDropdown = document.querySelector(`#decade-dropdown`)


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


    function renderSasquatchStories(decade) {
    const liElement = document.createElement("li")
    liElement.innerText = decades.description
    decadeStories.append(liElement)
}

fetch(url)
    .then(response => response.json())
    .then(dataArray => {
        console.log(dataArray)
        allArray = dataArray
       

        const filteredArrayFifties = dataArray.filter(element => {
         return element.date >1950 && element.date < 1960
        }).map
        const filteredArraySixties = dataArray.filter(element => {
            return element.date >1960 && element.date < 1970
           }).map
        const filteredArraySeventies = dataArray.filter(element => {
        return element.date >1970 && element.date < 1980
        }).map


        // const descriptionsFifties = filteredArrayFifties.map(element => element.description)

        console.log(`descriptions:`, descriptions)
    }
        )



 decadeDropdown.addEventListener("change", (e) => {
        const filterByDecade = e.target.value;
        console.log(filterByDecade)
 })




// const addDropDown = () => {   
//         fetch(url)
//         .then(response => response.json())
//         .then(dataArray => {
//             console.log(dataArray)

//             const filtered = dataArray.filter(date => {
//                 if (date === filterByDecade) {
//                     return true;
//                 }
//             })
//             renderSasquatchStories(filtered);
//         })
//     }




// const init = () => {
//     addDropDown();
// }


    // dataArray.filter(element => {
    //     if (element.date > 1970 && element.date < 1980)
    //         return true
    // })
    // console.log(`date:`, dataArray.description)


// function findDecade(decade) {
//   const decades = decade.find(element => {
//         if (element.date > 1970 && element.date < 1980) {
//         return element
//         } else if (element.date > 1960 && element.date < 1970) {
//                 return element
//         }})

//     console.log(`decades:`, decades.description)  



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




