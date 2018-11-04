import {CHANGE_INPUT_VALUE,CHANGE_DEL_VALUE,CHANGE_LIST_VALUE,INIT_LIST_ACTION} from './actionTypes';

export const handleChangeValue=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});

export const handleAddValue=(value)=>({
    type:CHANGE_LIST_VALUE,
    value
});

export const handleDelValue=(index)=>({
    type:CHANGE_DEL_VALUE,
    index
});

export const initListAction=(value)=>({
    type:INIT_LIST_ACTION,
    value
});