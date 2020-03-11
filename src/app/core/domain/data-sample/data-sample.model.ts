import { DoctorsExpenses } from './doctors-expenses.model';

export interface DataSample {
    budget: number;
    expenses: number;

    newPatients: string;
    newPatientsPercentage: number;

    collections: string;
    collectionsPercentage: number;

    missedAppointsment: string;
    missedAppointsmentPercentage: number;

    doctorsExpenses: DoctorsExpenses[];
}
