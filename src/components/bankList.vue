<style lang="less">
.bankList {
    ul {
        position: relative;
    }
    .bank {
        width: 670/75rem;
        height: 240/75rem;
        border: 2px solid #bdc8ca;
        border-radius: 10px;
        margin: 12/75rem auto;
        padding: 30/75rem;
        background-color: #fff;
		.logo {
			float: left;
			width: 160/75rem;
			text-align: center;
			.bank-name {
				color: #fb9b66;
				font-size: 32/75rem;
			}
		}
		.detail {
			float: left;
			width: 480/75rem;
			height: 100%;
			padding-left: 20/75rem;
			border-left: 1px dashed #ccc;
			.repay-wrap {
				span {
					color: #D2524E;
					font-size: 40/75rem;
				}
				.repay-date {
					color: #DC7D79;
				}
			}
		}
    }
}
</style>

<template>
<div class="bankList">
    <ul>
        <li v-for="bank in banks" class="bank">
			<div class="logo">
				<img :src="bank.logo" alt="">
				<div class="bank-name">{{bank.name}}</div>
			</div>
			<div class="detail">
				<!-- 共计{{bank.count}}张卡 -->
				<div class="repay-wrap">
					<span>还款日: <span class="repay-date">{{bank.repaymentDate}}日</span></span>
				</div>
				<div class="bill-wrap">
					<span>未出账单{{bank.unsettledBills}}</span>
					<span>已出账单{{bank.needRepay}}</span>
					<span>额度{{bank.limit}}</span>
				</div>
			</div>
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
				logo: "http://img.51credit.com/images/index_zs_bank.jpg",
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
