function show() {
var name = document.getElementById('name').value;
var title = document.getElementById('title').value;
var address = document.getElementById('address').value;
var email = document.getElementById('emailId').value;
var phone = document.getElementById('phone').value;
document.getElementById('Title').innerHTML=title;
document.getElementById('Name').innerHTML=name;
document.getElementById('Email').innerHTML=email;
document.getElementById('Phone').innerHTML=phone;
document.getElementById('Address').innerHTML=address;
}