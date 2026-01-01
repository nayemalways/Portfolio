import plainb from "../project-image/plainb.png";
import nike from "../project-image/nike.png";
import tourista from "../project-image/tourista.png";
import dreamAgency from "../project-image/dream_agency.png";


export interface IProjects {
    img: string;
    title: string;
    subtitle: string;
    description: string;
    live?: string;
    client?: string;
    server?:string;
}

export const project: IProjects[] = [
    {
        img: tourista,
        title: "Tourista",
        subtitle: "Tour Management Applications",
        description: "Tourista is a tour management system applications. Where user can book and track beutiful place!",
        live: "https://tourista-frontend.vercel.app/",
        client:"https://github.com/nayemalways/PlainB",
        server: "https://github.com/nayemalways/PlainB"
    },
    {
        img: plainb,
        title: "PlainB",
        subtitle: "Electronics Ecommerce Platform",
        description: "PlainB is a fullstack ecommerce platform. Where user can buy their desire products from the store",
        live: "https://plainb.vercel.app/",
        client:"https://github.com/nayemalways/TouristaFrontend",
        server: "https://github.com/nayemalways/Tourista_Server"
    },
    {
        img: nike,
        title: "Nike Shoes",
        subtitle: "A Shoes selling platform (static)",
        description: "Nike Shoes a Reac.js single landing pages desing using modern Tailwind CSS",
        live: "https://shoes-corner.netlify.app/",
        client:"https://github.com/nayemalways/NikeShoes",
        server: "https://github.com/nayemalways/NikeShoes"
    },
    {
        img: dreamAgency,
        title: "Dream Agency",
        subtitle: "A Bootstrap agency website",
        description: "Dream Agency is a single landing page using Bootstrap",
        live: "https://dreamagency-eight.vercel.app/",
        client:"https://github.com/nayemalways/DreamAgency",
        server: "https://github.com/nayemalways/DreamAgency"
    }
]