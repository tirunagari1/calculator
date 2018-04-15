displayNum="";
storedNum="";
operation=0;
queuedOperation=0;
calculationFinished=false;

function display(i) {
    form.txt.value = form.txt.value + i;
}
    function ce() {
        form.txt.value = '';

    }

    function bs() {
        form.txt.value = form.txt.value.slice(0, form.txt.value.length - 1);

    }
function e() {

        var textbox = document.getElementById("textbox");
        displayNum = textbox.value;
        var evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);

        if (operation == 1) {
            displayNum = evalStored + evalDisplay;
        }
        else if (operation == 2) {
            displayNum = evalStored - evalDisplay;
        }
        else if (operation == 3) {
            displayNum = evalStored * evalDisplay;
        }
        else if (operation ==4 ) {
            displayNum = evalStored / evalDisplay;
        }

        else if (operation ==5 ) {
            displayNum = evalStored % evalDisplay;
        }
    textbox.value = displayNum;
        if (operation != 0)
            calculationFinished = true;
        operation = 0;
        queuedOperation = 0;
        displayNum = "";
        storedNum = " ";


}

function decimal(dec){
    var textbox=document.getElementById("textbox");
    for(i=0; i< textbox.value.length; i++)
        if(textbox.value.charAt(i)=='.'){
            return;
        }
    textbox.value += dec;

}

function setOperation(command) {
    var textbox = document.getElementById("textbox"),
        displayNum = textbox .value;

    evalDisplay = eval(displayNum),
        evalStored = eval(storedNum);

    if (queuedOperation == 0) {
        storedNum = textbox .value;
    }
    else if (queuedOperation == 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (queuedOperation == 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation == 3) {
        storedNum = evalStored * evalDisplay;
    }
    else if (queuedOperation == 4) {
        storedNum = evalStored / evalDisplay;
    }

    else if (queuedOperation == 5) {
        storedNum = evalStored % evalDisplay;
    }
    if (command == 'add') {
        operation = 1;
    }
    else if (command == 'subtract') {
        operation = 2;
    }
    if (command == 'multiply') {
        operation = 3;
    }
   else if (command == 'division') {
        operation = 4;
    } if (command == 'per') {
        operation = 5;
    }
    queuedOperation = operation;
    textbox.value = '';
}
