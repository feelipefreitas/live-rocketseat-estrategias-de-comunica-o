import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-capture-bottom-sheet',
  imports: [],
  templateUrl: './capture-bottom-sheet.component.html',
  styleUrl: './capture-bottom-sheet.component.css',
})
export class CaptureBottomSheetComponent {
  @Input() isOpen: boolean = true;

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(option: 'camera' | 'documentos' | 'galeria') {
    this.closeSheet();
  }
}
