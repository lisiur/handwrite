const create = require('./new')

test('base', () => {
  function A(name) {
    this.name = name
  }
  const a = create(A, 'a')
  expect(a.name).toBe('a')
  expect(a instanceof A).toBe(true)
})

test('return other obj', () => {
  function A(name) {
    return {
      name
    }
  }
  const a = create(A, 'a')
  expect(a.name).toBe('a')
  expect(a instanceof A).toBe(false)
})

test('return not object', () => {
  function A(name) {
    return name
  }
  const a = create(A, 'a')
  expect(a instanceof A).toBe(true)
})