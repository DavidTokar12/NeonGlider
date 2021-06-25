const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 1600;
canvas.height = 900;
let levels = 1;
let speed = 2;
let score = 0;
let menu = true;
let enemies = [];
let needed_score = 100;
let big_enemies = [];
let big_enemy_traces = [];
let player_x = 0;
let player_y = 0;
let frames = 0;
let player_trace_rectangles = [];
let player_up = false;
let player_down = false;
let player_left = false;
let player_right = false;
let pressed = 0;
let game_started = false;
let Main_player = undefined;
let big_enemy1 = undefined;
let big_enemy2 = undefined;
let Foods = [];
//functions

ctx.globalCompositeOperation = "lighter"




var Hamertime=new Hammer(canvas)
Hamertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL })



Hamertime.on('swipeup',function(){
  if(!player_down && !player_up){
  player_up = true;
  player_down = false;
  player_right = false;
  player_left = false;
  player_trace_rectangles.unshift(
    new Trace(player_x, player_y + 50, 50, 0)
  );
  speed = 2;
  if(game_started){
  pressed = 15;}
  game_started=true}})


Hamertime.on('swipedown',function(){ 
  if(!player_up && !player_down){
  player_up = false;
  player_down = true;
  player_right = false;
  player_left = false;
  player_trace_rectangles.unshift(new Trace(player_x, player_y, 50, 0));
  speed = 2;
  if(game_started){
    pressed = 15;}
  game_started = true;}})


Hamertime.on('swipeleft',function(){
  if( !player_right && !player_left){
  player_up = false;
  player_down = false;
  player_right = false;
  player_left = true;
  player_trace_rectangles.unshift(
    new Trace(player_x + 50, player_y, 0, 50)
  );
  speed = 2;
  if(game_started){
    pressed = 15;}
  game_started = true;}})


Hamertime.on('swiperight',function(){
  if(!player_left && !player_right){
  player_up = false;
  player_down = false;
  player_right = true;
  player_left = false;
  player_trace_rectangles.unshift(new Trace(player_x, player_y, 0, 50));
  speed = 2;
  if(game_started){
    pressed = 15;}
  game_started = true;}})





//controls
window.addEventListener("keydown", function (e) {
  e.preventDefault()
  if (pressed === 0) {
    if (!menu) {
      if (e.code == "ArrowUp" && !player_down && !player_up) {
        
        player_up = true;
        player_down = false;
        player_right = false;
        player_left = false;
        player_trace_rectangles.unshift(
          new Trace(player_x, player_y + 50, 50, 0)
        );
        speed = 2;
        if(game_started){
        pressed = 15;}
        game_started=true
      } else if (e.code == "ArrowDown" && !player_up && !player_down) {
        player_up = false;
        player_down = true;
        player_right = false;
        player_left = false;
        player_trace_rectangles.unshift(new Trace(player_x, player_y, 50, 0));
        speed = 2;
        if(game_started){
          pressed = 15;}
        game_started = true;
      } else if (e.code == "ArrowLeft" && !player_right && !player_left) {
        player_up = false;
        player_down = false;
        player_right = false;
        player_left = true;
        player_trace_rectangles.unshift(
          new Trace(player_x + 50, player_y, 0, 50)
        );
        speed = 2;
        if(game_started){
          pressed = 15;}
        game_started = true;
      } else if (e.code == "ArrowRight" && !player_left && !player_right) {
        player_up = false;
        player_down = false;
        player_right = true;
        player_left = false;
        player_trace_rectangles.unshift(new Trace(player_x, player_y, 0, 50));
        speed = 2;
        if(game_started){
          pressed = 15;}
        game_started = true;
      }
    }
  }
});

function palyer_update_trace() {
  if (player_trace_rectangles.length) {
    if (player_up) {
      player_trace_rectangles[0].height -= speed;
    }
    if (player_down) {
      player_trace_rectangles[0].height += speed;
    }
    if (player_left) {
      player_trace_rectangles[0].width -= speed;
    }
    if (player_right) {
      player_trace_rectangles[0].width += speed;
    }
    for (let i = 0; i < player_trace_rectangles.length; i++) {
      player_trace_rectangles[i].draw_trace();
    }
  }
}

function draw_out_foods() {
  if (Foods.length)
    for (let i = 0; i < Foods.length; i++) {
      Foods[i].draw_food();
    }
}

