// Classes demo
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

import rp from 'request-promise';

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    //...
  }


  update(camera) {
    //...
    super.update();
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}

export default Polygon;
