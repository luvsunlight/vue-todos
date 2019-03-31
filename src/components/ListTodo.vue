<template>
  <li class="todo vertical-center">
    <div v-if="!checked" class="vertical-center left">
      <v-icon name="regular/check-circle" :scale="1.5" @click.native="toggleCheck" class="icon check"></v-icon>
      <Input :text="content" @edit="edit"></Input>
    </div>
    <div v-else class="vertical-center">
      <v-icon name="check-circle" :scale="1.5" @click.native="toggleCheck" class="icon"></v-icon>
      <s class="done">
        <span>{{content}}</span>
      </s>
    </div>
    <v-icon name="times" class="icon trash" @click.native="trash"></v-icon>
  </li>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import Input from "./BaseInput";
export default {
  components: { Input },
  props: {
    id: {
      type: String,
      default: 0
    },
    content: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(["currentListId"]),
    ...mapGetters(["currentList"])
  },
  methods: {
    toggleCheck() {
      this.editTodo({
        listId: this.currentListId,
        todoId: this.id,
        content: this.content,
        checked: !this.checked
      });
    },
    edit(text) {
      this.editTodo({
        listId: this.currentListId,
        todoId: this.id,
        content: text,
        checked: this.checked
      });
    },
    trash() {
      this.deleteTodo({
        listId: this.currentListId,
        todoId: this.id
      });
    },
    ...mapMutations(["editTodo", "deleteTodo"])
  }
};
</script>

<style lang='less'>
@import "../common/style/util";
.todo {
  justify-content: space-between;
  position: relative;
  height: 36px;
  padding: 5px;
  border-radius: 6px;
  list-style: none;
  .left {
    flex-grow: 3;
  }
  .icon {
    margin: 0 10px;
    color: @color-primary;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .trash {
    color: @color-dark;
  }

  .done {
    color: @color-grey;
    span {
      font-size: 20px;
    }
  }

  &:hover {
    background: @color-lightPink;

    input {
      background-color: @color-lightPink!important;
    }
  }
}
</style>