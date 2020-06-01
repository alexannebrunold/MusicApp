<template>
	<div id="button" class="button">
		<button class="button--style" :class="{ toggled: isToggled }" @click="isToggled = !isToggled">
			{{ name }}
		</button>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
	},
	data() {
		return {
			isToggled: false,
		}
	},
	methods: {
		desactivate() {
			if (this.button != this.isToggled) {
				this.button.disabled
			}
		},
	},
}
</script>
<style lang="scss">
.button {
	display: inline-block;
	&--style {
		background-color: #b56a85;
		color: #000000;
		height: 26px;
		width: auto;
		border-radius: 8px;
		border: transparent;
		&.toggled {
			background-color: grey;
		}
	}
}
</style>
