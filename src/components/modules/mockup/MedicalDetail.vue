<template>
  <div class="body">
    <h4 class="title">Pengkajian Awal Pasien Rawat Inap</h4>

    <div class="description">
      <div class="anamnesis">
        <label> <input type="radio" name="anamnesis" /> Autoanamnesis </label>

        <label>
          <input type="radio" name="anamnesis" checked /> Alloanamnesis : Tn.
          Rizal (Suami)
        </label>
      </div>

      <div class="anamnesis">
        <label>Tanggal Masuk Bangsal : Senin, 26 Okt 2020, 12.00 WIB</label>
        <label>Anamnesis oleh : dr. Sukma Ayu</label>
      </div>
    </div>

    <div class="detail">
      <h3>Keluhan Utama :</h3>
      <textarea rows="3">Muntah darah sejak 1 hari yang lalu</textarea>

      <h3>Riwayat Penyakit Sekarang :</h3>
      <textarea rows="3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, eum in similique, dolor, magnam cum vitae est iste reprehenderit ipsum eveniet placeat! Adipisci saepe impedit doloremque dicta quos quia et.</textarea
      >

      <h3>Riwayat Penyakit Dahulu :</h3>
      <textarea rows="3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, eum in similique, dolor, magnam cum vitae est iste reprehenderit ipsum eveniet placeat! Adipisci saepe impedit doloremque dicta quos quia et.</textarea
      >

      <h3>Riwayat Penyakit Keluarga :</h3>
      <textarea rows="3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, eum in similique, dolor, magnam cum vitae est iste reprehenderit ipsum eveniet placeat! Adipisci saepe impedit doloremque dicta quos quia et.</textarea
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MockupMedicalDetail",
};
</script>
