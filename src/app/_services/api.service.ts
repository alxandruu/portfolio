import { Injectable } from '@angular/core';
import { Project } from '../_interfaces/project';
import { Blog } from '../_interfaces/blog';
import { Resource } from '../_interfaces/resource';


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

  blog: Blog[] = [
    {
      id: 'pwa-or-exe',
      date: new Date('12.09.2020'),
      type: 'tech',
      image: 'proto.jpg',
      title: 'Why do I prefer PWAs, rather than .EXE?',
      description: 'PWAs are web applications that can be installed on any device with internet access, while the .EXE are applications that have to be compatible with the device in terms of hardware.',
      content: [
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'images',
          text: 'proto.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'images',
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
          class: 'images',
          text: 'dollar.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'images',
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
          class: 'images',
          text: 'bitcoin.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'images',
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
          class: 'images',
          text: 'madrid.jpg'
        },
        {
          class: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore alias blanditiis sint, suscipit rerum fugiat iste harum dolor odio, fuga maxime eaque qui modi dolore aperiam est quis cum? Quidem culpa cumque ab aperiam illum ipsam reiciendis fugiat mollitia eos repellendus, ipsa quasi optio assumenda quod dolorum repudiandae magni placeat tempora fugit impedit ad atque asperiores delectus earum! Id. A sequi tempora mollitia vel animi libero rerum officia quaerat dolorem, totam corrupti? Ab, unde? Nam minima eligendi officiis doloremque obcaecati omnis quam, inventore quibusdam voluptas ea veniam, reiciendis culpa! Itaque exercitationem aperiam soluta officiis tempora dolor rerum tenetur nostrum iste eum voluptate fugit accusamus distinctio perspiciatis magni, nulla officia! Nesciunt ut minima culpa.Ipsum facilis recusandae consequatur quo dolorum. Illum, architecto aliquid eius dolore recusandae placeat quaerat quasi fugit, consectetur, fugiat impedit? Ab repellendus qui in optio ut cupiditate nam neque temporibus voluptas, quod eligendi, doloribus, sapiente sunt aliquam. Cupiditate laborum rerum aliquid officiis aut deserunt, voluptatum odio asperiores rem error iste. Itaque cumque ullam id deleniti eaque similique, nesciunt recusandae distinctio quae labore officiis cupiditate dicta sunt non? Rerum omnis voluptate soluta quod perspiciatis totam quidem pariatur doloremque nemo porro ea sed repellendus officia, odit impedit aliquam alias expedita.Ut fugit soluta unde, corporis molestias tenetur perferendis voluptates. Voluptates recusandae, quaerat facilis fugit consectetur saepe praesentium aut est totam corporis, nam aperiam, id unde quam fugiat laudantium nesciunt assumenda optio enim error officiis ab quo maiores? Dolore, tempora! Numquam non necessitatibus accusantium possimus? Placeat illum molestiae, repellendus soluta veritatis odit labore, ea nostrum laboriosam ipsam corrupti deserunt repellat perferendis error ab similique laborum praesentium vel ad.Itaque, nam! Quam fuga veritatis hic natus aliquam.Corporis maxime, impedit tenetur adipisci sapiente sit dolorum est inventore, esse illum vel explicabo ex deserunt fugit optio placeat magnam? Quos deleniti sint non.'
        },
        {
          class: 'images',
          text: 'madrid.jpg'
        },
      ]
    }
  ]

  private resources: Array<Resource> = [
    {
      name: 'Recordcast',
      img: 'recordcast.jpg',
      description: 'Records the screen and also allows to edit videos without needing to install it, all through the browser. Ideal for occasional use and on special occasions.',
      url: 'https://www.recordcast.com/'
    },
    {
      name: 'SmallPDF',
      img: 'smallpdf.png',
      description: 'Offers different functions to handle PDFs. From edit and sign them, to compress or convert them into other file types. And so on.',
      url: 'https://smallpdf.com/'
    },
    {
      name: 'AlternativeTo',
      img: 'alternativeto.jpg',
      description: 'Web platform where you can filter and find programs similar to another. For example, finding a free program similar to Photoshop.',
      url: 'https://alternativeto.net/'
    },
    {
      name: 'Snapdrop',
      img: 'snapdrop.jpg',
      description: 'Web application where you can send files or messages securely, between devices connected on the same network.',
      url: 'https://snapdrop.net/'
    }
  ]
  constructor() {
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
