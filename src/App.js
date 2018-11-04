import React, { Component } from 'react';
import {Input,List,Button} from 'antd';
import store from './store/';
import {handleChangeValue,handleAddValue,handleDelValue} from './store/actionCreator';

class App extends Component {

  constructor(props) {
      super(props);
      this.state=store.getState();
      this.handleChangeValue=this.handleChangeValue.bind(this);
      this.handleAddValue=this.handleAddValue.bind(this);
      this.handleStoreChange=this.handleStoreChange.bind(this);
      store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div>
       <Input style={{width:'300px',marginLeft:'10px'}} placeholder="Basic usage" value={this.state.inputValue} onChange={this.handleChangeValue}/>
        <Button type="primary" style={{marginLeft:'10px'}} onClick={this.handleAddValue}>提交</Button>
        <List style={{marginTop:'10px',width:'300px',marginLeft:'10px'}}
        bordered
        dataSource={this.state.list}
        renderItem={(item,index) => (<List.Item onClick={this.handleDelValue.bind(this,index)}>{item}</List.Item>)}

        />
      </div>
    );
  }

  handleChangeValue(e){
      const action=handleChangeValue(e.target.value);
     store.dispatch(action);
  }

  handleStoreChange(){
      this.setState(store.getState());
  }

  handleAddValue(){
    const action=handleAddValue(this.state.inputValue);
    store.dispatch(action);
  }

  handleDelValue(index){
      const action=handleDelValue(index);
      store.dispatch(action);
  }

}

export default App;
