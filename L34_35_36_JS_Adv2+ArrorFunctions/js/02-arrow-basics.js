const user = {
  name: 'John',
  age: 35,
  showName: function(){
    console.log(this.name);
  }
}
user.showName();

const user1 = {
  name: 'Jane',
  age: 25,
  showName(){
    console.log(this.name);
  }
}

user1.showName(); //Jane

const user2 = {
  name: 'Bob',
  age: 40,
  showName: showName
}
user2.showName(); //Bob

user3.showName(); //Bob



