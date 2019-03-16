import { Actions, ActionTypes } from './dictionary.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Dictionary } from './dictionary';



export interface State extends EntityState<Dictionary> {
    // loaded?: boolean,
    // loading?: boolean,
    // error?: Error
}

export const adapter: EntityAdapter<Dictionary> = createEntityAdapter<Dictionary>({
    selectId: (dictionary: Dictionary) => dictionary._id
});

export const initialState: State = adapter.getInitialState({
    // loaded: false,
    // loading: false,
    // error: null
});

export function reducer(state: State = initialState, action: Actions) {
    switch (action.type) {
        case (ActionTypes.GET_SUCCESS): {
            return adapter.addAll(action.payload, state);
        }

        case (ActionTypes.ADD_SUCCESS): {
            return adapter.addOne(action.payload, state);
        }

        case (ActionTypes.REMOVE_SUCCESS): {
            return adapter.removeOne(action.payload, state);
        }

        case (ActionTypes.UPDATE_SUCCESS): {
            // console.log(adapter.updateOne({ id: action.payload._id, changes: { language: action.payload.language } }, state))
            return adapter.updateOne({ id: action.payload._id, changes: { language: action.payload.language } }, state)
        }

        case (ActionTypes.ADD_TRANSLATION_SUCCESS): {
            state.entities[action.payload.id].translations.push(action.payload.translation)
            return state;
            // In future - Try to find better solution
        }

        case (ActionTypes.REMOVE_TRANSLATION_SUCCESS): {
            var index = state.entities[action.payload.id].translations
                .map(translation => translation._id)
                .indexOf(action.payload.translationId);
            state.entities[action.payload.id].translations.splice(index, 1);
            return state;
        }

        case (ActionTypes.UPDATE_TRANSLATION_SUCCESS): {
            var index = state.entities[action.payload.id].translations
                .map(translation => translation._id)
                .indexOf(action.payload.translation._id);
            state.entities[action.payload.id].translations[index] = action.payload.translation;
            return state;
        }


        // case (ActionTypes.UPDATE_SUCCESS): {
        //     return {
        //         ...state,
        //         dictionaries: [state.dictionaries.findIndex(function (i) {
        //             return i._id == action.payload._id;
        //         }), action.payload]
        //     }
        // }
        default: {
            return state;
        }
    }
}



// export const selectAll = adapter.getSelectors();

// export const selectAllDictionaries = selectAll;

// export const getAllDictionaries = (state: State) => state;

