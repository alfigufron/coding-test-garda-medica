<template>
  <div class="medical">
    <div class="complaint">
      <div class="medical-data main">
        <label>Keluhan Utama</label>
        <h2><b>KU :</b> Muntah berdarah sejak 1 hari yang lalu</h2>
      </div>

      <div class="medical-data diagnosis">
        <label>Diagnosis Primer dan sekunder</label>
        <h2><b>DP :</b> Esophageal varices with bleeding (I85.01)...</h2>
      </div>
    </div>

    <div class="medical-data vital-signs">
      <div class="header">
        <div>
          <label>Tanda-tanda vital</label>
          <span class="day">H+3</span>
        </div>

        <div>
          <span class="updated-at"
            >Last Update:
            <span class="datetime">Selasa, 27 Okt 2020, 06.30 WIB</span>
          </span>
          <button id="btn-vital-data">
            <i class="ri-menu-line"></i>
          </button>
        </div>
      </div>

      <div class="body">
        <div class="menu bg-success">
          <h5>Kesadaran</h5>
          <h3>Compos Mentis</h3>
        </div>

        <div class="menu bg-success">
          <h5>Tekanan Darah</h5>
          <h3>110/70</h3>
          <h5>mmHg</h5>
        </div>

        <div class="menu bg-danger">
          <h5>Laju Nadi</h5>
          <h3>120</h3>
          <h5>Kali/menit</h5>
        </div>

        <div class="menu bg-warning">
          <h5>Laju Nafas</h5>
          <h3>20</h3>
          <h5>Kali/menit</h5>
        </div>

        <div class="menu bg-success">
          <h5>Suhu Tubuh</h5>
          <h3>37,3</h3>
          <h5>&#8451;</h5>
        </div>

        <div class="menu bg-warning">
          <h5>EWS</h5>
          <h3>3</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MockupMedical",
};
</script>
