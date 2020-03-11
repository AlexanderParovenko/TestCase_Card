import { Injectable } from '@angular/core';
import { DataSamplesRepository, DataSample } from 'src/app/core';
import { Observable, of } from 'rxjs';
import { __DataSample__ } from './data-samples-mock.data';
import {  auditTime } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class DataSamplesMockRepository extends DataSamplesRepository {

    public GetDataSample(): Observable<DataSample> {
        return of(__DataSample__);
    }

}
