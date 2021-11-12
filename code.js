var inputTextArea = document.getElementById("input");
var btn_optimize = document.getElementById("optimizeBtn");
var output_textArea = document.getElementById("output");
var btn_copy = document.getElementById("copy");
var btn_select = document.getElementById("selectAll");

//set of all replace 
const empty = ``;
const group1 = `$1`;
const newline = `\n`;

//set of all regex
var regex = /[-\w]+\:\s*null\;/gi
var regex_emptyLine = /(^[ \t]*\n)/gm;
var regex_firstdq = /^\"/
var regex_otherdq = /\".*\n"/g
var regex_fontdq = /"(.*)"/g
var regex_lastdq = /\"$/

//remove extra double quotes
function remove_dq(string){
    var test = string.replace(regex_firstdq,empty);
    var test1 = test.replace(regex_otherdq,newline);
    var test2 = test1.replace(regex_fontdq,group1);
    var test3 = test2.replace(regex_lastdq,empty);
    console.log(test3);
    return test3;
}

btn_optimize.addEventListener("click",function(){  
    // console.log(inputTextArea.value);
    var result_string = inputTextArea.value.replace(regex,empty); // replace inputTextArea.value with blank char 
    // console.log(result_string);
    var final_string = result_string.replace(regex_emptyLine,empty);
    // console.log(final_string);
    output_textArea.value = remove_dq(final_string); // insert output text after replace in output_textArea
});

// select all fn
btn_select.onclick = function(){
    output_textArea.select();
};
// copy to clipboard fn
btn_copy.onclick = function(){
    output_textArea.select();
    navigator.clipboard.writeText(output_textArea.value);
};

// to clear default textarea message 
// function clear_textArea(inputTextArea) {
//     inputTextArea.value = '';
// }
