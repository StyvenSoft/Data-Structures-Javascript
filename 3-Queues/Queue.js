const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    enqueue(data) {
        this.queue.addToTail(data);
        this.size++;
        console.log(`Added ${data}! Queue size is now ${this.size}.`);
    }
    dequeue() {
        if (!this.isEmpty()) {
          const data = this.queue.removeHead();
          this.size--;
          console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
          return data;
        } else {
          throw new Error("Queue is empty!");
        }
      }
}

module.exports = Queue;

const restaurantOrder = new Queue();
restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');
console.log('\nFood preparing...\n')
restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();
console.log('All orders ready!')

const boundedQueue = new Queue(3);
boundedQueue.enqueue(1);
boundedQueue.enqueue(2);
boundedQueue.enqueue(3);
