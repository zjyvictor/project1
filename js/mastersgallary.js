window.onload = function () {
    var oDiv = document.getElementById('mastersimagegallary');
    var oUl = document.getElementById('mastersimagelist');
    var speed = -2;

    oUl.innerHTML += oUl.innerHTML; 
    var oLi = document.getElementsByTagName('li');
    oUl.style.width = oLi.length * 400 + 'px';




    function move() {
        if (oUl.offsetLeft < -(oUl.offsetWidth / 2)) { 
            oUl.style.left = 0;
        }
        oUl.style.left = oUl.offsetLeft + speed + 'px';
    }


    var timer = setInterval(move, 30);

    oDiv.addEventListener('mouseout', function () {
        timer = setInterval(move, 30);
    }, false);
    oDiv.addEventListener('mousemove', function () {
        clearInterval(timer);
    }, false);
}