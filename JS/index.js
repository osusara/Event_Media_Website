var imgcount = 1;
var total = 7;
 
function slide(x){
    var image = document.getElementById('imge');
    imgcount = imgcount + x;
    image.src = "Resources/img"+ imgcount + ".JPG"; 
}