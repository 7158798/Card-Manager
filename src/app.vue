<style lang="less">
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: "Bree Serif", "Open Sans", "Arial", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", serif;
}
</style>

<template>
	<section class="container">
	<myheader></myheader>
	</section>
</template>

<script>
import myheader from './components/myheader.vue';

export default {
    el: "#app",
    components: {
        myheader
    }
};
</script>
