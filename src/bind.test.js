const bind = require('./bind')

Function.prototype.bind2 = bind

test('base option', () => {
  function addCount() {
    this.count += 1
  }
  const a = {
    count: 0,
  }
  const a2 = {
    count: 0,
  }
  addCount.bind(a)()
  addCount.bind2(a2)()
  expect(a.count).toBe(a2.count)
})

// test('modify prototype', () => {
//   function addCount() {}
//   const f = addCount.bind(null)

//   function addCount2() {}
//   const f2 = addCount2.bind2(null)

//   expect(f.prototype).toBe(undefined)
//   expect(f2.prototype).toBe(undefined)
// })

test('call with new', () => {
  const a = {}
  const a2 = {}
  function Person(sex, age) {
    this.sex = sex
    this.age = age
  }
  const Male = Person.bind(a, 'male')
  const Male2 = Person.bind2(a2, 'male')
  const male = new Male(12)
  const male2 = new Male2(12)
  expect(a.age).toBe(undefined)
  expect(a2.age).toBe(undefined)
  expect(male.age).toBe(male2.age)
})
