<style lang="less">
.bankList {
    ul {
        position: relative;
    }
    .bank {
        width: 670/75rem;
        height: 180/75rem;
        border: 2px solid #bdc8ca;
        border-radius: 10px;
        margin: 12/75rem auto;
        padding: 30/75rem;
        background-color: #fff;
		.logo {
			float: left;
			width: 160/75rem;
			text-align: center;
			img {
				width: 110/75rem;
			}
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
				height: 50/75rem;
				line-height: 50/75rem;
				span {
					color: #D2524E;
					font-size: 40/75rem;
				}
				.repay-date {
					color: #DC7D79;
				}
				.go-detail {
					float: right;
					// width: 120/75rem;
					height: 50/75rem;
					line-height: 50/75rem;
					padding: 0 20/75rem;
					color: #DC7D79;
					font-size: 30/75rem;
					border: 1px solid #DC7D79;
					border-radius: 4px;
					text-align: center;
					cursor: pointer;
				}
			}
			.bill-wrap {
				margin-top: 50/75rem;
				div	{
					display: inline-block;
					color: #666;
					font-size: 30/75rem;
					margin-right: 25/75rem;
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
					<span><span class="repay-date">{{bank.repaymentDate}}日</span> 还款</span>
					<div class="go-detail">查看账单</div>
				</div>
				<div class="bill-wrap">
					<div class="unsettledBills">
						<span>未出账单</span><br>
						<span>{{bank.unsettledBills}}</span>
					</div>
					<div class="needRepay">
						<span>已出账单</span><br>
						<span>{{bank.needRepay}}</span>
					</div>
					<div class="limit">
						<span>授信额度</span><br>
						<span>{{bank.limit}}</span>
					</div>
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
				needRepay: '65536.00',
				unsettledBills: '2048.00', // 未出账单
				repaymentDate: "06",
				limit: '120000.00'

            }, {
                name: "建设银行",
				count: 12,
				logo: "http://www.rong360.com/static/img/credit/bank/6.png",
				needRepay: '65536.00',
				unsettledBills: '2048.00',
				repaymentDate: "06",
				limit: '120000.00'

            }, {
                name: "中国银行",
				count: 12,
				logo: "http://www.rong360.com/static/img/credit/bank/15.png",
				needRepay: '65536.00',
				unsettledBills: '2048.00',
				repaymentDate: "06",
				limit: '120000.00'

            }, {
                name: "汇丰银行",
				count: 12,
				logo: "http://img.51credit.com/images/index_hsbc_bank.jpg",
				needRepay: '65536.00',
				unsettledBills: '2048.00',
				repaymentDate: "06",
				limit: '120000.00'

            }, {
                name: "交通银行",
				count: 12,
				logo: "http://img.51credit.com/images/index_jt_bank.jpg",
				needRepay: '65536.00',
				unsettledBills: '2048.00',
				repaymentDate: "06",
				limit: '120000.00'

            }]
        };
    },
    mounted() {

    },
    methods: {

    }
};
</script>
