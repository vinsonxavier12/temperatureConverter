const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i =0;i< inputs.length; i++){
    let input = inputs[i];

        input.addEventListener("input", function(e){
            let value = e.target.value;
            switch (e.target.name) {
                case "celsius":
                    fahrenheitInput.value = (parseInt(value) * (9/5) + 32);
                    kelvinInput.value = parseInt(value) + 273.15;
                    break;
                case "fahrenheit":
                    celsiusInput.value = (parseInt(value)-32) * (5/9);
                    kelvinInput.value = (parseInt(value)-32) * (5/9) + 273.15;
                    break;
                case "kelvin":   
                    fahrenheitInput.value = (parseInt(value)-273.15) * (9/5) + 32;
                    celsiusInput.value = parseInt(value) - 273.15;
                    break;
                default:
                    console.log("Error!")
                    break;
            }
        });

        function refreshInput(){
            celsiusInput.value = null;
            fahrenheitInput.value = null;
            kelvinInput.value = null;
        }
}

