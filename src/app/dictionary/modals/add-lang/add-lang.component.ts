import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DictionaryService } from '../../dictionary.service';
import { AlertsComponent } from '../../../alerts/alerts.component';

@Component({
  selector: 'add-lang-dialog',
  templateUrl: './add-lang.component.html',
  styleUrls: ['./add-lang.component.scss']
})
export class AddLangComponent {

  @Output() newLang = new EventEmitter<any>();

  constructor(private dictionaryService: DictionaryService) { }

  languages = [
    {
      'value': 'FR',
      'name': 'French'
    },
    {
      'value': 'DE',
      'name': 'German'
    },
    {
      'value': 'EN',
      'name': 'English'
    },
    {
      'value': 'IT',
      'name': 'Italian'
    },
    {
      'value': 'JA',
      'name': 'Japanese'
    },
    {
      'value': 'LV',
      'name': 'Latvian'
    },
    {
      'value': 'NO',
      'name': 'Norwegian'
    }
  ];
  dict: any = [''];
  opened: boolean = false;
  successMessage: string = 'Successfully';

  @ViewChild(AlertsComponent)
  alert: AlertsComponent;

  @ViewChild('addLangModal')
  addLangModal: ElementRef;

  open() {
    this.opened = true;
  };


  private onSubmit(from: string, to: string): void {
    this.opened = false;
    // var lang = from.toLowerCase() + '-' + to.toLowerCase();
    var newLang = {
      language: from.toLowerCase() + '-' + to.toLowerCase()
    };
    this.newLang.emit(newLang);
    // this.dictionaryService.addLang(newLang)
    //   .subscribe((newDictionary) => {
    //     this.alert.openAlert('success', this.successMessage);
    //     this.dict = newDictionary;
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
  };
}
