<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoList" :key="index">{{ todo }}</li>
    </ul>
    <input type="text" class="py-3 px-4 h-40px border" v-model="text">
    <button class="bg-green-600 px-5 py-2 text-black" @click="addTodoList">Add todo</button>
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
