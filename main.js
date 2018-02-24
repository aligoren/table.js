import Table from "./table";

const table = new Table("#tblYeni");

const desc = document.querySelector("#desc");
const asc = document.querySelector("#asc");
const columnIndex = 3;

desc.addEventListener('click', () => {
    table.sort(columnIndex, 'desc');
})


asc.addEventListener('click', () => {
    table.sort(columnIndex, 'asc');
})