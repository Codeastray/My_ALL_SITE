<script>

export default {
  mounted() {
    this.$wow.init()
    const swiper = new Swiper(".mySwiper", {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
  }
}

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@font-face {
  font-family: 'YuPearl-Medium';
  src: url('fonts/YuPearl-Medium.ttf') format('truetype');
}

.make_font {
  font-family: YuPearl-Medium, serif;
}

.logo_box {
  width: 170px;
  height: 45px;
  margin-top: 3mm;
}

.sp:hover {
  animation: pulse;
  animation-duration: 0.5s;
}

html,
body {
  position: relative;
  height: 110px;
}

body {
  background: #ffffff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 200%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 50%;
  height: 50%;
  object-fit: cover;
}
</style>