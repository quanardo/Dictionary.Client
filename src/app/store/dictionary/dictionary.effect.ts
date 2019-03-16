import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DictionaryService } from '../../dictionary/dictionary.service';
import * as dictionaryActions from './dictionary.actions';
import { Dictionary } from 'src/app/dictionary/models/dictionary';
import { DictionaryDetailService } from '../../dictionary-detail/dictionary-detail.service';

@Injectable()
export class DictionaryEffects {
    constructor(
        private actions$: Actions,
        private dictionaryService: DictionaryService,
        private dictionaryDetailService: DictionaryDetailService
    ) { }

    @Effect() getDictionary$: Observable<Action> = this.actions$
        .pipe(
            ofType<dictionaryActions.GetDictionary>(dictionaryActions.ActionTypes.GET),
            switchMap(() => {
                return this.dictionaryService.getDict()
                    .pipe(
                        map((dictionary) => {
                            return new dictionaryActions.GetDictionarySuccess(dictionary)
                        }),
                        catchError((error) => of(new dictionaryActions.GetDictionaryFail(error)))
                    )
            })
        )

    @Effect() addDictionary$: Observable<Action> = this.actions$
        .pipe(
            ofType(dictionaryActions.ActionTypes.ADD),
            switchMap((dictionary: dictionaryActions.AddDictionary) =>
                this.dictionaryService.addLang(dictionary.payload)
                    .pipe(
                        map((data) => {
                            return new dictionaryActions.AddDictionarySuccess(data)
                        }),
                        catchError((error) => of(new dictionaryActions.AddDictionaryFail(error)))
                    )
            )
        )

    @Effect() removeDicionary$: Observable<Action> = this.actions$
        .pipe(
            ofType(dictionaryActions.ActionTypes.REMOVE),
            switchMap((dictionary: dictionaryActions.RemoveDictionary) =>
                this.dictionaryService.removeLang(dictionary.payload)
                    .pipe(
                        map(() => {
                            return new dictionaryActions.RemoveDictionarySuccess(dictionary.payload)
                        }),
                        catchError((error) => of(new dictionaryActions.RemoveDictionaryFail(error)))
                    )
            )
        )

    @Effect() updateDictionary$: Observable<Action> = this.actions$
        .pipe(
            ofType(dictionaryActions.ActionTypes.UPDATE),
            switchMap((dictionary: dictionaryActions.UpdateDictionary) =>
                this.dictionaryService.updateLang(dictionary.payload)
                    .pipe(
                        map(() => new dictionaryActions.UpdateDictionarySuccess(dictionary.payload)),
                        catchError((error) => of(new dictionaryActions.RemoveDictionaryFail(error)))
                    )
            )
        )

    // @Effect() addTranslation$: Observable<Action> = this.actions$
    //     .pipe(
    //         ofType(dictionaryActions.ActionTypes.ADD_TRANSLATION),
    //         switchMap((dictionary: dictionaryActions.AddTranslation) => {
    //             console.log(dictionary.payload)
    //             return this.dictionaryDetailService.addTrsl(dictionary.payload.id, dictionary.payload.translation)
    //                 .pipe(
    //                     map((translation) => { 
    //                         console.log(translation);
    //                         return new dictionaryActions.AddTranslationSuccess({ _id: dictionary.payload.id, translation: translation }) 
    //                     }),
    //                     catchError((error) => of(new dictionaryActions.AddTranslationFail(error)))
    //                 )
    //         })
    //     )
    @Effect() addTranslation$: Observable<Action> = this.actions$
        .pipe(
            ofType(dictionaryActions.ActionTypes.ADD_TRANSLATION),
            switchMap((translationToAdd: dictionaryActions.AddTranslation) =>
                this.dictionaryDetailService.addTrsl(translationToAdd.payload.id, translationToAdd.payload.translation)
                    .pipe(
                        map((addedTranslation) => new dictionaryActions.AddTranslationSuccess({ id: translationToAdd.payload.id, translation: addedTranslation })),
                        catchError((error) => of(new dictionaryActions.AddTranslationFail(error)))
                    )
            )
        )

    @Effect() removeTranslation$: Observable<Action> = this.actions$
        .pipe(
            ofType(dictionaryActions.ActionTypes.REMOVE_TRANSLATION),
            switchMap((translationToRemove: dictionaryActions.RemoveTranslation) =>
                this.dictionaryDetailService.removeTrsl(translationToRemove.payload.id, translationToRemove.payload.trslId)
                    .pipe(
                        map(() => new dictionaryActions.RemoveTranslationSuccess({ id: translationToRemove.payload.id, translationId: translationToRemove.payload.trslId })),
                        catchError((error) => of(new dictionaryActions.RemoveTranslationFail(error)))
                    )
            )
        )

    @Effect() updateTranslation$: Observable<Action> = this.actions$
        .pipe(
            ofType(dictionaryActions.ActionTypes.UPDATE_TRANSLATION),
            switchMap((newTranslation: dictionaryActions.UpdateTranslation) =>
                this.dictionaryDetailService.updateTrsl(newTranslation.payload.id, newTranslation.payload.translation)
                    .pipe(
                        map(() => new dictionaryActions.UpdateTranslationSuccess({ id: newTranslation.payload.id, translation: newTranslation.payload.translation })),
                        catchError((error) => of(new dictionaryActions.UpdateDictionaryFail(error)))
                    )
            )
        )
    // @Effect()
    // loadDictionary$: Observable<Action> = this.actions$.ofType(dictionaryActions.ActionTypes.GET).pipe(
    //     switchMap(() => {
    //         return this.dictionaryService.getDict().pipe(
    //             // map(dictionary => ({payload: dictionary, type: 'Ok!';})),
    //             // map(dictionary => new dictionaryActions.ActionTypes.GetDictionary())
    //             map(dictionary => ({ payload: dictionary, type: 'Ok!' })),
    //             catchError(e => of({ type: 'Error', error: e }))
    //         )
    //     })
    // )

    // @Effect()
    // addDictionary$: Observable<Action> = this.actions$.ofType(dictionaryActions.ActionTypes.ADD).pipe(
    //     mergeMap(action => {
    //         return this.dictionaryService.addLang(action).pipe(
    //             map(dictionary => new dictionaryActions.ActionTypes.AddActionSuccess(dictionary)),
    //             catchError(error => of(new dictionaryActions.ActionTypes.AddActionSuccess(error)))
    //         )
    //     })
    // )
}