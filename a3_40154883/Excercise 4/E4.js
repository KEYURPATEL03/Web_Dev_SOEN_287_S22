var images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg"];
var i = 1;
            function next(){
                if(i < images.length){
                    document.getElementById("image").src = images[i];
                    i++;
                }
            }
            function previous(){
                if((i <= images.length) && (i > 1)){
                    document.getElementById("image").src = images[i-2];
                    i--;
                }
            }