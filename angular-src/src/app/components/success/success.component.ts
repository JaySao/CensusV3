import { Component, OnInit } from '@angular/core';
import { Poll } from '../../classes/poll';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  id = this.activatedRoute.params['_value'].id
  poll:Poll
  pollLink = "poll/"+this.id
  pollResults = "results/"+this.id
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    

  }
  goToPoll(){
    this.router.navigate(['/poll',this.id])
  }


}
