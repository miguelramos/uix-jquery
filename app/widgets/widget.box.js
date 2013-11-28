/**
 *  ─────╔╗╔═╗─╔╗──╔╗
 *	╔╦╦╦═╣╚╣═╬╦╣╚╦╗╠╬══╦═╗╔═╦═╦══╗
 *	║║║║╩╣╬╠═║║║╬║╚╣║║║║╩╬╣═╣╬║║║║
 *	╚══╩═╩═╩═╩═╩═╩═╩╩╩╩╩═╩╩═╩═╩╩╩╝
 * ------------------------------------------------------------------------------------
 * widget.box.js
 * ------------------------------------------------------------------------------------
 *
 * Simple widget with close button to create boxes containers.
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
			'removeEnable': false,
			'classCSS': 'uix-box',
			'debug': false,
			'version': '0.0.3'
		},
		_create: function() {
			var container = this._setContainer();

			this.element.append(container);

			if(this.options.debug){
				console.log(this);
			}

			return this;
		},
		_setAttributes: function(){
			if(typeof this.element.data('boxRemoveEnable') == "boolean"){
				this._setOption('removeEnable',this.element.data('boxRemoveEnable'));
			}
		},
		_setOption: function( key, value ) {
			switch( key ) {
				case "removeEnable":
					this.options.removeEnable = this._setRemoveEnable(value);
		    break;
		    case "classCSS":
		    	this.options.classCSS = this._setCssClass(value);
		    break;
		  }

		  $.Widget.prototype._setOption.apply( this, arguments );

		  this._super( "_setOption", key, value );
		},
		_setContainer: function(){
			this._setAttributes();

			var tag = $('div').tag({
				'class': this.options.classCSS
			}),
				bt = $('div').tag({
					'class': 'uix-button-remove'
				}).append('<i class="fa fa-times-circle"></i>');

			if(this.options.removeEnable){
				bt.on('click', function(evt){
					evt.stopPropagation();

					$(this).parent().remove();
				});

				tag.append(bt);
			}

			return tag;
		},
		_setRemoveEnable: function(arg){
			if(typeof arg == "boolean"){
				return arg;
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