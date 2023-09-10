//create a class called Animal with properties for species and sound
class Animal {
    constructor(species, sound){
       this.species = species;
        this.sound = sound;    
    }
    //create  method
    makeSound(){
        console.log("species:", this.species);
        console.log("sound:", this.sound);
    }
}
       
