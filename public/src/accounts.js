function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id.includes(id)) {
      return accounts[i];
    }
  }
}

function sortAccountsByLastName(accounts) {
  let lastNameArr = [];
  let orderedList = {};
  for (let i = 0; i < accounts.length; i++) {
    lastNameArr.push(accounts[i].name.last);
    orderedList[i] = lastNameArr[i];
  } console.log(orderedList.sort())
    return [...Object.values(orderedList).sort()];
    
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
