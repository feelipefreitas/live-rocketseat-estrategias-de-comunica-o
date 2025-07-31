import { EventEmitter } from '@angular/core';

export type CaptureBottomSheetWhenToOpen = 'camera' | 'documentos' | 'galeria';
export type DocumentStatusWhenToOpen = 'validado' | 'para-analise';

export interface IBottomSheetResult {
  [key: string]: string | IBottomSheetResult;
}

export interface IBottomSheetControl<
  TWhenToOpen = string,
  TOptionSelected = string
> {
  openSheet(): void;
  closeSheet(): void;
  whenToOpen: TWhenToOpen;
  optionSelected: EventEmitter<TOptionSelected>;
}
