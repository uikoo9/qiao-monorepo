'use strict';

// html webpack plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
https://github.com/jantimon/html-webpack-plugin#options
Name	Type	Default	Description
title	{String}	Webpack App	The title to use for the generated HTML document
filename	{String|Function}	'index.html'	The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html). The [name] placeholder will be replaced with the entry name. Can also be a function e.g. (entryName) => entryName + '.html'.
template	{String}	``	webpack relative or absolute path to the template. By default it will use src/index.ejs if it exists. Please see the docs for details
templateContent	{string|Function|false}	false	Can be used instead of template to provide an inline template - please read the Writing Your Own Templates section
templateParameters	{Boolean|Object|Function}	false	Allows to overwrite the parameters used in the template - see example
inject	{Boolean|String}	true	true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element. Passing true will add it to the head/body depending on the scriptLoading option. Passing false will disable automatic injections. - see the inject:false example
publicPath	{String|'auto'}	'auto'	The publicPath used for script and link tags
scriptLoading	{'blocking'|'defer'|'module'}	'defer'	Modern browsers support non blocking javascript loading ('defer') to improve the page startup performance. Setting to 'module' adds attribute type="module". This also implies "defer", since modules are automatically deferred.
favicon	{String}	``	Adds the given favicon path to the output HTML
meta	{Object}	{}	Allows to inject meta-tags. E.g. meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
base	{Object|String|false}	false	Inject a base tag. E.g. base: "https://example.com/path/page.html
minify	{Boolean|Object}	true if mode is 'production', otherwise false	Controls if and in what ways the output should be minified. See minification below for more details.
hash	{Boolean}	false	If true then append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting
cache	{Boolean}	true	Emit the file only if it was changed
showErrors	{Boolean}	true	Errors details will be written into the HTML page
chunks	{?}	?	Allows you to add only some chunks (e.g only the unit-test chunk)
chunksSortMode	{String|Function}	auto	Allows to control how chunks should be sorted before they are included to the HTML. Allowed values are 'none' | 'auto' | 'manual' | {Function}
excludeChunks	{Array.<string>}	``	Allows you to skip some chunks (e.g don't add the unit-test chunk)
xhtml	{Boolean}	false	If true render the link tags as self-closing (XHTML compliant)
*/
module.exports = function (plugin) {
  return new HtmlWebpackPlugin(plugin);
};
