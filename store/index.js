import axios from 'axios'

export const state = function () {
  return {
    todos: []
  }
}

export const mutations = {
  init (state, todos) {
    state.todos = todos
  },
  add (state, todo) {
    state.todos = [...state.todos, todo]
  }
}

export const actions = {
  async add ({commit}, task) {
    const res = await axios.post('https://vuejsonserver-hnvawoqava.now.sh/todos', {task, complete: false})
    commit('add', res.data)
  }
}
