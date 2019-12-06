const {fillTheLampToBeTheRichestManInTheWorld} = require('../src/index.js')

function testMaxCapacity(maxCapacity, result) {
  expect(result.reduce((acc, item) => acc + item.quantity ? item.quantity : item.count * item.weight)).toBeLessThanOrEqual(maxCapacity)
}

describe('Test 1', () => {
  const result = fillTheLampToBeTheRichestManInTheWorld(100, [
    {
      name: 'gem',
      count: 12,
      weight: 3,
      price: 12
    },
    {
      name: 'gold piece',
      count: 4503,
      weight: 2,
      price: 5
    }
  ], [
    {
      name: 'gold powder',
      quantity: 8,
      ppg: 40
    },
    {
      name: 'spice',
      quantity: 50,
      ppg: 3
    }
  ])
  test('has max capacity', () => {
    testMaxCapacity(100, result)
  })
  test('has correct items and quantities', () => {
    expect(result).toContainEqual({
      name: 'gold powder',
      quantity: 8,
      ppg: 40
    })
    expect(result).toContainEqual({
      name: 'gem',
      count: 12,
      weight: 3,
      price: 12
    })
    expect(result).toContainEqual({
      name: 'spice',
      quantity: 50,
      ppg: 3
    })
    expect(result).toContainEqual({
      name: 'gold piece',
      count: 3,
      weight: 2,
      price: 5 
    })
  })
})

describe('Test 2', () => {
  const result = fillTheLampToBeTheRichestManInTheWorld(2, [
    {
      name: 'gem',
      count: 12,
      weight: 3,
      price: 12
    },
  ], [
    {
      name: 'spice',
      quantity: 50,
      ppg: 3
    }
  ])
  test('has max capacity', () => {
    testMaxCapacity(2, result)
  })
  test('has correct items and quantities', () => {
    expect(result).toContainEqual({
      name: 'spice',
      quantity: 2,
      ppg: 3
    })
  })
})

describe('Test 3', () => {
  const result = fillTheLampToBeTheRichestManInTheWorld(1000, [
    {
      name: 'gem',
      count: 12,
      weight: 3,
      price: 12
    },
    {
      name: 'gold piece',
      count: 5,
      weight: 2,
      price: 5
    }
  ], [
    {
      name: 'gold powder',
      quantity: 8,
      ppg: 40
    },
    {
      name: 'spice',
      quantity: 50,
      ppg: 3
    }
  ])
  test('has max quantity', () => {
    testMaxCapacity(1000, result)
  })
  test('has correct items and quantities', () => {
    expect(result).toContainEqual({
      name: 'gold powder',
      quantity: 8,
      ppg: 40
    })
    expect(result).toContainEqual({
      name: 'gem',
      count: 12,
      weight: 3,
      price: 12
    })
    expect(result).toContainEqual({
      name: 'spice',
      quantity: 50,
      ppg: 3
    })
    expect(result).toContainEqual({
      name: 'gold piece',
      count: 5,
      weight: 2,
      price: 5 
    })
  })
})

describe('Test 4', () => {
  const result = fillTheLampToBeTheRichestManInTheWorld(100, [
    {
      name: 'gem',
      count: 12,
      weight: 300,
      price: 12
    },
    {
      name: 'gold piece',
      count: 5,
      weight: 200,
      price: 5
    }
  ], [])
  test('has max quantity', () => {
    testMaxCapacity(100, result)
  })
  test('has correct items and quantities', () => {
    expect(result).toHaveLength(0)
  })
})

describe('Luck will not help you, this time...', () => {
  const result = fillTheLampToBeTheRichestManInTheWorld(4, [
    {
      name: 'gem',
      count: 1,
      weight: 3,
      price: 50
    },
  ], [
    {
      name: 'spice',
      quantity: 3,
      ppg: 20
    }
  ])
  test('has max quantity', () => {
    testMaxCapacity(4, result)
  })
  test('has correct items and quantities', () => {
    expect(result).toContainEqual({
      name: 'gem',
      count: 1,
      weight: 3,
      price: 50
    })
    expect(result).toContainEqual({
      name: 'spice',
      quantity: 1,
      ppg: 20
    })
  })
})