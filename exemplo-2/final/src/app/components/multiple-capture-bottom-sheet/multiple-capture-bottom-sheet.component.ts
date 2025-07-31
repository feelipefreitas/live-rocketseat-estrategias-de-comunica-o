import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import {
  CaptureBottomSheetWhenToOpen,
  IBottomSheetControl,
  IBottomSheetResult,
} from '../../interfaces/bottom-sheet-control.interface';

@Component({
  selector: 'app-multiple-capture-bottom-sheet',
  imports: [],
  templateUrl: './multiple-capture-bottom-sheet.component.html',
  styleUrl: './multiple-capture-bottom-sheet.component.css',
})
export class MultipleCaptureBottomSheetComponent {
  @Input() isOpen: boolean = true;

  @Output() optionSelected = new EventEmitter<string | IBottomSheetResult>();

  @ContentChildren('intermediateComp')
  intermediateComponents!: QueryList<
    IBottomSheetControl<
      CaptureBottomSheetWhenToOpen,
      string | IBottomSheetResult
    >
  >;

  ngAfterContentInit() {
    if (this.intermediateComponents) {
      this.intermediateComponents.forEach((comp) => {
        comp.optionSelected.subscribe((option) => {
          const result: IBottomSheetResult = {
            [comp.whenToOpen]: option,
          };

          this.optionSelected.emit(result);
        });
      });
    }
  }

  get hasContent(): boolean {
    return this.intermediateComponents ? true : false;
  }

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
  }

  selectOption(option: 'camera' | 'documentos' | 'galeria') {
    const intermediateComponent = this.intermediateComponents.find(
      (comp) => comp.whenToOpen === option
    );

    if (this.hasContent && intermediateComponent) {
      this.closeSheet();
      intermediateComponent.openSheet();
    } else {
      this.optionSelected.emit(option);
      this.closeSheet();
    }
  }
}
