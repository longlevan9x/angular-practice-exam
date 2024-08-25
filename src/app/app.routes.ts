import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailComponent } from './components/exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './components/exams/exam-list/exam-list.component';
import { TopicListComponent } from './components/topics/topic-list/topic-list.component';
import { TopicOverviewComponent } from './components/topics/topic-overview/topic-overview.component';
import { ErrorComponent } from './components/errors/error/error.component';
import { TopicPracticeComponent } from './components/topics/topic-practice/topic-practice.component';
import { TopicFinishComponent } from './components/topics/topic-finish/topic-finish.component';
import { PracticeDetailComponent } from './components/practices/practice-detail/practice-detail.component';
import { Practices266ListComponent } from './components/practices266/practices266-list/practices266-list.component';
import { Practices266ExamComponent } from './components/practices266/practices266-exam/practices266-exam.component';
import { Practices266FinishComponent } from './components/practices266/practices266-finish/practices266-finish.component';
import { Practice266ExamRandomComponent } from './components/practices266/practice266-exam-random/practice266-exam-random.component';

export const routes: Routes = [
    {
        path: 'exam/:id',
        data: {
            breadcrumb: 'Exam'
        },
        children: [
            {
                path: '',
                component: ExamDetailComponent,
                data: {
                    breadcrumb: 'Detail'
                }
            },
            {
                path: 'topics',
                component: TopicListComponent,
                data: {
                    breadcrumb: 'Topics'
                }
            }
        ]
    },
    {
        path: 'topics/:id',
        data: {
            breadcrumb: 'Topics'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'overview'
            },
            {
                path: 'overview',
                component: TopicOverviewComponent,
                data: {
                    breadcrumb: 'Overview'
                }
            },
            {
                path: 'practice',
                component: TopicPracticeComponent,
                data: {
                    breadcrumb: 'Practice'
                }
            },
            {
                path: 'finish',
                component: TopicFinishComponent,
                data: {
                    breadcrumb: 'Finish'
                }
            }
        ]
    },
    {
        path: 'practice',
        component: PracticeDetailComponent,
        data: {
            breadcrumb: 'Practice'
        }
    },
    {
        path: 'practices',
        data: {
            breadcrumb: 'Practice'
        },
        children: [
            {
                path: '',
                component: Practices266ListComponent,
            },
            {
                path: ':id/exam',
                component: Practices266ExamComponent,
                data: {
                    breadcrumb: "Exam"
                }
            },
            {
                path: ':id/finish',
                component: Practices266FinishComponent,
                data: {
                    breadcrumb: "Finish"
                }
            },
            {
                path: 'exam-random',
                component: Practice266ExamRandomComponent,
                data: {
                    breadcrumb: "Exam"
                }
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