import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { ChartModule,CategoryService,DateTimeService,StepLineSeriesService, TooltipService,ColumnSeriesService  } from '@syncfusion/ej2-angular-charts'; 
import { DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ChartModule,
    TooltipModule,
    BrowserAnimationsModule,
    FormsModule
  
    
  ],
  providers: [CategoryService, ChartModule,TooltipService,DataLabelService,LineSeriesService,ColumnSeriesService,StepLineSeriesService,DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
