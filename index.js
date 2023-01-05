let decades =[]
let allArray = []
let currentDecade;

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
const fifties = document.querySelector(`#fifties`)
const sixties = document.querySelector(`#sixties`)


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
    liElement.innerText = decade
    decadeStories.append(liElement)
}


fetch(url)
    .then(response => response.json())
    .then(dataArray => {
        console.log(dataArray)
        allArray = dataArray
       

        const filteredArrayFifties = dataArray.filter(element => {
        return element.date >1950 && element.date < 1960
        }).map(element => element.description)

        const filteredArraySixties = dataArray.filter(element => {
        return element.date >1960 && element.date < 1970
        }).map(element => element.description)
        
        const filteredArraySeventies = dataArray.filter(element => {
        return element.date >1970 && element.date < 1980
        }).map(element => element.description)
       
        const filteredArrayEighties = dataArray.filter(element => {
        return element.date >1980 && element.date < 1990
        }).map(element => element.description)
        
        const filteredArrayNineties = dataArray.filter(element => {
        return element.date >1990 && element.date < 2000
        }).map(element => element.description)
            
       
         
    decadeDropdown.addEventListener("change", (e) => {
        decadeStories.innerHTML = ''
        currentDecade = e.target.value
       filterFifties = e.target[0].value 
       filterSixties = e.target[1].value
       filterSeventies = e.target[2].value
       filterEighties = e.target[3].value
       filterNineties = e.target[4].value

       console.log(currentDecade)
               
        // if (currentDecade === 'fifties') {
        //     renderSasquatchStories(filteredArrayFifties)
        // } else if (currentDecade ===  `sixties`) {
        //     renderSasquatchStories(filteredArraySixties)
        // } else if (currentDecade === `seventies`) {
        //     renderSasquatchStories(filteredArraySeventies)
        // } else if (currentDecade === `eighties`) {
        //     renderSasquatchStories(filteredArrayEighties)
        // } else if (currentDecade === `nineties`) {
        //     renderSasquatchStories(filteredArrayNineties)
        // }

        switch(currentDecade) {
            case 'fifties':
                filterFifties = renderSasquatchStories(filteredArrayFifties)
                break;
            case `sixties`:
                filterSixties = renderSasquatchStories(filteredArraySixties)
                break;
            case `seventies`:
                filterSeventies = renderSasquatchStories(filteredArraySeventies)
                break;
            case `eighties`:
                filterEighties = renderSasquatchStories(filteredArrayEighties)
                break;
            case `nineties`:
                filterNineties = renderSasquatchStories(filteredArrayNineties)
        }
})
    })



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


