<template>
	<view class="content">
		<view :style="defaulttp"></view>
		<view class="navbox" :style="navbox">
			<view class="left-btn" @click="showDrawer('showLeft')"><image src="/static/images/timg.jpg" style="width: 30px;height: 30px;"></image></view>
			<view class="midee-btn">
				<view class="midtem"><text>关注</text></view>
				<view class="midtem"><text>关注</text></view>
				<view class="midtem"><text>关注</text></view>
			</view>
			
		</view>
		<!-- 抽屉 -->
		<uni-drawer 
			:visible="true" 
			ref="showLeft" 
			mode="left" 
			@change="change($event,'showLeft')"
		>
			<view style="padding:30rpx;">
				<!-- <view :style="defaulttp"></view> -->
				 <view class="uni-title">抽屉式导航</view>
			</view>
		</uni-drawer>
		<view>
			<swiper 
				:indicator-dots="false" 
				:autoplay="true" 
				:interval="3000" 
				:duration="500"
				:vertical="true"
				:style="Scwh"
			>
				<swiper-item v-for="(item,index) in adlist" :key="index" class="swpitem">
					<view class="swiper-item" :style="Scwh"><image :src="item.imageurl" mode="aspectFit"></image></view>
					<view class="bottomNavbar">sdf</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import drawer from '@/components/uni-drawer/uni-drawer'
	export default {
		data() {
			return {
				navbox:`height:80rpx;width:${this.$windowWidth}px;top:${this.$scNavheight}px;left:0;`,
				Scwh:`height:${this.$windowHeight}px;width:${this.$windowWidth}px;`,
				defaulttp:`height:${this.$scNavheight}px;width:${this.$windowWidth};`,
				adlist:[
					{
						name:'直播1',
						imageurl:'/static/images/fm0.png'
					},
					{
						name:'直播1',
						imageurl:'/static/images/fm0.png'
					}
				]
			}
		},
		onLoad() {
			console.log(uni.getSystemInfoSync())
			console.log(this.navbox)
		},
		methods: {
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
				console.log(e,type)
			}
		}
	}
</script>

<style>
	.navbox{
		background: #4Ce900;
		position: fixed;
		z-index: 999;
		background-color: rgba(0,0,0,0.06);
	}
	.swpitem{
		border: 1px solid red;
		position: relative;
	}
	.swpitem .bottomNavbar{
		width: 120rpx;
		position: absolute;
		right: 0;
		bottom: 120rpx;
		top: 490rpx;
	}
	.swperbox{
		background-color: pink;
	}
</style>
