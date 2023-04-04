var limite_tope, limite_pie, limite_der, limite_izq, sumo_x, sumo_y, x, y;

limite_tope = 0;
limite_pie = 25;
limite_der = 25;
limite_izq = 0;
sumo_x = 1;
sumo_y = -1;
x = 12;
y = 25;
while (true) {
  x = x + sumo_x;
  y = y + sumo_y;
  if (x <= limite_izq) {
    sumo_x = 1;
  }
  if (x >= limite_der) {
    sumo_x = -1;
  }
  if (y <= limite_tope) {
    sumo_y = 1;
  }
  if (y >= limite_pie) {
    sumo_y = -1;
  }
  window.alert(['La bola está en pos (x): ',x,' La bola está en pos (y): ',y].join(''));
}
