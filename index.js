function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((json) => renderBooks(json)); // Pass the JSON data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Set the inner HTML to the book's name
    main.appendChild(h2); // Append the h2 element to the main element
  });
}

// Call fetchBooks() when the page loads
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
