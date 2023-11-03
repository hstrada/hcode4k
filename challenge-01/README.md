# Descrição

No exemplo de input você pode observar que os itens contém as seções e elas se repetem entre os módulos. A seção 01, por exemplo, contém dois itens: #01 e #02.

## Input

```js
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
```

O exercício consiste em agrupar os itens por seção.

## Output

```js
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
```
