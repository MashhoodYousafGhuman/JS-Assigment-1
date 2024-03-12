document.getElementById("AlertName").onclick =  function ( ) {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let fullName = "Muhammad Mashhod Ghuman"
    alert(fullName)
    
    let Statement = "alert('Muhammad Mashhod Ghuman')"
    document.getElementById("Statement").innerHTML = Statement;
    
    let myg = 'Muhammad Mashhood Ghuman';
    
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

{/* <div class="col  m- 4 border p-5 rounded ">
                    <button class="btn btn-danger  m-1 " id="AlertName  "  >Alert Name  </button>
                    <button class="btn btn-danger  m-1 " id="AlertNumber"  >Alert Number</button>
                    <button class="btn btn-danger  m-1 " id="ShowVariableNames "  >Show Variable Names</button>
                    <button class="btn btn-danger  m-1 " id="ShowcamelCaseExamples"  >Show camelCase Examples</button>
                    <button class="btn btn-danger  m-1 " id="Sum2Numbers "  >Sum 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="Subtract2Numbers"  >Subtract 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="Multiply2Numbers "  >Multiply 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="Divide2Numbers"  >Divide 2 Numbers</button>
                    <button class="btn btn-danger  m-1 " id="CalculateSomeNumbers"  >Calculate Some Numbers</button>
                </div> */}
