const isProd = process.env.NODE_ENV === 'production';
const config = {
	css: {
		source: 'src/browser-reset.init.css',
		output: './dist/browser-reset.init.css',
		bundlers: ['@brikcss/stakcss-bundler-postcss']
	}
};

if (isProd) {
	config.css_min = {
		source: 'src/browser-reset.init.css',
		output: './dist/browser-reset.init.min.css',
		bundlers: ['@brikcss/stakcss-bundler-postcss']
	};
	config.css.bundlers = [
		{
			run: '@brikcss/stakcss-bundler-postcss',
			options: { skipConfig: true },
			plugins: [require('autoprefixer')()]
		}
	];
}

module.exports = config;
