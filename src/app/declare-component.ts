import { AppComponent } from "./app.component";
import { ErrorComponent } from "./components/errors/error/error.component";
import { ExamDetailComponent } from "./components/exams/exam-detail/exam-detail.component";
import { ExamListComponent } from "./components/exams/exam-list/exam-list.component";
import { QuestionCardComponent } from "./components/shareds/question-card/question-card.component";
import { TopicFinishComponent } from "./components/topics/topic-finish/topic-finish.component";
import { TopicListComponent } from "./components/topics/topic-list/topic-list.component";
import { TopicOverviewComponent } from "./components/topics/topic-overview/topic-overview.component";
import { TopicPracticeComponent } from "./components/topics/topic-practice/topic-practice.component";

export const declarations = [
    AppComponent, 
    ExamListComponent, 
    ExamDetailComponent,
    TopicListComponent,
    TopicOverviewComponent,
    TopicListComponent,
    TopicPracticeComponent,
    TopicFinishComponent,
    QuestionCardComponent,
    ErrorComponent,
]