import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';
import { DictionaryService } from './dictionary.service';
import { AddLangComponent } from './modals/add-lang/add-lang.component';
import { UpdateLangComponent } from './modals/update-lang/update-lang.component';
import { Store } from '@ngrx/store';
// import { AppState } from '../app.state';
import { Dictionary } from '../store/dictionary/dictionary';
import * as fromRoot from '../store/index';
import * as DictionaryActions from '../store/dictionary/dictionary.actions';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  providers: [DictionaryService]
})
export class DictionaryComponent implements OnInit {

  successMessage: string = 'Successfully';
  dictionary$: any;
  currLang: string;
  public currLangData: any[];

  @ViewChild(AlertsComponent)
  alert: AlertsComponent;
  @ViewChild(AddLangComponent)
  addLangModal: AddLangComponent;
  @ViewChild(UpdateLangComponent)
  updateLangModal: UpdateLangComponent;

  constructor(
    // private dictionaryService: DictionaryService,
    // private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit() {
    // this.getDictionary();
    this.store.select(fromRoot.selectAll).subscribe((dictionaries) => {
      this.dictionary$ = dictionaries
    });
  }

  updateDialogOpen(lang: any) {
    this.updateLangModal.open(lang);
  }

  public updateLang(updatedLang: Dictionary) {
    // this.dictionaryService.updateLang(id, updatedLang)
    //   .subscribe(() => {
    //     this.alert.openAlert('success', this.successMessage);
    //     let index = this.dict.findIndex(x => x._id == id);
    //     this.dict[index].language = updatedLang.language;
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
    this.store.dispatch(new DictionaryActions.UpdateDictionary(updatedLang))
  }


  addDialogOpen() {
    this.addLangModal.open();
  }
  // private getDictionary() {
  //   // this.dictionaryService.getDict()
  //   //   .subscribe((dictionary: any) => {
  //   //     // console.log(this.store.select('dictionary')[0].language);
  //   //     this.alert.openAlert('success', this.successMessage);
  //   //     // console.log(dictionary)
  //   //     this.dict = dictionary;
  //   //   }, (err) => {
  //   //     // console.log(err)
  //   //     this.alert.openAlert('danger', err);
  //   //     // this.dict = DICTIONARY;
  //   //   });
  //   this.store.dispatch(new DictionaryActions.GetDictionary());
  // }

  // private setLang(currLang: string): void {
  //   this.currLang = currLang;
  //   this.currLangData = [];
  //   var index = this.dictionaryService.setLang(currLang);
  //   this.currLangData = this.dict[index].translations;
  // };

  public removeLang(id: string) {
    // this.dictionaryService.removeLang(id)
    //   .subscribe((newDictionary) => {
    //     this.alert.openAlert('success', this.successMessage);
    //     this.router.navigate(['/dictionary']);
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
    this.store.dispatch(new DictionaryActions.RemoveDictionary(id))
  };

  // private reverseTrsl() {
  //   for (var i = 0; this.currLangData.length; i++) {
  //     var w1 = this.currLangData[i].w1;
  //     var w2 = this.currLangData[i].w2;
  //     this.currLangData[i].w1 = w2;
  //     this.currLangData[i].w2 = w1;
  //   }
  // }

  public addLang(newLang: any) {
    // this.dictionaryService.addLang(newLang)
    //   .subscribe((addedLangID) => {
    //     this.dict.push({
    //       _id: addedLangID,
    //       language: newLang.language,
    //       translations: []
    //     });
    //     this.alert.openAlert('success', this.successMessage);
    //     // this.dict = newDictionary;
    //   }, (err) => {
    //     this.alert.openAlert('danger', err);
    //   });
    this.store.dispatch(new DictionaryActions.AddDictionary(newLang));

  }

  // private addTrsl(w1: string, w2: string) {
  //   // this.currLangData.push({ 'w1': w1, 'w2': w2 });
  //   this.dictionaryService.addTrsl(this.currLang, w1, w2)
  //     .subscribe((newDictionary) => {
  //       this.alert.openAlert('success', this.successMessage);       
  //       this.getDictionary();
  //     }, (err) => {
  //       this.alert.openAlert('danger', err);
  //     });
  // };

  // private removeTrsl(trlsToRemove) {
  //   this.dictionaryService.removeTrsl(this.currLang, trlsToRemove)
  //     .subscribe((newDictionary) => {
  //       this.alert.openAlert('success', this.successMessage);
  //       this.dict = newDictionary;
  //     }, (err) => {
  //       this.alert.openAlert('danger', err);
  //     });
  // };
};
