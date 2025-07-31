import { Component } from '@angular/core';

@Component({
  selector: 'app-analysis-sector-bottom-sheet',
  imports: [],
  templateUrl: './analysis-sector-bottom-sheet.component.html',
  styleUrl: './analysis-sector-bottom-sheet.component.css',
})
export class AnalysisSectorBottomSheetComponent {
  isOpen: boolean = true;

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(type: string) {
    this.closeSheet();
  }
}
