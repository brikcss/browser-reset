/** ------------------------------------------------------------------------------------------------
 *  @filename  .postcssrc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  PostCSS configuration file.
 ** --------------------------------------------------------------------------------------------- */

const isProd = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';
module.exports = {
	map: !isProd,
	plugins: [
		// Enables custom property sets.
		require('postcss-apply')({
			preserve: true
		}),

		// Auto generates vendor prefixed properties based on browser support.
		require('autoprefixer')()
	].concat(
		isProd
			? [
					// Minify output css.
					require('postcss-csso')({
						restructure: true,
						forceMediaMerge: false,
						comments: true, // 'exclamation' (true) | 'first-exclamation' | false
						usage: null,
						logger: null
					})
			  ]
			: [
					// Log postcss output to console.
					require('postcss-reporter')({
						clearReportedMessages: true,
						throwError: isProd,
						sortByPosition: true
					})
			  ]
	)
};
