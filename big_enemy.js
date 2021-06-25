class Big_enemy {
  constructor(x, y, width, height) {
    this.big_enemyX = x;
    this.big_enemyY = y;
    this.margin_x = x;
    this.margin_y = y;
    this.width = width;
    this.height = height;
    this.big_enemy_up = true;
    this.big_enemy_down = false;
    this.big_enemy_left = false;
    this.big_enemy_right = false;
    this.big_enemy_trace = [];
  }
  draw_big_enemy() {
    ctx.shadowColor = "rgb(254,1,154)";
    ctx.shadowBlur = 15;
    ctx.strokeStyle= "rgb(254,1,154)";
    ctx.lineWidth=7.5;
    ctx.fillStyle='rgb(254,1,154)'
    ctx.shadowBlur=10
    ctx.lineWidth=6;
    ctx.fillRect(this.big_enemyX, this.big_enemyY, this.width, this.width);
  }
  move_big_enemy() {
    if (this.big_enemy_up) {
      this.big_enemyY -= 1;
    } else if (this.big_enemy_down) {
      this.big_enemyY += 1;
    } else if (this.big_enemy_left) {
      this.big_enemyX -= 1;
    } else if (this.big_enemy_right) {
      this.big_enemyX += 1;
    }
  }
  big_enemy_up_and_down() {
    if (
      this.big_enemyY === canvas.height - this.margin_y &&
      this.big_enemyX === this.margin_x
    ) {
      this.big_enemy_right = true;

      this.big_enemy_up = false;
      this.big_enemy_down = false;
      this.big_enemy_left = false;
      big_enemy_traces.unshift(
        new BigEnemyTrace(this.big_enemyX, this.big_enemyY, 0, this.height)
      );
    }
    if (
      this.big_enemyY === canvas.height - this.margin_y &&
      this.big_enemyX === canvas.width - this.margin_x - 50
    ) {
      this.big_enemy_down = true;

      this.big_enemy_up = false;
      this.big_enemy_right = false;
      this.big_enemy_left = false;
      big_enemy_traces.unshift(
        new BigEnemyTrace(this.big_enemyX, this.big_enemyY, this.width, 0)
      );
    }
    if (
      this.big_enemyY === this.margin_y - 50 &&
      this.big_enemyX === canvas.width - this.margin_x - 50
    ) {
      this.big_enemy_left = true;

      this.big_enemy_up = false;
      this.big_enemy_down = false;
      this.big_enemy_right = false;
      big_enemy_traces.unshift(
        new BigEnemyTrace(
          this.big_enemyX + this.width,
          this.big_enemyY,
          0,
          this.height
        )
      );
    }
    if (
      this.big_enemyY === this.margin_y - 50 &&
      this.big_enemyX === this.margin_x
    ) {
      this.big_enemy_up = true;

      this.big_enemy_left = false;
      this.big_enemy_down = false;
      this.big_enemy_right = false;
      big_enemy_traces.unshift(
        new BigEnemyTrace(
          this.big_enemyX,
          this.big_enemyY + this.height,
          this.width,
          0
        )
      );
    }
  }
  update_big_enemy_trace() {
    if (this.big_enemy_right) {
      big_enemy_traces[0].width++;
    }
    if (this.big_enemy_up && big_enemy_traces.length) {
      big_enemy_traces[0].height--;
    }
    if (this.big_enemy_down) {
      big_enemy_traces[0].height++;
    }
    if (this.big_enemy_left) {
      big_enemy_traces[0].width--;
    }
  }
  decrsese_big_enemy_trace() {
    if (big_enemy_traces.length >= 2) {
      if (
        big_enemy_traces[big_enemy_traces.length - 1].height === this.height
      ) {
        if (big_enemy_traces[big_enemy_traces.length - 1].width > 0) {
          big_enemy_traces[big_enemy_traces.length - 1].big_enemy_trace_x++;
          big_enemy_traces[big_enemy_traces.length - 1].width--;

          if (
            big_enemy_traces[big_enemy_traces.length - 1].width === this.height
          ) {
            big_enemy_traces[
              big_enemy_traces.length - 1
            ].big_enemy_trace_x += 50;
          }

          if (
            big_enemy_traces[big_enemy_traces.length - 1].big_enemy_trace_x ===
            big_enemy_traces[big_enemy_traces.length - 2].big_enemy_trace_x
          ) {
            big_enemy_traces.splice(big_enemy_traces.length - 1, 1);
          }
        }
        if (big_enemy_traces[big_enemy_traces.length - 1].width < 0) {
          big_enemy_traces[big_enemy_traces.length - 1].big_enemy_trace_x--;
          big_enemy_traces[big_enemy_traces.length - 1].width++;
          if (big_enemy_traces[big_enemy_traces.length - 1].width === 0) {
            big_enemy_traces.splice(big_enemy_traces.length - 1, 1);
          }
        }
      }
      if (big_enemy_traces[big_enemy_traces.length - 1].width === this.width) {
        if (big_enemy_traces[big_enemy_traces.length - 1].height > 0) {
          big_enemy_traces[big_enemy_traces.length - 1].big_enemy_trace_y++;
          big_enemy_traces[big_enemy_traces.length - 1].height--;
          if (
            big_enemy_traces[big_enemy_traces.length - 1].height === this.width
          ) {
            big_enemy_traces[
              big_enemy_traces.length - 1
            ].big_enemy_trace_y += 50;
          }
          if (big_enemy_traces[big_enemy_traces.length - 1].height === 0) {
            big_enemy_traces.splice(big_enemy_traces.length - 1, 1);
          }
        }
        if (big_enemy_traces[big_enemy_traces.length - 1].height < 0) {
          big_enemy_traces[big_enemy_traces.length - 1].big_enemy_trace_y--;
          big_enemy_traces[big_enemy_traces.length - 1].height++;
          if (big_enemy_traces[big_enemy_traces.length - 1].height === 0) {
            big_enemy_traces.splice(big_enemy_traces.length - 1, 1);
          }
        }
      }
    }
  }
  colision_with_player_trace(){
    if (player_trace_rectangles.length) {
      for (let i = 0; i < player_trace_rectangles.length; i++) {
        if (
          //balra mert  kivan cserelve a 2 x
          (this.big_enemyX < player_trace_rectangles[i].pos_x &&
            this.big_enemyX + 50 >
              player_trace_rectangles[i].pos_x +
                player_trace_rectangles[i].width &&
            this.big_enemyY <
              player_trace_rectangles[i].pos_y +
                player_trace_rectangles[i].height &&
            this.big_enemyY + 50 > player_trace_rectangles[i].pos_y) ||
          //felfele mert kivan cserelve a 2 y
          (this.big_enemyX <
            player_trace_rectangles[i].pos_x +
              player_trace_rectangles[i].width &&
            this.big_enemyX + 50 > player_trace_rectangles[i].pos_x &&
            this.big_enemyY < player_trace_rectangles[i].pos_y &&
            this.big_enemyY + 50 >
              player_trace_rectangles[i].pos_y +
                player_trace_rectangles[i].height) ||
          //lentre jobbra ez van jol
          (this.big_enemyX <
            player_trace_rectangles[i].pos_x +
              player_trace_rectangles[i].width &&
            this.big_enemyX + 50 > player_trace_rectangles[i].pos_x &&
            this.big_enemyY <
              player_trace_rectangles[i].pos_y +
                player_trace_rectangles[i].height &&
            this.big_enemyY + 50 > player_trace_rectangles[i].pos_y)
        ) {
          if(i!==0){
          player_trace_rectangles.splice(i,1)
        }
        }
      }
    }
  }
}

class BigEnemyTrace {
  constructor(x, y, w, h) {
    this.big_enemy_trace_x = x;
    this.big_enemy_trace_y = y;
    this.width = w;
    this.height = h;
  }
  draw_out_BigEnemyTrace() {
    ctx.shadowColor = "rgb(254,1,154)";
    ctx.shadowBlur = 15;
    ctx.strokeStyle= "rgb(254,1,154)";
    ctx.lineWidth=7.5;
    ctx.fillStyle='rgba(254,1,154,0.1)'
    ctx.shadowBlur=10
    ctx.lineWidth=6;
    ctx.fillRect(
    this.big_enemy_trace_x,
    this.big_enemy_trace_y,
    this.width,
    this.height
    );
  }
}
