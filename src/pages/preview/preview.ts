import { Component , Input } from '@angular/core'
import { Http } from '@angular/http'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  templateUrl: './preview.html',
  styleUrls: ['./preview.scss']
})
export class PreviewComponent  {

  event_id

  constructor(
    public router: Router, 
    public route: ActivatedRoute
  ) {  }
  
  ngAfterViewInit() { }

  callIndex(){
    this.router.navigate(['/'])
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.event_id = +params['uid']; 
    });
  }
  
}
