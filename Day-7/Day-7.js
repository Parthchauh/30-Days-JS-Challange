// Define the book object
const book = new Object();

book.title = "Let US C";
book.author = "Not known";
book.year = "2024";

// Add methods to the book object
book.getInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}`;
};

book.getInfobyyear = function(year) {
    this.year = year;
    return this.year;
};

// Define the library object
const library = {
    name: "Anand",
    title: "let us C",
    books: [book]
};

// Access name of library
console.log(library.name, "and title of all books in the library is", library.title);

// Book Object Method with parameters
book.Demomethod = function(title, year) {
    this.title = title;
    this.year = year;
    return `Title: ${this.title}, Year: ${this.year}`;
};

// Calling Demomethod on the book object
console.log(book.Demomethod("Java: The Complete Reference", 2023));

// for...in loop to iterate over properties of the book object
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}


//Access key and value of Book object
console.log("keys of book object");
Object.keys(book).forEach(key=>{console.log(key);});

console.log("values of book object is=");
Object.values(book).forEach(value=>{console.log(value);});
