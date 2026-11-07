let Buttons = document.querySelectorAll(".Calc-butt");
let Firstnumber = "";
let secondNumber = "";
let Operator = "";
Buttons.forEach(button => {
    button.addEventListener("click",function(){
        if(!isNaN(Number(button.textContent)) && button.textContent !== ""){
            if(Operator === ""){
                if (Firstnumber === "") {
                    Firstnumber = Number(button.textContent);
                    document.getElementById("Value").textContent = Firstnumber;
                }
                else
                {
                    Firstnumber = Firstnumber*10 + Number(button.textContent);
                    document.getElementById("Value").textContent = Firstnumber;
                }
            }
            else{
                 if (secondNumber === "") {
                    secondNumber = Number(button.textContent);
                    document.getElementById("Value").textContent = secondNumber;
                }
                else
                {
                    secondNumber = secondNumber*10 + Number(button.textContent);
                    document.getElementById("Value").textContent = secondNumber;
                }
            }
        }
        else if(["+","-","/","X"].includes(button.textContent)){
            if (Firstnumber !== "" && Operator === "") {
                Operator = button.textContent;
                document.getElementById("Value").textContent = Operator;
            }
        }
        else if(button.textContent === "="){
            if (Firstnumber !== "" && Operator !=="" && secondNumber !== "") {
                let Result;
                switch (Operator) {
                    case '+':
                        Result = Number(Firstnumber) + Number(secondNumber);
                        break;
                    case '-':
                        Result = Number(Firstnumber) - Number(secondNumber);
                        break;
                    case '/':
                        if( secondNumber !== 0){
                            Result = Number(Firstnumber)/Number(secondNumber);
                        }
                        else{
                            document.getElementById("Value").textContent = "Syntax error";
                        }
                        break;
                    case 'X':
                        Result = Number(Firstnumber)*Number(secondNumber);
                        break;
                }
                document.getElementById("Value").textContent = Result;
                if (typeof Result === "number") {
                    Firstnumber = Result;
                }
                else{
                    Firstnumber = "";
                }
                secondNumber = "";
                Operator = "";
            }
        }
        else if(button.textContent === "AC"){
            Firstnumber = "";
            secondNumber = "";
            Operator = "";
            document.getElementById("Value").textContent = "0";
        }
    })
});

