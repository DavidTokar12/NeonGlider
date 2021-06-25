class Food {
    constructor(food_x, food_y) {
      this.food_x = food_x;
      this.food_y = food_y;
      this.width = 25;
      this.height = 25;
      this.food_dir = 4;
    }
    draw_food() {
      ctx.shadowColor = "rgb(57, 255, 20)";
      ctx.shadowBlur = 15;
      ctx.strokeStyle= "rgb(57, 255, 20)";
      ctx.lineWidth=7.5;
      ctx.fillStyle='rgb(57, 255, 20)'
      ctx.shadowBlur=10
      ctx.lineWidth=6;
      ctx.fillRect(this.food_x, this.food_y, this.width, this.height);
    }
    move_food_horizontaly() {
      if (this.food_y + 25 > canvas.height || this.food_y < 0) {
        this.food_dir = this.food_dir * -1;
      }
      this.food_y = this.food_y + this.food_dir;
    }
  }