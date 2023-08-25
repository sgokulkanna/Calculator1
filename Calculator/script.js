var output = document.getElementById("output");

function display(A){
    output.value += A;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}
function Clear(){
    output.value ="";
}

function del(){
    output.value = output.value.slice(0,-1);

}