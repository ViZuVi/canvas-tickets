const ticketTypeCharge = {
  economy: 1,
  standard: 1.4,
  vip: 1.7
};

const timeCharge = {
  morning: 1, // 09:00 - 11:59
  afternoon: 1.4, // 12:00 - 16:59
  evening: 2, // 17:00 - 22:59
  night: 1.2, // 23:00 - 02:00
};

const weekendCharge = 1.5;


class Seat {
  _basePrice = 200;

  _size = {
    width: 20,
    height: 20,
  }

  _colors = {
    economy: "#0028a1e0",
    standart: "#174be8",
    vip: "#17b4e8",
  };

  constructor(type, time, isWeekEnd, x, y) {
    this.type = type;
    this.time = time;
    this.isWeekEnd = isWeekEnd;
    this.x = x;
    this.y = y;
  }

  calcPrice() {
    return this._basePrice * ticketTypeCharge[this.type] + this._basePrice * timeCharge[this.time] + this.isWeekEnd ? this._basePrice * weekendCharge : 0;
  }

  drawSeat() {
    ctx.beginPath();
    ctx.fillStyle = this._colors[this.type];
    ctx.fillRect(this.x, this.y, this._size.width, this._size.height);
    ctx.closePath();
    document.addEventListener("click", (e) => {
      const price = this.calcPrice();
      console.log(e)
    })
  }
}