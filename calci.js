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
    form.txt.value = eval(form.txt.value);

}

function decimal(dec){
    var textbox=document.getElementById("textbox");
    for(i=0; i< textbox.value.length; i++)
        if(textbox.value.charAt(i)=='.'){
            return;
        }
    textbox.value += dec;

}
