import lifeStatus from '../game';

// eslint-disable-next-line
test('life check healthy', () => {
  const person = {
    name: 'Маг',
    health: 90,
  };
  const status = lifeStatus(person.name, person.health);
  // eslint-disable-next-line
  expect(status).toBe('healthy');
});

// eslint-disable-next-line
test('life check wounded', () => {
  const person = {
    name: 'Маг',
    health: 45,
  };
  const status = lifeStatus(person.name, person.health);
  // eslint-disable-next-line
  expect(status).toBe('wounded');
});

// eslint-disable-next-line
test('life check critical', () => {
  const person = {
    name: 'Маг',
    health: 5,
  };
  const status = lifeStatus(person.name, person.health);
  // eslint-disable-next-line
  expect(status).toBe('critical');
});
