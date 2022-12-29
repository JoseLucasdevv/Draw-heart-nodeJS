const robot = require("robotjs");

function drawHeart(x, y, size, resolution = 50) {
  let down = false,
    sx,
    sy;

  const max = Math.PI * 2,
    add = Math.PI / resolution;

  for (let a = 0; a < max; a += add) {
    const cx = x + size * 16 * Math.pow(Math.sin(a), 3);
    const cy =
      y +
      -size *
        (13 * Math.cos(a) -
          5 * Math.cos(2 * a) -
          2 * Math.cos(3 * a) -
          Math.cos(4 * a));

    if (!sx && !sy) {
      sx = cx;
      sy = cy;
    }

    robot.moveMouse(cx, cy);

    if (!down) {
      down = true;
      robot.mouseToggle("down");
    }
  }

  robot.moveMouse(sx, sy);

  robot.mouseToggle("up");
}

setTimeout(() => drawHeart(800, 500, 10), 2000);
