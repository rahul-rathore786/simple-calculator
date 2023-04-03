
function appendValue(value) {
    document.getElementById("input").value += value;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function backspace() {
    var currentValue = document.getElementById("input").value;
    document.getElementById("input").value = currentValue.slice(0, -1);
}

function calculate() {
    var result = eval(document.getElementById("input").value);
    document.getElementById("input").value = result;
}
