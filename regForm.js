var fname, lname, email, cemail, seminar, level, cost;
document.getElementById('calc').addEventListener('click', function () {
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    cemail = document.getElementById('cemail').value;
    seminar = document.getElementById('seminar').value;


    // Add an event listener to the radio buttons
    document.querySelectorAll('.level-class').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            // Update the variable with the selected value
            level = event.target.value;
            // You can remove this line; it's just for demonstration
        });
    });



    console.log(fname + lname, +email + cemail + seminar + level);
    var valid = true;
    if (fname == "" || lname == "" || email == "" || cemail == "" || seminar == "" || level == "") {
        valid = false;
        alert("Please fill out all fields");
    }
    else if (email != cemail) {
        valid = false;
        alert("Email and confirmation do not match.");
    }

    else if (valid) {
        calculateCost();
    }
});
document.getElementById('submit').addEventListener('click', function () {
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    cemail = document.getElementById('cemail').value;
    seminar = document.getElementById('seminar').value;
    document.querySelectorAll('.level-class').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            // Update the variable with the selected value
            level = event.target.value;
            // You can remove this line; it's just for demonstration
        });
    });




    var valid = true;
    if (fname == "" || lname == "" || email == "" || cemail == "" || seminar == "" || level == "") {
        valid = false;
        alert("Please fill out all fields");
    }
    else if (email != cemail) {
        valid = false;
        alert("Email and confirmation do not match.");
    }
    else if (valid) {
       
        addUser();
        console.log(level); ''
    }
})

function calculateCost() {
    if (seminar == 'SOA') {
        if (level == 'Introductory') {
            cost = 2500;
        }
        else if (level == 'Intermediate') {
            cost = 3500;
        }
        else {
            cost = 6000;
        }
    }

    else if (seminar == 'Design Patterns') {
        if (level == 'Introductory') {
            cost = 4000;
        }
        else if (level == 'Intermediate') {
            cost = 5500;
        }
        else {
            cost = 8000;
        }
    }
    else if (seminar == 'Business Intelligence') {
        if (level == 'Introductory') {
            cost = 5000;
        }
        else if (level == 'Intermediate') {
            cost = 7000;
        }
        else {
            cost = 10000;
        }
    }
    console.log(cost);
    document.getElementById('cost').innerText = cost;

}

function addUser() {

    document.write(fname, lname, email, cemail, seminar, level);




}
