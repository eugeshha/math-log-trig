import Daemon from './Daemon.js';

describe('Daemon', () => {
  let daemon;

  beforeEach(() => {
    daemon = new Daemon('Balrog');
  });

  test('should create daemon with correct properties', () => {
    expect(daemon.name).toBe('Balrog');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
    expect(daemon.stoned).toBe(false);
  });

  test('should set and get stoned property', () => {
    daemon.stoned = true;
    expect(daemon.stoned).toBe(true);
    
    daemon.stoned = false;
    expect(daemon.stoned).toBe(false);
  });

  test('should calculate attack correctly at distance 1', () => {
    daemon.attack = 100;
    daemon.setDistance(1);
    expect(daemon.attack).toBe(100);
  });

  test('should calculate attack correctly at distance 2', () => {
    daemon.attack = 100;
    daemon.setDistance(2);
    expect(daemon.attack).toBe(90);
  });

  test('should calculate attack correctly at distance 3', () => {
    daemon.attack = 100;
    daemon.setDistance(3);
    expect(daemon.attack).toBe(80);
  });

  test('should calculate attack correctly at distance 4', () => {
    daemon.attack = 100;
    daemon.setDistance(4);
    expect(daemon.attack).toBe(70);
  });

  test('should calculate attack correctly at distance 5', () => {
    daemon.attack = 100;
    daemon.setDistance(5);
    expect(daemon.attack).toBe(60);
  });

  test('should apply stoned effect correctly at distance 2', () => {
    daemon.attack = 100;
    daemon.setDistance(2);
    daemon.stoned = true;
    // 90 - Math.log2(2) * 5 = 90 - 1 * 5 = 85
    expect(daemon.attack).toBe(85);
  });

  test('should apply stoned effect correctly at distance 3', () => {
    daemon.attack = 100;
    daemon.setDistance(3);
    daemon.stoned = true;
    // 80 - Math.log2(3) * 5 = 80 - 1.585 * 5 = 80 - 7.925 = 72.075 ≈ 72
    expect(daemon.attack).toBe(72);
  });

  test('should apply stoned effect correctly at distance 4', () => {
    daemon.attack = 100;
    daemon.setDistance(4);
    daemon.stoned = true;
    // 70 - Math.log2(4) * 5 = 70 - 2 * 5 = 70 - 10 = 60
    expect(daemon.attack).toBe(60);
  });

  test('should apply stoned effect correctly at distance 5', () => {
    daemon.attack = 100;
    daemon.setDistance(5);
    daemon.stoned = true;
    // 60 - Math.log2(5) * 5 = 60 - 2.322 * 5 = 60 - 11.61 = 48.39 ≈ 48
    expect(daemon.attack).toBe(48);
  });

  test('should not apply stoned effect at distance 1', () => {
    daemon.attack = 100;
    daemon.setDistance(1);
    daemon.stoned = true;
    // Math.log2(1) = 0, so no reduction
    expect(daemon.attack).toBe(100);
  });

  test('should return 0 if attack becomes negative', () => {
    daemon.attack = 10;
    daemon.setDistance(5);
    daemon.stoned = true;
    // 10 * 0.6 - Math.log2(5) * 5 = 6 - 11.61 = -5.61, should be 0
    expect(daemon.attack).toBe(0);
  });

  test('should handle attack without distance set', () => {
    daemon.attack = 50;
    expect(daemon.attack).toBe(50);
  });

  test('should handle stoned without distance set', () => {
    daemon.attack = 50;
    daemon.stoned = true;
    expect(daemon.attack).toBe(50);
  });
});
