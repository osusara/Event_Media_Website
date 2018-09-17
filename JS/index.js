var imgcount = 1;
 
function slide(x){
    var image = document.getElementById('imge');
    if (x > 0) {
    	if (imgcount < 4) {
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