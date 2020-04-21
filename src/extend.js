function extend(child, parent) {
  function F() {}
  F.prototype = parent.prototype
  child.prototype = new F()
  child.prototype.constructor = child
}