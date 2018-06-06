# Browser Reset

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/browser-reset">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/browser-reset.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/browser-reset">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/browser-reset.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/browser-reset/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/browser-reset">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/3873cea2c1bf448ababb228d9f1089fc/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<!-- <a href='https://coveralls.io/github/brikcss/browser-reset?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/browser-reset/master.svg?style=flat-square' alt='Coverage Status' />
	</a> -->
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

A simple and modern CSS browser reset.

## Environment and browser support

| Node   | CLI   | UMD   | ES Module | Browser   |
|:------:|:-----:|:-----:|:---------:|:---------:|
| x      | x     | x     | x         | ✓         |

| Chrome | Firefox | Safari | Edge | IE  | iOS | Android |
|:------:|:-------:|:------:|:----:|:---:|:---:|:-------:|
| ✓      | ✓       | ✓      | ✓    | 11* | ✓   | ✓       |

\* _Note: Since browser-reset uses [CSS Variables](https://caniuse.com/#search=css%20variables), IE11 is supported with the use of a postcss custom variables polyfill, such as [this one](https://github.com/luwes/postcss-var-shim)._

## Install

1. Install:

	```
	npm i -d @brikcss/browser-reset
	```

2. Include `./dist/browser-reset.css` as the first stylesheet in your app.

3. (optional) Change base variables in your app's CSS, as desired (see [source browser-reset.css](./src/browser-reset.css) for available variables).
