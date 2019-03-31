<template>
  <div class="list">
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <div class="input-wrap">
        <input
          type="text"
          class="input"
          placeholder="What needs to be done?"
          v-model="newTodo"
          v-focus
          @keydown.enter="add"
        >
      </div>
      <Anim>
        <Todo
          v-for="(todo,index) in sortedTodos"
          :key="index"
          :id="todo.id"
          :content="todo.content"
          :checked="todo.checked"
        ></Todo>
      </Anim>
      <div
        class="default"
        v-if="currentList && currentList.todos.length == 0"
      >Start writing something!</div>
      <Footer :dones="doneTodos" :undones="undoneTodos" @clear="clear"></Footer>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import Anim from "../anim/ListAnim";
import Todo from "./ListTodo";
import Header from "./ListHeader";
import Footer from "./ListFooter";
export default {
  components: { Anim, Todo, Header, Footer },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    ...mapState(["currentListId"]),
    ...mapGetters([
      "currentList",
      "getListById",
      "sortedTodos",
      "doneTodos",
      "undoneTodos"
    ])
  },
  methods: {
    add() {
      if (this.newTodo) {
        this.addTodo({
          listId: this.currentListId,
          content: this.newTodo
        });
        this.newTodo = "";
      }
    },
    clear() {
      this.clearList();
    },
    ...mapMutations(["addTodo", "clearList"])
  }
};
</script>

<style lang='less' scoped>
.list {
  width: 600px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
  box-sizing: border-box;

  .header {
    height: 60px;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    background: @color-primary;
    box-sizing: border-box;
  }

  .main {
    height: 100%;
    padding: 20px;
  }

  .input-wrap {
    .input {
      width: 100%;
      margin-bottom: 20px;
      padding: 10px 0;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      color: #555;
      text-indent: 0.5em;
      font-size: 20px;
      font-style: italic;
      outline: none;
    }

    ::-webkit-input-placeholder {
      color: #ccc;
    }
  }
  .default {
    margin-bottom: 10px;
    color: @color-grey;
  }

  @media screen and (max-width: 600px) {
    .list {
      top: 0;
      width: 100%;
      border-radius: 0;
      box-shadow: 0 0 5px #fff;
    }
    .header {
      border-radius: 0;
    }
  }
}
</style>