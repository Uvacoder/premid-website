import Vue from "vue";

export default ({ app }) => {
	const gql = query =>
		new Promise((resolve, reject) => {
			app
				.$axios({
					url: "/v3",
					method: "POST",
					data: {
						query: query
					}
				})
				.then(({ data }) => resolve(data.data))
				.catch(reject);
		});

	app.$graphql = gql;
	Vue.prototype.$graphql = gql;
};
