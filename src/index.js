import Magician from './Magician.js';
import Daemon from './Daemon.js';

// Демонстрация работы классов Magician и Daemon
console.log('Math Log/Trig Demo');

const magician = new Magician('Gandalf');
const daemon = new Daemon('Balrog');

console.log('Initial stats:');
console.log('Magician attack:', magician.attack);
console.log('Daemon attack:', daemon.attack);

// Тестируем атаку на разных расстояниях
console.log('\nTesting attack at different distances:');
for (let distance = 1; distance <= 5; distance++) {
  magician.setDistance(distance);
  daemon.setDistance(distance);
  console.log(`Distance ${distance}: Magician=${magician.attack}, Daemon=${daemon.attack}`);
}

// Тестируем дурман
console.log('\nTesting stoned effect:');
magician.stoned = true;
daemon.stoned = true;

for (let distance = 1; distance <= 5; distance++) {
  magician.setDistance(distance);
  daemon.setDistance(distance);
  console.log(`Distance ${distance} (stoned): Magician=${magician.attack}, Daemon=${daemon.attack}`);
}

// Пример из задания: базовая атака 100, атакуем 2 клетку
console.log('\nExample from task:');
const testMagician = new Magician('Test');
testMagician.attack = 100;
testMagician.setDistance(2);
console.log('Attack at distance 2 without stoned:', testMagician.attack); // 90

testMagician.stoned = true;
console.log('Attack at distance 2 with stoned:', testMagician.attack); // 85
