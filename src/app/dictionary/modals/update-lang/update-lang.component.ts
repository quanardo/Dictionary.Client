import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DictionaryComponent } from '../../dictionary.component';
import { AlertsComponent } from '../../../alerts/alerts.component';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'update-lang-dialog',
  templateUrl: './update-lang.component.html',
  styleUrls: ['./update-lang.component.scss']
})
export class UpdateLangComponent {

  @Output() updateLang = new EventEmitter<any>();

  constructor(private dictionaryService: DictionaryService) { }

  dict: any = [''];
  id: string = '';
  successMessage: string = 'Successfully';
  opened: boolean = false;
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

  @ViewChild(AlertsComponent)
  alert: AlertsComponent;

  @ViewChild('updateLangModal')
  updateLangModal: ElementRef;


  public open(lang: any) {
    this.id = lang._id;
    this.opened = true;
  }

  private onSubmit(from: string, to: string) {
    this.opened = false;
    // var lang = from.toLowerCase() + '-' + to.toLowerCase();
    var updatedLang = {
      _id: this.id,
      language: from.toLowerCase() + '-' + to.toLowerCase()
    };
    this.updateLang.emit(updatedLang);

  };

}