function create_levels(level) {
  if (level === 1) {
    //boiler
    frames = 0;
    pressed = 0;
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    speed = 2;
    score = 0;
    game_started = false;
    //custom
    needed_score = 2;
    Foods.push(new Food(canvas.width * 0.75, canvas.height / 2));
    Foods.push(new Food(canvas.width * 0.25, canvas.height / 2));
    player_x = 1600 / 2;
    player_y = 900 / 2;
  } else if (level === 2) {
    
    //boiler
    frames = 0;
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    speed = 2;
    score = 0;
    pressed = 0;
    game_started = false;
    //custom
    needed_score = 2;
    player_x = 1600 / 2;
    player_y = 900 / 2;
    Foods.push(new Food(canvas.width * 0.75, canvas.height / 2));
    Foods.push(new Food(canvas.width * 0.25, canvas.height / 2));
  } else if (level === 3) {
    //boiler
    frames = 0;
    enemies = [];
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    speed = 2;
    score = 0;
    pressed = 0;
    game_started = false;
    //custom
    needed_score = 4;
    player_x = 1600 / 2;
    player_y = 900 / 2;
    enemies.push(new Enemy(canvas.width * 0.75, canvas.height / 2, 3.5));
    Foods.push(new Food(canvas.width * 0.25, canvas.height * 0.25));
    Foods.push(new Food(canvas.width * 0.25, canvas.height * 0.75));
    Foods.push(new Food(canvas.width * 0.75, canvas.height * 0.25));
    Foods.push(new Food(canvas.width * 0.75, canvas.height * 0.75));
  } else if (level === 4) {
    //boiler
    frames = 0;
    enemies = [];
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    speed = 2;
    score = 0;
    pressed = 0;
    game_started = false;

    //custom

    needed_score = 4;

    player_x = 1600 / 2;
    player_y = 900 / 2;

    enemies.push(new Enemy(canvas.width - 50 - 25, canvas.height - 50 - 25, 3));
    enemies.push(new Enemy(50, 50, 3));

    Foods.push(new Food(canvas.width * 0.2, canvas.height * 0.5));
    Foods.push(new Food(canvas.width * 0.4, canvas.height * 0.5));
    Foods.push(new Food(canvas.width * 0.6, canvas.height * 0.5));
    Foods.push(new Food(canvas.width * 0.8, canvas.height * 0.5));
  } else if (levels === 5) {
    //boiler
    frames = 0;
    enemies = [];
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    big_enemy_traces = [];
    speed = 2;
    score = 0;
    pressed = 0;
    big_enemies = [];
    game_started = false;
    //costum
    needed_score = 3;

    player_x = 1600 / 2;
    player_y = 900 / 2;

    Foods.push(new Food(canvas.width * 0.5, canvas.height * 0.9));
    Foods.push(new Food(canvas.width * 0.5, canvas.height * 0.1));

    big_enemy1 = new Big_enemy(canvas.width * 0.3, canvas.height * 0.8, 50, 50);
    big_enemies.push(big_enemy1);
  } else if (levels === 6) {
    //boiler
    frames = 0;
    enemies = [];
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    big_enemy_traces = [];
    speed = 2;
    score = 0;
    pressed = 0;
    big_enemies = [];
    game_started = false;
    //custom
    needed_score = 4;
    player_x = 1600 / 2;
    player_y = 900 / 2;
    big_enemy1 = new Big_enemy(
      canvas.width * 0.1,
      canvas.height * 0.95,
      50,
      50
    );
    big_enemies.push(big_enemy1);
    Foods.push(new Food(canvas.width * 0.1, canvas.height * 0.9));
    Foods.push(new Food(canvas.width * 0.9 - 50, canvas.height * 0.1));
    Foods.push(new Food(canvas.width * 0.1, canvas.height * 0.1));
    Foods.push(new Food(canvas.width * 0.9 - 50, canvas.height * 0.9));
  } else if (levels === 7) {
    //boiler
    frames = 0;
    enemies = [];
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    big_enemy_traces = [];
    speed = 2;
    score = 0;
    pressed = 0;
    big_enemies = [];
    game_started = false;
    //custom
    needed_score = 5;
    player_x = 1600 / 2;
    player_y = 900 / 2;
    big_enemy1 = new Big_enemy(
      canvas.width * 0.1,
      canvas.height * 0.95,
      50,
      50
    );
    big_enemies.push(big_enemy1);
    enemies.push(new Enemy(canvas.width - 50 - 25, canvas.height - 50 - 25, 4));
    enemies.push(new Enemy(50, 50, 4));
    Foods.push(new Food(canvas.width * 0.1, canvas.height * 0.9));
    Foods.push(new Food(canvas.width * 0.9 - 50, canvas.height * 0.1));
    Foods.push(new Food(canvas.width * 0.1, canvas.height * 0.1));
    Foods.push(new Food(canvas.width * 0.9 - 50, canvas.height * 0.9));
  } else if (levels === 8) {
    //boiler
    frames = 0;
    enemies = [];
    Foods = [];
    Main_player = new Player();
    player_trace_rectangles = [];
    player_up = false;
    player_down = false;
    player_left = false;
    player_right = false;
    big_enemy_traces = [];
    speed = 2;
    score = 0;
    pressed = 0;
    big_enemies = [];
    game_started = false;
    //custom
    needed_score = 5;
    player_x = 1600 / 2;
    player_y = 900 / 2;
    big_enemy1 = new Big_enemy(
      canvas.width * 0.35,
      canvas.height * 0.7 + 50,
      50,
      50
    );
    big_enemies.push(big_enemy1);
    enemies.push(new Enemy(canvas.width / 2, 50,4.5));
    Foods.push(new Food(canvas.width * 0.1, canvas.height * 0.5));
    Foods.push(new Food(canvas.width * 0.2, canvas.height * 0.5));
    Foods.push(new Food(canvas.width * 0.8, canvas.height * 0.5));
    Foods.push(new Food(canvas.width * 0.9, canvas.height * 0.5));
  }
  else if (levels===9){
    //
   //boiler
   frames = 0;
   pressed = 0;
   Foods = [];
   Main_player = new Player();
   player_trace_rectangles = [];
   player_up = false;
   player_down = false;
   player_left = false;
   player_right = false;
   speed = 2;
   score = 0;
   game_started = false;
   //custom
   needed_score = 2;
   Foods.push(new Food(canvas.width * 0.75, canvas.height / 2));
   Foods.push(new Food(canvas.width * 0.25, canvas.height / 2));
   player_x = 1600 / 2;
   player_y = 900 / 2;
    //
    menu_object = document.getElementById("menu");
    menu_object.style.visibility = "visible";
    document.getElementById('cimtext').innerHTML="CONGRATULATIONS! YOU WON!"
  }
}

