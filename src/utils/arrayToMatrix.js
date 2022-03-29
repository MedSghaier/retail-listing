const arrayToMatrix = (array) =>
  array.reduce(
    (rows, key, index) =>
      (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );

export default arrayToMatrix;
