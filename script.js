//create a class called Animal with properties for species and sound
class Animal {
    constructor(species, sound){
       this.species = species;
        this.sound = sound;    
    }
    //create  method
    makeSound(){
        console.log("Species:", this.species);
        console.log("Sound:", this.sound);
    }

}
//Create instance of Dog class to make it sound 
const dog1 = new Animal("dog", "woof");
console.log(dog1);
dog1.makeSound();

//Create a subclass Dog 
class Dog extends Animal{
    
    //Add additional property for color
    constructor(species, sound, color){
        super(species, sound);
        this.color = color;
    }
    
}

       
