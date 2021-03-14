module.exports = function reverse (n) {
  let result = n < 0 ? (n * -1).toString().split("").reverse() : n.toString().split("").reverse()
  return ( result.join(""))
}
