export default [
    {
        name: "Venta",
        url: "https://urbania.pe/buscar/venta-de-propiedades",
        sub_menu: []
    },
    {
        name: "Alquiler",
        url: "https://urbania.pe/buscar/alquiler-de-propiedades",
        sub_menu: []
    },
    {
        name: "Proyectos",
        url: "#",
        sub_menu: [
            {
                name: "Todos los proyectos",
                url: "https://urbania.pe/buscar/proyectos-propiedades",
                sub_menu: []
            },
            {
                name: "Proyectos Interbank",
                url: "https://urbania.pe/buscar/proyectos-propiedades?founded=8",
                interbank: true,
                sub_menu: []
            }
        ]
    },
    {
        name: "Zona Interbank",
        url: "#",
        classAdd: ['e-item--interbank','e-menu-interbank'],
        interbank: true,
        sub_menu: [
            {
                name: "Calculadora Hipotecaria",
                url: "https://urbania.pe/calculadora-hipotecaria",
                sub_menu: []
            },
            {
                name: "Información Hipotecaria",
                url: "https://urbania.pe/credito-hipotecario-interbank",
                sub_menu: []
            }
        ]
    },
    {
        name: "Indice m2",
        url: "https://urbania.pe/indice_m2",
        sub_menu: []
    },
    {
        name: "Profesionales",
        url: "#",
        sub_menu: [
            {
                name: "Inmobiliarias & Constructoras",
                url: "https://urbania.pe/inmobiliarias",
                sub_menu: []
            },
            {
                name: "Agentes",
                url: "https://urbania.pe/agente-inmuebles",
                sub_menu: []
            },
            {
                name: "Curso de Agentes Inmobiliarios",
                url: "https://urbania.pe/cursohol",
                sub_menu: []
            },
            {
                name: "Negocio Inmobiliario",
                url: "https://urbania.pe/oportunidad",
                sub_menu: []
            },
            {
                name: "Publicidad",
                url: "http://mediakit.urbania.pe/",
                sub_menu: []
            }
        ]
    },
    {
        name: "Más",
        url: "#",
        sub_menu: [
            {
                name: "Blog",
                url: "https://urbania.pe/blog",
                sub_menu: []
            },
            {
                name: "Suscripción al boletín",
                url: "https://urbania.pe/suscribete-al-boletin",
                sub_menu: []
            },
            {
                name: "Revista Urbania Premium",
                url: "https://urbania.pe/revista-urbania-premium/",
                sub_menu: []
            }
        ]
    }
];