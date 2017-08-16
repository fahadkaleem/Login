/**
 * Created by kaleemmf on 8/16/17.
 */

function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('username').value;

    if (username && password){
        alert("Login Successful!");
    }
    else{
        alert("Login Unsuccessful");
    }
}
