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
  },
  remove (state, todo) {
    state.todos = state.todos.filter(t => t.id !== todo.id)
  }
}

export const actions = {
  async add ({commit}, task) {
    const res = await axios.post('https://vuejsonserver-hnvawoqava.now.sh/todos', {task, complete: false})
    commit('add', res.data)
  },

  async remove ({commit}, task) {
    await axios.delete(`https://vuejsonserver-hnvawoqava.now.sh/todos/${task.id}`)
    commit('remove', task)
  }
}
