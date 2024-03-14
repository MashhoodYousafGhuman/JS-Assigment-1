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

document.getElementById("Sum2Numbers").onclick = function () {
    
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    document.getElementById("Statement").style.fontSize = "20px";
    document.getElementById("Statement").style.fontFamily = "verdana";
    
    let num1 = 10;
    let num2 = 5;
    let num3 = 5;
    let num4 = 10
    // let add = num1 + num2 + num3;

    // // let sum = "num1 + num2 + num3;"
    // let sum = "let num1 = 10;   <br> let num2 = 5;   <br> let num3 = 5;   <br> let add = num1 + num2 + num3; "
    
    // template literals method ${}
    let sum = `
    let num1 = ${num1}; <br>
    let num2 = ${num2}; <br> 
    let num3 = ${num3}; <br>
    let num4 = ${num4}; <br>
    let sum = num1 + num2 + num3 + num4 ;
`; 

    document.getElementById("Statement").innerHTML = sum;

    let sumOutput  = "sum = 20"
    document.getElementById("Output").innerHTML =  sumOutput;
}

document.getElementById("Subtract2Numbers").onclick = function () {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
        
            let num1 = 20;
            let num2 = 5;
            
            let subStatement =
            `
            let num1 = ${num1}; <br>
            let num2 = ${num2}; <br>
            let subtraction  = num1 - num2;  
            `
            document.getElementById("Statement").innerHTML = subStatement;

            let sub = num1 - num2;
            document.getElementById("Output").innerHTML = sub;
            // console.log(sub)
}


document.getElementById("Multiply2Numbers").onclick = function () {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

        let num1 = 4
        let num2 = 5
    
        let multiplication = `
        let num1 = ${num1}   <br>
        let num2 = ${num2}   <br>
        let multiply = num1 * num2;
        ` 
        document.getElementById("Statement").innerHTML = multiplication;
        
        let multiply = num1 * num2;
        document.getElementById("Output").innerHTML = multiply;
}

document.getElementById("Divide2Numbers").onclick = function () {

    let numf = 40;
    let nums = 10;
    let numd = numf / nums;
    // console.log(numd/)
    document.getElementById("Output").innerHTML = numd;

    let division = `
            let numf = ${numf}; <br>
            let nums = ${nums};   <br>
            let numd = numf / nums;    
    `
    document.getElementById("Statement").innerHTML = division;

}

document.getElementById("CalculateSomeNumbers").onclick = function () {
    





}






















// alert("It is work9ing")

// id="Statement" 
// id="Output"
// id="AlertName
// id="AlertNumber
// id="ShowVariableNames
// id="ShowcamelCaseExamples
// id="Sum2Numbers
// id="Subtract2Numbers
// id="Multiply2Numbers
// id="Divide2Numbers
// id="CalculateSomeNumbers

/* <div class="col  m- 4 border p-5 rounded ">
                    <button class="btn btn-danger  m-1 " id="AlertName  "  >Alert Name  </button>
                    <button class="btn btn-danger  m-1 " id="AlertNumber"  >Alert Number</button>
                    <button class="btn btn-danger  m-1 " id="ShowVariableNames "  >Show Variable Names</button>
                    <button class="btn btn-danger  m-1 " id="ShowcamelCaseExamples"  >Show camelCase Examples</button>
                    <button class="btn btn-danger  m-1 " id="Sum2Numbers "  >Sum 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="Subtract2Numbers"  >Subtract 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="Multiply2Numbers "  >Multiply 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="Divide2Numbers"  >Divide 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="CalculateSomeNumbers"  >Calculate Some Numbers</button>
                </div> */
