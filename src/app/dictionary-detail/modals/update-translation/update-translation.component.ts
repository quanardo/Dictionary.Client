import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { DictionaryDetailService } from '../../dictionary-detail.service';
import { AlertsComponent } from '../../../alerts/alerts.component';
import { DictionaryDetailComponent } from '../../dictionary-detail.component';

@Component({
  selector: 'app-update-translation-modal',
  templateUrl: './update-translation.component.html',
  styleUrls: ['./update-translation.component.scss']
})
export class UpdateTranslationComponent implements OnInit {

  opened = false;
  translation: any = {};
  id: string;
  successMessage = 'Successfully';

  @ViewChild(AlertsComponent)
  alert: AlertsComponent;
  @ViewChild('updateTranslationModal')
  updateTranslationModal: ElementRef;

  @Output() updatedTrsl = new EventEmitter<any>();

  constructor(private dictionaryDetailService: DictionaryDetailService) { }

  ngOnInit() {
  }

  public open(id, translation: any) {
    this.opened = true;
    this.id = id;
    this.translation = translation;
  }


  public onSubmit(input1: string, input2: string) {
    this.opened = false;
    const input = {
      '_id': this.translation._id,
      'from': input1,
      'to': input2
    };
    // console.log(input)
    this.updatedTrsl.emit(input);
    //   this.dictionaryDetailService.updateTrsl(this.id, input)
    //     .subscribe((translation) => {
    //       this.alert.openAlert('success', this.successMessage);
    //     }, (err) => {
    //       this.alert.openAlert('danger', err);
    //     });
  }
}
