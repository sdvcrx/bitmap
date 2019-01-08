import test from 'ava'

const Bitmap = require('./')

test('add and test numberes in bitmap', t => {
  const bitmap = new Bitmap(10)
  bitmap
    .add(2)
    .add(5)

  bitmap.setbit(3)

  t.true(bitmap.contains(2))
  t.true(bitmap.contains(5))
  t.false(bitmap.contains(6))
  t.false(bitmap.contains(9))
})

test('clear numberes from bitmap', t => {
  const bitmap = new Bitmap(10)
  bitmap
    .add(2)
    .add(5)

  t.true(bitmap.contains(2))
  t.true(bitmap.contains(5))

  bitmap.clear(2)
  t.false(bitmap.contains(2))
})

test('throw exception when val is greater than length', t => {
  const bitmap = new Bitmap(10)
  t.throws(function () {
    bitmap.add(11)
  }, TypeError)
})

test('add/clear array of values in bitmap', t => {
  const bitmap = new Bitmap(10)
  bitmap.add([2, 3, 5])

  t.true(bitmap.contains(2))
  t.true(bitmap.contains(3))
  t.true(bitmap.contains(5))

  bitmap.clear([2, 5])
  t.false(bitmap.contains(2))
  t.false(bitmap.contains(5))
})
