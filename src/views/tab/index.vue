<template>
    <div class="mytab">
        <van-tabs v-model="active" swipeable>
            <div slot="nav-left">
                test nav-left
            </div>
            <div slot="nav-right">
                test nav-right
            </div>
            <van-tab title="标签 1">
                <div slot="default">default</div>
                <div slot="title">1111</div>
            </van-tab>
            <van-tab title="标签 2">
                <div class="main-container">
                    test2
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                active: 2,
            };
        },
        methods: {
        }
    }
</script>

<style scoped>
    .tab {
        height: 100vh;
        width: 100%;
        position: relative;
    }
</style>
<style lang="less">
    .mytab {
        .van-tabs {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            .van-tabs__content {
                position: absolute;
                width: 100%;
                top: 44px;
                bottom: 0;
                .main-container {
                    height: 100%;
                }
            }
        }
    }

</style>
