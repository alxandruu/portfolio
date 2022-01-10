export interface Blog {
    id: string;
    date: Date;
    type: string;
    image: string;
    title: string;
    description: string;
    content: Section[];
}
interface Section {
    class: string;
    text: string;
}


