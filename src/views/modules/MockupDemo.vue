<template>
  <div class="wrapper" id="inpatient-page">
    <MockupSidebar />

    <div class="body-wrapper">
      <MockupHeader />

      <div class="information">
        <MockupProfile />

        <MockupMedical />
      </div>

      <MockupNavbar />
    </div>
  </div>
</template>

<script>
import {
  MockupSidebar,
  MockupHeader,
  MockupProfile,
  MockupMedical,
  MockupNavbar,
} from "../../components";

export default {
  name: "Mockup",
  components: {
    MockupSidebar,
    MockupHeader,
    MockupProfile,
    MockupMedical,
    MockupNavbar,
  },
};
</script>
