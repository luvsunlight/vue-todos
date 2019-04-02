<template>
  <transition-group name="list-anim" tag="ul" mode="out-in">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style-type: none;
  padding-inline-start: 0;
}
.list-anim-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-anim-leave-to {
  opacity: 0; 
  transform: translateX(-30px);
}
.list-anim-enter-active,
.list-anim-leave-active {
  transition: all 0.6s ease;
}
.list-anim-leave-active {
  position: absolute;
}
.list-anim-move {
  transition: transform 0.6s;
}
</style>    