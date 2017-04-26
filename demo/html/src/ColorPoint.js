/**
 * The ColorPoint class, extends Point.
 *
 * @class
 *
 * @example
 * let cp = new ColorPoint(25, 8, 'green');
 * console.log(cp instanceof ColorPoint); // true
 * console.log(cp instanceof Point); // true
 */
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  /**
     * Class method, overwrites toString of Point.
     *
     * @function
     *
	 * @example
	 * let cp = new ColorPoint(25, 8, 'green');
	 * cp.toString(); // '(25, 8) in green'
     */
  toString() {
    return super.toString() + ' in ' + this.color;
  }
}
