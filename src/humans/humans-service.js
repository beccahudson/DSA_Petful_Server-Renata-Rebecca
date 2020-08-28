const Queue = require('../queues/queue-constructor');


class HumansService {
  constructor() {
    this.humanQueue = new Queue();

    let humans = [
      {
        name: 'Sarah',
        ip: null
      },
      {
        name: 'Liz',
        ip: null
      },
      {
        name: 'Jennifer',
        ip: null
      },
      {
        name: 'Shannon',
        ip: null
      },
      {
        name: 'Shay',
        ip: null
      },
      {
        name: 'Ashley',
        ip: null
      },
    ];


    humans.map((human) => {
      this.humanQueue.enqueue(human);
    });
  }

  getHumans() {
    return this.humanQueue.display();
  }

  postHuman(newHuman) {
    this.humanQueue.enqueue(newHuman);
    return this.humanQueue.display().map(human => {
      return human.name;
    });
  }

  deleteHuman() {
    let currentAdopter = this.humanQueue.dequeue();
    if (currentAdopter.ip === null) {
      // adding dummy users back into the queue to continue to have a line of people
      this.humanQueue.enqueue(currentAdopter);
    }
    return currentAdopter;
  }

  getQueue() {
    return this.humanQueue.display();
  }
}

module.exports = HumansService;