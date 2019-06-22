class Storage {
  ACTIVEBOOK() {
    return 'ACTIVE-CATEGORY';
  }
  BOOKSDATA() {
    let booksData = [
      { name: "Dinosaurs", template: "book-dinosaur.html", images: true },
      { name: "D&D Monsters", template: "", images: true },
      { name: "Programming", template: "book-computer.html", images: false }
    ];
    return booksData;
  }
  ORDERBOOKS() {
    const booksData = this.BOOKSDATA();
    const data = booksData.sort(this.sortCompareName(a, b).bind(this));
    return data;
  }

  sortCompareName(a, b) {
    return this.sortCompare(a.name, b.name);
  }

  sortCompare(a, b) {
    const genreA = a.toUpperCase();
    const genreB = b.toUpperCase();
  
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }

    return comparison;
  }

  // Simple Item Patterns
  getItem(item) {
    const result = localStorage.getItem(item);
    return (result === null) ? null : JSON.parse(result);
  }
  setItem(item, value) {
    return localStorage.setItem(item, JSON.stringify(value));
  }
  removeItem(item) {
    return localStorage.removeItem(item);
  }

  getAllBooks() {
    return this.BOOKSDATA();
  }
  setActiveBook(bookData) {
    this.setItem(this.ACTIVEBOOK(), bookData);
  }
  getActiveBook() {
    const bookData = this.getItem(this.ACTIVEBOOK());
    return bookData;
  }
}