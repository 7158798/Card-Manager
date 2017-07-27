<style lang="less">
	.bank {
		width: 670/75rem;
		height: 410/75rem;
		// border: 1px solid #ccc;
		border-radius: 10px;
		margin: 20/75rem auto;
		padding: 20/75rem;
		background-color: #f8f8f8;
	}
</style>

<template>
	<div class="bankList">
		<ul>
			<li v-for="bank in banks" class="bank">
				{{bank.name}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    data() {
        return {
			banks: [
				{
					name: "招商银行"
				}, {
					name: "中信银行"
				}
			]
        };
    },
    mounted() {

    },
    methods: {

    }
};
</script>
