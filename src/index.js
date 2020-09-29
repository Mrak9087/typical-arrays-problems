
exports.min = function min (array) {
  if (array === undefined || arguments.length === 0 || !Array.isArray(array) || array.length === 0) return 0;
  let res = Math.min(...array);
  if (isNaN(res)) return 0;
  return res;
}

exports.max = function max (array) {
  if (array === undefined || arguments.length === 0 || !Array.isArray(array) || array.length === 0) return 0;
  let res = Math.max(...array);
  if (isNaN(res)) return 0;
  return res;
}

exports.avg = function avg (array) {
  if (array === undefined || arguments.length === 0 || !Array.isArray(array) || array.length === 0) return 0;
  let res = array.reduce((acc,cur) => acc + cur,0) / array.length;
  if (isNaN(res)) return 0;
  return res;
}
