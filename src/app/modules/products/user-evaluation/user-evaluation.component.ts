import {Component, Input, OnInit} from '@angular/core';
import {EvaluationService} from "../services/evaluation.service";
import {ProductEvaluationPayload} from "../../globalModels/productEvaluation.payload";

@Component({
  selector: 'app-user-evaluation',
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.scss']
})
export class UserEvaluationComponent implements OnInit{


  constructor(private evaluationService:EvaluationService) {
  }
   @Input() productEvaluation!:ProductEvaluationPayload;
  ngOnInit(): void {
  }


}
