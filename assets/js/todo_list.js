document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById('input');
    let input2 = document.createElement('INPUT');
    const btn = document.getElementById('btn');
    const ul = document.getElementById('todo_list');

    let list = [];
    let id = 0;

    // Button 'Add'
    btn.addEventListener('click', addItem);


    // Add function
    function addItem() {
        let value = input.value;

        if (input.value === "") {
            alert(`Please add item first!`)
        } else {

            let obj = {
                id: id++,
                // id: list.length + 1,
                task: value,
                complete: false
            };

            list.push(obj);

            console.log(list);
            input.value = "";

            showItem();
        };
    };

    

    // Read- Render
    function showItem() {
        ul.innerHTML = "";
        list.forEach(function(item) {
            const li = document.createElement('li');
            let itemID = item.id;
            li.id = item.id;
            // console.log(li.id);

            li.innerHTML = item.task;

            li.addEventListener('click', function() {
                if (item.complete === false) {
                        li.style.textDecoration = "none";
                        item.complete = true;
                    } else if (item.complete === true) {
                        li.style.textDecoration = "line-through";
                        item.complete = false;
                    }
            });





            // Button Delete:
            const btn2 = document.createElement('button');
            btn2.classList.add('delete');
            btn2.innerText = "Del";
            btn2.addEventListener('click', function() {
                deleteItem(itemID);
            });
            li.appendChild(btn2);
            

            // Edit btn:
            const edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerText = "Edit";
            edit.addEventListener('click', function() {

                editItem(itemID);
                // let input2 = document.createElement('INPUT');
                input2.setAttribute("type", "text");
                input2.id = "input2";
                li.appendChild(input2);
                
                // input2.value = "";

                item.task = input2.value;
                let btn3 = document.createElement('button');
                btn3.id = "save";
                btn3.textContent = "Save"
                btn3.addEventListener('click', function() {
                    updateItem();
                });
                li.appendChild(btn3);

                
            });

            li.appendChild(edit);
            
            ul.appendChild(li);
        });
    };
    
    // Delete Item
    function deleteItem(id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list.splice(i, 1)
            };
        };
        showItem();
    }

    function updateItem() {
        let value = input2.value;

        if (input2.value === "") {
            alert(`Please add item first!`)

            console.log(list);
            input2.value = "";

            showItem();
        };
    };

    // Edit Item
    function editItem(id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                
            };
        };
        // showItem();
    }



});


// CRUD 
// Style :::
            // btn2.style.color = "red";
            // btn2.style.padding = "20px";