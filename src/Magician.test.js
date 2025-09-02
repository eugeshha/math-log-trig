import Magician from './Magician.js';

describe('Magician', () => {
  let magician;

  beforeEach(() => {
    magician = new Magician('Gandalf');
  });

  test('should create magician with correct properties', () => {
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
    expect(magician.stoned).toBe(false);
  });

  test('should set and get stoned property', () => {
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
    
    magician.stoned = false;
    expect(magician.stoned).toBe(false);
  });

  test('should calculate attack correctly at distance 1', () => {
    magician.attack = 100;
    magician.setDistance(1);
    expect(magician.attack).toBe(100);
  });

  test('should calculate attack correctly at distance 2', () => {
    magician.attack = 100;
    magician.setDistance(2);
    expect(magician.attack).toBe(90);
  });

  test('should calculate attack correctly at distance 3', () => {
    magician.attack = 100;
    magician.setDistance(3);
    expect(magician.attack).toBe(80);
  });

  test('should calculate attack correctly at distance 4', () => {
    magician.attack = 100;
    magician.setDistance(4);
    expect(magician.attack).toBe(70);
  });

  test('should calculate attack correctly at distance 5', () => {
    magician.attack = 100;
    magician.setDistance(5);
    expect(magician.attack).toBe(60);
  });

  test('should apply stoned effect correctly at distance 2', () => {
    magician.attack = 100;
    magician.setDistance(2);
    magician.stoned = true;
    // 90 - Math.log2(2) * 5 = 90 - 1 * 5 = 85
    expect(magician.attack).toBe(85);
  });

  test('should apply stoned effect correctly at distance 3', () => {
    magician.attack = 100;
    magician.setDistance(3);
    magician.stoned = true;
    // 80 - Math.log2(3) * 5 = 80 - 1.585 * 5 = 80 - 7.925 = 72.075 ≈ 72
    expect(magician.attack).toBe(72);
  });

  test('should apply stoned effect correctly at distance 4', () => {
    magician.attack = 100;
    magician.setDistance(4);
    magician.stoned = true;
    // 70 - Math.log2(4) * 5 = 70 - 2 * 5 = 70 - 10 = 60
    expect(magician.attack).toBe(60);
  });

  test('should apply stoned effect correctly at distance 5', () => {
    magician.attack = 100;
    magician.setDistance(5);
    magician.stoned = true;
    // 60 - Math.log2(5) * 5 = 60 - 2.322 * 5 = 60 - 11.61 = 48.39 ≈ 48
    expect(magician.attack).toBe(48);
  });

  test('should not apply stoned effect at distance 1', () => {
    magician.attack = 100;
    magician.setDistance(1);
    magician.stoned = true;
    // Math.log2(1) = 0, so no reduction
    expect(magician.attack).toBe(100);
  });

  test('should return 0 if attack becomes negative', () => {
    magician.attack = 10;
    magician.setDistance(5);
    magician.stoned = true;
    // 10 * 0.6 - Math.log2(5) * 5 = 6 - 11.61 = -5.61, should be 0
    expect(magician.attack).toBe(0);
  });

  test('should handle attack without distance set', () => {
    magician.attack = 50;
    expect(magician.attack).toBe(50);
  });

  test('should handle stoned without distance set', () => {
    magician.attack = 50;
    magician.stoned = true;
    expect(magician.attack).toBe(50);
  });
});
