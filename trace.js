
class Trace {
    constructor(x, y, w, h) {
      this.pos_x = x;
      this.pos_y = y;
      this.width = w;
      this.height = h;
    }
    draw_trace() {
      ctx.shadowColor = "rgb(85,255,255)";
      ctx.shadowBlur = 15;
      ctx.strokeStyle= "rgb(85,255,255)";
      ctx.lineWidth=7.5;
      ctx.fillStyle='rgba(85,255,255,.4)'
      ctx.shadowBlur=10
      ctx.lineWidth=6;
      ctx.fillRect(this.pos_x, this.pos_y, this.width, this.height);
    }
  }
  