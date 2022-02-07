import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  public webpageLanguage() {
    const language = navigator.language;
    const languages_available = ["es", "en"];
    const localstorage_language = localStorage.getItem("language");


    if (language.includes(languages_available[0])) {
      localStorage.setItem("language", languages_available[0]);
    } else {
      localStorage.setItem("language", languages_available[1]);
    }

  }


}
