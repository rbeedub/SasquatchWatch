fetch('http://localhost:3000/details')
.then(response => response.json())
.then(sasData => {
    console.log(`sasquatch data:`, sasData)
    sasData.forEach(sasquatchSighting => {
        renderSasquatchCard(sasquatchSighting)
    })
}
)

const photoList = document.querySelector(`#photo-list`)



function renderSasquatchCard(sasquatchSighting) {
    const divElement = document.createElement("div");
    divElement.classList.add("sasquatch-card");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay")
    const image1 = document.createElement("img");
    const likes = document.createElement("p");
    const dislikes = document.createElement("p");
    const btnLikes = document.createElement("button");
    overlay.classList.add("overlay")




    const btnDislikes = document.createElement("button");
    divElement.className = "card";
    image1.src = sasquatchSighting.image;
    btnLikes.classname= "like-btn";
    btnLikes.textContent =  "Like 👍 ";
    btnDislikes.classname= "dislike-btn";
    btnDislikes.textContent =  "Dislike 👎 ";
    divElement.append(image1,likes,btnLikes,btnDislikes);
    photoList.append(divElement);
    
    btnLikes.addEventListener("click", () => {
        addLikes(sasquatchSighting)

    })
    btnDislikes.addEventListener("click", () => 
        addDislikes(sasquatchSighting)
    )
    } 


   function addLikes(sasquatchSighting) {
        sasquatchSighting.likes = sasquatchSighting.likes + 1;
   }
   
   function addDislikes(sasquatchSighting) {
        sasquatchSighting.dislikes = sasquatchSighting.dislikes + 1;
   }