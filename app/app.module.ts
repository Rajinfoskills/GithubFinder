import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { GithubComponent } from './github.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [GithubComponent],
    providers: [/* TODO: Providers go here */],
    bootstrap: [GithubComponent]
})
export class AppModule { }
