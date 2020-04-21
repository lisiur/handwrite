function create(fn) {
  var context = {}
  context.__proto__ = fn.prototype
  context.constructor = fn
  var args = Array.prototype.slice.call(arguments, 1)
  var result = fn.apply(context, args)
  if (typeof result === 'object') {
    return result
  } else {
    return context
  }
}

module.exports = create