var num1, num2, num3, ans;

function setup() {
    num1 = document.getElementById("number1");
    num2 = document.getElementById("number2");
    num3 = document.getElementById("number3");
}

function execute() {
    ans = Number(num1.value) + Number(num2.value) + Number(num3.value);
    document.getElementById("result").innerHTML = ans;
}