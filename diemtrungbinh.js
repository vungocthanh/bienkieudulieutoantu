function mediscore(){
    var scoreLy = Number(document.getElementById('scoreL').value);
    var scoreHoa = Number(document.getElementById('scoreH').value);
    var scoreSinh = Number(document.getElementById('scoreS').value);
    var medi = (scoreLy+scoreHoa+scoreSinh)/3;
    var tol = scoreLy + scoreHoa + scoreSinh;
    document.getElementById('outputMedium').innerHTML = medi;
    document.getElementById('outputTotal').innerHTML = tol;
}