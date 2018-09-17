var officers = new Vue({
	el: '#officers',
	data: {
		officers: {}
	},
	created() {
		fetch('data/officers.json')
			.then(response => response.json())
			.then(json => {
				this.officers = json;
			})
	}
})
