<template>
  <div ref="customMenu" class="wrap">
    <div class="menu-wrap" :class="toggleClass">
      <!-- menu lists -->
      <div class="menu">
        <div
          class="menu-item"
          :class="{active: index == currentItemIndex}"
          v-for="(item, index) in items"
          :key="index"
          @click="onClick(index)"
        >
          <div>{{item.name}}</div>
        </div>
        <slot></slot>
      </div>
      <!-- menu bar -->
      <div class="menu-bar" v-if="showMenuBar" @click="toggleShow">
        <v-icon name="bars" scale="2"></v-icon>
      </div>
    </div>
    <!-- menu maks -->
    <div class="menu-mask" v-show="show" @click="toggleShow"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
    showMenuBar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      currentItemIndex: 0
    };
  },
  mounted() {
    Vue.prototype.$menu = this
  },
  computed: {
    toggleClass() {
      return { hide: !this.show };
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    onClick(index) {
      this.currentItemIndex = index;
      this.$emit("select", index);
    }
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/util.less";
@menu-width: 300px;
@menu-hover-color: #34495e;

.menu-wrap {
  position: absolute;
  left: 0;
  height: 100%;
  z-index: 10000;
  transition: left 0.5s;

  .menu {
    float: left;
    width: @menu-width;
    height: 100%;
    background: @color-white;

    .menu-item {
      padding: 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: @menu-hover-color;
      }
      &.active {
        color: #fff;
        background: @menu-hover-color;
      }
    }
  }

  .menu-bar {
    float: left;
    margin: 20px;
    transition: right 0.5s;
  }
}

.hide {
  left: -@menu-width;
}

.menu-mask {
  .fixed;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
</style>