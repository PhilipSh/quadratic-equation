module.exports = function solveEquation(equation) {
  // your implementation
  var a, b, c, D, x1, x2;
  var arr = equation.split(' * ').join('').split('x^2').join('').split('x').join('').split(' ');
  a = +arr[0];
  if (arr[1] == "+") {
    b = arr[2];
  }
  else {
    b = -arr[2];
  }
  if (arr[3] == "+") {
    c = arr[4];
  }
  else {
    c = -arr[4];
  }
  D = Math.pow(b, 2) - 4 * a * c;
  x1 = (-b - Math.sqrt(D)) / (2 * a);
  x2 = (-b + Math.sqrt(D)) / (2 * a);
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  var answer = [];
  if (x1 < x2) {
    answer.push(x1);
    answer.push(x2);
  }
  else {
    answer.push(x2);
    answer.push(x1);
  }
  return answer;  //только со знаком правильно возврщается

}

