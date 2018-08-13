import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Poll } from '../../classes/poll';
import { Http,Headers } from '../../../../node_modules/@angular/http';
// import * as $ from 'jquery';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  poll:Poll = new Poll
  id = this.activatedRoute.params['_value'].id
  answers:Array<Object> = new Array
  total = 0
  myLength = 0
  // myVar = document.getElementById("0bar").style.width = "100%";
  url = window.location.href
  pollLink = this.url.replace("results/","poll/");
  constructor(private activatedRoute:ActivatedRoute, private router:Router,private http:Http) { }

  ngOnInit() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/poll/'+this.id,{headers:headers}).toPromise().then(
      res =>{
        let jsonBody = res['_body']
        let data = JSON.parse(jsonBody)
        console.log(data)
        this.poll=data['poll']
        for(let i=0; i<this.poll.choices.length; i++){
          this.answers.push({choice: this.poll.choices[i], score: this.poll.results[i], id:i})
        }
        this.myLength = this.poll.choices.length
        console.log(this.myLength)
        this.calcTotal()
        setTimeout(this.setWidths(), 200)
        // for(let i=0; i<this.poll.choices.length; i++){
        //   $("0").css("style","width:100%")
        // }
      }, err =>{
        console.log(err)
      }
    )
  }
  calcTotal(){
    for(let i=0; i<this.answers.length; i++){
      this.total += parseInt(this.answers[i]['score'])
    }
    // document.getElementById("0bar").style.width = "100%";

  }
  setWidths(){
    // document.getElementById("0bar").style.width = "100%";
    // document.getElementById("0bar").style.width = "100%";
    setTimeout(()=>{
      console.log(this.total)
      for(let i=0; i<this.myLength; i++){
        console.log("setting widths")
        let barLength = 0;
        barLength = this.answers[i]['score']
        console.log(barLength)
        document.getElementById([i]+"bar").style.width = (barLength/this.total)*100+"%";
      }
    }, 200)

  }


}
