import { Component, EventEmitter, Output } from '@angular/core';
import {
  CaptureBottomSheetWhenToOpen,
  IBottomSheetControl,
} from '../../interfaces/bottom-sheet-control.interface';

@Component({
  selector: 'app-document-type-bottom-sheet',
  imports: [],
  templateUrl: './document-type-bottom-sheet.component.html',
  styleUrl: './document-type-bottom-sheet.component.css',
})
export class DocumentTypeBottomSheetComponent
  implements IBottomSheetControl<CaptureBottomSheetWhenToOpen>
{
  isOpen: boolean = false;

  readonly whenToOpen = 'documentos';

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
