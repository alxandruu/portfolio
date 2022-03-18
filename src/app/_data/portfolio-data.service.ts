import { Injectable } from '@angular/core';
import { Blog } from '../_interfaces/blog';
import { Category, CategoryGroup } from '../_interfaces/category';
import { Navbar } from '../_interfaces/navbar';
import { Profile } from '../_interfaces/profile';
import { Project, ProjectGroup } from '../_interfaces/project';
import { Resource, ResourceGroup } from '../_interfaces/resource';
import { UtilsService } from '../_services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor(private ut: UtilsService) {
  }

  public getProfile(): any {
    const lang = this.ut.lang;
    const profiles = this._profile;
    let profile = null;
    for (let i = 0; i < profiles.length && !profile; i++) {
      if (profiles[i].lang == lang) {
        profile = profiles[i];
      }
    }

    return profile;
  }

  public getNavbar(): any {
    const lang = this.ut.lang;
    const navbar = this._navbar;
    let navs = null;
    for (let i = 0; i < navbar.length && !navs; i++) {
      if (navbar[i].lang == lang) {
        navs = navbar[i];
      }
    }

    return navs;
  }


  // Projects Functions
  getProjects(): any {
    const lang = this.ut.lang;
    const projects = this._projects;
    let project_group = null;
    for (let i = 0; i < projects.length && !project_group; i++) {
      if (projects[i].lang == lang) {
        project_group = projects[i];
      }
    }

    return project_group;
  }

  getProject(id: string): any {
    const projects: ProjectGroup = this.getProjects();
    for (let i = 0; i < projects.data.length; i++) {
      if (projects.data[i].id == id) {
        return projects.data[i];
      }
    }
    return null;
  }


  // Categories Functions
  getCategories(): any {
    const lang = this.ut.lang;
    const categories = this._categories;
    let category_group = null;
    for (let i = 0; i < categories.length && !category_group; i++) {
      if (categories[i].lang == lang) {
        category_group = categories[i];
      }
    }

    return category_group;
  }

  getCategory(id: string): any {
    const categories: CategoryGroup = this.getCategories();
    for (let i = 0; i < categories.data.length; i++) {
      if (categories.data[i].id == id) {
        return categories.data[i];
      }
    }
    return null;
  }

  // Resources Functions
  getResources(): any {
    const lang = this.ut.lang;
    const resources = this._resources;
    let resource_group = null;
    for (let i = 0; i < resources.length && !resource_group; i++) {
      if (resources[i].lang == lang) {
        resource_group = resources[i];
      }
    }

    return resource_group;
  }

  filterResources(id: string): any {
    const resources: ResourceGroup = this.getResources();
    const categories: CategoryGroup = this.getCategories();

    if (id != categories.data[0].id) {
      const filterResources = resources.data.filter(r => {
        let category = r.category;
        return category.includes(id);
      });
      return filterResources;
    } else {
      return resources.data;
    }
  }

  private _navbar: Array<Navbar> = [
    {
      lang: "en",
      navs: [
        { text: "Projects", url: "projects" },
        // { text: "Blog", url: "blog" },
        { text: "Resources", url: "resources" },

      ]
    },
    {
      lang: "es",
      navs: [
        { text: "Proyectos", url: "projects" },
        // { text: "Blog", url: "blog" },
        { text: "Recursos", url: "resources" },

      ]
    }
  ]

  private _profile: Array<Profile> = [
    {
      lang: "en",
      name: "Gabriel Alexandru Botas",
      img: "portfolio.jpg",
      ocupation: "Full-Stack Developer",
      about_me: {
        header: "About Me",
        texts: [
          "Alexandru is a 21 years old boy who likes IT world. He has recently finished studies in Web Programming, where learned how to develop and deploy web applications.",
          "He went from Romania to Spain when was 4 years old. During his life, has been moving from one place to another meeting different people and discovering interesting places. His first code was a \"Hello World!\" in Python, in that moment he realized that through programming you can create anything you want.",
          "Recently has discovered a bit of economy and its ecosystem, through cryptocurrency, stocks and passive income; where has learnt what money (FIAT) means, how to obtain passive income through different investments, ETFs, Futures, blockchain, real estate, ..."
        ]
      },
      hobbies: {
        header: "Hobbies",
        array: ["Art", "Music", "Videogames", "Films", "Travel"]
      },
      history: {
        header: "History",
        sections: [
          { year: "2000", text: "Born in Galați, Romania" },
          { year: "2019", text: "Completed an Intermediated Degree in Microcomputer Systems and Networks" },
          { year: "2019", text: "Worked for 3 months in a Technological Consultancy as Technical Support" },
          { year: "2021", text: "Completed a Higher Degree in Web Developing" },
          { year: "2021", text: "Worked for 3 months in a Technological Consultancy as a PHP Programmer with Prestashop" },
          { year: "2022", text: "Liferay 7.x Backend Programmer" },
        ]
      },
      social_media: {
        header: "Social Media / Contact Me",
        sections: [
          { icon: "fab fa-instagram", text: "@alxandru_", url: "https://www.instagram.com/alxandru_/" },
          { icon: "fab fa-linkedin", text: "Gabriel Alexandru Botas", url: "https://www.linkedin.com/in/gabriel-alexandru-botas-795103204/" },
          { icon: "fas fa-envelope-square", text: "bgabrielalexandru@gmail.com", url: "mailto:bgabrielalexandru@gmail.com" },
        ]
      }
    }, {
      lang: "es",
      name: "Gabriel Alexandru Botas",
      img: "portfolio.jpg",
      ocupation: "Desarrollador Full-Stack",
      about_me: {
        header: "Sobre mí",
        texts: [
          "Alexandru es un chico de 21 años al que le gusta el mundo de la informática. Recientemente ha finalizado sus estudios de Programación Web, donde aprendió a desarrollar y desplegar aplicaciones web.",
          "Se fue de Rumanía a España cuando tenía 4 años. Durante su vida, ha ido moviéndose de un lugar a otro conociendo diferentes personas y descubriendo lugares interesantes. Su primer código fue un \"¡Hola mundo!\" en Python, en ese momento se dio cuenta de que a través de la programación puedes crear cosas interesantes.",
          "Recientemente ha descubierto el mundo de la economía, a través de las criptomonedas, acciones e ingresos pasivos; donde ha aprendido el significado del dinero (FIAT), cómo obtener ingresos pasivos a través de diferentes inversiones, ETFs, Futuros, blockchain, bienes inmuebles,... "
        ]
      },
      hobbies: {
        header: "Hobbies",
        array: ["Arte", "Música", "Videojuegos", "Películas", "Viajes"]
      },
      history: {
        header: "Historia",
        sections: [
          { year: "2000", text: "Nacido en Galați, Romania" },
          { year: "2019", text: "Completado un CFGM en Sistemas Microinformáticos y Redes" },
          { year: "2019", text: "Trabajé durante 3 meses en una Consultoría Tecnológica como Soporte Técnico" },
          { year: "2021", text: "Completado un CFGS en Desarrollo de Aplicaciones Web" },
          { year: "2021", text: "Trabajé durante 3 meses en una Consultoría Tecnológica como Programador PHP con Prestashop" },
          { year: "2022", text: "Programador Liferay 7.x" },
        ]
      },
      social_media: {
        header: "Redes Sociales / Contacto",
        sections: [
          { icon: "fab fa-instagram", text: "@alxandru_", url: "https://www.instagram.com/alxandru_/" },
          { icon: "fab fa-linkedin", text: "Gabriel Alexandru Botas", url: "https://www.linkedin.com/in/gabriel-alexandru-botas-795103204/" },
          { icon: "fas fa-envelope-square", text: "bgabrielalexandru@gmail.com", url: "mailto:bgabrielalexandru@gmail.com" },
        ]
      }
    }
  ];

  private _projects: Array<ProjectGroup> = [
    {
      lang: "es",
      title: "Proyectos",
      data: [
        { id: "attiapp", type: "big", name: "Attia APP", img: "attiapp.jpg", description: "Aplicación Web en la que manejar la información esencial de una empresa para poder gestionar digitalmente.", website: "", platform: ["Aplicación Web"], stack: ["Angular", "PHP", "mySQL"], imgs: ["attiapp.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg", "preview_4.jpeg", "preview_5.jpeg", "preview_6.jpeg", "preview_7.jpeg", "preview_8.jpeg", "preview_9.jpeg"], in_development: false },
        { id: "ocaonline", type: "small", name: "La Oca Online", img: "laocaonline.jpg", description: "Versión Online del popular juego de la Oca, solamente esta disponible para dos jugadores.", website: "https://alxandruu.github.io/daw-laocaonline/", platform: ["Aplicación Web"], stack: ["HTML", "CSS", "JavaScript"], imgs: ["laocaonline.jpg"], in_development: false },
        { id: "minatoshop", type: "small", name: "Minato Shop", img: "minatoshop.jpg", description: "E-Commerce donde puedes encontrar ropa y accesorios de diseño minimalista por un precio asequible.", website: "https://alxandruu.github.io/daw-escaparatevirtual/", platform: ["Aplicación Web"], stack: ["HTML", "CSS", "JavaScript", "JSON"], imgs: ["minatoshop.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg"], in_development: false },
        { id: "gestor", type: "big", name: "Gestor", img: "", description: "Aplicación Web donde un empleado manejar su información orientada a Recursos Humanos, a través de diferentes acciones. Como descargar nóminas o chatear con compañeros de trabajo.", website: "", platform: ["Aplicación Web"], stack: ["Angular", "Node", "MongoDB"], imgs: ["preview_1.jpeg", "preview_2.jpeg"], in_development: true },
      ]
    },
    {
      lang: "en",
      title: "Projects",
      data: [
        { id: "attiapp", type: "big", name: "Attia APP", img: "attiapp.jpg", description: "Web Application where you can manage the essential information of a business.", website: "", platform: ["Web Application"], stack: ["Angular", "PHP", "mySQL"], imgs: ["attiapp.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg", "preview_4.jpeg", "preview_5.jpeg", "preview_6.jpeg", "preview_7.jpeg", "preview_8.jpeg", "preview_9.jpeg"], in_development: false },
        { id: "ocaonline", type: "small", name: "La Oca Online", img: "laocaonline.jpg", description: "Online Version of a popular spanish board game, this version is only for two players.", website: "https://alxandruu.github.io/daw-laocaonline/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript"], imgs: ["laocaonline.jpg"], in_development: false },
        { id: "minatoshop", type: "small", name: "Minato Shop", img: "minatoshop.jpg", description: "Online commerce where you can find minimalism clothes and accesories.", website: "https://alxandruu.github.io/daw-escaparatevirtual/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript", "JSON"], imgs: ["minatoshop.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg"], in_development: false },
        { id: "gestor", type: "big", name: "Gestor", img: "", description: "Web Application where an employee can manage his HR information through different actions.", website: "", platform: ["Web Application"], stack: ["Angular", "Node", "MongoDB"], imgs: ["preview_1.jpeg", "preview_2.jpeg"], in_development: true },
      ]
    },

  ];

  private _categories: Array<CategoryGroup> = [
    {
      lang: "es",
      data: [
        { id: "c0", name: "Todas las Categorías" },
        { id: "c1", name: "Series TV" },
        { id: "c2", name: "Apps" },
        { id: "c3", name: "Videojuegos" },
        { id: "c4", name: "Libros" },
        { id: "c5", name: "Películas" }
      ]
    }, {
      lang: "en",
      data: [
        { id: "c0", name: "All Categories" },
        { id: "c1", name: "TV Series" },
        { id: "c2", name: "Apps" },
        { id: "c3", name: "Videogames" },
        { id: "c4", name: "Books" },
        { id: "c5", name: "Films" }
      ]
    }
  ];

  private _resources: Array<ResourceGroup> = [
    {
      lang: "es",
      data: [
		{
          name: 'Perdida',
          img: 'https://image.tmdb.org/t/p/w1280/8e9zHFNRGZgvpAuTPYaK2kB9zGt.jpg',
          description: "El día de su quinto aniversario de boda, Nick Dunne informa a la policía de la misteriosa desaparición de su esposa Amy. Pronto, la presión mediática hace que el retrato de felicidad doméstica que ofrece Nick empiece a tambalearse. Además, su extraña conducta lo convierte en sospechoso, y todo el mundo comienza a preguntase si fue él quien mató a su esposa.",
          url: 'https://www.youtube.com/watch?v=GixiBubhXJg',
          category: "c5"
        },
		{
          name: 'Savior',
          img: 'https://image.tmdb.org/t/p/original/iLyQVeo4Jm9UmLM8YEWStdgTuV4.jpg',
          description: "Tras la muerte de su mujer y su hijo en un atentado islámico, Guy se alista en la Legión Extranjera. Cuando estalla la guerra en Bosnia decide unirse al bando serbio como mercenario.",
          url: 'https://www.youtube.com/watch?v=glXdHKeNc7I&t=46s',
          category: "c5"
        },
		{
          name: 'Protonmail',
          img: 'https://th.bing.com/th/id/R.80305ecd0c411e221ea11a07887d7f25?rik=vbDTTJgJdtRrNw&riu=http%3a%2f%2fwww.zdnet.de%2fwp-content%2fuploads%2f2015%2f11%2fprotonmail.jpg&ehk=r68HyFH0DMtxXc3Sm1x3tIsaMulAPLzhdP3GIlLCsk8%3d&risl=&pid=ImgRaw&r=0',
          description: "ProtonMail es un servicio de correo electrónico cifrado, creado en 2013 por los científicos e ingenieros del CERN Jason Stockman, Andy Yen, y Wei Sun. A raíz de las revelaciones del extrabajador de la NSA, Edward Snowden, sobre las prácticas de vigilancia masiva de las agencias de seguridad estadounidenses.",
          url: 'https://protonmail.com/',
          category: "c2"
        },
		{
          name: 'Bitwarden',
          img: 'https://www.justgeek.fr/wp-content/uploads/2018/01/bitwarden.jpg',
          description: "Bitwarden es un gestor de contraseñas gratuito y open-source. Tambien almacena información sensitiva como credenciales de forma encriptada.",
          url: 'https://bitwarden.com/',
          category: "c2"
        },
        {
          name: 'Playdede',
          img: 'https://th.bing.com/th/id/R.1c97b527f3fe9684449dec49a892fb91?rik=xZTiS92QFzIkvw&pid=ImgRaw&r=0',
          description: "Plataforma online donde ver películas, series y anime gratuitamente. ADVERTENCIA: se recomienda usar con un Adblock.",
          url: 'https://playdede.com/',
          category: "c2"
        },
        {
          name: 'Star Wars Jedi: Fallen Order',
          img: 'https://nosomosnonos.com/wp-content/uploads/2019/10/Star-Wars-Jedi-Fallen-Order.jpg',
          description: "Después de la Orden 66, que inició la purga de la Orden Jedi en toda la galaxia, los jugadores toman el control del Padawan Cal Kestis (interpretado por Cameron Monaghan), uno de los últimos Jedi supervivientes. Durante la historia, Cal se somete a duras pruebas en su camino para superar el traumático pasado, que dejó como secuela el fin de la guerra de los clones.",
          url: 'https://www.youtube.com/watch?v=lw3tTKYGwr8',
          category: "c3"
        }, {
          name: 'The White Lotus',
          img: 'https://popculturetimes.com/wp-content/uploads/2021/08/the-white-lotus.jpg',
          description: "Retrata las vacaciones de varios huéspedes de un resort tropical durante una semana mientras se relajan y rejuvenecen en el paraíso. Pero cada día que pasa, surge una complejidad más oscura en la vida de estos viajeros perfectos, los risueños empleados del hotel y ese lugar idílico.",
          url: 'https://www.youtube.com/watch?v=6UK2zs2wElI',
          category: "c1"
        },
        {
          name: 'Criado por Lobos',
          img: 'https://financerewind.com/wp-content/uploads/2020/08/raised-by-wolves-hbo-max.jpg',
          description: "Una raza de androides tiene la tarea de criar a niños humanos en un misterioso planeta.",
          url: 'https://www.youtube.com/watch?v=4MLnZdMjteI',
          category: "c1"
        }, {
          name: 'Euphoria',
          img: 'https://televisionpromos.com/wp-content/uploads/2019/03/Euphoria-HBO-key-art-logo-740x416.jpg',
          description: "Advertencia: En esta serie hay escenas violentas sobre drogas, sexo, y salud mental. La superestrella Zendaya protagoniza esta serie de HBO sobre un grupo de estudiantes de instituto.",
          url: 'https://www.youtube.com/watch?v=nqSQUrlnB9s&t=25s',
          category: "c1"
        }, {
          name: 'Control',
          img: 'https://www.spieltimes.com/wp-content/uploads/2019/08/basic.jpg',
          description: "¿Puedes enfrentarte a los secretos oscuros de la Agencia? Desentraña una lucha épica sobrenatural llena de personajes inesperados y sucesos extraños mientras buscas a tu hermano desaparecido. Descubre la verdad que te ha traído hasta aquí.",
          url: 'https://www.youtube.com/watch?v=AwQJRHBvF8w',
          category: "c3"
        }, {
          name: 'Los Mitchells contra las Máquinas',
          img: 'https://img.search.brave.com/zKIITOhiqZl2wyAn_RCnHKILSs3NzVMq7RGQaMv_Ut8/rs:fit:1200:675:1/g:ce/aHR0cHM6Ly9hcmVh/anVnb25lcy5zcG9y/dC5lcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy9sb3Mt/bWl0Y2hlbGwtY29u/dHJhLWxhcy1tYXF1/aW5hcy5qcGVn',
          description: "Un apocalipsis robótico pone freno a su viaje por carretera a través del país. Ahora, el futuro de la humanidad depende de los Mitchell: la familia más rarita del mundo.",
          url: 'https://www.youtube.com/watch?v=uh1XOu2GQcw',
          category: "c5"
        },
        {
          name: 'Blade Runner: El Loto Negro',
          img: 'https://th.bing.com/th/id/OIP.tUaZrRP1HKj0tBCEf7SkiwHaD8?pid=ImgDet&rs=1',
          description: "Los Ángeles, 2032. Una joven con habilidades mortales y sin recuerdos persigue a los responsables de su brutal pasado para descubrir la verdad sobre su identidad. Sus únicas pistas: un dispositivo de datos bloqueado y un tatuaje de un loto negro. Serie de animación producida por Shin'ichirō Watanabe (Cowboy Bebop) y ambientada diecisiete años antes de la película \"Blade Runner 2049\".",
          url: 'https://www.youtube.com/watch?v=FPjOuFvzp5k',
          category: "c1"
        },
        {
          name: 'La Vecina de al Lado',
          img: 'https://imgmedia.wapa.pe/420x210/wapa/migration/imagen/2018/03/13/noticia-recuerdas-la-chica-de-al-lado-dejo-la-actuacion-por-esta-razon.png',
          description: "A pesar de su juventud, Matthew Kidman (Emile Hirsch), un joven de dieciocho años, tiene las cosas muy claras en la vida. Su aspiración es la de convertirse en político y sabe que para conseguirlo tiene que trabajar duro. Todo en su vida está dirigido con gran rigidez y exactitud, siendo la responsabilidad su máxima diaria. No obstante, su firme rutina se ve alterada cuando una encantadora y guapísima joven, Danielle (Elisha Cuthbert), se va a vivir al lado de su casa.",
          url: 'https://www.youtube.com/watch?v=0rD3Qkh-238',
          category: "c5"
        },
        {
          name: 'Recordcast',
          img: 'https://visiongeek.pe/wp-content/uploads/RecordCast-un-grabador-de-pantalla-en-linea-y-gratuito-730x412.jpg',
          description: 'Graba la pantalla del ordenador y edita las grabaciones sin la necesidad de instalar nada, todo a través del navegador. Ideal para uso ocasional.',
          url: 'https://www.recordcast.com/',
          category: "c2"
        },
        {
          name: 'SmallPDF',
          img: 'https://images-na.ssl-images-amazon.com/images/I/41nRS1hfqRL.png',
          description: 'Ofrece diferentes funciones para manejar PDFs. Desde editarlos a firmarlos, a comprimirlos o convertirlos en distintos tipos de ficheros.',
          url: 'https://smallpdf.com/',
          category: "c2"
        },
        {
          name: 'AlternativeTo',
          img: 'https://th.bing.com/th/id/OIP.AA7KEI6X920ckKLeLcWXCQHaDD?pid=ImgDet&rs=1',
          description: 'Página web donde encontrar programas similiares a otro. Ejemplo, encontrar un programa similiar a Photoshop pero gratuito.',
          url: 'https://alternativeto.net/',
          category: "c2"
        },
        {
          name: 'Snapdrop',
          img: 'https://www.iphoned.nl/wp-content/uploads/2015/12/snapdrop-uitg-580x375.jpg',
          description: 'Aplicación web donde poder enviar archivos o mensajes de texto, entre dos dispositivos conectados en la misma red.',
          url: 'https://snapdrop.net/',
          category: "c2"
        }, {
          name: 'El Invierno del Mundo',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1280px-Open_book_nae_02.svg.png",
          description: "Los hijos de las cinco familias protagonistas deLa caída de los gigantes forjarán su destino en los años turbulentos de la Segunda Guerra Mundial, la guerra civil española, el bombardeo de Pearl Harbor y la era de la bomba atómica.",
          url: "https://www.casadellibro.com/libro-el-invierno-del-mundo/9788401353192/2000241",
          category: "c4"
        }, {
          name: 'The Expanse',
          img: "https://img.winfuture.de/teaser/1920/41233.jpg",
          description: "En el siglo XXIII, una chica desaparecida vincula a un detective del cinturón de asteroides, al capitán de un carguero de hielo y a una diplomática en contra de la guerra.",
          url: "https://www.youtube.com/watch?v=7Gudikaq5Hc",
          category: "c1"
        }, {
          name: 'Beyond Good & Evil',
          img: "https://cdn.cloudflare.steamstatic.com/steam/apps/15130/header.jpg?t=1620749841",
          description: "Durante siglos, el planeta Hillys ha sido bombardeado por una implacable raza alienígena. Extrañada ante la inhabilidad de su gobierno para repeler a los invasores, la reportera de acción Jade sale a las calles a buscar la verdad. Armada con su cámara, su bastón dai-jo y una fiera determinación, descubrirá pruebas sorprendentes que desvelan una horrible conspiración dentro del gobierno, por lo que se verá obligada a enfrentarse a un mal que no puede ni imaginar.",
          url: "https://www.youtube.com/watch?v=dex8cuLnZyA",
          category: "c3"
        }, {
          name: 'Deus Ex: Human Revolution',
          img: "https://www.escapistmagazine.com/v2/wp-content/uploads/2020/08/deusexhumanrevolution1.jpg",
          description: "Juegas como Adam Jensen, un ex SWAT al que han escogido para supervisar las necesidades defensivas de una de las empresas de biotecnología más experimentales de América. Tu trabajo consiste en proteger los secretos de la empresa, pero, cuando irrumpe un equipo de operaciones encubiertas y mata a los mismos científicos que debías proteger, lo que creías saber sobre tu trabajo cambia totalmente.",
          url: "https://www.youtube.com/watch?v=RbDQiNYRwgQ",
          category: "c3"
        }, {
          name: 'Dishonored 2',
          img: "https://th.bing.com/th/id/R.fd072c3141f259b3be287e14124f5a7a?rik=APEyEPMVm9Lfxw&pid=ImgRaw&r=0",
          description: "Dishonored 2 tiene lugar 15 años después de la derrota del lord Regente. La temible peste ha pasado a la historia y un usurpador de otro mundo se ha hecho con el trono de la emperatriz Emily Kaldwin. El futuro de las islas pende de un hilo. Asume el papel de Emily o Corvo, y viaja más allá de las legendarias calles de Dunwall hasta Karnaca, una ciudad costera antaño deslumbrante, que alberga la clave para devolver a Emily al poder. Usa la marca del Forastero, así como nuevas y poderosas habilidades, para dar caza a tus enemigos y recuperar lo que te pertenece por derecho.",
          url: "https://www.youtube.com/watch?v=6ODdWLysD6g",
          category: "c3"
        }, {
          name: 'Prey',
          img: "https://th.bing.com/th/id/R.504c052ae9b1fe3999a9a16727b35dc6?rik=kvoFfTWqmLq4eQ&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fprey_2017-1920x1200.jpg&ehk=RtG5vsdWUGYCS4GRQeVtoJz9nBEy2hyNt2Jiz01vNoM%3d&risl=&pid=ImgRaw&r=0",
          description: "En Prey te despertarás a bordo de la Talos I, una estación espacial en órbita alrededor de la Luna en el año 2032. Eres el sujeto clave de un experimento que espera cambiar la humanidad para siempre... pero las cosas se han complicado de forma terrible. La estación espacial ha sido invadida por alienígenas hostiles que quieren darte caza. Mientras investigas los oscuros secretos de la Talos I y de tu propio pasado, tendrás que sobrevivir gracias a las herramientas que encuentres en la estación, así como a tu ingenio, armas e increíbles habilidades. El destino de Talos I y de todos los que están a bordo se encuentra en tus manos.",
          url: "https://www.youtube.com/watch?v=n1uTBTKrccw",
          category: "c3"
        }, {
          name: 'Quantum Break',
          img: "https://17kgroup.it/wp-content/uploads/2018/03/quantum-break-remedy-lavoro-per-risolvere-problemi-della-versione-xbox-one-x-v5-322817.jpg",
          description: "Como consecuencia de una fracción de segundo de destrucción que resquebrajó el mismo tiempo, dos hombres descubren que obtuvieron poderes extraordinarios. Uno de ellos puede viajar en el tiempo y pondrá todo lo que está a su disposición por controlar este poder. El otro usará sus nuevas habilidades para derrotarlo y reparar el tiempo antes de desgarrarse por completo.",
          url: "https://www.youtube.com/watch?v=g4Gfm5H-lkk&t=1s",
          category: "c3"
        }, {
          name: 'Cobra Kai',
          img: "https://upload.wikimedia.org/wikipedia/it/1/12/Cobra_Kai.png",
          description: "Décadas después del torneo que les cambió la vida, la rivalidad entre Johnny y Daniel resurge en esta secuela de las películas de ‘Karate Kid’.",
          url: "https://www.youtube.com/watch?v=CfOuYm8EnBA",
          category: "c1"
        }, {
          name: 'Reminiscencia',
          img: "https://th.bing.com/th/id/OIP.6L8KibveXA7umWl1IqCfsAHaEK?pid=ImgDet&rs=1",
          description: "Nick Bannister, un detective privado de la mente, se adentra en el seductor mundo del pasado cuando Mae, una nueva clienta, cambia su vida por completo.",
          url: "https://www.youtube.com/watch?v=5MvFknvMabU&t=38s",
          category: "c5"
        }, {
          name: "La Lista de Schindler",
          img: "https://picfiles.alphacoders.com/224/224155.jpg",
          description: "Oskar Schindler, un empresario alemán de gran talento para las relaciones públicas, busca ganarse la simpatía de los nazis de cara a su beneficio personal. Después de la invasión de Polonia por los alemanes en 1939, Schindler consigue, gracias a sus relaciones con los altos jerarcas nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente, gracias sobre todo a su gerente Itzhak Stern, también judío.",
          url: "https://www.youtube.com/watch?v=BmkchuRJ82w",
          category: "c5"
        }, {
          name: "Blue Valentine",
          img: "https://www.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/blue-valentine/galeria/blue-valentine/13724094-1-esl-ES/blue-valentine.jpg",
          description: "Dean (Ryan Gosling) y Cindy (Michelle Williams) son padres de una maravillosa hija, pero su relación ha pasado por mejores momentos desde que tienen que compaginar las demandas y expectativas del trabajo y la vida familiar.",
          url: "https://www.youtube.com/watch?v=vYgfQyP3o2I",
          category: "c5"
        }
      ]
    }, {
      lang: "en",
      data: [
		{
          name: 'Gone Girl',
          img: 'https://image.tmdb.org/t/p/w1280/8e9zHFNRGZgvpAuTPYaK2kB9zGt.jpg',
          description: "Gone Girl is a 2014 American psychological thriller film. Set in Missouri, the story is a postmodern mystery that follows the events surrounding Nick Dunne (Ben Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Rosamund Pike).",
          url: 'https://www.youtube.com/watch?v=2-_-1nJf8Vg',
          category: "c5"
        },
		{
          name: 'Savior',
          img: 'https://image.tmdb.org/t/p/original/iLyQVeo4Jm9UmLM8YEWStdgTuV4.jpg',
          description: "Savior is a 1998 war film. It is about a U.S. mercenary escorting a Bosnian Serb woman and her newborn child to a United Nations safe zone during the Bosnian War.",
          url: 'https://www.youtube.com/watch?v=ONDaW2rd7uM',
          category: "c5"
        },
		{
          name: 'Protonmail',
          img: 'https://th.bing.com/th/id/R.80305ecd0c411e221ea11a07887d7f25?rik=vbDTTJgJdtRrNw&riu=http%3a%2f%2fwww.zdnet.de%2fwp-content%2fuploads%2f2015%2f11%2fprotonmail.jpg&ehk=r68HyFH0DMtxXc3Sm1x3tIsaMulAPLzhdP3GIlLCsk8%3d&risl=&pid=ImgRaw&r=0',
          description: "ProtonMail is an end-to-end encrypted email service founded in 2013 in Geneva, Switzerland.[5] ProtonMail uses client-side encryption to protect email content and user data before they are sent to ProtonMail servers, unlike other common email providers such as Gmail and Outlook.com.",
          url: 'https://protonmail.com/',
          category: "c2"
        },
		{
          name: 'Bitwarden',
          img: 'https://www.justgeek.fr/wp-content/uploads/2018/01/bitwarden.jpg',
          description: "Bitwarden is a free and open-source password management service that stores sensitive information such as website credentials in an encrypted vault.",
          url: 'https://bitwarden.com/',
          category: "c2"
        },
        {
          name: 'Star Wars Jedi: Fallen Order',
          img: 'https://nosomosnonos.com/wp-content/uploads/2019/10/Star-Wars-Jedi-Fallen-Order.jpg',
          description: "After Order 66, which initiated the purge of the Jedi Order throughout the galaxy, players take control of Padawan Cal Kestis (played by Cameron Monaghan), one of the last surviving Jedi. During the story, Cal undergoes harsh tests on his way to overcome the traumatic past, which left as a sequel the end of the Clone Wars.",
          url: 'https://www.youtube.com/watch?v=0GLbwkfhYZk',
          category: "c3"
        }, {
          name: 'The White Lotus',
          img: 'https://popculturetimes.com/wp-content/uploads/2021/08/the-white-lotus.jpg',
          description: "It portrays the vacations of several guests of a tropical resort for a week while relaxing and rejuvenating in paradise. But with each passing day, a darker complexity emerges in the lives of these perfect travelers, the laughing hotel employees, and that idyllic place.",
          url: 'https://www.youtube.com/watch?v=TGLq7_MonZ4',
          category: "c1"
        },
        {
          name: 'Raised by Wolves',
          img: 'https://financerewind.com/wp-content/uploads/2020/08/raised-by-wolves-hbo-max.jpg',
          description: "Androids are tasked with raising human children on a mysterious planet.",
          url: 'https://www.youtube.com/watch?v=rE92bDAlPXI',
          category: "c1"
        }, {
          name: 'Euphoria',
          img: 'https://televisionpromos.com/wp-content/uploads/2019/03/Euphoria-HBO-key-art-logo-740x416.jpg',
          description: "Euphoria follows a group of high school students as they navigate love and friendships in a world of drugs, sex, trauma and social media.",
          url: 'https://www.youtube.com/watch?v=teCrVa0J8v4&t=2s',
          category: "c1"
        }, {
          name: 'Control',
          img: 'https://www.spieltimes.com/wp-content/uploads/2019/08/basic.jpg',
          description: "The game revolves around the Federal Bureau of Control (FBC), a secret U.S. government agency tasked with containing and studying phenomena that violate the laws of reality. As Jesse Faden (Courtney Hope), the Bureau's new Director, the player explores the Oldest House – the FBC's paranormal headquarters – and utilizes powerful abilities in order to defeat a deadly enemy known as the Hiss, which has invaded and corrupted reality.",
          url: 'https://www.youtube.com/watch?v=PT5yMfC9LQM',
          category: "c3"
        }, {
          name: 'The Mitchells vs. the Machines',
          img: 'https://img.search.brave.com/zKIITOhiqZl2wyAn_RCnHKILSs3NzVMq7RGQaMv_Ut8/rs:fit:1200:675:1/g:ce/aHR0cHM6Ly9hcmVh/anVnb25lcy5zcG9y/dC5lcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy9sb3Mt/bWl0Y2hlbGwtY29u/dHJhLWxhcy1tYXF1/aW5hcy5qcGVn',
          description: "A robotic apocalypse puts a stop to their cross-country road trip. Now, the future of humanity depends on the Mitchells: the weirdest family in the world.",
          url: 'https://www.youtube.com/watch?v=_ak5dFt8Ar0',
          category: "c5"
        },
        {
          name: 'Blade Runner: Black Lotus',
          img: 'https://th.bing.com/th/id/OIP.tUaZrRP1HKj0tBCEf7SkiwHaD8?pid=ImgDet&rs=1',
          description: "Los Angeles, 2032. Elle, a young replicant with no memories and lethal abilities, goes in search of discovering her lost identity. His only clues are: a locked memory device and a tattoo of a black lotus on his right shoulder.",
          url: 'https://www.youtube.com/watch?v=eUu3lK_Z8VM',
          category: "c1"
        },
        {
          name: 'The Girl Next Door',
          img: 'https://imgmedia.wapa.pe/420x210/wapa/migration/imagen/2018/03/13/noticia-recuerdas-la-chica-de-al-lado-dejo-la-actuacion-por-esta-razon.png',
          description: "A teen's dream comes true when a former porn star moves in next door and they fall in love.",
          url: 'https://www.youtube.com/watch?v=s_b2APr9D48',
          category: "c5"
        },
        {
          name: 'Recordcast',
          img: 'https://visiongeek.pe/wp-content/uploads/RecordCast-un-grabador-de-pantalla-en-linea-y-gratuito-730x412.jpg',
          description: 'Records the screen and also allows to edit videos without needing to install it, all through the browser. Ideal for occasional use and on special occasions.',
          url: 'https://www.recordcast.com/',
          category: "c2"
        },
        {
          name: 'SmallPDF',
          img: 'https://images-na.ssl-images-amazon.com/images/I/41nRS1hfqRL.png',
          description: 'Offers different functions to handle PDFs. From edit and sign them, to compress or convert them into other file types. And so on.',
          url: 'https://smallpdf.com/',
          category: "c2"
        },
        {
          name: 'AlternativeTo',
          img: 'https://th.bing.com/th/id/OIP.AA7KEI6X920ckKLeLcWXCQHaDD?pid=ImgDet&rs=1',
          description: 'Web platform where you can filter and find programs similar to another. For example, finding a free program similar to Photoshop.',
          url: 'https://alternativeto.net/',
          category: "c2"
        },
        {
          name: 'Snapdrop',
          img: 'https://www.iphoned.nl/wp-content/uploads/2015/12/snapdrop-uitg-580x375.jpg',
          description: 'Web application where you can send files or messages securely, between devices connected on the same network.',
          url: 'https://snapdrop.net/',
          category: "c2"
        }, {
          name: 'Winter of The World',
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1280px-Open_book_nae_02.svg.png",
          description: " It is the second book in the Century Trilogy. The story follows characters from Germany, Britain, the United States and the Soviet Union, who become linked by events leading to World War II, and continues through the war and its immediate aftermath.",
          url: "https://ken-follett.com/books/winter-of-the-world-2/",
          category: "c4"
        }, {
          name: 'The Expanse',
          img: "https://img.winfuture.de/teaser/1920/41233.jpg",
          description: "The series is set in a future where humanity has colonized the Solar System. It follows a disparate band of protagonists and place themselves at the center of a conspiracy.",
          url: "https://www.youtube.com/watch?v=kQuTAPWJxNo",
          category: "c1"
        }, {
          name: 'Beyond Good & Evil',
          img: "https://cdn.cloudflare.steamstatic.com/steam/apps/15130/header.jpg?t=1620749841",
          description: "The story follows the adventures of Jade, an investigative reporter and martial artist, who works with a resistance movement to reveal a planet-wide alien conspiracy.",
          url: "https://www.youtube.com/watch?v=Wg4CDpo0aw0",
          category: "c3"
        }, {
          name: 'Deus Ex: Human Revolution',
          img: "https://www.escapistmagazine.com/v2/wp-content/uploads/2020/08/deusexhumanrevolution1.jpg",
          description: "Is set in 2027, just as human augmentation begins to enter mainstream life. These mechanical augmentations act as replacements for natural body parts, and allow the wearer to gain enhanced abilities, such as super strength or super stamina.",
          url: "https://www.youtube.com/watch?v=Kq5KWLqUewc",
          category: "c3"
        }, {
          name: 'Dishonored 2',
          img: "https://th.bing.com/th/id/R.fd072c3141f259b3be287e14124f5a7a?rik=APEyEPMVm9Lfxw&pid=ImgRaw&r=0",
          description: "Fifteen years after the events of the first game, Emily Kaldwin is dethroned by an otherworldly conspirator forcing herself, or her father, Corvo to go on a journey to clear her name and reinstate her rightful title as Empress.",
          url: "https://www.youtube.com/watch?v=l1jyUAtxh-8",
          category: "c3"
        }, {
          name: 'Prey',
          img: "https://th.bing.com/th/id/R.504c052ae9b1fe3999a9a16727b35dc6?rik=kvoFfTWqmLq4eQ&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fprey_2017-1920x1200.jpg&ehk=RtG5vsdWUGYCS4GRQeVtoJz9nBEy2hyNt2Jiz01vNoM%3d&risl=&pid=ImgRaw&r=0",
          description: "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.",
          url: "https://www.youtube.com/watch?v=LNHZ9WAertc",
          category: "c3"
        }, {
          name: 'Quantum Break',
          img: "https://17kgroup.it/wp-content/uploads/2018/03/quantum-break-remedy-lavoro-per-risolvere-problemi-della-versione-xbox-one-x-v5-322817.jpg",
          description: "In the aftermath of a split second of destruction that fractures time itself, two people find they have changed and gained extraordinary abilities. One of them travels through time and becomes hell-bent on controlling this power. The other uses these new abilities to attempt to defeat him – and fix time before it tears itself irreparably apart.",
          url: "https://www.youtube.com/watch?v=ruY1eT9bXiw",
          category: "c3"
        }, {
          name: 'Cobra Kai',
          img: "https://upload.wikimedia.org/wikipedia/it/1/12/Cobra_Kai.png",
          description: "Sequel of the original The Karate Kid films.Set 34 years later, Cobra Kai re-examines the narrative from Johnny's point of view, his decision to reopen the Cobra Kai karate dojo, and the rekindling of his old rivalry with Daniel.",
          url: "https://www.youtube.com/watch?v=lkaIYfA1WOs",
          category: "c1"
        }, {
          name: 'Reminiscence',
          img: "https://th.bing.com/th/id/OIP.6L8KibveXA7umWl1IqCfsAHaEK?pid=ImgDet&rs=1",
          description: "A scientist discovers a way to relive the past and uses technology to search for his long-lost love.",
          url: "https://www.youtube.com/watch?v=_BggT--yxf0",
          category: "c5"
        }, {
          name: "Schindler's List",
          img: "https://picfiles.alphacoders.com/224/224155.jpg",
          description: "In German-occupied Poland during World War II, industrialist Oskar Schindler worries about his Jewish workers after witnessing their persecution by the Nazis.",
          url: "https://www.youtube.com/watch?v=mxphAlJID9U",
          category: "c5"
        }, {
          name: "Blue Valentine",
          img: "https://www.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/blue-valentine/galeria/blue-valentine/13724094-1-esl-ES/blue-valentine.jpg",
          description: "The relationship of a marriage through the years interspersing different periods.",
          url: "https://www.youtube.com/watch?v=aILx69WrRhQ",
          category: "c5"
        }
      ]
    }
  ];
}
