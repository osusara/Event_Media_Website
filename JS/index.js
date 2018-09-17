var imgcount = 1;
var total = 4;
 
function slide(x){
    var image = document.getElementById('imge');
    if (x > 0) {
    	if (imgcount < total) {
    		imgcount = imgcount + x;
    		image.src = "Resources/img"+ imgcount + ".JPG"; 
    	}
    }else{
    	if (imgcount > 1) {
    		imgcount = imgcount + x;
    		image.src = "Resources/img"+ imgcount + ".JPG"; 
    	}
    }
}