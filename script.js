function buttonclicked(button) {
    switch (button) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
        case "+":
        case "-":
        case "*":
        case "/":
            document.getElementById('display').value = document.getElementById('display').value + button;
            break;

        case "=":
            try {
                document.getElementById('display').value = eval(document.getElementById("display").value);
            } catch (e) {
                document.getElementById("display").value = "error!";
            }
            break;

        case "C":
            document.getElementById("display").value = "";
            break;

        case "CE":
            if (document.getElementById("display").value == "error!" || document.getElementById("display").value == "undefined") {
                document.getElementById("display").value = "";
                break;
            } else {
                var displayVal = document.getElementById("display").value;
                displayVal = displayVal.substr(0, displayVal.length - 1);
                document.getElementById("display").value = displayVal;
            }
            break;
    }
}
