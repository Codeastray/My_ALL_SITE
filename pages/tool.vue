<template>
   <div class="container  make_font pb-5">

      <div class="row row-cols-1 row-cols-md-3 make_font mt-4">
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/three.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">HTML、CSS、JavaScript</h5>

               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/jquery.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Jquery</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/php.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Php</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/sql.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">MySql</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/vue.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Vue</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/bootstrap.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Bootstrap</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/android_stuidio.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Android Studio Jetpack Compose(Kotlin)</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/python.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Python</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/java.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Java</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/git.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Git/Github</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/nuxt_3.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Nuxt 3</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/pinia.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Pinia</h5>
               </div>
            </div>
         </div>
      </div>
      <h1>其它工具技能:</h1>
      <div class="row row-cols-1 row-cols-md-3 make_font mt-4">
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/ps.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Adobe Photoshop</h5>

               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/pr.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Adobe Premiere Pro</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/ai.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Adobe Illustrator</h5>
               </div>
            </div>
         </div>
         <div class="col mb-4">
            <div class="card h-100">
               <img src="~/assets/images/ae.png" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title h3">Adobe After Effect</h5>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>

</script>

<style scoped>
@font-face {
   font-family: 'YuPearl-Medium';
   src: url('~/fonts/YuPearl-Medium.ttf') format('truetype');
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
   background: #eee;
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