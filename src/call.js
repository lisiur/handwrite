function call(context) {
  context = Object(context) || window
  var result
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  context.fn = this
  result = eval('context.fn(' + args + ')')
  delete(context.fn)
  return result
}

module.exports = call