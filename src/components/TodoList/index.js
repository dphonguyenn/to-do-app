import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoListFilterSelector } from '../../redux/selector.js';
import todoListSlice from './todoListSlice.js';

// * useDispatch: dung de dispatch actions
// * useSelector: lay data tu store
export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const dispatch = useDispatch();

  const todoList = useSelector(todoListFilterSelector);

  const handleAddButtonClick = () => {
    dispatch(todoListSlice.actions.addTodoList({
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority:priority
    }));
    setTodoName('');
  }

  const handleSelectInput = (value) => {
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.length > 0 ? todoList.map(todo => {
          return (
            <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>
          )
        }) : <p style={{color: 'red'}}>NOT FOUND</p>}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e)=>setTodoName(e.target.value)}/>
          <Select defaultValue="Medium" value={priority} onChange={handleSelectInput}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
