import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  CaptureBottomSheetWhenToOpen,
  IBottomSheetControl,
} from '../../interfaces/bottom-sheet-control.interface';

@Component({
  selector: 'app-capture-bottom-sheet',
  imports: [],
  templateUrl: './capture-bottom-sheet.component.html',
  styleUrl: './capture-bottom-sheet.component.css',
})
export class CaptureBottomSheetComponent {
  @Input() isOpen: boolean = true;

  @Output() optionSelected = new EventEmitter<string>();

  // Aqui fica genérico para qualquer componente que tenha esse atributo 'intermediateComp' e que implemente o IBottomSheetControl
  @ContentChild('intermediateComp')
  documentTypeSheet!: IBottomSheetControl<CaptureBottomSheetWhenToOpen>;

  ngAfterContentInit() {
    if (this.documentTypeSheet) {
      console.log(
        'Componente DocumentTypeSheetComponent foi projetado e acessado!'
      );
      this.documentTypeSheet.optionSelected.subscribe((option: string) => {
        console.log('Tipo selecionado: ', option);
        // Seguir com o processo de captura com base na opção selecionada
      });
    } else {
      console.log('Nenhum DocumentTypeSheetComponent foi projetado.');
    }
  }

  get hasContent(): boolean {
    console.log(this.documentTypeSheet);
    return this.documentTypeSheet ? true : false;
  }

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(option: 'camera' | 'documentos' | 'galeria') {
    if (this.hasContent && option === this.documentTypeSheet.whenToOpen) {
      this.closeSheet();
      this.documentTypeSheet.openSheet();
    } else {
      this.optionSelected.emit(option);
      this.closeSheet();
    }
  }
}
