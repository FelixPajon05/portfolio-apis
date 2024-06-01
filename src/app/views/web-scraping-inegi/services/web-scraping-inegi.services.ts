import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environment/environment.develoment";
// import { environment } from "../../environment/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class WebScrapingInegiService {

    constructor( private httpClient: HttpClient ) { }

    private base_url = environment.base_url;

    private getHeaders(): { headers: HttpHeaders } {
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders({ 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        });
        return { headers };
    }

    public getGeneralCountryData(): Observable<any> {
        const request_options = this.getHeaders();
        return this.httpClient.get<any>(`${this.base_url}/consult`, request_options );
    }

    public getDataByState(state: string): Observable<any> {
        const request_options = this.getHeaders();
        const body = { state };
        return this.httpClient.post<any>(`${this.base_url}/entity`, body, request_options);
    }

    // public getDataByState(state: string): Observable<any> {
    //     const request_options = this.getHeaders();
    //     const body = { state };
    //     console.log(body);
    //     return this.httpClient.post<any>(`${this.base_url}/entity`, body, request_options );
    // }

}
