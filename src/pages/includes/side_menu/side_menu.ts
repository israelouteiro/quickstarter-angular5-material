import { Component , Input } from '@angular/core'
import { Http } from '@angular/http'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector:'side-menu',
  templateUrl: './side_menu.html',
  styleUrls: ['./side_menu.scss']
})
export class SideMenu  {

  map

  modalities = []
  trainers = []
  lat = -14.8414696;
  long = -51.5384179;
  modality_id = 0;

  current_modality = ''

  constructor(
    private router: Router,
    public route: ActivatedRoute,
  ) {  }

  ngAfterViewInit() {

  }

  navigateTo(page){
    this.router.navigate([`/${ page }`])
  }
  openLink(uri){
    window.open(uri,'social');
  }

}
