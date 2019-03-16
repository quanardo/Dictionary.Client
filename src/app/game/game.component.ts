import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GameDialogComponent } from './modals/game/game-dialog.component';
import { AlertsComponent } from '../alerts/alerts.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() translations: any;

  constructor() { }

  opened = false;
  randomWords = [];
  randomWord = { 'w1': '', 'w2': '' };
  
  @ViewChild(AlertsComponent)
  alert: AlertsComponent;
  @ViewChild(GameDialogComponent)
  modal: GameDialogComponent;


  public openGameDialog() {
    this.modal.open()
  }

  // openGameDialog(quant) {
  //   if (quant <= this.dictionary.currLangData.length) {
  //     this.modal.open(this.randomWords);
  //     const usedIndexes = [];
  //     this.randomWords = [];
  //     for (let i = 0; i < quant; i++) {
  //       const randomIndex = Math.floor(Math.random() * this.dictionary.currLangData.length);
  //       usedIndexes[i] = randomIndex;
  //       for (let j = 0; j < i; j++) {
  //         if (usedIndexes[i] === usedIndexes[j]) {
  //           i--;
  //           break;
  //         }
  //       }
  //     }
  //     for (let i = 0; i < usedIndexes.length; i++) {
  //       this.randomWords[i] = this.dictionary.currLangData[usedIndexes[i]];
  //     }
  //   } else {
  //     const error = 'Quantity should be less or equal currLangData.lenght';
  //     this.alert.openAlert('danger', error);
  //   }
  // }




  ngOnInit() { }

  // private openDialog() {
  //   this.opened = true;
  //   this.randomWord = this.randomWords[1];
  // };
  // closeDialog() {
  //   this.dialogOpened = false;
  // };
  // action(status) {
  //   console.log(`Dialog result: ${status}`);
  //   this.dialogOpened = false;
  // };

  private checkOnCorrect(w2) {
    if (this.randomWord.w2 === w2) {
      console.log('MOLODEC');
    } else {
      console.log('LOH');
    }
  }

  // this.randomWords.push(this.dictionary.currLangData[randomIndex]);
  // setQuantity(quant: number) {
  //   var usedIndexes = [];
  //   if (quant <= this.dictionary.currLangData.length) {
  //     for (var i = 0; i < quant; i++) {
  //       var randomIndex = Math.floor(Math.random() * this.dictionary.currLangData.length);
  //       usedIndexes.push(randomIndex);
  //       for (var j = 0; j < usedIndexes.length; j++) {
  //         if (randomIndex != j) {
  //           this.randomWord = this.dictionary.currLangData[randomIndex];
  //         }
  //       }
  //     }
  //   }
  // console.info(usedIndexes)
  // }
}
