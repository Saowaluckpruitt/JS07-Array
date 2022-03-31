// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b
//
const arr = [5, 8, 1, 3, 2, 0, 4];
// filterRange(arr, 4, 7) === [4, 5]
const filterRange = (arr, a, b) => arr.filter((el) => el >= a && el <= b);

console.log(filterRange(arr, 4, 8));
