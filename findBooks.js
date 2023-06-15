const books = [];

for (let i = 0; i < 1000000; i++) {
  books.push({
    name: `Harry Potter ${i}`,
    nbPages: 300,
    author: 'J.K. Rowling',
  });
}

books.push({
  name: 'One Piece',
  nbPages: 100,
  author: 'Eiichiro Oda',
});

console.time('findBookByName');
books.find(book => book.name === 'One Piece');
console.timeEnd('findBookByName');
