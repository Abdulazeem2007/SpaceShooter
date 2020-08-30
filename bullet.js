class Bullet {
	constructor(initX, initY) {
		this.x = initX;
		this.y = initY - 10;
		this.speed = 12;
		this.radius = 4;
    }

	show() {
		image(bulletImg, this.x-3, this.y-3);
	}
	move() {
		this.y -= this.speed;
	}
}

