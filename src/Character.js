export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._attack = 0;
    this.defence = 0;
    this._distance = undefined;
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attackPower = this._attack;
    
    if (this._distance) {
      attackPower = this._attack * (1 - (this._distance - 1) * 0.1);
    }
    
    if (this._stoned && this._distance) {
      attackPower -= Math.log2(this._distance) * 5;
    }
    
    return Math.max(0, Math.round(attackPower));
  }

  set attack(value) {
    this._attack = value;
  }

  setDistance(distance) {
    this._distance = distance;
  }
}
