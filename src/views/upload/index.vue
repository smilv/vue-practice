<!--
 * @Description: 上传图片
 * @Autor: bin
 * @Date: 2020-02-26 15:16:43
 * @LastEditors: bin
 * @LastEditTime: 2020-05-28 17:42:08
--> 
<script>
    import axios from "@/axios";
    export default {
        data() {
            return {
                imgs: []
            };
        },
        methods: {
            fileChange(e) {
                const file = e.target.files[0];
                if (file.size / 1024 / 1024 > 5) {
                    alert("图片大于5M上传失败");
                    return;
                }
                const formData = new FormData();
                formData.append("imgFile", file);
                axios.uploadImg(formData).then(response => {
                    if (response.code == 200) {
                        // base64 预览
                        // let reader = new FileReader();
                        // reader.readAsDataURL(file);
                        // reader.onload = e => {
                        //     this.imgs.push(e.target.result);
                        // };
                        this.imgs.push(this.tuPath + response.data);
                    }
                });
            }
        }
    };
</script>
<template>
    <div>
        <div class="photo">
            <div v-for="(img,index) in imgs" :key="index">
                <img class="upload-img" :src="img" alt />
            </div>
            <div class="default">
                <img src="@/assets/img/img_photo.png" alt />
                <input type="file" name="file" accept="image/*" @change="fileChange($event)" />
            </div>
        </div>
    </div>
</template>
<style scoped>
    .photo {
        display: flex;
        margin: 15px;
    }
    .photo > div {
        width: 208px;
        height: 208px;
        position: relative;
        margin: 15px;
    }
    .upload-img {
        max-width: 208px;
        max-height: 208px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .default {
        border: 2px dashed rgba(190, 190, 190, 1);
        border-radius: 11px;
    }
    .default img {
        width: 66px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .default input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .delete {
        position: absolute;
        right: 0;
        top: 0;
        width: 54px;
        height: 54px;
    }
    .delete img {
        width: 38px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>