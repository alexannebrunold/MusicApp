<template>
	<div id="button" class="button">
		<button class="button--style">{{ name }}</button>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
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
	}
}
</style>
