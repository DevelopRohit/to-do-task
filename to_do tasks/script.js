// let inputBox = document.querySelector('#task-input');
// let add_btn = document.querySelector('button');
// let listContainer = document.querySelector('#task-list');
// add_btn.addEventListener('click', () => {
//     if (inputBox.value === "") {
//         alert('Enter tasks in box')
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = inputBox.value;

//         let span = document.createElement('span');
//         span.innerHTML = "\u00d7";

//         listContainer.appendChild(li);
//         li.appendChild(span);
//         saveData();
//         inputBox.value = '';
//     }
// });
// listContainer.addEventListener('click', function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checket');
//     } else if (e.target.tagName === 'SPAN') (
//         e.target.parentElement.remove()
//     );
//     saveData();
// })
// function saveData() {
//     localStorage.setItem('data', listContainer.innerHTML)
// };
// function showData() {
//     listContainer.innerHTML = localStorage.getItem('data')|| "";
// }


// showData();



console.log("hello");

let display = document.querySelector("#task-input");
let add_btn = document.querySelector("button");
let list_container = document.querySelector("#task-list");

add_btn.addEventListener('click', () => {
    if (display.value === "") {
        alert("enter your taks ininput box ")
    } else {
        let li = document.createElement('li');
        li.innerHTML = display.value;
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";

        list_container.appendChild(li);
        li.appendChild(span);

        savedata();
        display.value = "";
    }
})

list_container.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checket')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
    savedata();
})

function savedata() {
    localStorage.setItem('data', list_container.innerHTML)
}

function showdata() {
    list_container.innerHTML = localStorage.getItem(('data') || '')
}

showdata();
