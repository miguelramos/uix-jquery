/**
 *  ─────╔╗╔═╗─╔╗──╔╗
 *	╔╦╦╦═╣╚╣═╬╦╣╚╦╗╠╬══╦═╗╔═╦═╦══╗
 *	║║║║╩╣╬╠═║║║╬║╚╣║║║║╩╬╣═╣╬║║║║
 *	╚══╩═╩═╩═╩═╩═╩═╩╩╩╩╩═╩╩═╩═╩╩╩╝
 * ------------------------------------------------------------------------------------
 * widget.map.js
 * ------------------------------------------------------------------------------------
 *
 * @package UI MAPS
 * @author  Miguel Ramos <miguel.marques.ramos@gmail.com>
 * @link    https://www.websublime.com
 * @version 0.0.3
 */
;(function($, undefined) {
  $.widget( "uix.maps", {
    options: { 
      clear: null
    },
    _create: function() {
    },
    _setOption: function( key, value ) {
      switch( key ) {
        case "clear":
          // handle changes to clear option
          break;
      }

      $.Widget.prototype._setOption.apply( this, arguments );

      this._super( "_setOption", key, value );
    },
    destroy: function() {
      $.Widget.prototype.destroy.call( this );
    }
  });
})(jQuery);