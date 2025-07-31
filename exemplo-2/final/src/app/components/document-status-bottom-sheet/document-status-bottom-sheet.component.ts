import { Component, ContentChild, EventEmitter, Output } from '@angular/core';
import {
  CaptureBottomSheetWhenToOpen,
  DocumentStatusWhenToOpen,
  IBottomSheetControl,
  IBottomSheetResult,
} from '../../interfaces/bottom-sheet-control.interface';

@Component({
  selector: 'app-document-status-bottom-sheet',
  imports: [],
  templateUrl: './document-status-bottom-sheet.component.html',
  styleUrl: './document-status-bottom-sheet.component.css',
})
export class DocumentStatusBottomSheetComponent
  implements
    IBottomSheetControl<
      CaptureBottomSheetWhenToOpen,
      string | IBottomSheetResult
    >
{
  isOpen: boolean = false;
  readonly whenToOpen = 'galeria';

  @ContentChild('intermediateComp')
  intermediateComp!: IBottomSheetControl<DocumentStatusWhenToOpen, string>;

  @Output()
  optionSelected = new EventEmitter<string | IBottomSheetResult>();

  ngAfterContentInit() {
    if (this.intermediateComp) {
      this.intermediateComp.optionSelected.subscribe((option) => {
        const selection: IBottomSheetResult = {
          [this.intermediateComp.whenToOpen]: option,
        };

        this.optionSelected.emit(selection);
      });
    }
  }

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(status: string) {
    if (this.intermediateComp && this.intermediateComp.whenToOpen === status) {
      this.closeSheet();
      this.intermediateComp.openSheet();
    } else {
      this.optionSelected.emit(status);
      this.closeSheet();
    }
  }
}
