export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return  new Promise(
      (resole, reject) => {
        setTimeout(() => {
          resole(this.loggedIn);
        }, 800);
      }
    );
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn =  false;
  }
}
