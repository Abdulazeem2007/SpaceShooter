class Bonus {
	constructor(type = 0) { //random ensuite
		this.x = random(10, width - 10);
		this.y = -10;
		this.speed = 6;
		this.type = type;
		this.radius = 9;
	}

	move(){
		this.y += this.speed;
	}

	show() {
		image(bonusImg[0], this.x - this.radius, this.y - this.radius);
	}

	effect(player) {
		player.life +=1;

	}
}

