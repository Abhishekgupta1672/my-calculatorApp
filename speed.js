const mpsInput = document.getElementById("m/s");
const kmphrInput = document.getElementById("km/hr");
const milesphrInput = document.getElementById("miles/hr");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "m/s":
                kmphrInput.value = (value * 18) / 5;
                milesphrInput.value = value*2.236936;
                break;
            case "km/hr":
                mpsInput.value = (value * 5) / 18;
                milesphrInput.value = (value * 0.6213711);
                break;
            case "miles/hr":
                mpsInput.value = value * 0.447040;
                kmphrInput.value = (value *1.609344);
                break;
        }
    });
}