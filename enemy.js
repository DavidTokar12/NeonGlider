class Enemy {
    constructor(x, y, speed) {
      this.enemy_x = x;
      this.enemy_y = y;
      this.speed = speed;
      this.vx = 0;
      this.vy = 0;
      this.vector = [player_x - this.enemy_x, player_y - this.enemy_y];
      this.vector_mag = Math.sqrt(this.vector[0] ** 2 + this.vector[1] ** 2);
    }
    get_location_to_move_to() {
      this.vector = [player_x - this.enemy_x, player_y - this.enemy_y];
      this.vector_mag = Math.sqrt(this.vector[0] ** 2 + this.vector[1] ** 2);
      this.vx = (this.vector[0] / this.vector_mag) * this.speed;
      this.vy = (this.vector[1] / this.vector_mag) * this.speed;
      this.enemy_x += this.vx;
      this.enemy_y += this.vy;
    }
    draw_enemy() {
      ctx.shadowColor = "rgb(252,116,253)";
      ctx.shadowBlur = 15;
      ctx.strokeStyle= "rgb(252,116,253)";
      ctx.lineWidth=7.5;
      ctx.fillStyle='rgb(252,116,253)'
      ctx.shadowBlur=10
      ctx.lineWidth=6;
      ctx.fillRect(this.enemy_x, this.enemy_y, 40, 40);
    }
  }