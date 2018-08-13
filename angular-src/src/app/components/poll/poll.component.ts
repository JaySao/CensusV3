import { Component, OnInit } from '@angular/core';
import { Poll } from '../../classes/poll';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Http,Headers } from '../../../../node_modules/@angular/http';
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll:Poll = new Poll
  choice:number
  id = this.activatedRoute.params['_value'].id
  answers:Array<Object> = new Array

  constructor(private activatedRoute:ActivatedRoute,private http:Http, private router:Router) { }

  ngOnInit() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/poll/'+this.id,{headers:headers}).toPromise().then(
      res =>{
        let jsonBody = res['_body']
        let data = JSON.parse(jsonBody)
        console.log(data)
        this.poll=data['poll']
        console.log(this.poll.question)
        for(let i=0; i<this.poll.choices.length; i++){
          this.answers.push({choice: this.poll.choices[i], id:i})
        }
        console.log(this.answers)
      }, err =>{
        console.log(err)
      }
    )
  }
  chooseChoice(id){
    console.log("Choose me "+ id)
    this.choice = id
  }
  submitButton(){
    if(this.choice == null){
      alert(
        "Please choose an answer"
      )
    }
    else{
      let selected = <HTMLFormElement>document.getElementById("myForm")
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      let body = {choice: this.choice-1}
      console.log(body)
      return this.http.post('http://localhost:3000/poll/'+this.id, body,{headers:headers}).toPromise().then(
        res =>{
          console.log(res)
          this.router.navigate(['/results/',this.id])
        }, err =>{
          console.log(err)
        }
      )
    }


  }

}
