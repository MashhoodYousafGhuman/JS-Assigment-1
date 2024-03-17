document.getElementById("ClearStatement").onclick = function () {
    document.getElementById("Statement").innerHTML = "";
}

document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = "";
}

document.getElementById("AlertName").onclick =  function ( ) {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let fullName = "Muhammad Mashhod Ghuman"
    alert(fullName)
    
    let Statement = "alert('Muhammad Mashhod Ghuman')"
    document.getElementById("Statement").innerHTML = Statement;
    
    let myg = '  Muhammad Mashhood Ghuman';
    
    document.getElementById("Output").innerHTML = myg ;  
}

document.getElementById("AlertNumber").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    alert(123)
    
    let number = "alert(123)"
    // let numberStatement = 
    document.getElementById("Statement").innerHTML = number
    // document.getElementById("Output").innerHTML = number
}

document.getElementById("ShowVariableNames").onclick = function(){
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    alert('VariableNames')

    let variable =" <ul><li>A variable name can't contain any spaces</li> <li>A variable name can contain only letters,numbers,dollar sign's and underscores(_)</li>  <li>Though a Variable name can't be of any javaScript's keywords . For example, <code>userAlert</code> and <code>myVar</code> are legal </li>  <li>Capital Letters are fine but be careful. Variable Names are case sensitive. A   <code>rose</code> is not a <code>Rose</code>   </li> <ul/>"
    document.getElementById("Output").innerHTML = variable;
    
    let variable1 =" <ul><li>A variable name can't contain any spaces</li> <li>A variable name can contain only letters,numbers,dollar sign's and underscores(_)</li>  <li>Though a Variable name can't be of any javaScript's keywords . For example, <code>userAlert</code> and <code>myVar</code> are legal </li>  <li>Capital Letters are fine but be careful. Variable Names are case sensitive. A   <code>rose</code> is not a <code>Rose</code>   </li> <ul/>"
    document.getElementById("Statement").innerText = variable1;
    

}
document.getElementById("ShowcamelCaseExamples").onclick = function(){

    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    alert("showing camelCaseExamples Below")

    let example =   "user"
    let example1 =" UserResponive"
    let example2 =" UserLimit"
    let example3 =" UserResponiveLimit"

    // let statement = " <h1> <ul><li><code> user</code></li> <li><code>userResponse</code></li> <li><code>userLimit</code></li> <li><code>userResponiveLimit</code></li> </ul> </h1> "
    let statement = "<p><ul><li><code>"+example+"</code></li><br><li><code>"+example1+ "</code></li><br><li><code>"+example2 + "</code></li><br><li><code>" + example3 + "</code></li></ul></p>"


    document.getElementById("Output").innerHTML = statement;
 
}

// document.getElementById("Sum2Numbers").onclick = function () {
    
//     document.getElementById("Statement").innerHTML = "";
//     document.getElementById("Output").innerHTML = "";
//     document.getElementById("Statement").style.fontSize = "20px";
//     document.getElementById("Statement").style.fontFamily = "verdana";
    
//     let num1 = 10;
//     let num2 = 5;
//     let num3 = 5;
//     let num4 = 10
//     // let add = num1 + num2 + num3;

//     // let sum = "num1 + num2 + num3;"
//     // let sum = "let num1 = 10;   <br> let num2 = 5;   <br> let num3 = 5;   <br> let add = num1 + num2 + num3; "
    
//     // template literals method ${}
//     let sum = `
//     let num1 = ${num1}; <br>
//     let num2 = ${num2}; <br> 
//     let num3 = ${num3}; <br>
//     let num4 = ${num4}; <br>
//     let sum = num1 + num2 + num3 + num4 ;
// `; 

//     document.getElementById("Statement").innerHTML = sum;

//     let sumOutput  = "sum = 20"
//     document.getElementById("Output").innerHTML =  sumOutput;
// }

// document.getElementById("Subtract2Numbers").onclick = function () {
//     document.getElementById("Statement").innerHTML = "";
//     document.getElementById("Output").innerHTML = "";
        
//             let num1 = 20;
//             let num2 = 5;
            
//             let subStatement =
//             `
//             let num1 = ${num1}; <br>
//             let num2 = ${num2}; <br>
//             let subtraction  = num1 - num2;  
//             `
//             document.getElementById("Statement").innerHTML = subStatement;

//             let sub = num1 - num2;
//             document.getElementById("Output").innerHTML = sub;
//             // console.log(sub)
// }


// document.getElementById("Multiply2Numbers").onclick = function () {
//     document.getElementById("Statement").innerHTML = "";
//     document.getElementById("Output").innerHTML = "";

//         let num1 = 4
//         let num2 = 5
    
//         let multiplication = `
//         let num1 = ${num1}   <br>
//         let num2 = ${num2}   <br>
//         let multiply = num1 * num2;
//         ` 
//         document.getElementById("Statement").innerHTML = multiplication;
        
//         let multiply = num1 * num2;
//         document.getElementById("Output").innerHTML = multiply;
// }

// document.getElementById("Divide2Numbers").onclick = function () {

//     let numf = 40;
//     let nums = 10;
//     let numd = numf / nums;
//     // console.log(numd/)
//     document.getElementById("Output").innerHTML = numd;

//     let division = `
//             let numf = ${numf}; <br>
//             let nums = ${nums};   <br>
//             let numd = numf / nums;    
//     `
//     document.getElementById("Statement").innerHTML = division;

// }

