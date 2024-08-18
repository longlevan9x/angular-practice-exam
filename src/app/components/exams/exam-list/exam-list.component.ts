import { Component, OnInit } from '@angular/core';
import { ExamModel } from "../../../models/exam.model";
import { dumpExams } from '../../../dumps/exam.dump';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.scss'
})
export class ExamListComponent implements OnInit {
  exams: ExamModel[] = [];
  ngOnInit(): void {
    this.exams = dumpExams;
  }
}
