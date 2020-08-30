class Enemy{
	constructor() {
		this.reborn();
		/*this.x = random(10, width -10);
		this.y = random(-10, -400);
		
		let enemyLottery = random(1,10);
		this.image = {}
		if (enemyLottery >= 1 && enemyLottery < 4 ) {
			this.type = 1;
			this.speed = random(4,8);
			this.image = enemyImg1;
			this.life = 2;
			this.point = 2;
			this.radius = 20;
			this.dirPostHit = Math.pow(-1, Math.round(random(1,2))) * random(0.2,0.5);
		} else if (enemyLottery >= 4 && enemyLottery < 9 ) {
			this.type = 2;
			this.speed = random(8,12);
			this.image = enemyImg2;
			this.life = 1;
			this.point = 1;
			this.radius = 18;
		} else if (enemyLottery >= 9 && enemyLottery <= 10 ) {
			this.type = 3;
			this.speed = random(6,10);
			this.image = enemyImg3;
			this.life = 1;
			this.point = 3;
			this.radius = 17;
		}*/
	}

	reborn() {
		this.x = random(10, width -10);
		this.y = random(-40, -400);
		
		let enemyLottery = random(1,10);
		this.image = {}
		if (enemyLottery >= 1 && enemyLottery < 4 ) {
			this.type = 1;
			this.speed = random(4,8);
			this.image = enemyImg1;
			this.life = 2;
			this.point = 2;
			this.radius = 20;
			this.dirPostHit = Math.pow(-1, Math.round(random(1,2))) * random(0.2,0.5);
		} else if (enemyLottery >= 4 && enemyLottery < 9 ) {
			this.type = 2;
			this.speed = random(8,12);
			this.image = enemyImg2;
			this.life = 1;
			this.point = 1;
			this.radius = 18;
		} else if (enemyLottery >= 9 && enemyLottery <= 10 ) {
			this.type = 3;
			this.speed = random(6,10);
			this.image = enemyImg3;
			this.life = 1;
			this.point = 3;
			this.radius = 17;
		}
	}

	move() {
		if (this.type == 1 && this.life == 1) {
			this.image = enemyImg1b;
			this.y +=this.speed;
			this.x += this.speed * this.dirPostHit;
		}else if (this.type == 3) {
			this.y +=this.speed;
			this.x = 0.5 * width * (1+  cos(5 * this.y / width ));
			/*if (random(0,25) < 1 && this.y > 0) {
				enemyBullets.push(new EnemyBullet(this.x, this.y, this.radius));
			}*/
		} else {
			this.y +=this.speed;
		}
	}

	fire() {
		if (this.type == 3) {
			if (random(0,25) < 1 && this.y > 0) {
				return true;
			}
		}
		return false;
	}

	show() {
		image(this.image, this.x-15, this.y-15);
	}
}