function update_speed() {
  if (frames % 30 === 0) {
    speed += 1.5;
  }
}

function update_pressed() {
  if (pressed > 0) {
    pressed--;
  }
}

function update_score() {
  ctx.font = "30px Arial";
  ctx.shadowColor = "rgb(252,116,253)";
  ctx.shadowBlur = 15;
  ctx.strokeStyle= "rgb(252,116,253)";
  ctx.lineWidth=7.5;
  ctx.fillStyle='rgb(252,116,253)'
  ctx.shadowBlur=10
  ctx.lineWidth=6;
  ctx.fillText(`YOUR SCORE: ${score} /  ${needed_score}`, 30, 50);
}



function update_level_text(){
  ctx.font = "30px Arial";
  ctx.shadowColor = "rgb(252,116,253)";
  ctx.shadowBlur = 15;
  ctx.strokeStyle= "rgb(252,116,253)";
  ctx.lineWidth=7.5;
  ctx.fillStyle='rgb(252,116,253)'
  ctx.shadowBlur=10
  ctx.lineWidth=6;
  ctx.fillText(`LEVEL: ${levels}`, canvas.width-180,50);
}

function move_all_foods_verticaly() {
  if (Foods.length) {
    for (let i = 0; i < Foods.length; i++) {
      Foods[i].move_food_horizontaly();
    }
  }
}

function check_win() {
  if (score === needed_score) {
    levels++;
    create_levels(levels);
  }
}
function move_enemies() {
  if (enemies.length) {
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].get_location_to_move_to();
    }
  }
}
function draw_enemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw_enemy();
  }
}
function draw_out_big_enemies() {
  for (let i = 0; i < big_enemies.length; i++) {
    big_enemies[i].draw_big_enemy();
  }
}
function move_big_enemies_up_down() {
  for (let i = 0; i < big_enemies.length; i++) {
    big_enemies[i].move_big_enemy();
    big_enemies[i].big_enemy_up_and_down();
  }
}
function draw_out_big_enemy_trace() {
  for (let i = 0; i < big_enemy_traces.length; i++) {
    big_enemy_traces[i].draw_out_BigEnemyTrace();
  }
}
function hide_menu() {
  if (levels===9){
    levels=1
    document.getElementById('cimtext').innerHTML="NEON GLIDER!"
    create_levels()

  }
  else{
  menu_object = document.getElementById("menu");
  menu_object.style.visibility = "hidden";
  menu = false;
}
}
function show_menu() {
  menu_object = document.getElementById("menu");
  menu_object.style.visibility = "visible";
  menu = true;
}

create_levels(levels);

/////maiiiin

