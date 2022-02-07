export interface Profile {
    lang: string;
    name: string;
    img: string;
    ocupation: string;
    about_me: AboutMe;
    hobbies: Hobbies;
    history: History;
    social_media: SocialMedia;
}

interface AboutMe {
    header: string;
    texts: Array<String>;
}

interface Hobbies {
    header: string;
    array: Array<String>;
}

interface History {
    header: string;
    sections: Array<HistorySection>;
}

interface HistorySection {
    year: string;
    text: string;
}

interface SocialMedia {
    header: string;
    sections: Array<SocialMediaSection>;
}

interface SocialMediaSection {
    icon: string;
    text: string;
    url: string;
}