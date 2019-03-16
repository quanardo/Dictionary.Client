import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-game-dialog',
    templateUrl: './game-dialog.component.html',
    styleUrls: ['./game-dialog.component.scss']
})

export class GameDialogComponent implements OnInit {

    @Input() translations: [];

    opened = false;
    randomWord = {};

    constructor() {
    }

    @ViewChild('modal')
    modal: ElementRef;

    ngOnInit() { }

    private chooseRandomWord() {
        this.randomWord = this.translations[Math.floor(Math.random() * this.translations.length)];
    }

    public open() {
        this.chooseRandomWord();
        this.opened = true;
    }
}
