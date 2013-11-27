/**
 *  ─────╔╗╔═╗─╔╗──╔╗
 *	╔╦╦╦═╣╚╣═╬╦╣╚╦╗╠╬══╦═╗╔═╦═╦══╗
 *	║║║║╩╣╬╠═║║║╬║╚╣║║║║╩╬╣═╣╬║║║║
 *	╚══╩═╩═╩═╩═╩═╩═╩╩╩╩╩═╩╩═╩═╩╩╩╝
 * ------------------------------------------------------------------------------------
 * helpers.js
 * ------------------------------------------------------------------------------------
 *
 * @package helpers
 * @author  Miguel Ramos <miguel.marques.ramos@gmail.com>
 * @link    https://www.websublime.com
 * @version 0.0.3
 */
;(function($, document, undefined){
	'use strict';

	$.fn.extend({
		tag: function(options){
			var element = document.createElement(this.selector);

			options = $.extend({}, options);

			$.each(options, function(key, value){
				$(element).attr(key, value);
			});

			return element;
		}
	});
})(jQuery, document);