import { Component } from '@angular/core';
import { AnalysisSectorBottomSheetComponent } from './components/analysis-sector-bottom-sheet/analysis-sector-bottom-sheet.component';
import { CaptureBottomSheetComponent } from './components/capture-bottom-sheet/capture-bottom-sheet.component';
import { DocumentStatusBottomSheetComponent } from './components/document-status-bottom-sheet/document-status-bottom-sheet.component';
import { DocumentTypeBottomSheetComponent } from './components/document-type-bottom-sheet/document-type-bottom-sheet.component';
import { MultipleCaptureBottomSheetComponent } from './components/multiple-capture-bottom-sheet/multiple-capture-bottom-sheet.component';

@Component({
  selector: 'app-root',
  imports: [
    AnalysisSectorBottomSheetComponent,
    CaptureBottomSheetComponent,
    DocumentStatusBottomSheetComponent,
    DocumentTypeBottomSheetComponent,
    MultipleCaptureBottomSheetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  handleOption(option: string) {
    console.log('Resultado Final: ', option);
  }
}
