<template>
  <div class="container vertical-center">
    <div class="vertical-center left">
      <v-icon class="icon bar" name="bars" :scale="2" @click.native="toggleMenu"></v-icon>
      <Input
        class="input"
        :text="currentListName"
        backgroundColor="#37ad70"
        color="#fff"
        @edit="edit"
      ></Input>
      
    </div>
    <v-icon class="icon trash" name="trash" :scale="1" @click.native="trash"></v-icon>
  </div>
</template>

<script>
import Input from "./BaseInput";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    Input
  },
  computed: {
    currentListName() {
      if (this.currentList) return this.currentList.name;
    },
    ...mapState(["currentListId"]),
    ...mapGetters(["currentList"])
  },
  methods: {
    toggleMenu() {
      log(this.$menu);
      this.$menu.toggleShow();
    },
    edit(text) {
      log('edit')
      this.editList({
        listId: this.currentListId,
        name: text
      });
    },
    trash() {
      this.deleteList(this.currentListId)
    },
    ...mapMutations(["editList", "deleteList"])
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/util.less";

.container {
  .left {
    justify-content: flex-start;
    flex-grow: 3;
  }
  .icon {
    margin: 0 10px;
    color: #fff;
  }
}
</style>