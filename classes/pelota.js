class pelota{

    constructor(){

        this.diam = random(40, 80);
        this.rad = this.diam /2;
        
        this.posX = random(this.rad, width - this.rad);
        this.posY = random(this.rad, height - this.rad);
        
        this.velX = random (-5, 5);
        this.velY = random (-5, 5);   
        
        this.nuevocolor = color(random(300, 70), random(10, 10), random(50, 300), 80);
    }

    actualizar(){   
        if(this.posX > width - this.rad || this.posX < this.rad) {
            this.velX *= -1;
        } 
        
        if(this.posY > height - this.rad || this.posY < this.rad) {
            this.velY *= -1;
        } 
        
        this.posX += this.velX;
        this.posY += this.velY;
        
    }    
    
    visualizar(){  
        
        fill(this.nuevocolor);
        circle(this.posX, this.posY, this.diam);
        noStroke(); 
    }   


}