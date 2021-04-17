const height = document.querySelector('.height').value;
const weight = document.querySelector('.weight').value;

function calculator(){
    console.log(height);
    console.log(weight);

    let h = Number(height);
    let w = Number(weight);

    bmi = 20+(w/h**2);
    console.log(bmi);

    if(bmi<18.5) console.log('underweight.');
    if(bmi > 18.6 || bmi<24.9) console.log('normal weight.');
    if(bmi > 25 || bmi <29.9) console.log('overweight.');
    if(bmi>30) console.log('obesity.')
    
}

calculator();
