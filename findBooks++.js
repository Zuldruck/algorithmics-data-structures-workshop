const books = new Map();

for (let i = 0; i < 1000000; i++) {
  books.set(`Harry Potter ${i}`, {
    name: `Harry Potter ${i}`,
    nbPages: 300,
    author: 'J.K. Rowling',
  });
}

books.set('One Piece', {
  name: 'One Piece',
  nbPages: 100,
  author: 'Eiichiro Oda',
});

console.time('findBookByName');
books.get('One Piece');
console.timeEnd('findBookByName');
