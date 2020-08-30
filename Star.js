class Star {
	constructor(initX, initY) {
		this.x = initX;
		this.y = initY;
		this.speed =  random(1,4);
	}

	move() {
		this.y += this.speed;
		if (this.y > height) {
			this.y = random(-50,0);
			this.x = random(0, width);
		}
	}

	show() {
		noStroke();
  		fill(20 * this.speed /2 ,0,125 * this.speed /2);
		ellipse(this.x,this.y, this.speed , this.speed);
	}
}
