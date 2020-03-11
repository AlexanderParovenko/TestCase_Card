import { Injectable } from '@angular/core';
import { DataSample } from '../domain';
import { Observable } from 'rxjs';

export abstract class DataSamplesRepository {

  abstract GetDataSample(): Observable<DataSample>;
}
