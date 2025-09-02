import Character from './Character.js';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
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
    
    // Линейное падение атаки в зависимости от расстояния
    if (this._distance) {
      attackPower = this._attack * (1 - (this._distance - 1) * 0.1);
    }
    
    // Применяем дурман если он активен
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
