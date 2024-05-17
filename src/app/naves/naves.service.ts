import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Nave } from './nave';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>(this.apiUrl);
  }

  getNavesRebelion(): Observable<number> {
    return new Observable<number>(observer => {
      this.http.get<Nave[]>(this.apiUrl).subscribe((naves) => {
        observer.next(naves.filter(nave => nave.bando === 'Rebelión').length);
      });
    }
    );
  }

  getNavesImperio(): Observable<number> {
    return new Observable<number>(observer => {
      this.http.get<Nave[]>(this.apiUrl).subscribe((naves) => {
        observer.next(naves.filter(nave => nave.bando === 'Imperio').length);
      });
    }
    );
  }

  getNavesNeutral(): Observable<number> {
    return new Observable<number>(observer => {
      this.http.get<Nave[]>(this.apiUrl).subscribe((naves) => {
        observer.next(naves.filter(nave => nave.bando === 'Neutral').length);
      });
    }
    );
  }

}
