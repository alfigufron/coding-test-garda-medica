<template>
  <div>
    <NavRouter />

    <button @click="modal = !modal">Open me!</button>
    <button @click="smallModal = !smallModal">Small Modal</button>
    <button @click="largeModal = !largeModal">Large Modal</button>

    <Modal :show="modal" @close="modal = false">
      <template v-slot:header>
        <h1>Modal</h1>
      </template>

      <template v-slot:body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugit
        facere explicabo eius autem quos quam officia quisquam qui illo veniam
        quaerat cum voluptate natus pariatur sunt, dicta odit consequatur.
      </template>
    </Modal>

    <Modal
      :show="smallModal"
      @close="smallModal = false"
      size="sm"
      animation="zoom-in"
    >
      <template v-slot:header>
        <h1>Small Modal</h1>
      </template>

      <template v-slot:body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugit
        facere explicabo eius autem quos quam officia quisquam qui illo veniam
        quaerat cum voluptate natus pariatur sunt, dicta odit consequatur.
      </template>
    </Modal>

    <Modal
      :show="largeModal"
      @close="largeModal = false"
      size="lg"
      animation="flip"
    >
      <template v-slot:header>
        <h1>Large Modal</h1>
      </template>

      <template v-slot:body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugit
        facere explicabo eius autem quos quam officia quisquam qui illo veniam
        quaerat cum voluptate natus pariatur sunt, dicta odit consequatur.
      </template>
    </Modal>
  </div>
</template>

<script>
import { NavRouter, Modal } from "../../components";

export default {
  name: "PopUpDemo",
  components: {
    NavRouter,
    Modal,
  },
  data() {
    return {
      modal: false,
      smallModal: false,
      largeModal: false,
    };
  },
  methods: {
    showModal() {
      this.modal = !this.modal;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 6px;
}
</style>
