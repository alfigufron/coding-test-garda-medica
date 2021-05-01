<template>
  <div>
    <NavRouter />

    <form @submit.prevent="searchKeyword">
      <input type="text" ref="keyword" />
      <button type="submit">Search</button>
    </form>
    <br />

    <div class="result" ref="result"></div>

    <div class="text">
      <p ref="text-data">
        Turtles are reptiles of the order Chelonii[2] or Testudines
        characterised by a special bony or cartilaginous shell developed from
        their ribs and acting as a shield.[3] "Turtle" may either refer to the
        order as a whole, or to particular turtles which make up a form taxon
        that is not monophyletic. The order Chelonii or Testudines includes both
        extant (living) and extinct species. The earliest known turtles date
        from 220 million years ago,[4] making turtles one of the oldest reptile
        groups and a more ancient group than lizards, snakes or crocodiles. Of
        the many species alive today, some are highly endangered.[5]. Like all
        other extant reptiles, turtles are ectotherms their internal temperature
        varies according to the ambient environment, commonly called
        cold-blooded. However, because of their high metabolic rate, leatherback
        sea turtles have a body temperature that is noticeably higher than that
        of the surrounding water. Like other amniotes (reptiles, dinosaurs,
        birds, and mammals), they breathe air and do not lay eggs underwater,
        although many species live in or around water. The largest turtles are
        aquatic.
      </p>
    </div>
  </div>
</template>

<script>
import { NavRouter } from "../../components";

export default {
  name: "TextSearch",
  components: {
    NavRouter,
  },
  methods: {
    searchKeyword() {
      const textData = document.querySelector(".text p");
      const input = this.$refs["keyword"].value;
      const result = this.$refs["result"];

      const regex = new RegExp(input, "g");

      const matchResult = textData.innerHTML.match(regex);

      result.innerHTML = `Found ${matchResult.length} occurances of the word "${input}" in the below text.`;
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  text-align: left;
  padding: 20px 40px;
}
</style>
