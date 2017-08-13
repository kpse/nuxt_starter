<template>
  <div class="pv4 pa4">
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Todos</h1>
      <ul class="list pl0 ml0 mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="ph3 pv3 bb b--light-silver">
          {{ todo.task }}
        </li>
      </ul>
    </article>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    async fetch ({store, redirect, error}) {
      try {
        const res = await axios.get('https://odos-dygueqmoyj.now.sh/todos')
        store.commit('init', res.data)
      } catch (e) {
        error({statusCode: 500, message: 'service side is down!'})
      }
    },
    computed: {
      ...mapState({
        todos: state => state.todos
      })
    },
    methods: {}
  }
</script>

<style>

</style>
