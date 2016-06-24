# ColorPoint

**Extends Point**

The ColorPoint class, extends Point.

**Examples**

```javascript
let cp = new ColorPoint(25, 8, 'green');
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true
```

## toString

Class method, overwrites toString of Point.

**Examples**

```javascript
let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'
```

# Point

A Point class, declared using the declaration-form.

**Examples**

```javascript
let p = new ColorPoint(25, 8, 'green');
console.log(p instanceof Point); // true
```

## toString

A class method.

**Examples**

```javascript
let p = new ColorPoint(25, 8);
p.toString(); // '(25, 8)'
```
