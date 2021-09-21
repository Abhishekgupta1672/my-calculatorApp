window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI);
}
function calculateBMI(){
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');
    console.log(height);
    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = 'Please provide a valid height';
    }else if(weight === '' || isNaN(weight) || weight < 0){
        result.innerHTML = 'Please provide a valid weight';
    }
    else{
         let bmi = (weight / ((height * height) / 10000)).toFixed(2); 
         if(bmi < 18){
             result.innerHTML = `BMI : <span>${bmi}</span> <div>Under Weight</div> `;
            }else if(bmi >= 18 && bmi < 25){
                result.innerHTML = `BMI : <span>${bmi}</span> <div>Normal</div>`;
            } else if(bmi >= 40){
            result.innerHTML = `BMI : <span>${bmi}</span> <div>Highly Obese</div>`;
         } else{
            result.innerHTML = `BMI : <span>${bmi}</span> <div>Over Weight</div>`;
         }
    }
}