// document.getElementById("CalculateSomeNumbers").onclick = function () {
    // document.getElementById("Statement").innerHTML = "";
    // document.getElementById("Output").innerHTML = "";
    // document.getElementById("Statement").style.fontWeight = "400";
    // let num1 = 36   
    // let num2 = 6  
    // let num3 = 3 
    // let num4 = 2
    // let num5 = 4
    // let num6 = 3
    // let num7 = 5
    // let statementabc = `
    // let num1 = ${num1}   <br>
    // let num2 = ${num2}   <br>
    // let num3 = ${num3}   <br>
    // let num4 = ${num4}   <br>
    // let num5 = ${num5}   <br>
    // let num6 = ${num6}   <br>
    // let num7 = ${num7}   <br> <br>
    // let calculationOf = ${num1} / ${num2} * ${num3} + ${num4} ** ${num5} - (${num6} + ${num7});
    // `
      



        // document.getElementById("Statement").innerHTML = statementabc;
        //      let calculationOf = num1 / num2 * num3 + num4 ** num5 - (num6 + num7);
        //   document.getElementById("Output").innerHTML = calculationOf;
        
// }

// now im coding onl for practice
// document.getElementById("CalculateSomeNumbers").onclick = function () {

//     let a = " MASHHOOD"
//     let b = " Yousaf"
//     let c = " Ghuman"
//     let statement = `<h1>  ${a}  <br>   ${b}  <br>  ${c}  </h1>`
//     // let statement =  a + b + c;

//     document.getElementById("Statement").innerHTML = statement;

// }


// concatenation with traditional method and its good practice

// let string1 = "mashhood"
// let string2 = "yousaf"
//  let string3 = " ghuman"
//  let myName = string1 + " " + string2 + " " + string3;
//  document.getElementById("Output").innerHTML = myName;

//  let myNameStatement = 
//  "let string1 = " + string1  + "<br>let string2 = " + string2+ " <br>let string3 = " + string3 + "<br>let myName = " + myName;
      
// document.getElementById("Statement").innerHTML = myNameStatement;



// new concatenation method (Traditional method ( + ))
document.getElementById("Sum2Numbers").onclick = function ( ) {
    let num1 = 10
    let num2 = 8
    let num3 = 2
    let num4 = 10
    let statement = "let num1 = " + num1 + " <br> let num2 = " + num2 + " <br> let num3 = " + num3 +  "<br>let num4 = " + num4 + " <br>let sum = " + num1  + "+" +  num2 + "+" + num3 + "+"  + num4 +   " " ;   

    document.getElementById("Statement").innerHTML = statement;
    let sum = num1 +  num2 +  num3 + num4;
    document.getElementById("Output").innerHTML = sum;
} 

document.getElementById("Subtract2Numbers").onclick = function ( ) {
    let sub1 = 20
    let sub2 = 2
    let sub3 = 2
   let statement = "let sub1 = " + sub1 + " <br> let sub2 = " + sub2 + " <br> let sub3 = " + sub3 +  " <br> let subtraction = sub1 - sub2 - sub3 ";
   document.getElementById("Statement").innerHTML = statement
    
    
    let subtraction = "<h1> " + sub1 + " - " + sub2 + " - " + sub3 + " = " + (sub1 - sub2 - sub3 ) + "</h1>"
    document.getElementById("Output").innerHTML = subtraction ;
}

document.getElementById("Multiply2Numbers").onclick = function () {
    let num1 = 2
    let num2 = 2
    let num3 = 2
    let num4 = 2
    let statement = "let num1 = " + num1 + " <br> let num2 = " + num2 + " <br> let num3 = " + num3 + " <br> let num4 = " + num4  +  " <br> let multiplication = num1 * num2 * num3 * num4 ";
        document.getElementById("Statement").innerHTML = statement ;

        let multiplication = "<p>"  + num1 * num2 * num3 * num4  + "</p>";
    document.getElementById("Output").innerHTML = multiplication ;
}
document.getElementById("Divide2Numbers").onclick = function () {
        let  num1 = 12
        let  num2 = 2
        let  num3 = 2
        
        let revisionstatement = "let num1 = " + num1 + " <br> let num2 = " + num2 + " <br> let num3 = " + num3 + " <br> let division = num1 / num2 / num3 "
        document.getElementById("Statement").innerHTML = revisionstatement;

        let revision = num1 / num2 / num3 ;
        document.getElementById("Output").innerHTML = revision ;
}
document.getElementById("CalculateSomeNumbers").onclick = function (){
    let num1 = 36
    let num2 = 6  
    let num3 = 3 
    let num4 = 2
    let num5 = 4
    let num6 = 3
    let num7 = 5
        let statement = "<h5>" + "let num1 = " + num1 + "<br> let num2 = " + num2 + " <br> let num3 = " + num3 + " <br> let num4 = " + num4 + " <br> let num5 = " + num5 + " <br> let num6 = " + num6 + " <br> let num7 = " + num7 + " <br> let calculation = " + num1 + " / " + num2 + " * " + num3 + " + " + num4 + " ** " + num5 + " - " +  "(" + num6 + " + " + num7 + ")"  + "</h5>";
        document.getElementById("Statement").innerHTML = statement;

    let calculation =  num1 + " / " + num2 + " * " + num3 + " + " + num4 + " ** " + num5 + " - " +  " ( " + num6 + " + " +  num7 + " ) " + " = " + ( num1 / num2 * num3 + num4 ** num5 - (num6 + num7)) ;
    document.getElementById("Output").innerHTML = calculation ;

    // let subtraction = "<h1> " + sub1 + " - " + sub2 + " - " + sub3 + " = " + (sub1 - sub2 - sub3 ) + "</h1>"
}




