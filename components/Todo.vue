<template>
  <div>
    <button @click="addTodoList">Add todo</button>
  </div>
</template>

<script setup>
const { todoList, addTodo } = useTodo();
function addTodoList() {
    addTodo({id: 1, text: 'lorem ipsum dolor'})
    console.log(todoList);
}
</script>

<style lang="scss" scoped></style>
