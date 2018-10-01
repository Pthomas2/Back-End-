/** Class representing a car. */
class Car {
  /**
   * Create a car.
   * @param {string} carColor - The color of the Car.
   */
  constructor(carColor) {
    this.totalMiles_ = 0;
    this.color_ = carColor;
  }

  /**
   * Drives the car for the given number of miles.
   * @param {number} carColor - The color of the Car.
   */
  drive(miles) {
    console.log("The", this.color_, "car goes VROOOOOOOMMMMMM....");
    this.totalMiles_ = this.totalMiles_ + miles;
  }

  /**      
   * @type {number}
   */   
  get miles() {
   return this.totalMiles_;
  }

  /**
   * Produces string representation of Car
   * @return {string} string representation of Car
   */
  toString() {
    return this.color_ + "Car that drove" + this.totalMiles_;
  }
}