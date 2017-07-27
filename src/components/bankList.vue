<style lang="less">
.bankList {
    ul {
        position: relative;
    }
    .bank {
        width: 670/75rem;
        height: 240/75rem;
        border: 3px solid #ccc;
        border-radius: 10px;
        margin: -75/75rem auto 20/75rem;
        padding: 20/75rem;
        background-color: #f8f8f8;
    }
}
</style>

<template>
<div class="bankList">
    <ul>
        <li v-for="bank in banks" class="bank">
            {{bank.name}}
			共计{{bank.count}}张卡
			未出账单：{{bank.unsettledBills}}
			已出账单：{{bank.needRepay}}
			还款日：{{bank.repaymentDate}}
			额度：{{bank.limit}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            banks: [{
                name: "招商银行",
				count: 12,
				logo: "",
				needRepay: 65536.00,
				unsettledBills: 2048.00, // 未出账单
				repaymentDate: "06",
				limit: 120000.00

            }, {
                name: "建设银行",
				count: 12,
				logo: "",
				needRepay: 65536.00,
				unsettledBills: 2048.00,
				repaymentDate: "06",
				limit: 120000.00

            }, {
                name: "中国银行",
				count: 12,
				logo: "",
				needRepay: 65536.00,
				unsettledBills: 2048.00,
				repaymentDate: "06",
				limit: 120000.00

            }, {
                name: "工商银行",
				count: 12,
				logo: "",
				needRepay: 65536.00,
				unsettledBills: 2048.00,
				repaymentDate: "06",
				limit: 120000.00

            }, {
                name: "交通银行",
				count: 12,
				logo: "",
				needRepay: 65536.00,
				unsettledBills: 2048.00,
				repaymentDate: "06",
				limit: 120000.00

            }]
        };
    },
    mounted() {

    },
    methods: {

    }
};
</script>
