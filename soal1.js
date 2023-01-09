let fruits = [];

const arr = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma" },
  { fruitId: 3, fruitName: "Apel" },
  { fruitId: 4, fruitName: "Manggis" },
  { fruitId: 5, fruitName: "Jeruk Bali" },
  { fruitId: 5, fruitName: "Kurma" },
  { fruitId: 5, fruitName: "Salak" },
];
const unique = arr.filter((obj, index) => {
  return index === arr.findIndex((o) => obj.fruitId === o.fruitId || obj.fruitName === o.fruitName);
});
for (let i = 0; i < unique.length; i++) {
  const fruitName = unique[i].fruitName;
  console.log("Buah Yang Dimiliki Andi :" + fruitName);
}
