const calculateTemp = ()=>{

    const tempNumber = document.getElementById('temp').value;

    const selectedTemp = document.getElementById('temp_diff');
    const tempValue= temp_diff.options[selectedTemp.selectedIndex].value;


    const celsiusToFahrenheit = (cel) =>{
        let fahrenheit=Math.round((cel * 9/5) + 32);
        return fahrenheit;

    }

    const fahrenheitTocelsius = (fah) =>{
        let celsius=Math.round((fah - 32) * 5/9);
        return celsius;

    }

    

    let result;

    if(tempValue=='cel'){
        result=celsiusToFahrenheit(tempNumber);
        document.getElementById('resultContainer').innerHTML=`${result}°Fahrenheit`;
    }else{
        result=fahrenheitTocelsius(tempNumber);
        document.getElementById('resultContainer').innerHTML=`${result}°Celsius`;

    }
}