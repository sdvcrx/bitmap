class Bitmap {
  constructor (length) {
    this.length = length
    this.buf = new ArrayBuffer(length / 8 + 1)
    this.view = new Uint8Array(this.buf)
  }

  setbit (val, bit = 1) {
    const index = Math.floor(val / 8)
    const pos = val % 8
    if (this.length < val) {
      throw new TypeError(`value out of range, max: ${this.length} got: ${val}`)
    }

    if (bit === 1) {
      // set bit
      this.view[index] |= 1 << pos
    } else {
      // clear bit
      this.view[index] &= ~(1 << pos)
    }
  }

  getbit (val) {
    const index = Math.floor(val / 8)
    const pos = val % 8

    return this.view[index] & (1 << pos)
  }

  add (val) {
    if (Array.isArray(val)) {
      val.forEach(v => this.setbit(v, 1))
    } else {
      this.setbit(val, 1)
    }
    return this
  }

  contains (val) {
    return this.getbit(val) !== 0
  }

  clear (val) {
    if (Array.isArray(val)) {
      val.forEach(v => this.setbit(v, 0))
    } else {
      this.setbit(val, 0)
    }
    return this
  }
}

module.exports = Bitmap
