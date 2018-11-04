import React from 'react';
import {Button, Input,List} from "antd";

const TodoListUI=(props) => {
    return (
        <div>
            <Input style={{width:'300px',marginLeft:'10px'}} placeholder="Basic usage" value={props.inputValue} onChange={props.handleChangeValue}/>
            <Button type="primary" style={{marginLeft:'10px'}} onClick={props.handleAddValue}>提交</Button>
            <List style={{marginTop:'10px',width:'300px',marginLeft:'10px'}}
                bordered dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={(index)=>{props.handleDelValue(index)}}>{item}</List.Item>)}
            />
        </div>
    );
};
export default TodoListUI;