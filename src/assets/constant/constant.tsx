import plainb from "../project-image/plainb.png"


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
        img: plainb,
        title: "PlainB",
        subtitle: "Electronics Ecommerce Platform",
        description: "PlainB is a fullstack ecommerce platform. Where user can buy their desire products from the store",
        live: "https://plainb.vercel.app/",
        client:"https://github.com/nayemalways/PlainB",
        server: "https://github.com/nayemalways/PlainB"
    },
    {
        img: plainb,
        title: "PlainB",
        subtitle: "Electronics Ecommerce Platform",
        description: "PlainB is a fullstack ecommerce platform. Where user can buy their desire products from the store",
        live: "https://plainb.vercel.app/",
        client:"https://github.com/nayemalways/PlainB",
        server: "https://github.com/nayemalways/PlainB"
    },
    {
        img: plainb,
        title: "PlainB",
        subtitle: "Electronics Ecommerce Platform",
        description: "PlainB is a fullstack ecommerce platform. Where user can buy their desire products from the store",
        live: "https://plainb.vercel.app/",
        client:"https://github.com/nayemalways/PlainB",
        server: "https://github.com/nayemalways/PlainB"
    }
]