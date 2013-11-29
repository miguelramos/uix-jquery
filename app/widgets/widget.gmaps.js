/**
 *  ─────╔╗╔═╗─╔╗──╔╗
 *	╔╦╦╦═╣╚╣═╬╦╣╚╦╗╠╬══╦═╗╔═╦═╦══╗
 *	║║║║╩╣╬╠═║║║╬║╚╣║║║║╩╬╣═╣╬║║║║
 *	╚══╩═╩═╩═╩═╩═╩═╩╩╩╩╩═╩╩═╩═╩╩╩╝
 * ------------------------------------------------------------------------------------
 * widget.gmaps.js
 * ------------------------------------------------------------------------------------
 *
 * @package UIX GMAPS
 * @author  Miguel Ramos <miguel.marques.ramos@gmail.com>
 * @link    https://www.websublime.com
 * @version 0.0.3
 */
var MAP_PIN = 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z';//36x57
var SQUARE_PIN = 'M 50 -119.876 -50 -119.876 -50 -19.876 -13.232 -19.876 0.199 0 13.63 -19.876 50 -19.876 Z';//36x42
var SHEILD = 'M42.8-72.919c0.663-7.855 3.029-15.066 7.2-21.675L34.002-110c-5.054 4.189-10.81 6.509-17.332 6.919 c-5.976 0.52-11.642-0.574-16.971-3.287c-5.478 2.626-11.121 3.723-17.002 3.287c-6.086-0.523-11.577-2.602-16.495-6.281 l-16.041 15.398c3.945 6.704 6.143 13.72 6.574 21.045c0.205 3.373-0.795 8.016-3.038 14.018c-1.175 3.327-2.061 6.213-2.667 8.627 c-0.562 2.394-0.911 4.34-1.027 5.801c-0.082 6.396 1.78 12.168 5.602 17.302c2.986 3.745 7.911 7.886 14.748 12.41 c7.482 3.665 13.272 6.045 17.326 7.06c1.163 0.521 2.301 1.025 3.363 1.506C-7.9-5.708-6.766-5.232-5.586-4.713 C-3.034-3.242-1.243-1.646-0.301 0C0.858-1.782 2.69-3.338 5.122-4.713c1.717-0.723 3.173-1.346 4.341-1.896 c1.167-0.494 2.037-0.865 2.54-1.09c0.866-0.414 2.002-0.888 3.376-1.41c1.386-0.527 3.101-1.168 5.144-1.882 c3.951-1.348 6.83-2.62 8.655-3.77c6.634-4.524 11.48-8.595 14.566-12.235c3.958-5.152 5.879-10.953 5.79-17.475 c-0.232-2.922-1.52-7.594-3.85-13.959C43.463-64.631 42.479-69.445 42.8-72.919z';//36x39
var ROUTE = 'M49.986-58.919c-0.51-27.631-16.538-38.612-17.195-39.049l-2.479-1.692l-2.5 1.689c-4.147 2.817-8.449 4.247-12.783 4.247 c-7.178 0-12.051-3.864-12.256-4.032L-0.023-100l-2.776 2.248c-0.203 0.165-5.074 4.028-12.253 4.028 c-4.331 0-8.63-1.429-12.788-4.253l-2.486-1.678l-2.504 1.692c-1.702 1.17-16.624 12.192-17.165 38.907 C-50.211-56.731-43.792-12.754-0.003 0C47.609-13.912 50.23-56.018 49.986-58.919z';//36x36
var ROUNDED = 'M50-80c0-11-9-20-20-20h-60c-11 0-20 9-20 20v60c0 11 9 20 20 20h60c11 0 20-9 20-20V-80z';//36x36

