<template>
  <div>
    <NavRouter />

    <table>
      <tr>
        <th>Nama</th>
        <th>NRM</th>
        <th>Poli</th>
      </tr>
      <tr v-for="(data, index) in dataDummy" :key="index">
        <td>{{ data.name }}</td>
        <td>{{ data.nrm }}</td>
        <td>{{ data.poli }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { NavRouter } from "../../components";

import sampleDatatable from "../../data/table.json";

export default {
  name: "DemoTable",
  components: {
    NavRouter,
  },
  data: function () {
    return {
      dataDummy: sampleDatatable,
    };
  },
  created() {
    console.log(this.dataDummy);
  },
};
</script>
