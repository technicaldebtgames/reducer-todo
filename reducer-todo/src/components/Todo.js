import React from 'react';
import '../styles/Todo.css';

const Todo = (props )=> {

    return (
        <div className={'todo-item ' + (props.item.complete ? 'complete' : 'incomplete')} onClick={() => props.toggleCompleteItem(props.item.id)} >
            {props.item.value}
        </div>
    );

};

export default Todo;