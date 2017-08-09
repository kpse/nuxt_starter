export const state = function () {
  return {counter: 2}
}

export const mutations = {
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  }
}
