<style lang="less">
	.banner {
		position: relative;
		.arrears {
			position: absolute;
			top: 50%;
			width: 100%;
			text-align: center;
			transform: translateY(-50%);
			font-size: 20/37.5rem;
			color: #3f63b7;
		}
	}
</style>

<template>
	<header class="banner">
		<img src="../img/banner.jpg" width="100%">
		<div class="arrears">
			近七日待还:<span>{{arrears}}</span>元
		</div>
	</header>

</template>

<script>
export default {
    data() {
        return {
            arrears: 13586.24
        };
    },
    mounted() {

    },
    methods: {

    }
};
</script>
