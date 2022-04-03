จงหา unique array element ของ alphabets

```js
let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const set = new Set(alphabets);
Array.from(set);
// expected result: ['a', 'b', 'c', 'e', 'd']
```
