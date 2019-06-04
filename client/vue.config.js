const path = require("path");

module.exports = {
	outputDir: path.resolve(__dirname, "../server/public"),
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:5000"
			}
		}
	},
	pwa: {
		workboxPluginMode: "GenerateSW",
		workboxOptions: {
			navigateFallback: "/index.html",
			runtimeCaching: [
				{
					urlPattern: "/api/todos/",
					handler: "networkFirst",
					options: {
						networkTimeoutSeconds: 20,
						cacheName: "api-cache",
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				},
				{
					urlPattern: "/api/users/authenticate",
					handler: "networkFirst",
					options: {
						networkTimeoutSeconds: 20,
						cacheName: "users-cache",
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				}
			]
		}
	}
}