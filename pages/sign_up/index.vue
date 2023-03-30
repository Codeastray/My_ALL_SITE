<template>
    <div class="alert alert-danger " style="font-size: 20px;" role="alert" v-if="fillUp && !showModal">
        尚有欄位還沒有填喔~~
    </div>
    <div class="container d-flex justify-content-center">
        <div class="card" style="width: 25rem;">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="account">輸入帳號</label>
                        <input type="text" class="form-control" id="account" v-model="userData.account" :maxlength="8"
                            placeholder="請輸入最多8個字數">
                        <small id="emailHelp" class="form-text text-muted">請輸入最多8個字數
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="password">輸入密碼</label>
                        <input type="password" class="form-control" id="password" v-model="userData.password" :maxlength="8"
                            placeholder="請輸入最多8個字數">
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">確認密碼</label>
                        <input type="password" class="form-control" id="confirmPassword" v-model="userData.confirmPassword"
                            :maxlength="8" placeholder="請輸入最多8個字數">
                        <div v-if="passwordMismatch" class="alert alert-danger" role="alert">密碼不相符</div>
                    </div>
                    <div class="form-group">
                        <label for="nickname">暱稱</label>
                        <input type="text" class="form-control" id="nickname" v-model="userData.nickname" :maxlength="8"
                            placeholder="請輸入最多8個字數">
                    </div>
                    <div class="form-group">
                        <label for="birthday">生日</label>
                        <input type="date" class="form-control" id="birthday" v-model="userData.birthday">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="city">縣市</label>
                                <select class="form-control" id="city" v-model="userData.city">
                                    <option selected disabled>請選擇</option>
                                    <option>台北市</option>
                                    <option>新北市</option>
                                    <option>基隆市</option>
                                    <option>桃園市</option>
                                    <option>新竹市</option>
                                    <option>新竹縣</option>
                                    <option>苗栗縣</option>
                                    <option>台中市</option>
                                    <option>彰化縣</option>
                                    <option>南投縣</option>
                                    <option>雲林縣</option>
                                    <option>嘉義市</option>
                                    <option>嘉義縣</option>
                                    <option>台南市</option>
                                    <option>高雄市</option>
                                    <option>屏東縣</option>
                                    <option>台東縣</option>
                                    <option>花蓮縣</option>
                                    <option>宜蘭縣</option>
                                    <option>澎湖縣</option>
                                    <option>金門縣</option>
                                    <option>連江縣</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                                <label for="inputPlace">地址</label>
                                <input type="text" class="form-control" id="inputPlace" placeholder="請輸入地址"
                                    v-model="userData.place">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPhone">電話</label>
                        <input type="tel" class="form-control" id="inputPhone" v-model="userData.phone" :maxlength="10"
                            @input="userData.phone = userData.phone.replace(/[^0-9]/g, '')">
                    </div>

                    <div class="form-group">
                        <label for="gender">性別</label>
                        <div class="d-flex">
                            <div class="form-check form-check-inline mr-3">
                                <input class="form-check-input" type="radio" id="male" value="男性" v-model="userData.gender">
                                <label class="form-check-label" for="male">男性</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="female" value="女性"
                                    v-model="userData.gender">
                                <label class="form-check-label" for="female">女性</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">E-mail</label>
                        <input type="email" class="form-control" id="inputEmail" v-model="userData.email">
                        <div v-if="emailError" class="alert alert-danger" role="alert">Email格式不符</div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#signUpSuccess"
                            @click="submitForm(userData)">註冊</button>
                        <NuxtLink to="/" type="button" class="btn btn-outline-secondary ">返回首頁</NuxtLink>
                    </div>
                    <!--Modal: modalConfirmDelete-->
                    <div v-if="showModal" class="modal fade" id="signUpSuccess" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog  modal-notify modal-danger" role="document">
                            <!--Content-->
                            <div class="modal-content text-center">
                                <!--Header-->
                                <!--Body-->
                                <div class="modal-body display-4">
                                    <font-awesome-icon class="text-success" icon="fa-solid fa-check" beat size="lg" />
                                </div>
                                <div class="display-4">註冊成功</div>
                                <!--Footer-->
                                <div class="modal-footer flex-center justify-content-center">
                                    <NuxtLink to="/"><button class="btn  btn-outline-success"
                                            data-dismiss="modal">返回首頁</button></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>
</template>
<script setup>
// const  {data}   =  await useFetch('/api/users')
import { storeToRefs } from 'pinia';
import { reactive, toRefs, ref } from 'vue'
import { useUserStore } from '~~/store';
const store = useUserStore()
const userData = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    birthday: '',
    city: '',
    place: '',
    phone: '09',
    gender: '',
    email: '',
})

const emailError = ref(false)
const fillUp = ref(false)
const showModal = ref(false);
const passwordMismatch = ref(false)
const checkEmailFormat = () => {
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!emailPattern.test(userData.email)) {
        emailError.value = true

    } else {
        emailError.value = false
        return true
    }
}

const comfirmpassword = () => {
    if (userData.password !== userData.confirmPassword) {
        passwordMismatch.value = true
        userData.confirmPassword = ''
    } else {
        passwordMismatch.value = false
        return true
    }
}

function submitForm(userData) {
    if (Object.keys(userData).some(key => userData[key] == '')) {

        fillUp.value = true;
        showModal.value = false;

    } else {
        fillUp.value = false;
        const isEmailValid = checkEmailFormat();
        const isPasswordMatched = comfirmpassword();
        if (isEmailValid && isPasswordMatched) {
            showModal.value = true;
            store.addUserData(userData)
        }
    }
}
definePageMeta({
    layout: 'join-member'
})
</script>
<style ></style>