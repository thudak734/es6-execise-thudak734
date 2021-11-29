class Room {
    constructor(name, length, width) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = 15;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20);

console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log(room1);
console.log(room2);

Room.capacity = 15

console.log(Room)

room2.capacity = 18

console.log(room2)
console.log(room1.capacity)
console.log(room2.capacity)