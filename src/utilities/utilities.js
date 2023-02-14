export const fetchBooks = async (searchTerm, searchType, setBooks, setFetchError, fetchError) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchTerm}&maxResults=39`
    );
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
  
};

export const postToLibrary = async (book,user) => {
  try {
    console.log(book.volumeInfo)
    const blankImage = require("../images/blankCover.jpg");
    let category  = "No Category Information";
    console.log(category);
    if (!book.volumeInfo.description) {book.volumeInfo.description = "No Description Information"};  
    if (!book.volumeInfo.publishedDate) {book.volumeInfo.publishedDate = "No Publication Date Information"};  
    if (!book.volumeInfo.imageLinks.thumbnail) {book.volumeInfo.imageLinks.thumbnail = blankImage};  
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addBook`, {
          method:"POST",
          headers: {"Content-Type" : "application/json"}, //token not need at the moment
          body: JSON.stringify({
              user_ID: user.user_ID,
              google_ID: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              isbn: book.volumeInfo.industryIdentifiers[0].identifier,
              thumbnail: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description,
              category: category,
              selfLink: book.selfLink,
              publishedDate: book.volumeInfo.publishedDate 
          }
          )
      })
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error)
  }
}