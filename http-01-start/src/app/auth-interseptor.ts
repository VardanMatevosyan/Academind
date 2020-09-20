import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Before the request will sent")
    let modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'zys')
    });
    return next.handle(modifiedRequest);
  }
}
