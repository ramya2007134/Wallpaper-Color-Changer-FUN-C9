var btn_pink;
var btn_yellow;

var p = 0;
var y = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
btn_pink = createButton ("pink");
btn_pink.position(100,50);
btn_pink.mousePressed (pink_bg);

btn_yellow = createButton ("yellow");
btn_yellow.position (250,50);
btn_yellow.mousePressed (yellow_bg);

function pink_bg() 
  p=255;
  y=0;
  b=0;
}

function yellow_bg() 
{
p=0;
y=255;
b=0;
}

function draw() {
  background(p,y,b);


  //drawsprites
drawSprite();



}
