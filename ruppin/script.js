const name= process.argv[2];
const age= process.argv[3];

console.log(process.env)
const obj = {
    name:name ,
    age: age,
    printAge: function(){
        console.log(this.age);
    },
    printName() {
        console.log(this.name);
    }
}

obj.printAge();
obj.printName();
