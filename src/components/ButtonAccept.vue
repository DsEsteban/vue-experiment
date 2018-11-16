<template>
	<button> valor local: {{ localNumber }}</button>
</template>

<script>
	export default {
		name: 'ButtonAccept',
		props: ['number'],
		computed: {
			localNumber: {
				get(){
					return this.number;
				},
				set(value) {
					this.$emit('update:number', value);
				}
			}
		},
		mounted(){
			setInterval(() => {
				this.localNumber++;
			}, 1000);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    backgroun-color: green;
  }
</style>