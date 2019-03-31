<template>
  <div class="footer">
    <span class="item">
      <Badge :text="undones"></Badge>items active
    </span>
    <span class="item">
      <Badge :text="dones"></Badge>items done
    </span>
    <span class="item clear" v-if="dones>0" @click="$emit('clear')">Clear complete</span>
  </div>
</template>

<script>
import Badge from "./Badge";
export default {
  components: { Badge },
  props: {
    dones: Number,
    undones: Number
  }
};
</script>

<style lang='less' scoped>
.footer {
  padding-top: 8px;
  border-top: 1px solid #ddd;
  font-size: 10px;
  .item {
    margin: 0 10px;
  }
  .hightlight {
    color: @color-success;
  }

  .clear {
    padding: 2px 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
}
</style>