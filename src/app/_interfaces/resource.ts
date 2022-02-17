export interface ResourceGroup {
    lang: String;
    data: Array<Resource>;
}

export interface Resource {
    name: string;
    img: string;
    description: string;
    url: string;
    category: string;
}
