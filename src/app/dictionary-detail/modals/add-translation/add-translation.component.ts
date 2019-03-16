import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AlertsComponent } from '../../../alerts/alerts.component';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
// import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-add-translation-modal',
  templateUrl: './add-translation.component.html',
  styleUrls: ['./add-translation.component.scss']
})
export class AddTranslationComponent implements OnInit {

  @Output() newTrsl = new EventEmitter<any>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private translate: TranslateService
  ) { }


  opened = false;
  translation: any = {};
  id: string;
  successMessage = 'Successfully';

  @ViewChild(AlertsComponent)
  alert: AlertsComponent;
  @ViewChild('addTranslationModal')
  addTranslationModal: ElementRef;


  ngOnInit() {
    this.createForm();
  }

  public open(id: string) {
    this.opened = true;
    this.id = id;
  }

  createForm() {
    this.form = this.formBuilder.group({
      from: [''],
      to: ['']
    });
  }

  private onSubmit(input1: string, input2: string) {
    this.opened = false;
    // if(input2 === '') {
    //   console.log('aa')
    //   this.translate.setDefaultLang('en');
    //   this.translate.use('ru');
    //   this.translate.get(input1).subscribe((res) => console.log(res))
    // }
    const input = {
      'from': input1,
      'to': input2
    };
    this.newTrsl.emit(input);
    // this.dictionaryDetailService.addTrsl(this.id, input)
    //   .subscribe((translation) => {
    //     this.dictionaryDetailService.getTranslations(this.id);
    //     this.alert.openAlert('success', this.successMessage);
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
  }

  // onSubmit(from: any, to: any) {
    // this.addTranslation(this.form.get('from').value, this.form.get('to').value);
  //   this.addTranslation(from, to);
  // }

}
