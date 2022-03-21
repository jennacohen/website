// console.log("Hello world!")

// slow deletion speed 
// https://www.typeitjs.com/docs/vanilla/usage#custom-properties

new TypeIt("#myElement", {
    deleteSpeed: 70,
})

    .pause(500)
    .type("i'm a digital designer")
    .pause(1400)
    .delete(16)
    .pause(800)
    .type("ux enthusiast")
    .pause(1400)
    .delete(13)
    .pause(800)
    .type("storyteller.")

    .go();



//     getBeforeInit={(instance) => {
//     instance.type("Hi, I'm Alxe").pause(750).delete(2).pause(500).type("ex!");

//     // Remember to return it!
//     return instance;
//     // strings: "journalist + designer",
// }).go();


$(document).ready(function () {
    var elem = $("body");
    var color = elem.css('background-color')
    var counter = 0
    $("#btn").click(function () {
        counter = counter + 1
        if (counter % 2 == 0) {
            $("body").css({ "backgroundColor": "#120902" });
            $(".toggle-color").css({ "color": "#FFFFF0" });
            $(".image-border-color").css({ "border-color": "#FFFFF0" });
            $(".footer-color").css({ "background-color": "#FFFFF0" });
            $(".footer-text-color").css({ "color": "#120902" });
        } else {
            $("body").css({ "backgroundColor": "#FFFFF0" });
            $(".toggle-color").css({ "color": "#120902" });
            $(".image-border-color").css({ "border-color": "#120902" });
            $(".footer-color").css({ "background-color": "#120902" });
            $(".footer-text-color").css({ "color": "#FFFFF0" });
        }
        // console.log(color)

        // $("body").css({ "maxWidth": "white" });
    });
});