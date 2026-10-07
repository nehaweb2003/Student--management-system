// Add Student Button
const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelectorAll('input')[2].value;
    const course = document.querySelector("select").value;

    if(name==="" || email==="" || phone===""){
        alert("Please fill all fields.");
        return;
    }

    const table = document.querySelector("table");

    const row = table.insertRow();

    row.insertCell(0).innerHTML = table.rows.length-1;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = phone;
    row.insertCell(4).innerHTML = course;

    row.insertCell(5).innerHTML =
    '<button class="edit">Edit</button> <button class="delete">Delete</button>';

    alert("Student Added Successfully!");

    form.reset();

});


// Delete Student

const studentTable = document.querySelector("table");

studentTable.addEventListener("click", function(event){

    if(event.target.classList.contains("delete")){

        let row = event.target.parentElement.parentElement;

        row.remove();

        alert("Student Deleted Successfully!");

    }

});

// Edit Student

studentTable.addEventListener("click", function(event){

    if(event.target.classList.contains("edit")){

        let row = event.target.parentElement.parentElement;

        document.querySelector('input[type="text"]').value =
        row.cells[1].innerHTML;

        document.querySelector('input[type="email"]').value =
        row.cells[2].innerHTML;

        document.querySelectorAll("input")[2].value =
        row.cells[3].innerHTML;

        document.querySelector("select").value =
        row.cells[4].innerHTML;

        row.remove();

    }

});