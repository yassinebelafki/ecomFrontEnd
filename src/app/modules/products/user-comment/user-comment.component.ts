import {Component, Input, OnInit} from '@angular/core';
import {EvaluationService} from "../services/evaluation.service";
import {AnimationOptions} from "@angular/animations";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductEvaluationPayload} from "../../globalModels/productEvaluation.payload";

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss']
})
export class UserCommentComponent implements OnInit{

  constructor(private evaluationService:EvaluationService) {
  }
  formGroup!:FormGroup;


  // options: AnimationOptions = {
  //   path: '/assets/animations/thanks.json',
  // };
  ableToComment:boolean=false
  ngOnInit(): void {
    this.formGroup = new FormGroup<any>(
      {
        "content":new FormControl("",Validators.required),
        "rate":new FormControl("",Validators.required),
      }
    )
     this.evaluationService.canComment(this.productId).subscribe(
       reponse=>{
         this.ableToComment=reponse;
       },
       error => {
         console.log("***"+error)
       }
     )

  }

  rate:number=0;
  @Input() productId:number | undefined
  commented: boolean=false;


  rated() {
    console.log(this.rate)
  }

  sendComment() {
    const content = this.formGroup.get("content")?.value;
    const rate = this.formGroup.get("rate")?.value;
    const evaluation:ProductEvaluationPayload={
      evaluationNumber:rate,
      commentContent:content,
      productId:this.productId
    }
    this.evaluationService.submitEvaluation(evaluation).subscribe(
      response =>{
        console.log(response)
        this.commented=true
      },
      error => {
        console.log(error)
      }
    )
  }


}
