function AndiFruits(arr) {
  const unique = arr.filter((obj, index) => {
    return index === arr.findIndex((o) => obj.fruitName === o.fruitName);
  });
  for (let i = 0; i < unique.length; i++) {
    const fruitName = unique[i].fruitName;
    console.log("Buah Yang Dimiliki Andi :" + fruitName);
  }
}
function GroupingFruits(arr) {
  const groupByCategory = arr.reduce((group, arr) => {
    const { fruitType } = arr;
    group[fruitType] = group[fruitType] ?? [];
    group[fruitType].push(arr);
    return group;
  }, {});
  console.log(groupByCategory);
}
function TotalStock(arr) {
  const keys = ["stock"];

  sums = arr.reduce((r, o) => (keys.forEach((k) => (r[k] += o[k])), r), Object.fromEntries(keys.map((k) => [k, 0])));

  console.log(sums);
}
const arr = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 3, fruitName: "Apel", fruitType: "IMPORT", stock: 50 },
  { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
  { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
  { fruitId: 5, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];
console.log("===== buah yang di miliki andi : ========");
AndiFruits(arr);
console.log("===== buah yang sudah di kelompokkan ========");
GroupingFruits(arr);
console.log("===== Total Stock Buah ========");
TotalStock(arr);
