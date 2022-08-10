function calcCirclePeriArea(){
    var radius = Number(document.getElementById('perimeter').value);
    const PI = 3.14;
    var perimeter = radius*2*PI;
    var area1 = radius*radius*PI;
    document.getElementById('peri').innerHTML = perimeter;
    document.getElementById('erea').innerHTML = area1;
}