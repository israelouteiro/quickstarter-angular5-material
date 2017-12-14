import { Component , Input } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'


@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent  {
  constructor(
    public router: Router
  ) {  }
  
  ngAfterViewInit() { }

  navigateTo(page){
    this.router.navigate([`/${ page }`])
  }

}