function apply(context, args) {
  context = Object(context) || window
  var result
  context.fn = this
  var newArgs = ''
  for (var i = 0; i < (args || []).length; i++) {
    newArgs.push('arguments[' + i + ']')
  }
  result = eval('context.fn(' + newArgs + ')')
  delete(context.fn)
  return result
}

module.exports = apply