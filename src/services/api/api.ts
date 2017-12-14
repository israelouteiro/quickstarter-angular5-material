import { Injectable } from '@angular/core'
import { Http , Response , Headers } from '@angular/http'
import { environment } from '../../environments/environment'
import 'rxjs/Rx';
@Injectable()
export class ApiService {

  apiClientID = environment.apiClientId
  apiClientSecret = environment.apiClientSecret
  apiUrl = environment.apiUrl

  constructor(public http: Http){
  }

  getHeaders(){
    var myHeaders = new Headers();
    var currentToken = window.localStorage.getItem("access_token");
    var tokenType = window.localStorage.getItem("token_type");
    myHeaders.append( 'Authorization', `${ tokenType } ${ currentToken }`);
    return myHeaders;
  }

  userLogged(){
    var currentToken = window.localStorage.getItem("access_token");
    if( currentToken !== null ){
      return true;
    } return false;
  }

  doLogout(){
    window.localStorage.setItem("access_token", null )
    window.localStorage.setItem("token_type", null )
  }

  /// Api calls
  getHello(){ 
    return this.http.get(`${ this.apiUrl }v0/hello`)
    .map(response => response.json())
  }
  // Users
  postLogin( email, password ){ 
    let obj_login = {
       'grant_type':'password',
       'client_id':this.apiClientID,
       'client_secret':this.apiClientSecret,
       'username':email,
       'password':password
    }
    var currentAuthorization = this.getHeaders()
    return this.http.post(`${ this.apiUrl }oauth/token`, obj_login, {
      headers: currentAuthorization
    }) .map(response => response.json())
  }

  getUsers(){ 
    var currentAuthorization = this.getHeaders()
    return this.http.get(`${ this.apiUrl }v0/users`, {
      headers: currentAuthorization
    }) .map(response => response.json())
  }

  getLoggedUser(){ 
    var currentAuthorization = this.getHeaders()
    return this.http.get(`${ this.apiUrl }v0/user`, {
      headers: currentAuthorization
    }) .map(response => response.json())
  }

  postUser(obj_user){ 
    var currentAuthorization = this.getHeaders()
    return this.http.post(`${ this.apiUrl }v0/users`, obj_user, {
      headers: currentAuthorization
    }) .map(response => response.json())
  }

  getUser(id){ 
    var currentAuthorization = this.getHeaders()
    return this.http.get(`${ this.apiUrl }v0/users/${ id }`, {
      headers: currentAuthorization
    }) .map(response => response.json())
  }

  putUser(obj_user, id){ 
    var currentAuthorization = this.getHeaders()
    return this.http.put(`${ this.apiUrl }v0/users/${ id }`, obj_user, {
      headers: currentAuthorization
    }) .map(response => response.json())
  } 

  get(url){
    return this.http.get(`${ url }`)
      .map(response => {})
  }
}