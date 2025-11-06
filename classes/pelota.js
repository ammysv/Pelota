class pelota{

    constructor(){

        this.diamOri = random(40, 80);
        this.diam = this.diamOri; // para la escala
        this.rad = this.diam /2;
        
        this.posX = random(this.rad, width - this.rad);
        this.posY = random(this.rad, height - this.rad);
        
        this.velX = random (-5, 5);
        this.velY = random (-5, 5);   
        
        this.nuevocolor = color(random(300, 70), random(10, 10), random(50, 300), 80);

        this.velEscala = 0.3; // velocidad de escalado 
        this.tipo = random([0, 1]); // 0 = círculo, 1 = triángulo
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

        //Para escalar la pelota
        this.diam -= this.velEscala;
        if (this.diam <= 0) {
        this.diam = this.diamOri; // reaparece la pelota con su tamaño original
        }
        
    }    
    
    visualizar(){  
        
        fill(this.nuevocolor);
        stroke(this.nuevocolor)
        strokeWeight(8);
        
        // Si tipo = 0, dibuja círculo; si = 1, dibuja triángulo
        if (this.tipo === 0) {
            circle(this.posX, this.posY, this.diam);
        } 
        else {
            let h = this.diam; // altura del triángulo
            triangle( this.posX, this.posY - h / 2, this.posX - h / 2, this.posY + h / 2, this.posX + h / 2, this.posY + h / 2);
            
        }  
        
        
    

    }


}