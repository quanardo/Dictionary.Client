import { Injectable } from '@angular/core';
import { DICTIONARY } from '../mock-db';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment.prod';


@Injectable()
export class DictionaryDetailService {
  // private HOST = '//localhost:3000';

  constructor(private http: HttpClient) { }

  public getTranslations(id): Observable<any> {
    return this.http.get(env.api + '/dictionary/' + id);
  }

  public removeTrsl(id, trslID): Observable<any> {
    return this.http.post(env.api + '/dictionary/removeTrsl/' + id, { _id: trslID });
  }

  public updateTrsl(id, translation): Observable<any> {
    return this.http.post(env.api + '/dictionary/updateTrsl/' + id, translation);
  }

  public addTrsl(id, translation): Observable<any> {
    return this.http.post(env.api + '/dictionary/addTrsl/' + id, translation);
  }
}
