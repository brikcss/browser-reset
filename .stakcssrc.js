/** Setup.
 ============================================================================================= */

const env = process.env.NODE_ENV;
const isProd = ['production', 'prod', 'test'].includes(env);
const loadPostcssPlugins = require('./.postcssrc.js');
const basePostcssPlugins = ['autoprefixer'];

/** Config export object.
 ============================================================================================= */

let config = {
	css: {
		source: 'src/browser-reset.css',
		output: './dist/browser-reset.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true, map: false },
				plugins: loadPostcssPlugins(...basePostcssPlugins.concat(['postcss-reporter']))
			}
		]
	}
};

if (isProd) {
	config.css_min = Object.assign({}, config.css, {
		output: 'dist/browser-reset.min.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true, map: false },
				plugins: loadPostcssPlugins(...basePostcssPlugins.concat(['postcss-csso']))
			}
		]
	});
}

module.exports = config;
