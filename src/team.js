export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(characterObject) {
    if (this.members.has(characterObject)) {
      throw new Error('Данный персонаж есть в команде');
    } else {
      this.members.add(characterObject);
      return this.members;
    }
  }

  addAll(...characters) {
    characters.forEach((characterItem) => {
      this.members.add(characterItem);
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
