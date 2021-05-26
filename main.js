var canvas=new fabric.Canvas("myCanvas");

SUPERHERO_image_width=30;
SUPERHERO_image_height=30;

player_x=10;
player_y=10;

var SUPERHERO_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        SUPERHERO_object=Img;
        SUPERHERO_object.scaleToWidth(150);
        SUPERHERO_object.scaleToHeight(140);
        SUPERHERO_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(SUPERHERO_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        SUPERHERO_image_object=Img;
        SUPERHERO_image_object.scaleToWidth(SUPERHERO_image_width);
        SUPERHERO_image_object.scaleToHeight(SUPERHERO_image_height);
        SUPERHERO_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(SUPERHERO_image_object);
    });
}