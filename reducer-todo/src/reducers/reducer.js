export const initialState = {
    counter: 2,
    items: [{value: 'List item 1',
             id: 0,
             complete: false},
            {value: 'List item two',
             id: 1,
             complete: true}]
};

export const reducer = (state, action) => {

    switch(action.type) {
        case "ADD_ITEM":
            return {counter: state.counter + 1,
                    items: [...state.items, {value: action.payload, id: state.counter, complete: false}]};
        case "CLEAR_ITEMS":
            return {counter: state.counter,
                    items: state.items.filter(item => item.complete === false)};
        case "TOGGLE_TODO":
            return {counter: state.counter,
                    items: state.items.map(item => {
                        if (item.id === action.payload){
                            return {...item, complete: !item.complete}
                        }
                        else return item;
                    })};
        default:
            return state;
    };

};