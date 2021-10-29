export interface Blog {
    id: string;
    date: string;
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


