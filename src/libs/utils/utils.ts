import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { environment } from '../../environments/environment'
import { DialogAlert } from '../../components/dialog_alert/dialog_alert' 
import { DialogConfirm } from '../../components/dialog_confirm/dialog_confirm' 

declare let $:any;
declare let showAlert:any;
declare let showDialog:any;
declare let showAlertError:any;

@Injectable()
export class Utils {

  constructor( public dialog: MatDialog ){ }

  alert(sMessage): void {
    let dialogRef = this.dialog.open( DialogAlert , {
      width: '250px',
      data: { message: sMessage }
    });
  }

  confirm(sMessage, cb ){
    let dialogRef = this.dialog.open( DialogConfirm , {
      width: '250px',
      data: { message: sMessage }
    });

    dialogRef.afterClosed().subscribe(result => {
      cb(result)
    });
  }

  showLoad(){
    $('#div-loader').css('display','flex');
  }

  hideLoad(){
    $('#div-loader').css('display','none');
  }

  isEmail(xmail){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(xmail)
  }

  resolveError(error){
    this.hideLoad();
    try{
      let parsedError = JSON.parse(error._body)
      this.alert( parsedError.message );
    }catch(err){
      this.alert("Não consigo me conectar ao servidor, verifique sua conexão");
    }
  }


}