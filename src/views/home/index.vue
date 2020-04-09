<script>
    /**
     * 首页路由列表
     * bin 2020/4/9
     */
    export default {
        data() {
            return {
                //路由数组
                routes: this.$router.options.routes
            };
        },
        mounted() {},
        methods: {
            /**
             * 随机生成16进制颜色
             */
            color16() {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
                return color;
            }
        }
    };
</script>
<template>
    <div class="wrapper">
        <a
            v-for="(item,i) in routes"
            :key="i"
            :href="item.path"
            :style="{background:color16()}"
        >{{item.meta.name}}</a>
    </div>
</template>
<style>
    body,
    html {
        background: #272b38;
    }
</style>
<style scoped>
    .wrapper {
        padding: 20px;
    }
    a {
        display: inline-block;
        font-size: 30px;
        padding: 12px 26px;
        border-style: solid;
        border-width: 2px;
        margin: 20px;
        border-radius: 50px;
        color: white;
    }
</style>