function animate() {
  if (levels === 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (game_started) {
      check_win();
      update_pressed();
      Main_player.colision_with_food();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      update_speed();

      Main_player.move_player();
      palyer_update_trace();

      frames++;
    }
    update_level_text()
    update_score();

    Main_player.draw_player();

    draw_out_foods();
  }
  if (levels === 2) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      Main_player.move_player();
      palyer_update_trace();
      update_speed();
      update_pressed();

      frames++;
    }
    update_level_text()
    update_score();
    Main_player.draw_player();
    move_all_foods_verticaly();
    draw_out_foods();
  }
  if (levels === 3) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      Main_player.colision_with_enemy();
      Main_player.move_player();
      palyer_update_trace();
      move_enemies();
      update_speed();
      update_pressed();

      frames++;
    }
    update_level_text()
    update_score();
    draw_enemies();
    Main_player.draw_player();

    draw_out_foods();
  }
  if (levels === 4) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      update_speed();
      update_pressed();

      frames++;
      palyer_update_trace();
      move_enemies();
      Main_player.move_player();
      Main_player.colision_with_enemy();
    }
    update_level_text()
    update_score();
    draw_out_foods();
    move_all_foods_verticaly();
    Main_player.draw_player();
    draw_enemies();
  }
  if (levels === 5) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_big_enemy();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      update_speed();
      update_pressed();
      big_enemy1.colision_with_player_trace();
      
      frames++;
      palyer_update_trace();
      Main_player.move_player();
    }
    update_level_text()
    update_score();
    draw_out_foods();
    Main_player.draw_player();

    for (let speed = 0; speed < 8; speed++) {
      draw_out_big_enemies();
      move_big_enemies_up_down();
      draw_out_big_enemy_trace();
      big_enemy1.update_big_enemy_trace();
      big_enemy1.decrsese_big_enemy_trace();
    }

    if (score === 2 && Foods.length === 0) {
      Foods.push(new Food(canvas.width * 0.5, canvas.height * 0.5));
      player_trace_rectangles.splice(player_trace_rectangles.length - 1, 1);
    }
  }
  if (levels === 6) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_big_enemy();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      update_speed();
      update_pressed();
      big_enemy1.colision_with_player_trace();
      
      frames++;
      palyer_update_trace();
      Main_player.move_player();
    }
    update_level_text()
    update_score();
    draw_out_foods();
    Main_player.draw_player();

    for (let speed = 0; speed < 10; speed++) {
      draw_out_big_enemies();
      move_big_enemies_up_down();
      draw_out_big_enemy_trace();
      big_enemy1.update_big_enemy_trace();
      big_enemy1.decrsese_big_enemy_trace();
    }
  }
  if (levels === 7) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_big_enemy();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      update_speed();
      update_pressed();
      big_enemy1.colision_with_player_trace();
      
      frames++;
      palyer_update_trace();
      Main_player.move_player();
      move_enemies();
      Main_player.colision_with_enemy();
    }
    update_level_text()
    update_score();
    draw_out_foods();
    Main_player.draw_player();
    draw_enemies();
    for (let speed = 0; speed < 9; speed++) {
      draw_out_big_enemies();
      move_big_enemies_up_down();
      draw_out_big_enemy_trace();
      big_enemy1.update_big_enemy_trace();
      big_enemy1.decrsese_big_enemy_trace();
    }
    if (score === 4 && Foods.length === 0) {
      Foods.push(new Food(canvas.width * 0.5, canvas.height * 0.5));
      player_trace_rectangles.splice(player_trace_rectangles.length - 1, 1);
    }
  }
  if (levels === 8) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (game_started) {
      check_win();
      Main_player.colision_with_food();
      Main_player.colision_with_big_enemy();
      Main_player.colision_with_walls();
      Main_player.colision_with_trace();
      update_speed();
      update_pressed();
      big_enemy1.colision_with_player_trace();
      
      frames++;
      palyer_update_trace();
      Main_player.move_player();
      move_enemies();
      Main_player.colision_with_enemy();
    }
    update_level_text()
    update_score();
    draw_out_foods();
    Main_player.draw_player();
    draw_enemies();
    for (let speed = 0; speed < 9; speed++) {
      draw_out_big_enemies();
      move_big_enemies_up_down();
      draw_out_big_enemy_trace();
      big_enemy1.update_big_enemy_trace();
      big_enemy1.decrsese_big_enemy_trace();
    }
  
    enemies[0].speed = 3.5 + speed / 8;
    if (score != 4) {
      move_all_foods_verticaly();
    }

    if (score === 4 && Foods.length === 0) {
      Foods.push(new Food(canvas.width * 0.5, canvas.height * 0.5));
      player_trace_rectangles.splice(player_trace_rectangles.length - 1, 1);
    }
  }
  if(levels===9){
    levels=1
  }
  requestAnimationFrame(animate);
}

animate();
