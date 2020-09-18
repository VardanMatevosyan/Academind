import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from './post.model';
import {catchError, map} from 'rxjs/operators';
import {Observable, Subject, throwError} from "rxjs";

@Injectable({providedIn : 'root'})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {
  }

  createAnsStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http
      .post< {name: string} >(
        'https://angularhttpsection-90966.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  deletePost() {
    return this.http.delete('https://angularhttpsection-90966.firebaseio.com/posts.json');
  }

  fetchPost(): Observable<Post[]> {
    return this.http.get<{[key: string]: Post}>('https://angularhttpsection-90966.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
        );
  }
}
