import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-capture-bottom-sheet',
  imports: [],
  templateUrl: './multiple-capture-bottom-sheet.component.html',
  styleUrl: './multiple-capture-bottom-sheet.component.css',
})
export class MultipleCaptureBottomSheetComponent {
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
