'use strict';

// 1. Declare a class called Developer (whom's objects will hold the information about a developer)
// 2. Create the constructor of the class that sets the name, experience and list (array) of domains the developer has experience on
// 3. After the point 2 was executed, a code like "let dev1 = new Developer('John Doe', 10, ['JS','CSS'])" will create an object indicating that John has 10 years of experience and knows 2 technologies
// 4. Add the method toJson() inside the class - this method should convert the current object to a JSON formatted string
// 5. Add the method fromJson(json) inside the class - this method should receive as parameter a JSON string and decoding it, 
//it should load the values of the properties of the object from the JSON string


class Developer {

    constructor( name, experience, [...domains]  ){
        this.name = name;
        this.experience = experience;
        this.domains = [...domains];
    }

    toJson(){
        return JSON.stringify(this);
    }

    fromJson(stringJson){
        JSON.parse(stringJson, (key,value)=>
            this[key]= value
        );     
    }
}

let dev1 = new Developer('John Doe', 10, ['JS', 'CSS']);

console.log(dev1);
console.log(dev1.toJson());
console.log(dev1.fromJson('{"project":"Atlanta","role":"team leader"}'))
console.log(dev1);
