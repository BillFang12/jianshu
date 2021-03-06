import React from 'react';
import {Button, Input, List} from "antd";

//无状态的组件性能会更高
const TodoListUI = (props) => {
    return (
        <div>
            <Input style={{ width:'92%',marginLeft: '10px'}} placeholder="Basic usage" value={props.inputValue}
                   onChange={props.handleChangeValue}/>
            <Button type="primary" style={{marginLeft: '10px'}} onClick={props.handleAddValue}>提交</Button>
            <List style={{marginTop: '10px', marginLeft: '10px'}}
                  bordered dataSource={props.list}
                  renderItem={(item, index) => (<List.Item onClick={() => {
                      props.handleDelValue(index)
                  }}>{item}</List.Item>)}
            />
        </div>
    );
};
export default TodoListUI;