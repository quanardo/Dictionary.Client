import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromDictionary from './dictionary/dictionary.reducer';

export interface DictionaryState {
    dictionaries: fromDictionary.State;
}

export const reducers: ActionReducerMap<DictionaryState> = {
    dictionaries: fromDictionary.reducer
}


// Working
export const getDictionaryState = createFeatureSelector<fromDictionary.State>('dictionaries');

// export const getDictionaryState = createFeatureSelector<DictionaryState>('dictionaries');
// export const selectAll = (state: DictionaryState) => state.dictionaries;

// Working
export const { selectAll } = fromDictionary.adapter.getSelectors(
    getDictionaryState
);

// export const { selectAll } = fromDictionary.adapter.getSelectors(getDictionaryState)

// export const getDictionaryEntities = createSelector(
//     getDictionaryState,
//     (state: DictionaryState) => state.dictionaries
// )

// export const getAllDictionaries = createSelector(
//     getDictionaryState,
//     fromDictionary.selectAllDictionaries
// )

// export const getAllDictionaries = createSelector(getDictionaryEntities, entities => {
//     return Object.keys(entities).map(id => entities[id]);
// })