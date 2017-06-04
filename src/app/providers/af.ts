import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor(public af: AngularFire) {
    this.messages = this.af.database.list('messages');
  }

  /**
  * LOGIN METHODS
  */

  /**
  * Logs the user in using their Email/Password combo
  * @param email
  * @param password
  * @returns {firebase.Promise<FirebaseAuthState>}
  */

   loginWithEmail(email, password) {
     return this.af.auth.login({
         email: email,
         password: password,
       },
       {
         provider: AuthProviders.Password,
         method: AuthMethods.Password,
       });
   }

   /**
    * Logs in the user using Google
    * @returns {firebase.Promise<FirebaseAuthState>}
    */

   loginWithGoogle() {
     return this.af.auth.login({
       provider: AuthProviders.Google,
       method: AuthMethods.Popup,
     });
   }

   /**
    * Logs in the user using Twitter
    * @returns {firebase.Promise<FirebaseAuthState>}
    */

   loginWithTwitter() {
     return this.af.auth.login({
       provider: AuthProviders.Twitter,
       method: AuthMethods.Popup,
     });
   }

   /**
    * Logs in the user using Facebook
    * @returns {firebase.Promise<FirebaseAuthState>}
    */

   loginWithFacebook() {
     return this.af.auth.login({
       provider: AuthProviders.Facebook,
       method: AuthMethods.Popup,
     });
   }

   /**
    * Logs in the user using Github
    * @returns {firebase.Promise<FirebaseAuthState>}
    */

   loginWithGithub() {
     return this.af.auth.login({
       provider: AuthProviders.Github,
       method: AuthMethods.Popup,
     });
   }

  /**
   * Logs out the current user
   */

  logout() {
    this.email = '';
    this.displayName = '';
    return this.af.auth.logout();
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */

  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }

  /**
   * Calls the AngularFire2 service to register a new user
   * @param model
   * @returns {firebase.Promise<void>}
   */

  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }

  /**
   * Saves information to display to screen when user is logged in
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */

  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
  }

}
