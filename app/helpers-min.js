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
 */function in_array(e,t,n){var r="",i=!!n;if(i){for(r in t)if(t[r]===e)return!0}else for(r in t)if(t[r]==e)return!0;return!1}(function(e,t){"use strict";e.fn.extend({tag:function(n){var r=t.createElement(this.selector);n=e.extend({},n);e.each(n,function(t,n){e(r).attr(t,n)});return e(r)}})})(jQuery,document);