function sum(){
    var first_num = document.getElementById('firstnum');
    var a = parseInt(first_num.value);

    var second_num = document.getElementById('secondnum');
    var b = parseInt(second_num.value);

    var c = (a+b);
    
    var output = document.getElementById('op_text')
    output.innerText = c;
}