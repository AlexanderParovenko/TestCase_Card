import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataSamplesRepository } from './core';
import { DataSamplesMockRepository } from './data';
import { DataSampleCardComponent } from './components/data-sample-card/data-sample-card.component';

import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [
    AppComponent,
    DataSampleCardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DataModule,
    PresentationModule
  ],
  providers: [{provide: DataSamplesRepository, useClass: DataSamplesMockRepository}],
  bootstrap: [AppComponent]
})
export class AppModule { }
