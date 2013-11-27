/**
 *  ─────╔╗╔═╗─╔╗──╔╗
 *	╔╦╦╦═╣╚╣═╬╦╣╚╦╗╠╬══╦═╗╔═╦═╦══╗
 *	║║║║╩╣╬╠═║║║╬║╚╣║║║║╩╬╣═╣╬║║║║
 *	╚══╩═╩═╩═╩═╩═╩═╩╩╩╩╩═╩╩═╩═╩╩╩╝
 * ------------------------------------------------------------------------------------
 * widget.box.js
 * ------------------------------------------------------------------------------------
 *
 * @package Widget Box
 * @author  Miguel Ramos <miguel.marques.ramos@gmail.com>
 * @link    https://www.websublime.com
 * @version 0.0.3
 */
 ;(function($, undefined){
 	'use strict';

 	$.widget( "uix.box", {

		options: { 
			'onRemove': false,
			'classCSS': 'uix-box'
		},
		_create: function() {
			var container = _setContainer();
		},
		_setOption: function( key, value ) {
			switch( key ) {
				case "onRemove":
					this.options.onRemove = _setOnRemove(value);
		    break;
		    case "classCSS":
		    	this.options.classCSS = _setCssClass(value);
		    break;
		  }

		  $.Widget.prototype._setOption.apply( this, arguments );

		  this._super( "_setOption", key, value );
		},
		_setContainer: function(){
			var tag = $('div').tag({
				'class': this.options.classCSS
			}),
				bt = $('div').tag({
					'class': 'uix-button-remove'
				});

			bt.on('click', function(evt){
				evt.stopPropagation();

				$(this).parent().remove();
			});

			if(this.options.onRemove){
				tag.append(bt);
			}

			return tag;
		},
		_setOnRemove: function(arg){
			if(typeof value == "boolean"){
				return value;
			} else {
				return false;
			}
		},
		_setCssClass: function(arg){
			if(typeof arg == "string"){
				return arg;
			} else {
				return "uix-box";
			}
		},
		destroy: function() {
		  $.Widget.prototype.destroy.call( this );
		}
	});
})(jQuery);