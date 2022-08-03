import Team from '../team';
import Character from '../character';

const ch1 = new Character('andy', 'Swordsman');
const ch2 = new Character('seva', 'Daemon');
const team1 = new Team();

test('class Team function add correct', () => {
  team1.add(ch1);
  team1.add(ch2);
  expect(team1.members).toContainEqual(ch1);
  expect(team1.members).toContainEqual(ch2);
});

test('class Team function add not correct', () => {
  expect(() => {
    team1.add(ch1);
    team1.add(ch1);
  }).toThrow(Error);
});

test('class Team function addAll', () => {
  team1.addAll(ch1, ch2);
  expect(team1.members).toContainEqual(ch1);
  expect(team1.members).toContainEqual(ch2);
});

test('class Team function toArray', () => {
  team1.addAll(ch1, ch2);

  const correct = [
    {
      name: 'andy',
      type: 'Swordsman',
      health: undefined,
      level: undefined,
      attack: undefined,
      defence: undefined,
    },
    {
      name: 'seva',
      type: 'Daemon',
      health: undefined,
      level: undefined,
      attack: undefined,
      defence: undefined,
    },
  ];
  expect(team1.toArray()).toEqual(correct);
});
