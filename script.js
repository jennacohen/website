// console.log("Hello world!")

// slow deletion speed 
// https://www.typeitjs.com/docs/vanilla/usage#custom-properties

new TypeIt("#myElement")
    .type("i'm a digital designer")
    .pause(1800)
    .delete(16)
    .pause(1800)
    .type("ux enthusiast")
    .pause(1800)
    .delete(13)
    .pause(1800)
    .type("storyteller.")

    .go();



//     getBeforeInit={(instance) => {
//     instance.type("Hi, I'm Alxe").pause(750).delete(2).pause(500).type("ex!");

//     // Remember to return it!
//     return instance;
//     // strings: "journalist + designer",
// }).go();