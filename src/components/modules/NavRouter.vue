<template>
  <div id="nav">
    <router-link :to="{ name: 'ImageRotator' }">Image Rotator Demo</router-link>
    |
    <router-link :to="{ name: 'TabbedContent' }">
      Tabbed Content Demo
    </router-link>
    | <router-link :to="{ name: 'TextSearch' }">Text Search Demo</router-link> |
    <router-link :to="{ name: 'PopUpDemo' }">Popup Demo</router-link> |
    <router-link :to="{ name: 'TableDemo' }">Table Demo</router-link> |
    <router-link :to="{ name: 'MockupDemo' }">Mockup Demo</router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarRouter",
};
</script>
