import { Injectable } from '@angular/core'
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class newsFeedService {
    constructor(private http: Http){
        console.log('newsFeed service Initialized...');
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
}
