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
  $.widget("uix.maps", {
    widgetEventPrefix: 'on.event.',
    options: {
      'version': '0.0.3',
      'debug': true,
      'google': {
        'zoom': 12,
        'center': new google.maps.LatLng(41.358773,-8.753555),
        'mapTypeId': google.maps.MapTypeId.ROADMAP,
      }
    },
    _create: function() {
      var containerMap = $('div').tag({
        'class': 'uix-container-maps',
        'id': 'id-map-container'
      });

      this._initMap(containerMap);

      this.element.append(containerMap);

      if(this.options.debug){
        console.log(this);
      }
    },
    _initMap: function(el){
      this.gmap = new google.maps.Map(el[0], this.options.google);
    },
    _setOption: function(key, value) {
      switch (key) {
        case "clear":
          // handle changes to clear option
          break;
      }

      $.Widget.prototype._setOption.apply(this, arguments);

      this._super("_setOption", key, value);
    },
    destroy: function() {
      $.Widget.prototype.destroy.call(this);
    }
  });
})(jQuery);