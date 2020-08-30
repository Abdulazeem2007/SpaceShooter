class EnemyBullet {
	constructor(initX, initY, offset = 15) {
		this.x = initX;
		this.y = initY - offset;
		this.speedBullet = 15;
		this.radius = 6;
	}

	show() {
		image(bulletEnemyImg, this.x-3, this.y-3);
	}
	move() {
		this.y += this.speedBullet;
	}
}

