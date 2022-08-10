function changeTemperature() {
    var celcius = document.getElementById('doC').value;
    console.log('celcius' + celcius)
    var x = (celcius * 9) / 5 + 32;
    document.getElementById("xuat").innerHTML = x;
}