// getter is used when we need to call function/method without using '()'


let person = {
    name: 'wasif',
    age: '20',

    // getName: function() {
    //     return this.name.toUpperCase()
    // }

    get getName() {
        return this.name.toUpperCase()
    }

}
console.log(person.getName) // Now accessing like a property instead of like method/function




// setter (set)
let person2 = {
    name: 'hilal',
    age: '20',

    // Adding new property to object by setter (set)
    set setName(n) {
        this.name = n.toUpperCase();
    }
};
person2.setName = "wasif"
console.log(person2)