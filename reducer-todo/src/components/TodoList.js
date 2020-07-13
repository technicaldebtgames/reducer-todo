import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div className='todo-list'>
            {props.items.map(item => 
                <Todo key={item.id} item={item} toggleCompleteItem={props.toggleCompleteItem}/>
            )}
        </div>
    );

};

export default TodoList;