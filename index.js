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
const decadeStories = document.querySelector(`decade-dropdown-stories`)
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
    
    }
    } 


    decadeDropdown.addEventListener("change", (e) => {
    selectDecade(e.target.value)
}
)

function selectDecade(decade) {
    console.log(`decade:`, decade)
}


function renderSasquatchStories(sasData) {
    const divElement = document.createElement("div")
    divElement.classList.add("sasquatch-story");
    divElement.innerText = sasData.description
    decadeStories.append(divElement)
}


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


// let rangeA = {
//     lower: 1950,
//     upper: 1960
// }

// let rangeB = {
//     lower: 1960,
//     upper: 1970
// }

// let rangeC = {
//     lower: 1970,
//     upper: 1980
// }

// let rangeD = {
//     lower: 1980,
//     upper: 1990
// }

// let rangeE = {
//     lower: 1990,
//     upper: 2000
// }