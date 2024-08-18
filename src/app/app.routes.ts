import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailComponent } from './components/exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './components/exams/exam-list/exam-list.component';
import { TopicListComponent } from './components/topics/topic-list/topic-list.component';
import { TopicOverviewComponent } from './components/topics/topic-overview/topic-overview.component';
import { ErrorComponent } from './components/errors/error/error.component';
import { TopicPracticeComponent } from './components/topics/topic-practice/topic-practice.component';
import { TopicFinishComponent } from './components/topics/topic-finish/topic-finish.component';

export const routes: Routes = [
    {
        path: 'exam/:id',
        children: [
            {
                path: '',
                component: ExamDetailComponent
            },
            {
                path: 'topics',
                component: TopicListComponent
            }
        ]
    },
    {
        path: 'topics/:id',
        children: [
            {
                path: 'overview',
                component: TopicOverviewComponent
            },
            {
                path: 'practice',
                component: TopicPracticeComponent
            },
            {
                path: 'finish',
                component: TopicFinishComponent
            }
        ]
    },
    {
        path: '',
        component: ExamListComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }