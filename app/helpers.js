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

			return $(element);
		}
	});
})(jQuery, document);

;function in_array (needle, haystack, argStrict) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: vlado houba
  // +   input by: Billy
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
  // *     returns 1: true
  // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
  // *     returns 2: false
  // *     example 3: in_array(1, ['1', '2', '3']);
  // *     returns 3: true
  // *     example 3: in_array(1, ['1', '2', '3'], false);
  // *     returns 3: true
  // *     example 4: in_array(1, ['1', '2', '3'], true);
  // *     returns 4: false
  var key = '',
    strict = !! argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}