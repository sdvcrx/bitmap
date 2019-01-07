import test from 'ava'

const Bitmap = require('./')

test('add and test numberes in bitmap', t => {
  const bitmap = new Bitmap(10)
  bitmap
    .add(2)
    .add(5)

  t.true(bitmap.contains(2))
  t.true(bitmap.contains(5))
  t.false(bitmap.contains(6))
  t.false(bitmap.contains(9))
})
