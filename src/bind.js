function bind(context, ...initArgs) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  const fn = this
  const fNOP = function() {}
  const fBound = function(...args) {
    if (this instanceof fNOP) {
      // call with new
      context = this
    }
    return fn.apply(context, initArgs.concat(args))
  }

  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

module.exports = bind