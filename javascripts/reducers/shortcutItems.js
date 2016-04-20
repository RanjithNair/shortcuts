const initialState = () => {
  const shortcuts = localStorage.getItem('shortcuts');

  return shortcuts ? JSON.parse(shortcuts) : [];
}

export default function shortcutItems(state = initialState(), action) {
    switch (action.type) {
      case 'SHORTCUT_ADDED':
        console.log("Shortcut added reducer function");
        return [
          ...state,
          shortcutItem(undefined, action)
        ];

      case 'SHORTCUT_DELETED':
        return state.filter(todo =>
            todo.id !== action.payload
        );
    }
    return state;
}

function shortcutItem(state, action) {
  switch(action.type) {
    case 'SHORTCUT_ADDED':
      return {
        id: action.id,
        name: action.text,
        pathValue: action.pathValue
      };
  }
}
