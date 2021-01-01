canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
background_image = "racing image.jpg";
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;



function add() {
    background_image = new Image();
    background_image.onload = uploadbackground;
    background_image.src = background_image;

    car1_image = new Image();
    car1_image.onload = uploadcar1;
    car1_image.src = car1_image;

    car2_image = new Image();
    car2_image.onload = uploadcar2;
    car2_image.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_image,car1_x,car1_y,car1width,car1height);
}

function uploadcar2() {
    ctx.drawImage(car2_image,car2_x,car2_y,car2width,car2height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
  keypress = e.keyCode;
  console.log(keypress);

 if (keypress=="65") {
     left();
     console.log("left key was pressed");
 }

 if (keypress=="83") {
    down();
    console.log("down key was pressed");
}

if (keypress=="68") {
    right();
    console.log("right key was pressed");
}

if (keypress=="87") {
    up();
    console.log("up key was pressed");
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
  keypress = e.keyCode;
  console.log(keypress);

 if (keypress=="38") {
     up();
     console.log("up key was pressed");
 }

 if (keypress=="40") {
    down();
    console.log("down key was pressed");
}

if (keypress=="39") {
    right();
    console.log("right key was pressed");
}

if (keypress=="37") {
    left();
    console.log("left key was pressed");
}