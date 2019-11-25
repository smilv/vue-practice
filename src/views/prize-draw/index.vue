<script>
    export default {
        data() {
            return {
                list: [
                    { id: 1, name: "谢谢参与" },
                    { id: 2, name: "花生米" },
                    { id: 3, name: "5元现金红包" },
                    { id: 4, name: "啤酒" },
                    { id: 5, name: "10天vip体验" },
                    { id: 6, name: "鸡蛋" },
                    { id: 7, name: "20积分" },
                    { id: 8, name: "桶面" }
                ],
                prizeId: 1, //中奖id
                index: 0, //当前转动到的格子
                speed: 300, //转动间隔
                rounds: 1, //转动的圈数
                timer: null, //计时器
                speedEnd: false //减速
            };
        },
        methods: {
            go() {
                this.index += 1;
                if (this.index > 7) {
                    this.index = 0;
                    this.rounds++;
                }
                //加速过程
                if (this.speed > 50 && this.rounds < 8) {
                    this.speed -= Math.round(this.speed * 0.1);
                }
                //第8圈遇到中奖格子开始减速
                if (this.rounds == 8 && this.prizeId == this.list[this.index].id) {
                    this.speedEnd = true;
                }
                if (this.speedEnd) {
                    this.speed += Math.round(this.speed * 0.1);
                }
                if (this.speed > 500) {
                    setTimeout(() => {
                        alert(this.list[this.index].name);
                    }, 500);
                    return;
                }
                console.log(this.speed);
                this.timer = setTimeout(() => {
                    this.go();
                }, this.speed);
            }
        }
    };
</script>
<template>
    <div class="main">
        <div class="box">
            <div :class="index==i?'active':''" v-for="(v,i) in list" :key="v.id">{{v.name}}</div>
            <div class="start" @click="go">立即抽奖</div>
        </div>
    </div>
</template>
<style>
    body,
    html {
        background: #d8d8d8;
    }
</style>
<style scoped>
    .main {
        width: 640px;
        height: 640px;
        border: solid 10px white;
        border-radius: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
    }
    .box {
        position: relative;
    }
    .box > div {
        width: 180px;
        height: 180px;
        background: white;
        margin: 10px;
        text-align: center;
        line-height: 180px;
        font-size: 28px;
        border-radius: 10px;
        position: absolute;
    }
    .box > div:nth-child(1) {
        left: 0;
        top: 0;
    }
    .box > div:nth-child(2) {
        left: 200px;
        top: 0;
    }
    .box > div:nth-child(3) {
        left: 400px;
        top: 0;
    }
    .box > div:nth-child(4) {
        left: 400px;
        top: 200px;
    }
    .box > div:nth-child(5) {
        left: 400px;
        top: 400px;
    }
    .box > div:nth-child(6) {
        left: 200px;
        top: 400px;
    }
    .box > div:nth-child(7) {
        left: 0;
        top: 400px;
    }
    .box > div:nth-child(8) {
        left: 0;
        top: 200px;
    }
    .box .start {
        background: #04c18f;
        font-size: 34px;
        color: white;
        position: absolute;
        left: 200px;
        top: 200px;
    }
    .box .active {
        background: #ff4444;
        color: white;
    }
</style>