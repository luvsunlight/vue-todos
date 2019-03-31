<template>
  <div class="badge" :style="badgeStyle">{{text}}</div>
</template>

<script>
const baseWidth = 16;
const baseHeight = 16;
const baseFontSize = 10;

export default {
  props: {
    size: {
      type: Number,
      default: 1
    },
    text: {
      type: [String, Number],
      default: "1"
    },
    color: {
      type: String,
      default: "#fff"
    },
    backgroundColor: {
      type: String,
      default: "#34495e"
    }
  },
  computed: {
    badgeStyle() {
      const width = this.size * baseWidth;
      const height = this.size * baseHeight;
      const fontSize = this.size * baseFontSize;
      return {
        width: String(width) + "px",
        height: String(height) + "px",
        color: this.color,
        backgroundColor: this.backgroundColor,
        fontSize: String(fontSize) + "px",
        lineHeight: String(height) + "px"
      };
    }
  }
};
</script>

<style lang='less' scoped>
.badge {
  display: inline-block;
  margin: 0 5px;
  border-radius: 50%;
  font-weight: bold;
}
</style>