status ="";
function preload(){
    img = loadImage('thumbnail_image.jpeg');
}
function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
status = true;
}
function gotResults(){

}
function draw(){
    if(){
        
    }
}