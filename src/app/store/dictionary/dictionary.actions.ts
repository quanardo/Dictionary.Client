import { Action } from '@ngrx/store';
import { Dictionary } from './dictionary';


export enum ActionTypes {
    GET = '[Dictionary] Get',
    GET_SUCCESS = '[Dictionary] Get Success',
    GET_FAIL = '[Dictionary] Get Fail',

    ADD = '[Dictionary] Add',
    ADD_SUCCESS = '[Dictionary] Add Success',
    ADD_FAIL = '[Dictionary] Add Fail',

    REMOVE = '[Dictionary] Remove',
    REMOVE_SUCCESS = '[Dictionary] Remove Success',
    REMOVE_FAIL = '[Dictionary] Remove Fail',

    UPDATE = '[Dictionary] Update',
    UPDATE_SUCCESS = '[Dictionary] Update Success',
    UPDATE_FAIL = '[Dictionary] Update Fail',

    ADD_TRANSLATION = '[Dictionary.Translation] Add',
    ADD_TRANSLATION_SUCCESS = '[Dictionary.Translation] Add Success',
    ADD_TRANSLATION_FAIL = '[Dictionary.Translation] Add Fail',

    REMOVE_TRANSLATION = '[Dictionary.Translation] Remove',
    REMOVE_TRANSLATION_SUCCESS = '[Dictionary.Translation] Remove Success',
    REMOVE_TRANSLATION_FAIL = '[Dictionary.Translation] Remove Fail',

    UPDATE_TRANSLATION = '[Dictionary.Translation] Update',
    UPDATE_TRANSLATION_SUCCESS = '[Dictionary.Translation] Update Success',
    UPDATE_TRANSLATION_FAIL = '[Dictionary.Translation] Update Fail'
}


// Get Request
export class GetDictionary implements Action {
    readonly type = ActionTypes.GET;
}

export class GetDictionarySuccess implements Action {
    readonly type = ActionTypes.GET_SUCCESS;

    constructor(public payload: Dictionary[]) { }
}

export class GetDictionaryFail implements Action {
    readonly type = ActionTypes.GET_FAIL;

    constructor(public payload: Error) { }
}

// Create new dictionary
export class AddDictionary implements Action {
    readonly type = ActionTypes.ADD;

    constructor(public payload: any) { }
}

export class AddDictionarySuccess implements Action {
    readonly type = ActionTypes.ADD_SUCCESS;

    constructor(public payload: Dictionary) { }
}

export class AddDictionaryFail implements Action {
    readonly type = ActionTypes.ADD_FAIL;

    constructor(public payload: Error) { }
}

// Remove existing dictionary
export class RemoveDictionary implements Action {
    readonly type = ActionTypes.REMOVE;

    constructor(public payload: string) { }
}

export class RemoveDictionarySuccess implements Action {
    readonly type = ActionTypes.REMOVE_SUCCESS;

    constructor(public payload: any) { }
}

export class RemoveDictionaryFail implements Action {
    readonly type = ActionTypes.REMOVE_FAIL;

    constructor(public payload: Error) { }
}

// Update one of dictionaries
export class UpdateDictionary implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: Dictionary) { }
}

export class UpdateDictionarySuccess implements Action {
    readonly type = ActionTypes.UPDATE_SUCCESS;

    constructor(public payload: Dictionary) { }
}

export class UpdateDictionaryFail implements Action {
    readonly type = ActionTypes.UPDATE_FAIL;

    constructor(public payload: Error) { }
}

export class AddTranslation implements Action {
    readonly type = ActionTypes.ADD_TRANSLATION;

    constructor(public payload: { id: string, translation: object }) { }
}

export class AddTranslationSuccess implements Action {
    readonly type = ActionTypes.ADD_TRANSLATION_SUCCESS;
    constructor(public payload: { id: string, translation: { _id: string, from: string, to: string } }) { }
    // constructor(public payload: Dictionary) { } 
}

export class AddTranslationFail implements Action {
    readonly type = ActionTypes.ADD_TRANSLATION_FAIL;

    constructor(public payload: Error) { }
}

export class RemoveTranslation implements Action {
    readonly type = ActionTypes.REMOVE_TRANSLATION;

    constructor(public payload: { id: string, trslId: any }) { }
}

export class RemoveTranslationSuccess implements Action {
    readonly type = ActionTypes.REMOVE_TRANSLATION_SUCCESS;

    constructor(public payload: { id: string, translationId: string }) { }
}

export class RemoveTranslationFail implements Action {
    readonly type = ActionTypes.REMOVE_TRANSLATION_FAIL;

    constructor(public payload: Error) { }
}

export class UpdateTranslation implements Action {
    readonly type = ActionTypes.UPDATE_TRANSLATION;

    constructor(public payload: { id: string, translation: { _id: string, from: string, to: string } }) { }
}

export class UpdateTranslationSuccess implements Action {
    readonly type = ActionTypes.UPDATE_TRANSLATION_SUCCESS;

    constructor(public payload: { id: string, translation: { _id: string, from: string, to: string } }) { }
}

export class UpdateTranslationFail implements Action {
    readonly type = ActionTypes.UPDATE_TRANSLATION_FAIL;

    constructor(public payload: Error) { }
}

export type Actions =
    GetDictionary |
    GetDictionarySuccess |
    GetDictionaryFail |
    AddDictionary |
    AddDictionarySuccess |
    AddDictionaryFail |
    RemoveDictionary |
    RemoveDictionarySuccess |
    RemoveDictionaryFail |
    UpdateDictionary |
    UpdateDictionarySuccess |
    UpdateDictionaryFail |
    AddTranslation |
    AddTranslationSuccess |
    AddTranslationFail |
    RemoveTranslation |
    RemoveTranslationSuccess |
    RemoveTranslationFail |
    UpdateTranslation |
    UpdateTranslationSuccess |
    UpdateTranslationFail