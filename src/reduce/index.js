import {CHANGE_INPUT_VALUE,CHANGE_DEL_VALUE,CHANGE_LIST_VALUE} from '../store/actionTypes';

const defaultState={
    inputValue:'123',
    list:[]
}

export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newSate=JSON.parse(JSON.stringify(state));
        newSate.inputValue=action.value;
        return newSate;
    }
     if(action.type===CHANGE_LIST_VALUE){
        const newSate=JSON.parse(JSON.stringify(state));
        newSate.list.push(action.value);
        newSate.inputValue='';
        return newSate;
    }
    if(action.type===CHANGE_DEL_VALUE){
        const newSate=JSON.parse(JSON.stringify(state));
        newSate.list.splice(action.index,1);
        console.log(action.index);
        return newSate;
    }
    console.log(action);
    return state;
}