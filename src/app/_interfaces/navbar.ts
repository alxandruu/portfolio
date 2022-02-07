export interface Navbar {
    lang: string;
    navs: Array<Nav>;
}
interface Nav {
    text: string;
    url: string;
}