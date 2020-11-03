array-unflat
============

The opposite of Array.prototype.flat() with depth = 1.

Useful to convert one-dimensional arrays `[x, y, z, x, y, z]` into two-dimensional arrays `[[x, y, z], [x, y, z]]` i.e. for [simplicial complex](https://github.com/mikolalysenko/simplicial-complex).

## Install
```
npm install array-unflat
```

## Example
```js
const unflat = require('array-unflat');

const arr = [0.2, 0.3, 0.5, -1.8, 2.9, 1.1];
console.log(unflat(arr));
console.log(unflat(arr, 3));
```
Output:

```js
[ [0.2, 0.3], [0.5, -1.8], [2.9, 1.1] ]
[ [0.2, 0.3, 0.5], [-1.8, 2.9, 1.1] ]
```

## Usage

#### `unflat(arr, size)`

- `arr` the flattened array

- `size` (default `2`) length of the grouped subarrays

**Returns** a two-dimensional array.


## License

MIT, see [LICENSE](LICENSE) for details.
