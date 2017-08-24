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
  },
  toggle (state, todo) {
    state.todos = state.todos.map(t => t.id === todo.id ? todo : t)
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
  },
  async toggle ({commit}, task) {
    const res = await axios.patch(`https://vuejsonserver-hnvawoqava.now.sh/todos/${task.id}`, {
      complete: !task.complete
    })
    commit('toggle', res.data)
  }
}
