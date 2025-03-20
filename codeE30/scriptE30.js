var button = document.getElementById('button');

button.onclick = function showAlert() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    alert("Hello " + name + ", you are " + age + " years old!");
};
