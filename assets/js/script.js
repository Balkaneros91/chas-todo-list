/* const btn = document.getElementById("btn");

const items = [];

btn.addEventListener("click", function () {});

function addItem() {
  let input = document.getElementById("text").value;
//   let addedValue = input.value;

  items.push({ id: 0, task: input, complete: false });
}

input = "Tvätta håret";

console.log(items);
*/

// Empty
// let items = [{
//     id : 0,
//     task : input,
//     complete : false
// }];

let items = [];

function addItem () {

    // Get the input field na value
    let input = document.getElementById("input").value;
    let taskName = input.value;
    items.push({id : 0, task : input, complete : false});
    

    // Cretate a new list item and checkbox
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    // Add task text to list item
    let textNode = document.createTextNode(input);
    li.appendChild(textNode);

    // Add list item to task list
    const list = document.getElementById('todo-list');
    list.appendChild(li);

    // Clear the input field
    input = "";
};


btn.addEventListener("click", function () {
    addItem();
});

