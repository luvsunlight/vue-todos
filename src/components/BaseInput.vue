<template>
  <input
    class="input"
    type="text"
    v-model="localText"
    :style="inputStyle"
    @blur="done"
    @keyup.enter="done"
  >
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#2c3e50"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      localText: ""
    };
  },
  watch: {
    text(v) {
      this.localText = v;
    }
  },
  created() {
    this.localText = this.text
  },
  computed: {
    inputStyle() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      };
    }
  },
  methods: {
    done() {
      this.$el.blur();
      this.$emit("edit", this.localText);
    }
  }
};
</script>

<style lang='less' scoped>
.input {
  width: 80%;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  font-size: 20px;
}
</style>