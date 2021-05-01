<template>
  <div>
    <NavRouter />

    <div class="tabbed-content">
      <div class="tab">
        <ul class="tab-menu">
          <li>
            <button class="active" data-target="tab-1">Tab 1</button>
          </li>
          <li>
            <button data-target="tab-2">Tab 2</button>
          </li>
          <li>
            <button data-target="tab-3">Tab 3</button>
          </li>
        </ul>

        <div class="tab-content active" id="tab-1">
          Gingerbread muffin gummies gingerbread macaroon. Lollipop candy
          applicake toffee faworki. Bear claw topping jelly toffee toffee powder
          tiramisu candy chupa chups. Chupa chups dragee icing applicake chupa
          chups dessert. Croissant jelly faworki marzipan tootsie roll
          marshmallow. Marshmallow toffee sweet roll fruitcake.
        </div>

        <div class="tab-content" id="tab-2">
          Chocolate faworki croissant brownie halvah macaroon gummi bears wypas.
          Chupa chups icing gummies pudding dessert carrot cake. Cupcake jelly
          beans sweet roll icing ice cream apple pie tootsie roll gummi bears
          marzipan. Brownie gummies chupa chups pie. Cupcake jujubes topping.
        </div>

        <div class="tab-content" id="tab-3">
          Cheesecake jelly beans ice cream lollipop sweet pastry. Chupa chups
          dessert cheesecake sesame snaps. Cookie ice cream candy canes pastry
          cake muffin. Icing chocolate sweet gummi bears powder oat cake oat
          cake lemon drops.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavRouter } from "../../components";

export default {
  name: "TabbedContent",
  components: {
    NavRouter,
  },
  mounted() {
    const tabMenu = document.querySelectorAll(".tab-menu li button");
    const tabContent = document.querySelectorAll(".tab-content");

    for (let i = 0; i < tabMenu.length; i++) {
      const button = tabMenu[i];

      button.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("data-target");

        for (let i = 0; i < tabMenu.length; i++) {
          tabContent[i].classList.remove("active");
          tabMenu[i].classList.remove("active");
        }

        this.classList.toggle("active");
        document.getElementById(target).classList.toggle("active");
      });
    }
  },
};
</script>

<style lang="scss">
.tabbed-content {
  width: 50%;
  margin: auto;
}
</style>
