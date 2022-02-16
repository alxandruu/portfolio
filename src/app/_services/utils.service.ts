import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private _lang: any;


  constructor() {
    this._lang = "en";
  }


  public get lang(): any {
    return this._lang;
  }
  public set lang(value: any) {
    this._lang = value;
  }

  public webpageLanguage() {
    const language = navigator.language;
    const languages_available = ["es", "en"];
    const localstorage_language = sessionStorage.getItem("language");

    if (!localstorage_language) {
      if (language.includes(languages_available[0])) {
        sessionStorage.setItem("language", languages_available[0]);
      } else {
        sessionStorage.setItem("language", languages_available[1]);
      }
    }
  }

  changeLanguage(key: string) {
    sessionStorage.setItem("language", key);
    this._lang = key;
  }


}
