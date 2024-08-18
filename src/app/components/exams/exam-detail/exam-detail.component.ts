import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamModel } from '../../../models/exam.model';
import { dumpExams } from '../../../dumps/exam.dump';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrl: './exam-detail.component.scss'
})
export class ExamDetailComponent implements OnInit {
  exam: ExamModel = {};

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const examId: string = this.activatedRoute.snapshot.paramMap.get('id') || "";
    this.exam = dumpExams.find(ex => ex.id === parseInt(examId)) || {};
  }
}
