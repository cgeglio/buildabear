class Outfit {
  constructor(id) {
    this.id = id;
    this.title = '';
    this.garments = [];
    this.background = '';
  }

  addGarment(garment) {
    this.garments.push(garment)
  }

  removeGarment(garment) {
    this.garments.filter(g => g !== garment);
  }

  addBackground(background) {
    this.background = background;
  }

  addTitle(title) {
    this.title = title;
  }

}
