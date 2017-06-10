<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Card header title
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">

      <div class="content">
        <input
          v-model="newTodoText"
          v-on:keyup.enter="addNewTodo"
          placeholder="Add a todo"
        >
        <ul>
          <li
            is="todo-item"
            v-for="(todo, index) in todos"
            v-bind:key="todo"
            v-bind:title="todo"
            v-on:remove="todos.splice(index, 1)"
          ></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: {
      todos: [
        'bacon',
        'pudim'
      ]
    },
    methods: {
      addNewTodo () {
        this.todo.push()
      }
    }
  }
</script>
