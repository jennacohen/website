// console.log("Hello world!")

new TypeIt("#myElement")
    .type("i'm a digital designer")
    .pause(1500)
    .delete(16)
    .pause(1500)
    .type("storyteller")
    .pause(1500)
    .delete(11)
    .pause(1500)
    .type("storyteller")

    .go();



//     getBeforeInit={(instance) => {
//     instance.type("Hi, I'm Alxe").pause(750).delete(2).pause(500).type("ex!");

//     // Remember to return it!
//     return instance;
//     // strings: "journalist + designer",
// }).go();