import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GithubComponent } from './github.component';
import { GitService } from './services/github.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [GithubComponent],
    providers: [GitService],
    bootstrap: [GithubComponent]
})
export class AppModule { }
