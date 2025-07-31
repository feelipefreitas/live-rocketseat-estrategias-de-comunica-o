import { Component } from '@angular/core';

@Component({
  selector: 'app-document-type-bottom-sheet',
  imports: [],
  templateUrl: './document-type-bottom-sheet.component.html',
  styleUrl: './document-type-bottom-sheet.component.css',
})
export class DocumentTypeBottomSheetComponent {
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
