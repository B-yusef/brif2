// storing input from register-form
function store() {
       var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    if (name.value =="" || pw.value ==""){
        alert("les champs vides");
    }else{

    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    window.location.replace("login.html")
    }
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // // check if stored data from register-form is equal to data from login form
        if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
        window.location.replace("livecoding.html")

    }else {
        alert('ERROR.');
    }
}

