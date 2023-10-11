const handle = require('../');

const sample = [
  {
    id: 1,
    name: 'Example #01',
    section: {
      id: 10,
      title: 'Section 01'
    }
  },
  {
    id: 2,
    name: 'Example #02',
    section: {
      id: 10,
      title: 'Section 01'
    }
  },
  {
    id: 3,
    name: 'Example #03',
    section: {
      id: 20,
      title: 'Section 02'
    }
  }
];

const expectedResult = [
  {
    id: 10,
    title: 'Section 01',
    items: [
      {
        id: 1,
        name: 'Example #01'
      },
      {
        id: 2,
        name: 'Example #02'
      }
    ]
  },
  {
    id: 20,
    title: 'Section 02',
    items: [
      {
        id: 3,
        name: 'Example #03'
      }
    ]
  }
];

test('#handle', () => {
  expect(handle(sample)).toBe(expectedResult);
});
