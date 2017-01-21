import { Component, OnInit } from '@angular/core';
import { GitService } from './services/github.service';

@Component({
    moduleId: module.id,
    selector: 'github-app',
    templateUrl: './views/github.component.html'
})
export class GithubComponent implements OnInit {
    user: any;
    repos: Array<Object> = [];
    username: string;
    error: boolean = false;

    constructor(private _gitService: GitService) { }

    ngOnInit() {
        this.callServices();
    }

    query() {
        this.error = false;
        this._gitService.updateUser(this.username);
        this.callServices();
    }

    callServices() {
        this._gitService.getUserInfo()
            .subscribe(
            (user: any) => this.user = user,
            error => this.error = true
            );
        this._gitService.getRepoInfo()
            .subscribe(
            (repo: any) => this.repos = repo,
            error => this.error = true
            );

    }
}
