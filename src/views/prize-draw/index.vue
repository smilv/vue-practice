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
                open: true, //是否可点击抽奖
                prizeId: 8, //中奖id
                cell: 8, //格子个数
                index: -1, //当前转动到的格子
                rounds: 1, //转动的圈数
                speed: 300, //当前转动间隔
                speedMin: 50, //最小转动间隔
                speedSlow: false, //开始减速
                quickRate: null, //递增的速率
                quickRounds: 2, //加速的圈数
                slowRounds: 3, //减速的圈数
                maxRounds: 12 //最多转动的圈数(必须大于加速+减速的圈数)
            };
        },
        mounted() {
            this.quickRate =
                (this.speed - this.speedMin) / (this.quickRounds * this.cell);
        },
        methods: {
            go() {
                if (this.open) {
                    this.index = -1;
                    this.rounds = 1;
                    this.speed = 300;
                    this.open = false;
                    this.speedSlow = false;
                    this.rotate();
                }
            },
            rotate() {
                this.index += 1;
                //格子转到最大时，圈数+1
                if (this.index == 8) {
                    this.index = 0;
                    this.rounds++;
                }
                //加速过程
                if (this.rounds <= this.quickRounds) {
                    this.speed -= this.quickRate;
                }
                //遇到中奖格子开始减速
                if (
                    this.rounds == this.maxRounds - this.slowRounds &&
                    this.prizeId == this.list[this.index].id
                ) {
                    this.speedSlow = true;
                }
                if (this.speedSlow) {
                    this.speed += Math.round(this.speed * 0.1);
                }
                //转动停止
                if (
                    this.rounds == this.maxRounds &&
                    this.prizeId == this.list[this.index].id
                ) {
                    console.log(this.list[this.index].name);
                    this.open = true;
                    return;
                }
                setTimeout(() => {
                    this.rotate();
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