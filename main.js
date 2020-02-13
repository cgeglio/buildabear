let outfit;
let pnut = document.querySelector('.peanut-center');
let garmentContainer = document.querySelector('.clothing-section');
let save = document.querySelector('.save');
let title = document.querySelector('input');
let outfits = [];

window.addEventListener("load", createOutfit);
window.addEventListener("load", findOutfits);
garmentContainer.addEventListener("click", addGarment);
save.addEventListener("click", saveOutfit);

function createOutfit() {
  let id = Date.now()
  outfit = new Outfit(id);
}

function addGarment() {
  event.preventDefault();
  let garment = event.target.value;
  let type = event.target.name;
  if (type === 'background') {
    outfit.addBackground(garment)
    pnut.innerHTML = `<img class='${event.target.name}' src='./assets/${garment}.png' />`
  } else {
    outfit.addGarment(garment);
    document.querySelector(`.${type}-outfit`).innerHTML = `<img class='${event.target.name}' src='./assets/${garment}.png' />`
  }
}

function saveOutfit() {
  outfit.addTitle(title.value);
  outfits.push(outfit);
  saveToStorage();
  document.querySelector('.saved-outfits').innerHTML += `<button class="saved-outfit">${title.value}</button>`
}

function findOutfits() {
  var arrayOfOutfits = localStorage.getItem("outfits");
  if (arrayOfOutfits) {
    var outfitsParsed = JSON.parse(arrayOfOutfits);
    outfitsParsed.forEach(outfit => inputFromStorage(outfit))
  }
}

function inputFromStorage(foundOutfit) {
  document.querySelector('.saved-outfits').innerHTML += `<button class="saved-outfit">${foundOutfit.title}</button>`
  foundOutfit = new Outfit(foundOutfit.id, foundOutfit.title, foundOutfit.garments, foundOutfit.background);  
}

function saveToStorage() {
  var outfitsString = JSON.stringify(outfits);
  localStorage.setItem("outfits", outfitsString);
}
