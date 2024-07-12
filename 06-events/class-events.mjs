import EventEmitter from 'events';
//84
class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on('likePost', (userName) => {
            console.log(userName + ' like post');
        });
        this.on('error', (error) => {
            console.error(error);
        });
    }

    like(userName) {
        if (!userName) {
           return this.emit('error', new Error('No username in like'));
        }
        this.likesQty += 1;
        this.emit('likePost', userName);
    }
}

const myPost = new Post('Gennady', 'New post');

// console.log(myPost.author);
// console.log(myPost.text);
myPost.like('Alice');
setTimeout(() => myPost.like(), 2000);
setTimeout(() => myPost.like('Samanta'), 3000);
// console.log(myPost.likesQty);
