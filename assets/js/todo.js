document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const list = document.getElementById('todo-list');
    let todo_list = [];
    let obj = {};

    btn.addEventListener('click', function() {        
        addItem();
    });

    // CREATE 
    function addItem() {
        let text = input.value;
        obj = {
                id: todo_list.length + 1,
                task: text,
                comeplete: false
            };
        
        todo_list.push(obj);
        render();
        input.value = "";
        console.log(obj.task);
        console.log(todo_list);
    };

    // READ / RENDER
    // function render() {
    //     let li = document.createElement('li');
        
    //     let textNode = document.createTextNode(obj.task);
    //     li.appendChild(textNode);
    //     list.appendChild(li);

    //     const button2 = document.createElement('button');
    //     button2.classList = "taBort";
    //     button2.textContent = "x";
    //     li.appendChild(button2);

    //     button2.addEventListener('click', function() {
    //         const deleted = list.removeChild(li);
    //         console.log(deleted);
    //     });


        // READ / RENDER
    function render() {
        let li = document.createElement('li');
        
        let textNode = document.createTextNode(obj.task);
        li.appendChild(textNode);
        list.appendChild(li);

        const button2 = document.createElement('button');
        button2.classList = "taBort";
        button2.textContent = "x";
        li.appendChild(button2);

        button2.addEventListener('click', function() {
            const deleted = list.removeChild(li);
            console.log(deleted);
        });
    };




    // DELETE
    // function deleteItem() {
    // };

    // EDIT / UPDATE
    // function editItem() {
    // }

    // TOGGLE
    // function toggleItem() {
    // }
});

// CRUD - Create, Read, Update, Delete