<template>
	<div class="musicApp">
		<header class="musicApp__header">
			<h1 class="musicApp__header--title">{{ title }}</h1>
		</header>
		<main class="musicApp__main">
			<h1 class="musicApp__main--nameMusicPlay">{{ nameMusicPlay }}</h1>
			<span class="musicApp__main--btn">
				<buttons name="Play" />
				<buttons name="Pause" />
			</span>

			<section class="musicApp__section2">
				<h2 class="musicApp__section2--title">The playlist</h2>
				<span class="musicApp__section2--btn">
					<buttons :name="nameMusicPlay" />
					<buttons name="Pause" />
				</span>
			</section>
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
		&--btn {
			display: flex;
			flex-direction: row;
			justify-content: center;
			& button:first-child {
				margin-right: 6px;
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
