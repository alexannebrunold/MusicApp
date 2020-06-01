<template>
	<div class="musicApp">
		<header class="musicApp__header">
			<h1 class="musicApp__header--title">{{ title }}</h1>
		</header>
		<main class="musicApp__main">
			<h1 class="musicApp__main__nameMusicPlay">{{ current.title }} - {{ current.artist }}</h1>
			<div class="musicApp__main--nameMusicPlay">
				<div v-if="!isPlaying" @click="play"><buttons name="play" /></div>
				<div v-if="isPlaying" @click="pause"><buttons name="pause" /></div>
			</div>
		</main>
		<section class="musicApp__section2">
			<h2 class="musicApp__section2--title">The playlist</h2>
			<span class="musicApp__section2--btn">
				<buttons name="play" />
				<buttons name="Pause" />
			</span>
		</section>
	</div>
</template>

<script>
import buttons from "@/components/buttons.vue"

export default {
	components: {
		buttons,
	},
	data() {
		return {
			title: "Music App",
			current: {},
			index: 0,
			isPlaying: false,
			songs: [
				{
					title: "Lofi Beat Rain",
					artist: "Unknown",
					src: require("../assets/free-lo-fi-type-beat-rain.mp3"),
				},
				{
					title: "Smooth Guitar Beat",
					artist: "Youth Prod",
					src: require("../assets/smooth-guitar-beat-youth-prod-pacific-khalid-type-beat.mp3"),
				},
			],
			player: new Audio(),
		}
	},
	created() {
		this.current = this.songs[this.index]
		this.player.src = this.current.src
	},
	methods: {
		play(song) {
			if (typeof song.src != "undefined") {
				this.current = song
				this.player.src = this.current.src
			}
			this.player.play()
			this.isPlaying = true
		},
		pause() {
			this.player.pause()
			this.isPlaying = false
		},
	},
}
</script>

<style lang="scss">
.musicApp {
	&__header {
		width: 100%;
		height: 48px;
		background: linear-gradient(0.25turn, #b56a85, #373838, #e5e5e5);
		&--title {
			color: #ffffff;
			font-size: 24px;
			padding-top: 2%;
		}
	}
	&__main {
		&__nameMusicPlay {
			font-size: 18px;

			& div {
				display: flex;
				flex-direction: row;
				justify-content: center;
				& button:first-child {
					margin-right: 6px;
				}
			}
		}
	}
	&__section2 {
		&--btn {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			& button {
				margin-bottom: 4px;
			}
		}
	}
}
</style>
