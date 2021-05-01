<template>
  <div class="modal" :class="show ? 'active' : null">
    <div class="backdrop" @click="$emit('close')"></div>

    <div class="content" :class="getContentClass()">
      <div class="header">
        <slot name="header"></slot>
      </div>

      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: Boolean,
    size: String,
    animation: String,
  },
  methods: {
    getContentClass() {
      let contentClass = "";

      if (this.size === "sm") {
        contentClass = "modal-sm ";
      } else if (this.size === "lg") {
        contentClass = "modal-lg ";
      }

      if (this.animation) contentClass += this.animation;

      return contentClass;
    },
  },
};
</script>
