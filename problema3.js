const transpose = matrix =>
  matrix[0].map((_, i) =>
    matrix.map(row => row[i])
  );


const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(transpose(X));