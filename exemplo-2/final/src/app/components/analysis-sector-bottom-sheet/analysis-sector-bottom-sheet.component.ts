import { Component, EventEmitter, Output } from '@angular/core';
import {
  DocumentStatusWhenToOpen,
  IBottomSheetControl,
} from '../../interfaces/bottom-sheet-control.interface';

@Component({
  selector: 'app-analysis-sector-bottom-sheet',
  imports: [],
  templateUrl: './analysis-sector-bottom-sheet.component.html',
  styleUrl: './analysis-sector-bottom-sheet.component.css',
})
export class AnalysisSectorBottomSheetComponent
  implements IBottomSheetControl<DocumentStatusWhenToOpen>
{
  isOpen: boolean = false;

  readonly whenToOpen = 'para-analise';

  @Output() optionSelected = new EventEmitter<string>();

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(type: string) {
    this.optionSelected.emit(type);
    this.closeSheet();
  }
}
