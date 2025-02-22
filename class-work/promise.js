// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;  
//         this.color = color;
//     }
 
//     area() {
//        const area = this.radius * this.radius * Math.PI;
//         return area;
//     }
    
//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }
 
//  }
 
//  const circle = new Circle(2, "red")
//  const area = circle.area();
//  console.log(area)


//  class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }

//     area() {
//         throw new Error('The area method must be implemented in the subclass');
//     }

//     getDescription() {
//         return `A shape with color ${this.color}`;
//     }
// }

// // Creating an instance of Rectangle
// class Rectangle extends Shape {
//     constructor(width, height, color) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }


//     area1() {
//         return this.width * this.height;
//     }

//     getDescription() {
//         return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
//     }
// }

// const rect = new Rectangle(5, 10, "blue");
// console.log(rect.getDescription()); // A rectangle with width 5, height 10, and color blue
// console.log("Area:", rect.area1()); // Area: 50
// rect.paint(); // Painting with color blue



function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)


  function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function solve() {
      await setTimeoutPromisified(1000);
      console.log("hi");
      await setTimeoutPromisified(3000);
      console.log("hello");
      await setTimeoutPromisified(5000);
      console.log("hi there");
  }
  
  solve();
  