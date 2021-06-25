class Player {
    constructor() {
      this.pos_x = player_x;
      this.pos_y = player_y;
      this.width = 50;
      this.color = "black";
    }
    move_player() {
      if (player_up) {
        player_y -= speed;
      } else if (player_down) {
        player_y += speed;
      } else if (player_left) {
        player_x -= speed;
      } else if (player_right) {
        player_x += speed;
      }
    }
    draw_player() {
      ctx.shadowColor = "rgb(85,255,255)";
      ctx.shadowBlur = 15;
      ctx.strokeStyle= "rgb(85,255,255)";
      ctx.lineWidth=7.5;
      ctx.fillStyle='rgb(85,255,255)'
      ctx.shadowBlur=10
      ctx.lineWidth=6;
      ctx.fillRect(player_x, player_y, this.width, this.width);
    }
    colision_with_walls() {
      //restartGmae
      if (
        player_x <= 0 ||
        player_y <= 0 ||
        player_y + this.width >= canvas.height ||
        player_x + this.width >= canvas.width
      ) {
        create_levels(levels);
      }
    }
  
    colision_with_food() {
      if (Foods.length) {
        for (let i = 0; i < Foods.length; i++) {
          if (
            player_x < Foods[i].food_x + 25 &&
            player_x + 50 > Foods[i].food_x &&
            player_y < Foods[i].food_y + 25 &&
            player_y + 50 > Foods[i].food_y
          ) {
            score++;
            Foods.splice(i, 1);
          }
        }
      }
    }
    colision_with_enemy() {
      if (enemies.length) {
        for (let i = 0; i < enemies.length; i++) {
          if (
            player_x < enemies[i].enemy_x + 25 &&
            player_x + 50 > enemies[i].enemy_x &&
            player_y < enemies[i].enemy_y + 25 &&
            player_y + 50 > enemies[i].enemy_y
          ) {
            create_levels(levels);
          }
        }
      }
    }
  
    colision_with_trace() {
      if (player_trace_rectangles.length) {
        for (let i = 0; i < player_trace_rectangles.length; i++) {
          if (
            //balra mert  kivan cserelve a 2 x
            (player_x < player_trace_rectangles[i].pos_x &&
              player_x + 50 >
                player_trace_rectangles[i].pos_x +
                  player_trace_rectangles[i].width &&
              player_y <
                player_trace_rectangles[i].pos_y +
                  player_trace_rectangles[i].height &&
              player_y + 50 > player_trace_rectangles[i].pos_y) ||
            //felfele mert kivan cserelve a 2 y
            (player_x <
              player_trace_rectangles[i].pos_x +
                player_trace_rectangles[i].width &&
              player_x + 50 > player_trace_rectangles[i].pos_x &&
              player_y < player_trace_rectangles[i].pos_y &&
              player_y + 50 >
                player_trace_rectangles[i].pos_y +
                  player_trace_rectangles[i].height) ||
            //lentre jobbra ez van jol
            (player_x <
              player_trace_rectangles[i].pos_x +
                player_trace_rectangles[i].width &&
              player_x + 50 > player_trace_rectangles[i].pos_x &&
              player_y <
                player_trace_rectangles[i].pos_y +
                  player_trace_rectangles[i].height &&
              player_y + 50 > player_trace_rectangles[i].pos_y)
          ) {
            create_levels(levels);
          }
        }
      }
    }



    colision_with_big_enemy() {
      if (big_enemy_traces.length) {
        for (let i = 0; i < big_enemy_traces.length; i++) {
          if (
            //balra mert  kivan cserelve a 2 x
            (player_x < big_enemy_traces[i].big_enemy_trace_x &&
              player_x + 50 >
              big_enemy_traces[i].big_enemy_trace_x +
              big_enemy_traces[i].width &&
              player_y <
                big_enemy_traces[i].big_enemy_trace_y +
                  big_enemy_traces[i].height &&
              player_y + 50 > big_enemy_traces[i].big_enemy_trace_y) ||
            //felfele mert kivan cserelve a 2 y
            (player_x <
              big_enemy_traces[i].big_enemy_trace_x +
                big_enemy_traces[i].width &&
              player_x + 50 > big_enemy_traces[i].big_enemy_trace_x &&
              player_y < big_enemy_traces[i].big_enemy_trace_y &&
              player_y + 50 >
                big_enemy_traces[i].big_enemy_trace_y +
                  big_enemy_traces[i].height) ||
            //lentre jobbra ez van jol
            (player_x <
              big_enemy_traces[i].big_enemy_trace_x +
                big_enemy_traces[i].width &&
              player_x + 50 > big_enemy_traces[i].big_enemy_trace_x &&
              player_y <
                big_enemy_traces[i].big_enemy_trace_y +
                  big_enemy_traces[i].height &&
              player_y + 50 > big_enemy_traces[i].big_enemy_trace_y)
          ) {
            create_levels(levels);
          }
        }
      }
    }







  }