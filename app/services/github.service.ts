import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GitService {
    user: string = "Rajinfoskills";
    client_id: string = "ad240daca588ecfef2d1";
    apiUrl: string = "https://api.github.com/users/"
    client_secret: string = "17cd15dec3516cdbad3758f362780beb4d38f07b";


    constructor(private _http: Http) { }

    updateUser(user: string) { this.user = user; }

    getUserInfo() {
        return this._http.get(this.apiUrl + this.user + "?" + this.getParams())
                   .map(response => response.json());
    }

    getRepoInfo() {
        return this._http.get(this.apiUrl + this.user + "/repos?" + this.getParams())
                   .map(response => response.json());
    }

    getParams() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('username', this.user);
        params.set('client_id', this.client_id);
        params.set('client_secret', this.client_secret);
        return params;
    }
}