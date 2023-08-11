<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top ">
      <div class="d-flex flex-column">
         <a class="navbar-brand" href="#"><img src="~/assets/images/Ray_site_logo.png" alt="" class="logo_box"></a>
         <h6>此網頁使用 <span class="text-success">Nuxt 3</span> 製作</h6>
         <a href="https://github.com/Codeastray/My_ALL_SITE" target="_blank">查看Github原始碼</a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse border-bottom border-primary bg-transparent justify-content-center"
         id="navbarNavAltMarkup">
         <div class="navbar-nav">
            <NuxtLink @click="isNotClick = true" to="/" class="nav-link h5 active" data-toggle="tooltip"
               data-placement="bottom" title="首頁">首頁<span class="sr-only">(current)</span></NuxtLink>
            <NuxtLink @click="hidemenu" to="/tool" class="nav-link h5" data-toggle="tooltip" data-placement="bottom"
              > 我的技能</NuxtLink>
            <NuxtLink @click="hidemenu" to="/certificate" class="nav-link h5" data-toggle="tooltip" data-placement="bottom"
              >附加技能</NuxtLink>
            <li v-show="isNotClick" class="nav-item dropdown h5" data-toggle="tooltip" data-placement="right" title="作品集">
               <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                  作品集
               </a>
               <div class="dropdown-menu">
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingTD')"
                     style=" cursor:pointer ">旅遊紀錄網站</nuxt-link>
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingPj')"
                     style=" cursor:pointer ">電影隨選影片網站</nuxt-link>
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingOne')"
                     style=" cursor:pointer">會員系統</nuxt-link>
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingTwo')"
                     style=" cursor:pointer">台中市三大速食業者清單</nuxt-link>
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingThree')"
                     style=" cursor:pointer">一頁式網站/主題:外語學習</nuxt-link>
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingFour')"
                     style=" cursor:pointer">全國運動場館地圖</nuxt-link>
                  <nuxt-link class="dropdown-item" @click.prevent="scrollTo('#headingFive')"
                     style=" cursor:pointer">訂便當系統</nuxt-link>
               </div>
            </li>
            <NuxtLink @click="hidemenu" to="/androidkotlin" class="nav-link h5" data-toggle="tooltip" data-placement="bottom"
              >Android App</NuxtLink>
         </div>
      </div>
      <div class="d-flex text-center flex-column justify-content-between mt-2">
         <div class="pb-1">
            <button type="button" class="btn btn-outline-primary rounded-pill make_font mr-2" data-toggle="modal"
               data-target="#signInSuccess" @click="login_account = '', login_password = '', store.logInError = false">
               登入
            </button>
            <NuxtLink to="/sign_up" type="button" class="btn btn-outline-primary rounded-pill make_font">註冊</NuxtLink>
         </div>
         <p>會員系統小功能:請試用</p>
      </div>
   </nav>
   <div class="modal fade" id="signInSuccess" tabindex="-1" role="dialog" aria-labelledby="signInSuccessLabel"
      aria-hidden="true">
      <div class=" modal-dialog modal-sm modal-notify modal-danger" role="document">
         <!--Content-->
         <div class="modal-content text-center">
            <!--Header-->
            <!--Body-->
            <div class="modal-body">
               <form>
                  <div class="form-group text-left">
                     <label for="login_account">
                        <h5>帳號</h5>
                     </label>
                     <input type="text" class="form-control" id="login_account" v-model="login_account" :maxlength="8"
                        placeholder="請輸入最多8個字數">
                  </div>
                  <div class="form-group text-left">
                     <label for="login_password">
                        <h5>密碼</h5>
                     </label>
                     <input type="text" class="form-control" id="login_password" v-model="login_password"
                        placeholder="請輸入最多8個字數" :maxlength="8">
                  </div>
               </form>
               <div v-if="logInError" class="alert alert-danger" role="alert">帳號或密碼錯誤</div>
            </div>

            <!--Footer-->
            <div class="modal-footer flex-center justify-content-center">
               <button class="btn btn-outline-success"
                  @click.stop="matchUser(login_account, login_password, router)">登入</button>
            </div>
         </div>
         <!--/.Content-->
      </div>
   </div>
   <div class="swiper mySwiper">
      <div class="swiper-wrapper">
         <div class="swiper-slide banner bg-cover" style="
            background-image: url(/job_01.png);
            height: 160px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
         ">
         </div>
         <div class="swiper-slide banner bg-cover" style="
            background-image: url(/job_02.png);
            height: 160px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
         ">
         </div>
         <div class="swiper-slide banner bg-cover" style="
            background-image: url(/job_03.png);
            height: 160px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
         ">
         </div>
      </div>
      <div class="swiper-pagination"></div>
   </div>
</template>
<script setup>
import { ref } from "vue"
import VueScrollTo from 'vue-scrollto'
import { useUserStore } from '~~/store';
import { storeToRefs } from 'pinia';
const store = useUserStore()
const login_account = ref('')
const login_password = ref('')
const isNotClick = ref(true)
const router = useRouter()
const { matchUser } = store
const { logInError } = storeToRefs(store)


function hidemenu() {
   isNotClick.value = false
}
function scrollTo(id) {
   VueScrollTo.scrollTo(id, 500, { offset: -250 })
}


</script>
<style scoped></style>
