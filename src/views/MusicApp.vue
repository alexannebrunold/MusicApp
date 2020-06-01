<template>
	<div class="musicApp">
		<header class="musicApp__header">
			<h1 class="musicApp__header--title">{{ title }}</h1>
		</header>
		<main class="musicApp__main">
			<h1 class="musicApp__main--nameMusicPlay">{{ nameMusicPlay }}</h1>
			<buttons name="Play" />
			<buttons name="Pause" />
		</main>
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
			title: "This is",
			nameMusicPlay: "Ariana Grande - 7 Rings",
		}
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
		&--nameMusicPlay {
			font-size: 18px;
		}
	}
}
</style>
