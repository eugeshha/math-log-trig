import Character from './Character.js';

describe('Character', () => {
  test('should create character with correct properties', () => {
    const character = new Character('Test', 'TestType');
    expect(character.name).toBe('Test');
    expect(character.type).toBe('TestType');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });
});
