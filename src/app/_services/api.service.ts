import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';
import { Blog } from '../_interfaces/blog';
import { Resource } from '../_interfaces/resource';
import { Category } from '../_interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  projects: Project[] = [
    { id: "attiapp", type: "big", name: "Attia APP", img: "attiapp.jpg", description: "Web Application where you can manage the essential information of a business.", website: "", platform: ["Web Application"], stack: ["Angular", "PHP", "mySQL"], imgs: ["attiapp.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg", "preview_4.jpeg", "preview_5.jpeg", "preview_6.jpeg", "preview_7.jpeg", "preview_8.jpeg", "preview_9.jpeg"], in_development: false },
    { id: "ocaonline", type: "small", name: "La Oca Online", img: "laocaonline.jpg", description: "Online Version of a popular spanish board game, this version is only for two players.", website: "https://alxandruu.github.io/daw-laocaonline/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript"], imgs: ["laocaonline.jpg"], in_development: false },
    { id: "minatoshop", type: "small", name: "Minato Shop", img: "minatoshop.jpg", description: "Online commerce where you can find minimalism clothes and accesories.", website: "https://alxandruu.github.io/daw-escaparatevirtual/", platform: ["Web Application"], stack: ["HTML", "CSS", "JavaScript", "JSON"], imgs: ["minatoshop.jpg", "preview_1.jpeg", "preview_2.jpeg", "preview_3.jpeg"], in_development: false },
    { id: "gestor", type: "big", name: "Gestor", img: "", description: "Web Application where an employee can manage his HR information through different actions.", website: "", platform: ["Web Application"], stack: ["Angular", "Node", "MongoDB"], imgs: ["preview_1.jpeg", "preview_2.jpeg"], in_development: true },
  ];

  private categories: Category[] = [
    { id: "c0", name: "All Categories" },
    { id: "c1", name: "TV Series" },
    { id: "c2", name: "Web Apps" },
    { id: "c3", name: "Videogames" },
    { id: "c4", name: "Books" },
    { id: "c5", name: "Films" },
  ];

  blog: Blog[] = [
    {
      id: 'pwa-or-exe',
      date: new Date('01.09.2022'),
      type: 'tech',
      image: 'proto.jpg',
      title: 'Why do I prefer PWAs, rather than .EXE?',
      description: 'PWAs are web applications that can be installed on any device with internet access, while the .EXE are applications that have to be compatible with the device in terms of hardware.',
      content: [
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inve aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'proto.jpg'
        },
        {
          class: 'header',
          text: 'Where can I run it?'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'proto.jpg'
        },

      ]
    },
    {
      id: 'dollarFiat',
      date: new Date('12.12.2020'),
      type: 'economy',
      image: 'dollar.jpg',
      title: 'The meaning of Money',
      description: 'PWAs are web applications that can be installed on any device with internet access, while the .EXE are applications that have to be compatible with the device in terms of hardware.',
      content: [
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'dollar.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'dollar.jpg'
        },
      ]
    },
    {
      id: 'bitcoin',
      date: new Date('12.23.2020'),
      type: 'economy',
      image: 'bitcoin.jpg',
      title: 'What offers Crypto? And why is important for the future?',
      description: 'PWAs are web applications that can be installed on any device with internet access, while the .EXE are applications that have to be compatible with the device in terms of hardware.',
      content: [
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'bitcoin.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'bitcoin.jpg'
        },
      ]
    },
    {
      id: 'madridcity',
      date: new Date('12.29.2020'),
      type: 'Travel',
      image: 'madrid.jpg',
      title: 'Places to visit in Madrid',
      description: 'PWAs are web applications that can be installed on any device with internet access, while the .EXE are applications that have to be compatible with the device in terms of hardware.',
      content: [
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'madrid.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'image',
          text: 'madrid.jpg'
        },
      ]
    }
  ]

  private resources: Array<Resource> = [
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
      url: "https://www.filmaffinity.com/en/film757227.html",
      category: "c1"
    }, {
      name: 'Beyond Good & Evil',
      img: "https://cdn.cloudflare.steamstatic.com/steam/apps/15130/header.jpg?t=1620749841",
      description: "The story follows the adventures of Jade, an investigative reporter and martial artist, who works with a resistance movement to reveal a planet-wide alien conspiracy.",
      url: "https://store.steampowered.com/app/15130/Beyond_Good_and_Evil/",
      category: "c3"
    }, {
      name: 'Deus Ex: Human Revolution',
      img: "https://www.escapistmagazine.com/v2/wp-content/uploads/2020/08/deusexhumanrevolution1.jpg",
      description: "Is set in 2027, just as human augmentation begins to enter mainstream life. These mechanical augmentations act as replacements for natural body parts, and allow the wearer to gain enhanced abilities, such as super strength or super stamina.",
      url: "https://store.steampowered.com/app/238010/Deus_Ex_Human_Revolution__Directors_Cut/",
      category: "c3"
    }, {
      name: 'Dishonored 2',
      img: "https://th.bing.com/th/id/R.fd072c3141f259b3be287e14124f5a7a?rik=APEyEPMVm9Lfxw&pid=ImgRaw&r=0",
      description: "Fifteen years after the events of the first game, Emily Kaldwin is dethroned by an otherworldly conspirator forcing herself, or her father, Corvo to go on a journey to clear her name and reinstate her rightful title as Empress.",
      url: "https://store.steampowered.com/app/403640/Dishonored_2/",
      category: "c3"
    }, {
      name: 'Prey',
      img: "https://th.bing.com/th/id/R.504c052ae9b1fe3999a9a16727b35dc6?rik=kvoFfTWqmLq4eQ&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fprey_2017-1920x1200.jpg&ehk=RtG5vsdWUGYCS4GRQeVtoJz9nBEy2hyNt2Jiz01vNoM%3d&risl=&pid=ImgRaw&r=0",
      description: "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.",
      url: "https://store.steampowered.com/app/480490/Prey/",
      category: "c3"
    }, {
      name: 'Quantum Break',
      img: "https://17kgroup.it/wp-content/uploads/2018/03/quantum-break-remedy-lavoro-per-risolvere-problemi-della-versione-xbox-one-x-v5-322817.jpg",
      description: "In the aftermath of a split second of destruction that fractures time itself, two people find they have changed and gained extraordinary abilities. One of them travels through time and becomes hell-bent on controlling this power. The other uses these new abilities to attempt to defeat him – and fix time before it tears itself irreparably apart.",
      url: "https://store.steampowered.com/app/474960/Quantum_Break/",
      category: "c3"
    }, {
      name: 'Cobra Kai',
      img: "https://upload.wikimedia.org/wikipedia/it/1/12/Cobra_Kai.png",
      description: "Sequel of the original The Karate Kid films.Set 34 years later, Cobra Kai re-examines the narrative from Johnny's point of view, his decision to reopen the Cobra Kai karate dojo, and the rekindling of his old rivalry with Daniel.",
      url: "https://www.netflix.com/es/title/81002370",
      category: "c1"
    }, {
      name: 'Reminiscence',
      img: "https://th.bing.com/th/id/OIP.6L8KibveXA7umWl1IqCfsAHaEK?pid=ImgDet&rs=1",
      description: "A scientist discovers a way to relive the past and uses technology to search for his long-lost love.",
      url: "https://www.imdb.com/title/tt3272066/",
      category: "c5"
    }, {
      name: "Schindler's List",
      img: "https://picfiles.alphacoders.com/224/224155.jpg",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler worries about his Jewish workers after witnessing their persecution by the Nazis.",
      url: "https://www.imdb.com/title/tt0108052/",
      category: "c5"
    }, {
      name: "Blue Valentine",
      img: "https://www.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/blue-valentine/galeria/blue-valentine/13724094-1-esl-ES/blue-valentine.jpg",
      description: "The relationship of a marriage through the years interspersing different periods.",
      url: "https://www.imdb.com/title/tt1120985/",
      category: "c5"
    }
  ]
  constructor() {
  }



  getCategories(id: string = ""): any {
    const categories = this.categories;
    if (id != "") {
      let category = categories.find(element => element.id === id);
      return category;

    } else {
      return categories;
    }
  }


  getProjects(type: string = "") {
    const projects = this.projects;
    if (type != "") {
      let arr: Project[] = [];
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].type == type) {
          arr.push(projects[i]);
        }
      }
      return arr;
    } else {
      return projects;
    }
  }

  getProject(id: string): any {
    const projects = this.projects;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id == id) {
        return projects[i];
      }
    }
    return null;
  }

  getBlog(index: number = 0) {
    const blog = this.blog.sort((a, b) => b.date.getTime() - a.date.getTime());
    if (index == 0) {
      return blog;
    } else {
      return blog.slice(0, index);
    }
  }

  getOneBlog(id: string): any {
    const blog = this.blog;
    for (let i = 0; i < blog.length; i++) {
      if (blog[i].id == id) {
        return blog[i];
      }
    }
    return null;
  }

  getResources(): Array<Resource> {
    const resources = this.resources;
    return resources;
  }
}
