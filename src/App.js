import React, {Component} from 'react';
import store from './store/';
import {handleChangeValue, handleAddValue, handleDelValue, initListAction, getData} from './store/actionCreator';
import TodoListUI from './ui/TodoListUI';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleAddValue = this.handleAddValue.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleDelValue = this.handleDelValue.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleChangeValue={this.handleChangeValue}
                handleAddValue={this.handleAddValue}
                handleDelValue={this.handleDelValue}
                list={this.state.list}
            />
        );
    }

    handleChangeValue(e) {
        const action = handleChangeValue(e.target.value);
        store.dispatch(action);
    }

    componentDidMount() {
        const action = getData();
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleAddValue() {
        const action = handleAddValue(this.state.inputValue);
        store.dispatch(action);
    }

    handleDelValue(index) {
        const action = handleDelValue(index);
        store.dispatch(action);
    }


    initListAction(value) {
        return initListAction(value);
    }

}

export default App;
