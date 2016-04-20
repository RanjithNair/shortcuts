export function addTodo(todo) {
  return {
    type: 'SHORTCUT_ADDED',
    payload: shortcut
  };
}

export function deleteTodo(id) {
  return {
    type: 'SHORTCUT_DELETED',
    payload: id
  }
}
