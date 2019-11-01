const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    allImages();
    allBreeds();
    colourChange();
    filterBreeds();
})

function allImages() {
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const dogArray = json.message;
        for (let i = 0; i < dogArray.length; i++) {
            let dogElement = document.createElement('div');
            dogElement.innerHTML = `<img src="${dogArray[i]}">`;
            document.getElementById('dog-image-container').appendChild(dogElement);
        }
    })
}

function allBreeds() {
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let breedObject = json.message;
        const breeds = Object.entries(breedObject); 
        for (const [breed, type] of breeds) {
            let breedElement = document.createElement('ul');
            breedElement.innerHTML = `<li>${breed}: ${type}</li>`;
            const breedName = document.getElementById('dog-breeds').appendChild(breedElement);
        } 
    })
}

function colourChange() {
    document.addEventListener('click', function(e){
        e.target.style.color = "#ff0000";
    })
}

// function filterBreeds() {
//     const dropDown = document.querySelector('option');
//     if (dropDown.value == "a") {
//         allBreeds() {
//             return breedName.startsWith("a") 
//         }
//     } else if (dropDown.value == "b") {
//         allBreeds() {
//             return breedName.startsWith("b") 
//         }
//     } else if (dropDown.value == "c") {
//         allBreeds() {
//             return breedName.startsWith("c") 
//         }
//     } else if (dropDown.value == "d") {
//         allBreeds() {
//             return breedName.startsWith("d") 
//         }
//     }
// }



