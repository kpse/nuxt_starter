export const state = function () {
  return {
    todos: []
  }
}

export const mutations = {
  init (state, todos) {
    state.todos = todos
  }
}
