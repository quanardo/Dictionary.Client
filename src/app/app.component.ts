import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DictionaryActions from './store/dictionary/dictionary.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapsed = true;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new DictionaryActions.GetDictionary());
  }

  expand() {
    this.collapsed = !this.collapsed;
  }
}

