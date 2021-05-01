<template>
  <div>
    <div class="navbar">
      <ul>
        <li>
          <a href="#" class="active">Pengkajian Awal</a>
        </li>
        <li>
          <a href="#">
            Lab/Radiologi
            <span class="badge-notification bg-danger">2</span>
          </a>
        </li>
        <li>
          <a href="#">CPPT Ranap</a>
        </li>
        <li>
          <a href="#">
            Informed Concent
            <span class="badge-notification bg-warning">!</span>
          </a>
        </li>
        <li>
          <a href="#">
            Skrining
            <span class="badge-notification bg-danger">1</span>
          </a>
        </li>
        <li>
          <a href="#">Rekonsiliasi Obat</a>
        </li>
        <li>
          <a href="#">Resume Medis</a>
        </li>
        <li>
          <a href="#" class="nav-detail-menu">
            <i class="ri-menu-line"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="content-navbar">
      <MockupMedicalHistory />

      <div class="medical-detail">
        <MockupMenuMedicalDetail />

        <MockupMedicalDetail />
      </div>
    </div>
  </div>
</template>

<script>
import MockupMedicalHistory from "./MedicalHistory";
import MockupMenuMedicalDetail from "./MenuMedicalDetail";
import MockupMedicalDetail from "./MedicalDetail";

export default {
  name: "MockupNavbar",
  components: {
    MockupMedicalHistory,
    MockupMenuMedicalDetail,
    MockupMedicalDetail,
  },
};
</script>
