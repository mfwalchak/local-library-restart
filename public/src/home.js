function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let tally = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {tally++};
  } return tally;
}

function getMostCommonGenres(books) {
  //store each genre as it occurs in an array
  const genreArr = [];
  //loop through books array
  for (let i = 0; i < books.length; i++) {
    //for each occurrence of genre push into the genreArr
    genreArr.push(books[i].genre)
  } //sort the array alphabetically
    genreArr.sort();
    console.log(genreArr);
    //create a new list based on common occurrence. If index[x]===index[x+1] splice into that position
    //use a ternary operator here to push a non-match to the end of the new array
    //return the ordered array
  } 

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
