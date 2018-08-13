import { Component, OnInit } from '@angular/core';
import { Poll } from '../../classes/poll';
import { Http,Headers } from '../../../../node_modules/@angular/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {

  poll:Poll = new Poll
  idCounter:number = 1

  answers:Array<Object> = [{
    body:"",
    id:0
  }]

  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
    this.makeField()
  }

  makeField(){
    if(this.idCounter>9){
      
    }else{
      console.log("Making field")
      this.answers.push({
        body:"",
        id:this.idCounter
      })
      console.log(this.answers)
      this.idCounter++
    }


  }

  setAnswers(){
    for(let i=0; i<this.answers.length; i++){
      // this.poll.choices[i] = this.answers[i]['body']
      this.answers[i]['body'] = (document.getElementById(""+i) as HTMLInputElement).value
    }
    this.poll['choices'] = []
    for(let i=0; i<this.answers.length; i++){
      this.poll['choices'].push(this.answers[i]['body'])
      // this.answers[i]['body'] = (document.getElementById(""+i) as HTMLInputElement).value
    }
  }

  makePoll(){
    console.log("Making Poll")
    this.setAnswers()
    let questionVal = (document.getElementById("question") as HTMLInputElement).value
    this.poll.question = questionVal
    console.log(this.poll)
    console.log(this.answers)
    if(true){
      this.submitPoll(this.poll)
    }
  }

  submitPoll(body){
    console.log("Sending request")
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://142.93.192.228:3000/make', body,{headers:headers}).toPromise().then(
      res =>{
        console.log("We got a response")
        console.log(res['_body'])
        let jsonBody = res['_body']
        let data = JSON.parse(jsonBody)
        console.log(data)
        let id = data['newPoll']['_id']
        console.log(id)
        this.goToSuccess(id)
      }, err =>{
        console.log(err)
      }
    )
  }

  goToSuccess(id){
    this.router.navigate(['/success',id])
  }
}