;(function($, undefined){
	$.widget( "uix.gmaps", {
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
			this.el = this.element[0];
			var self = this;

			this.instance = {
				'map': new google.maps.Map(self.el, self.options.google),
				'markers': [],
				'overlays': [],
				'services': []
			};

			google.maps.event.addListenerOnce(self.instance.map, 'bounds_changed', function() {
				$(self.el).trigger('init', self.instance.map);
			});

			self._call(self.options.callback, self.instance.map);

			if (this.options.debug) {
				console.log(this);
			}
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
		addBounds: function(position) {
			var bounds = this.get('bounds', new google.maps.LatLngBounds());
			bounds.extend(this._latLng(position));
			this.get('map').fitBounds(bounds);
			return this;
		},
		addMarker: function(options, callback){
			options.map = this.get('map');
			options.position = this._latLng(options.position);

			var marker = new(options.marker || google.maps.Marker)(options);
			var markers = this.get('markers');

			this._overlay({
				'map': options.map,
				'marker': marker,
				'text': options.label
			});

			if (marker.id) {
				markers[marker.id] = marker;
			} else {
				markers.push(marker);
			}

			if (marker.bounds) {
				this.addBounds(marker.getPosition());
			}

			this._call(callback, options.map, marker);

			return $(marker);
		},
		_overlay: function(options){
			var that = this;

			var Overlay = function(settings){
				var self = this;

			  this.setValues(settings);

			  // Create the label container
			  this.div = document.createElement('div');
			  this.div.className = 'marker-label';
			  var span = document.createElement('span');
			  span.className = "marker-icon";
			  this.div.appendChild(span);
			}

			Overlay.prototype = $.extend(new google.maps.OverlayView(), {
			  onAdd: function() {
			    this.getPanes().overlayImage.appendChild(this.div);

			    // Ensures the label is redrawn if the text or position is changed.
			    var self = this;
			    this.listeners = [
			      google.maps.event.addListener(this, 'position_changed', function() {
			        self.draw();
			      }),
			      google.maps.event.addListener(this, 'text_changed', function() {
			        self.draw();
			      }),
			      google.maps.event.addListener(this, 'zindex_changed', function() {
			        self.draw();
			      }),
			    ];
			  },
			  onRemove: function() {
			    this.div.parentNode.removeChild(this.div);
			    // Label is removed from the map, stop updating its position/text
			    for (var i = 0, l = this.listeners.length; i < l; ++i) {
			      google.maps.event.removeListener(this.listeners[i]);
			    }
			  },
			  draw: function() {
			    var projection = this.getProjection(),
			      position = projection.fromLatLngToDivPixel(this.get('position')),
			      div = this.div;

			    /*var bounds = new google.maps.LatLngBounds();
			    bounds.extend(this.marker.getPosition());
			    var u = this.marker.getIcon();
			    var sw = projection.fromLatLngToDivPixel(bounds.getSouthWest());
  				var ne = projection.fromLatLngToDivPixel(bounds.getNorthEast());*/

			    div.style.left = Math.floor(position.x) + 'px';
			    div.style.top = Math.floor(position.y) + 'px';

			    /*div.style.left = Math.floor(sw.x) + 'px';
				  div.style.top = (Math.floor(ne.y) - Math.floor(ne.y)/3) + 'px';
				  div.style.width = (Math.floor(ne.x) - Math.floor(sw.x)) + 'px';
				  div.style.height = (Math.floor(sw.y) - Math.floor(ne.y)) + 'px';*/

			    div.style.display = 'block';
			    div.style.position = 'absolute';
			    //div.style.color = "#fff";
			    div.style.zIndex = this.get('zIndex')+10;
			    div.style.whiteSpace = 'nowrap';
			    div.style.textAlign = 'center';

			    this.div.innerHTML = this.get('text').toString();
			  }
			});

			var markerLabel = new Overlay(options);
			markerLabel.bindTo('position', options.marker, 'position');
			//markerLabel.bindTo('text', options.marker, 'position');

			return markerLabel;
		},
    get: function(key){
    	if(this.instance[key]){
    		return this.instance[key];
    	} else {
    		return undefined;
    	}
    },
    destroy: function() {
      $.Widget.prototype.destroy.call( this );
    },
		_latLng: function(latLng) {
			if (!latLng) {
				return new google.maps.LatLng(0.0, 0.0);
			}
			if (latLng instanceof google.maps.LatLng) {
				return latLng;
			} else {
				latLng = latLng.replace(/ /g, '').split(',');
				return new google.maps.LatLng(latLng[0], latLng[1]);
			}
		},
		_call: function(callback) {
			if (callback && $.isFunction(callback)) {
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
		},
  });
})(jQuery);