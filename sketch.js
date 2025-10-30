let posX;
let posY;
let velX;
let velY;
let diam;
let rad;


function setup() {
    createCanvas (windowWidth, windowHeight);

    diam = 70;
    rad = diam / 2;

    posX = random(rad, width - rad);
    posY = random(rad, height - rad);

    velX = random (-5, 5);
    velY = random (-5, 5);

    
}

function draw() {
    background(80);
    fill('lightblue');
    
    if(posX > width - rad || posX < rad) {
        velX *= -1;
    } 
    if(posY > height - rad || posY < rad) {
        velY *= -1;
    } 
    

    posX += velX;
    posY += velY;


    circle( posX, posY, diam);
}
