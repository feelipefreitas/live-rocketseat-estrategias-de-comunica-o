import { Component } from '@angular/core';

@Component({
  selector: 'app-document-status-bottom-sheet',
  imports: [],
  templateUrl: './document-status-bottom-sheet.component.html',
  styleUrl: './document-status-bottom-sheet.component.css',
})
export class DocumentStatusBottomSheetComponent {
  isOpen: boolean = true;

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(status: string) {
    this.closeSheet();
  }
}
