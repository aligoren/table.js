# table.js

Table sort plugin that does not require any dependencies. Written with VanillaJS.

# Usage

**Import table.js**

```javascript
import Table from "./table";
```

**Initialize Table Class**

```javascript
const table = new Table("#tblYeni");
```

**sort() function**

Params: [Column Index, Order Type]

**For example**

```javascript
const desc = document.querySelector("#desc"); //button
const asc = document.querySelector("#asc"); //button
const columnIndex = 3;

desc.addEventListener('click', () => {
    table.sort(columnIndex, 'desc');
})


asc.addEventListener('click', () => {
    table.sort(columnIndex, 'asc');
})
```

# Live Demo

[https://codepen.io/aligoren/pen/EQeXdM](https://codepen.io/aligoren/pen/EQeXdM)