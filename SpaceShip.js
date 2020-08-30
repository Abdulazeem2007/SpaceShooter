class SpaceShip {
	constructor(life) {
		this.x = width / 2;
		this.y = height - 30;
		this.speed = 10;
		this.direction = 0;
		this.upDown = 0;
		this.life = life;
		this.score = 0;
		this.radius = 22;
	}

	show() {
		image(spaceShipImg, this.x-this.radius, this.y-this.radius);
	}

	move() {
		if (this.x >= 10 && this.x <= width - 10) {
			this.x += this.speed * this.direction;
		}  else if (this.x < 10) {
			this.x = 10;
		} else if (this.x > width - 10) {
			this.x = width -10;
		}

		if (this.y >= height - 300 && this.y <= height - 30) {
			this.y += this.speed * this.upDown;
		}  else if (this.y > height - 30) {
			this.y = height - 30;
		} else if (this.y < height - 300) {
			this.y = height - 300;
		}
	}
}

