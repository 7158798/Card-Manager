<style lang="less">
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: "Bree Serif", "Open Sans", "Arial", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", serif;
	background-color: #96d7e6;
}
</style>

<template>
	<section class="container">
		<myheader></myheader>
		<bank-list></bank-list>
	</section>
</template>

<script>
import myheader from './components/myheader.vue';
import bankList from './components/bankList.vue';

export default {
    el: "#app",
    components: {
        myheader,
		bankList
    }
};
</script>
