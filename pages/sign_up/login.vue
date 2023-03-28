<template>
  <div class="container" v-for="user in userList" :key="user.id">
 
      <div v-if="loggedInUserId == user.id" >
        <div class="container d-flex justify-content-center align-items-center row" style="height: 100vh;">
          <div class="card mx-3 my-5 col-sm-4" style="border: 1px solid blue; width: 18rem;">
            <!-- 用户卡片的 HTML 代码 -->

            <font-awesome-icon class="mt-4" icon="fa-solid fa-user" beat style="font-size: 7rem; color:#51ccb7;" />
            <div class="card-body">
              <h5 class="card-title">{{ user.nickname }}</h5>
              <p class="card-text">登入成功，歡迎!!!!</p>
            </div>
            <ul class="list-group list-group-flush mx-3">
              <li class="list-group-item">帳號: {{ user.account }}</li>
              <li class="list-group-item">信箱: {{ user.email }}</li>
              <li class="list-group-item">電話: {{ user.phone }}</li>
              <li class="list-group-item">生日: {{ user.birthday }}</li>
              <li class="list-group-item">性別: {{ user.gender }}</li>
              <li class="list-group-item">地址: {{ user.city + user.place }}</li>
            </ul>

          </div>
          <div class="card text-left col-sm-4" style="width: 20em;">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs ">
                <li class="nav-item">
                  <h4 class="nav-link active">會員登入系統使用到的工具</h4>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h3 class="card-title text-left">工具套件</h3>

              <h5>Vue 3(composition API)</h5>
              <hr>
              <h5>Nuxt 3</h5>
              <hr>
              <h5>Bootstrap 4x</h5>
              <hr>
              <h5>Pinia</h5>
              <hr>
              <h5>Git 版本控制輔助</h5>
              <br>
              <h6>註記: Pinia非資料庫，若重整頁面，註冊資料即消失</h6>
            </div>
          </div>
        </div>
      </div>
  
  </div>
</template>
  
  

<script setup>
import { useUserStore } from '~~/store';
import { storeToRefs } from 'pinia';
const store = useUserStore()
const { userList, loggedInUserId } = store

definePageMeta({
  layout: 'join-member'
})
</script>

<style ></style>