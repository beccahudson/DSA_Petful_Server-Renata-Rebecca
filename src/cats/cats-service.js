const Queue = require('../queues/queue-constructor');

class CatsService {
  constructor() {
    this.catQueue = new Queue();


    let cats = [
      {
        age: 2,
        breed: 'Bengal',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Juice',
        story: 'Found on the streets'
      },
  
      {
        age: 3,
        breed: 'White cat',
        imageDescription: 'White cat',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Snow',
        story: 'Owner passed away'
      },
  
      {
        age: 2,
        breed: 'Bengal',
        imageDescription: 'Grey cat',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'George',
        story: 'Found on the streets'
      },
  
      {
        age: 5,
        breed: 'Bengal',
        imageDescription: 'Orange cat',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Garry',
        story: 'Struggling with student loans'
      },
      {
        age: 2,
        breed: 'Bengal',
        imageDescription: 'Grey cat',
        sex: 'Male',
        imageURL:'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Napoleon',
        story: 'Bamboozled by a pyramid scheme'
      },
  
      {
        age: 4,
        breed: 'Tabby',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Daisy',
        story: 'Found on the streets'
      },
  
      {
        age: 2,
        breed: 'Bengal',
        imageDescription: 'Brown kitty',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Sky',
        story: 'Sugar daddy dried up'
      },
  
      {
        age: 6,
        breed: 'Bengal',
        imageDescription: 'kitty',
        sex: 'Female',
        imageURL:'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Bella',
        story: 'Owner passed away'
      },
  
      {
        age: 2,
        breed: 'Tabby',
        imageDescription: 'grey cat',
        sex: 'Male',
        imageURL:'https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
        name: 'Furrnando',
        story: 'Found on the streets'
      },
  
      {
        age: 1,
        breed: 'Tabby',
        imageDescription: 'grey cat',
        sex: 'Male',
        imageURL:'https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        name: 'Spike',
        story: 'Banished for eating pizza',
      },
    ];


    cats.map((cat) => {
      this.catQueue.enqueue(cat);
    });
    // console.log('cats is h', catQueue);

  }

  deleteCat() {
    let adoptedCat = this.catQueue.dequeue();
    this.catQueue.enqueue(adoptedCat); // add cat back into queue so that cat "stock" does not run out
    return adoptedCat;
  }
  getCats() {
    return this.catQueue.display();
  }
  // postCat() {

  // },
}

module.exports = CatsService;