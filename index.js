class Bitmap {
  constructor (length) {
    this.length = length
    this.buf = new ArrayBuffer(length / 8 + 1)
    this.view = new Uint8Array(this.buf)
  }

  add (val) {
    const index = Math.floor(val / 8)
    const pos = val % 8
    if (this.length < val) {
      throw new TypeError(`value out of range, max: ${this.length} got: ${val}`)
    }

    this.view[index] |= 1 << pos
    return this
  }

  contains (val) {
    const index = Math.floor(val / 8)
    const pos = val % 8

    return (this.view[index] & (1 << pos)) !== 0
  }

  clear (val) {
    const index = Math.floor(val / 8)
    const pos = val % 8
    this.view[index] &= ~(1 << pos)
    return this
  }
}

module.exports = Bitmap
