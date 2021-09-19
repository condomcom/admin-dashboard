module.exports = {
	runtimeCompiler: true,
	configureWebpack: {
		devtool: 'source-map'
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Muse Vue Ant Design - by Creative Tim'
				return args
			})
	}
}
