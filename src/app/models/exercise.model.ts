export interface ExerciseModel {
    id?: number
    question?: string
    A?: string
    B?: string
    C?: string
    D?: string
    answer?: string
    explain?: string
    chooseAnswer?: string
    histories?: any[],
    countHistories?: CountHistoryModel[]
}

interface CountHistoryModel {
    count: number,
    answer: string,
}