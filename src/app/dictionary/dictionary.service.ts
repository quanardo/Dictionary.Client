import { Injectable } from '@angular/core';
import { DICTIONARY } from '../mock-db';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.prod';
import { Dictionary } from '../store/dictionary/dictionary';
// import { AppState } from '../app.state';
// import { map } from 'rxjs/operators';
// import { HttpClient } from 'selenium-webdriver/http';
// import { HttpMethod } from 'blocking-proxy/built/lib/webdriver_commands';


@Injectable()
export class DictionaryService {

  db = DICTIONARY;
  currLangData: any[] = [];
  // private HOST = '//localhost:3000';
  // HOST = process.env.PORT || 3000;

  constructor(
    private http: HttpClient,
  ) { }

  public getDict(): Observable<any> {
    return this.http.get<any>(env.api + '/dictionary')
      // .pipe(map(dictionary => dictionary.items));

    // .map((payload: Dictionary[]) => {
    //   return { type: 'ADD_LANGUAGE', payload };
    // })
    // .subscribe((action) => {
    //   this.store.dispatch(action);
    // });
    // return of(this.db);
  };

  public addLang(newLang: string): Observable<any> {
    return this.http.post(env.api + '/dictionary', newLang);
    // this.db.push({ 'name': lang, 'translations': [] });
    // return of(this.db);
  };

  public updateLang(dictionary: Dictionary): Observable<any> {
    return this.http.post(env.api + '/dictionary/' + dictionary._id, {language: dictionary.language});
  };

  public removeLang(id: any): Observable<any> {
    // var index = this.db.indexOf(this.getWords(this.db, 'name', langToRemove));
    return this.http.delete(env.api + '/dictionary/' + id);
    // return this.http.get(environment.api + '/dictionary');
    // this.db.splice(index, 1);
    // return of(this.db);
  };

  // setLang(currLang: string): number {
  //   return this.db.indexOf(this.getWords(this.db, 'name', currLang));
  // };

  public addTrsl(currLang: string, w1: string, w2: string): Observable<any> {
    // var newTrsl = {'w1': w1, 'w2': w2};
    // return this.http.post(environment.api + '/dictionary', index,);
    var index = this.db.indexOf(this.getWords(this.db, 'name', currLang));
    this.db[index].translations.push({ 'w1': w1, 'w2': w2 });
    return of(this.db);
  };

  public removeTrsl(currLang: string, trslToRemove: any): Observable<any> {
    // return this.http.delete('/dictionary', );
    var indexOfLang = this.db.indexOf(this.getWords(this.db, 'name', currLang));
    var currLangArr = this.db[indexOfLang];
    var indexOfTrsl = currLangArr.translations.indexOf(trslToRemove);
    currLangArr.translations.splice(indexOfTrsl, 1);
    return of(this.db);
  }


  private getWords(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  };
}
