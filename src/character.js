const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    if (typeList.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип персонажа не соответствует списку');
    }
    this.health = undefined;
    this.level = undefined;
    this.attack = undefined;
    this.defence = undefined;
  }
}
