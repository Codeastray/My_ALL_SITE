<template>
    <div class="mt-5">
        <div class="text-center ">
            <h3>使用語言: Android Kotlin Compose</h3>
           <a class="h3 d-block" href="  https://github.com/Codeastray/MenuOrder" target="_blank">查看Github原始碼</a>
            <video class="mt-3" poster="" width="864" height="614" autoplay="true" controls>
                <source src="@/video/android_kotlin_demo.mp4" type="video/mp4">
                你的瀏覽器沒有支援影片功能
            </video>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const videoElement = ref(null);
const videoSource = ref('/public/android_kotlin_demo.mp4');

const playVideo = () => {
    if (videoElement.value) {
        videoElement.value.play();
    }
};

const pauseVideo = () => {
    if (videoElement.value) {
        videoElement.value.pause();
    }
};
</script>

<style scoped></style>