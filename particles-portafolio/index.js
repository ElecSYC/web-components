particlesJS("background", {
    particles: {
        number: {
            value: 15, //Numero de particulas
            density: {
                enable: true,
                value_area: 300, //Area donde estaran esparcidas las particulas
            },
        },
        color: {
            value: "#ffffff", //Color de las particulas
        },
        shape: {
            type: "triangle", //Tipo de forma
        },
        opacity: {
            value: 0.8, //Base de la opacidad de las particulas
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, //Base del tamaño de las particulas
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },
        //Conectando lineas
        line_linked: {
            enable: true,
            distance: 150, //Maxima distancia entre las particulas conectadas
            color: "#ffffff",
            opacity: 0.4,
            width: 5,
        },
        //Movimiento de las particulas
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            randome: false,
            straight: false,
            out_mode: "bounce", //Comportamiento cuando las particulas chocan con el border del canvas
            bounce: false,
        }, 
    },
    //Configuracion de interaccion
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: repulse,
            },
            onclick: {
                enable: true,   //Activar evento onclick
                mode: "push", //Empuja las particulas
            },
            resize: true,
        },
    },
    retina_detect: true,
});