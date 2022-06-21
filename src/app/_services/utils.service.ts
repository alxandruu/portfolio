import { Injectable } from '@angular/core';
import { LanguageTextGroup } from '../_interfaces/language-text-group';



@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private _lang: any;
  private _theme: any;

  constructor() {
    this._lang = "en";
  }


  public get lang(): any {
    return this._lang;
  }
  public set lang(value: any) {
    this._lang = value;
  }

  public get theme(): any {
    return this._theme;
  }
  public set theme(value: any) {
    this._theme = value;
  }


  public webpageLanguage() {
    const language = navigator.language;
    const languages_available = ["es", "en", "ro"];
    const localstorage_language = localStorage.getItem("language");

    if (!localstorage_language) {
      if (language.includes(languages_available[0])) {
        localStorage.setItem("language", languages_available[0]);
      } else if (language.includes(languages_available[2])) {
        localStorage.setItem("language", languages_available[2]);
      } else {
        localStorage.setItem("language", languages_available[1]);
      }
    }
  }

  changeLanguage(key: string) {
    localStorage.setItem("language", key);
    this._lang = key;
  }

  public webpageTheme() {
    const localstorage_theme = localStorage.getItem("theme");
    let key;
    let keyActive;
    if (!localstorage_theme) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        // Theme set to dark.
        key = "dark";
        keyActive = "light";
      } else {
        // Theme set to light.
        key = "light";
        keyActive = "dark";
      }
    } else {
      key = localstorage_theme;
      keyActive = (key == "dark" ? "light" : "dark");
    }

    this.theme = key;
    document.documentElement.setAttribute('data-theme', key);
    localStorage.setItem('theme', key);
  }

  public getLanguageText(languageTexts: Array<LanguageTextGroup>): any {
    const lang = this.lang;
    let languageTextGroup = null;
    for (let i = 0; i < languageTexts.length && !languageTextGroup; i++) {
      if (languageTexts[i].lang == lang) {
        languageTextGroup = languageTexts[i];
      }
    }

    return languageTextGroup;
  }


  // Data Management
  public getDataByLang(data: any): any {
    const lang = this.lang;
    let output = null;
    for (let i = 0; i < data.length && !output; i++) {
      if (data[i].lang == lang) {
        output = data[i];
      }
    }

    return output;
  }

  public getObjectFromData(data: any, id: string): any {
    const dataGroup: any = this.getDataByLang(data);
    for (let i = 0; i < dataGroup.data.length; i++) {
      if (dataGroup.data[i].id == id) {
        return dataGroup.data[i];
      }
    }
    return null;
  }

}
