import { Component, OnInit, ViewChild } from '@angular/core';
import { DictionaryDetailService } from './dictionary-detail.service';
import { AlertsComponent } from '../alerts/alerts.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateTranslationComponent } from './modals/update-translation/update-translation.component';
import { AddTranslationComponent } from './modals/add-translation/add-translation.component';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/index';
import * as DictionaryActions from '../store/dictionary/dictionary.actions';
// import { Dictionary } from '../store/dictionary/dictionary';


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss'],
  providers: [DictionaryDetailService]
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: any;
  successMessage = 'Successfully';

  id: string;
  reversed = false;

  @ViewChild(AlertsComponent)
  alert: AlertsComponent;
  @ViewChild(UpdateTranslationComponent)
  updateTranslationModal: UpdateTranslationComponent;
  @ViewChild(AddTranslationComponent)
  addTranslationModal: AddTranslationComponent;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>
  ) {

  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    // this.getDictionary();


    this.store.select(fromRoot.selectAll).subscribe((dictionaries) => {

      // In future - try to find another solution instead of if-lenght case
      // Storing occurs before state was loaded -> dictionaries.translations == undefined
      if (dictionaries.length > 0) {
        this.dictionary = dictionaries.find(x => x._id === this.id).translations;
      }
    }
    )
  }



  // private getDictionary() {
  //   // this.dictionaryDetailService.getdictionary(id)
  //   //   .subscribe((data) => {
  //   //     this.alert.openAlert('success', this.successMessage);
  //   //     this.dictionary = data;
  //   //   }, (err) => {
  //   //     this.alert.openAlert('danger', err);
  //   //   });
  // }

  public removeTrsl(trslID: any) {
    // this.dictionaryDetailService.removeTrsl(this.id, id)
    //   .subscribe(() => {
    //     let index = this.dictionary.findIndex(x => x._id == trslID);
    //     this.dictionary.splice(index, 1);
    //     this.alert.openAlert('success', this.successMessage);
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
    this.store.dispatch(new DictionaryActions.RemoveTranslation({ id: this.id, trslId: trslID }))
  }

  public openUpdateModal(translation: any) {
    this.updateTranslationModal.open(this.id, translation);
  }
  public updateTrsl(updatedTrsl) {
    // this.dictionaryDetailService.updateTrsl(this.id, updatedTrsl)
    //   .subscribe(() => {
    //     let index = this.dictionary.findIndex(x => x._id == updatedTrsl._id);
    //     this.dictionary[index] = {
    //       _id: updatedTrsl._id,
    //       from: updatedTrsl.from,
    //       to: updatedTrsl.to
    //     }
    //     this.alert.openAlert('success', this.successMessage);
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
    this.store.dispatch(new DictionaryActions.UpdateTranslation({ id: this.id, translation: updatedTrsl }))
  }

  public openAddModal() {
    this.addTranslationModal.open(this.id);
  }

  public addTrsl(newTrsl) {
    // this.dictionaryDetailService.addTrsl(this.id, newTrsl)
    //   .subscribe((addedTrsl) => {
    //     this.dictionary.push({
    //       _id: addedTrsl,
    //       from: newTrsl.from,
    //       to: newTrsl.to
    //     });
    //     this.alert.openAlert('success', this.successMessage);
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
      this.store.dispatch(new DictionaryActions.AddTranslation({
        id: this.id,
        translation: newTrsl
      }));
    // this.store.select(fromRoot.selectAllDictionaries).subscribe((dictionaries) =>
    //   console.log('Gotten state: '+ JSON.stringify(dictionaries))
    // );
    // this.store.dispatch(new DictionaryActions.AddTranslation(newTrsl))
  }

  public reverseTrsl() {
    this.reversed = !this.reversed;
  }
}
