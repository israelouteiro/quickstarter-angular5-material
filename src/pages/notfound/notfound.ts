import { Component , Input } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
@Component({
  templateUrl: './notfound.html',
  styleUrls: ['./notfound.scss']
})
export class NotfoundComponent  {
  constructor(
    public router: Router
  ) {  }
  
  ngAfterViewInit() { }

  callIndex(){
    this.router.navigate(['/'])
  }
}