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
 */function in_array(e,t,n){var r="",i=!!n;if(i){for(r in t)if(t[r]===e)return!0}else for(r in t)if(t[r]==e)return!0;return!1}function strpos(e,t,n){var r=(e+"").indexOf(t,n||0);return r===-1?!1:r}(function(e,t){"use strict";e.fn.extend({tag:function(n){var r=t.createElement(this.selector);n=e.extend({},n);e.each(n,function(t,n){e(r).attr(t,n)});return e(r)}})})(jQuery,document);(function(e,t){get_selector=function(e){var n,r;pieces=[];for(;e&&e.tagName!==t;e=e.parentNode){if(e.className){n=e.className.split(" ");for(r in n)if(n.hasOwnProperty(r)&&n[r]){pieces.unshift(n[r]);pieces.unshift(".")}}if(e.id&&!/\s/.test(e.id)){pieces.unshift(e.id);pieces.unshift("#")}pieces.unshift(e.tagName);pieces.unshift(" > ")}return pieces.slice(1).join("")};e.fn.getSelector=function(t){return!0===t?get_selector(this[0]):e.map(this,function(e){return get_selector(e)})}})(jQuery);