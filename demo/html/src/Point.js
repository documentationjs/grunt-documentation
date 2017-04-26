/**
 * A Point class, declared using the declaration-form.
 *
 * @class
 *
 * @example
 * let p = new ColorPoint(25, 8, 'green');
 * console.log(p instanceof Point); // true
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
     * A class method.
     *
     * @function
     *
     * @example
     * let p = new ColorPoint(25, 8);
     * p.toString(); // '(25, 8)'
     */
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
