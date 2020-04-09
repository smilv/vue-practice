<script>
    /**
     * 验证码登录
     * bin 2020/4/9
     */
    import CodeLogin from "../../components/CodeLogin";
    export default {
        data() {
            return {
                state: "当前未登录"
            };
        },
        methods: {
            test() {
                CodeLogin();
            }
        }
    };
</script>
<template>
    <div>
        <h4>{{state}}</h4>
        <div class="button" @click="test">立即购买</div>
    </div>
</template>
<style scoped>
    h4 {
        font-size: 34px;
        line-height: 200px;
        text-align: center;
    }
    .button {
        line-height: 100px;
        text-align: center;
        background: #ff6029;
        font-size: 28px;
        color: white;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>