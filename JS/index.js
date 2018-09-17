var imgcount = 1;
var total = 4;
 
function slide(x){
    var image = document.getElementById('imge');
    if (imgcount <= total) {
    	imgcount = imgcount + x;
    	image.src = "Resources/img"+ imgcount + ".JPG"; 
    }
}