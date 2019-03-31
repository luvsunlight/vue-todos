<template>
  <div class="container">
    <section class="menu">
      <Menu :items="todoLists" :showMenuBar="false" @select="onClick">
        <div class="menu-item" @click="add">
          <div class="add">
            <v-icon name="plus"></v-icon>新增
          </div>
        </div>
      </Menu>
    </section>
    <section class="list">
      <List></List>
    </section>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import List from "../components/List";
import { mapMutations, mapState } from "vuex";
import { getData } from "../api/api";

export default {
  components: {
    Menu,
    List
  },
  created() {
    let data = localStorage.getItem("vue-todos");
    if (data) {
      log("Loading data from localStorage...");
      let lists = JSON.parse(data);
      this.setCurrentTodoLists(lists);
      this.setCurrentList(lists[0].id);
    } else {
      log("Creating new data...");
      getData().then(res => {
        this.setCurrentTodoLists(res.data.lists);
        this.setCurrentList(res.data.currentListId);
      });
    }
  },
  computed: {
    ...mapState(["currentListId", "todoLists"])
  },
  methods: {
    onClick(index) {
      const ID = this.todoLists[index].id;
      this.setCurrentList(ID);
    },
    add() {
      this.addList();
      const index = this.todoLists.length - 1;
      this.setCurrentList(this.todoLists[index].id);
      this.$menu.currentItemIndex = index;
      this.$menu.toggleShow();
    },
    ...mapMutations(["addList", "setCurrentTodoLists", "setCurrentList"])
  }
};
</script>

<style lang='less' scoped>
</style>