import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {initialState, reducer} from './reducers/reducer';
import './styles/App.css';



const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (value) => {
    dispatch({type: 'ADD_ITEM',
              payload: value});
  };

  const clearItems = () => {
    dispatch({type: 'CLEAR_ITEMS'});
  };

  const toggleCompleteItem = (id) => {
    dispatch({type: 'TOGGLE_TODO',
              payload: id});
  };

  return (
    <div className='app-wrap'>
      <h2>TO DO:</h2>
      <TodoList items={state.items} toggleCompleteItem={toggleCompleteItem} />
      <TodoForm addItem={addItem} clearItems={clearItems} />
    </div>
  );
};

export default App;