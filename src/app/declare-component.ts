import { AppComponent } from "./app.component";
import { ErrorComponent } from "./components/errors/error/error.component";
import { ExamDetailComponent } from "./components/exams/exam-detail/exam-detail.component";
import { ExamListComponent } from "./components/exams/exam-list/exam-list.component";
import { BreadcrumbComponent } from "./components/commons/breadcrumb/breadcrumb.component";
import { QuestionCardComponent } from "./components/shareds/question-card/question-card.component";
import { TopicFinishComponent } from "./components/topics/topic-finish/topic-finish.component";
import { TopicListComponent } from "./components/topics/topic-list/topic-list.component";
import { TopicOverviewComponent } from "./components/topics/topic-overview/topic-overview.component";
import { TopicPracticeComponent } from "./components/topics/topic-practice/topic-practice.component";
import { PracticeDetailComponent } from "./components/practices/practice-detail/practice-detail.component";
import { TopicCardComponent } from "./components/shareds/topic-card/topic-card.component";
import { Practices266ListComponent } from "./components/practices266/practices266-list/practices266-list.component";
import { Practices266ExamComponent } from "./components/practices266/practices266-exam/practices266-exam.component";
import { FinishScoreCardComponent } from "./components/shareds/finish-score-card/finish-score-card.component";
import { Practices266FinishComponent } from "./components/practices266/practices266-finish/practices266-finish.component";
import { PracticeFinishCardComponent } from "./components/shareds/practice-finish-card/practice-finish-card.component";
import { QuestionCheckModalComponent } from "./components/shareds/question-check-modal/question-check-modal.component";
import { Practice266ExamRandomComponent } from "./components/practices266/practice266-exam-random/practice266-exam-random.component";
import { ViewCustomizeModalComponent } from "./components/shareds/view-customize-modal/view-customize-modal.component";

export const declarations = [
    AppComponent,
    ExamListComponent,
    ExamDetailComponent,

    TopicListComponent,
    TopicOverviewComponent,
    TopicListComponent,
    TopicPracticeComponent,
    TopicFinishComponent,

    PracticeDetailComponent,

    Practices266ListComponent,
    Practices266ExamComponent,
    Practices266FinishComponent,
    Practice266ExamRandomComponent,

    QuestionCardComponent,
    TopicCardComponent,
    FinishScoreCardComponent,
    PracticeFinishCardComponent,
    
    QuestionCheckModalComponent,
    ViewCustomizeModalComponent,
    
    BreadcrumbComponent,
    ErrorComponent,
]