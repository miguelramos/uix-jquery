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

;(function ($, undefined) {
    $.widget("uix.gmaps", {
        options: {
            'version': '0.0.3',
            'debug': true,
            'iconSize': 16,
            'iconColor': '#fff',
            'iconSymbol': null,
            'enableInfoBox': true,
            'google': {
                'zoom': 12,
                'center': new google.maps.LatLng(41.358773, -8.753555),
                'mapTypeId': google.maps.MapTypeId.ROADMAP
            }
        },
        _create: function () {
            this.el = this.element[0];
            var self = this;

            this._setAttributes();

            this.instance = {
                'map': new google.maps.Map(self.el, self.options.google),
                'markers': [],
                'overlays': [],
                'services': []
            };

            google.maps.event.addListenerOnce(self.instance.map, 'bounds_changed', function () {
                $(self.el).trigger('init', self.instance.map);
            });

            self._call(self.options.callback, self.instance.map);

            if (this.options.debug) {
                console.log(this);
            }
        },
        _setAttributes: function () {
            if (this.element.data('iconSize')) {
                this._setIconSize(this.element.data('iconSize'));
            }

            if (this.element.data('iconColor')) {
                this._setIconColor(this.element.data('iconColor'));
            }

            if (this.element.data('iconSymbol')) {
                this._setIconSymbol(this.element.data('iconSymbol'));
            }
        },
        _setOption: function (key, value) {
            switch (key) {
                case "iconSize":
                    this.options.iconSize = this._setIconSize(value);
                    break;
                case "iconColor":
                    this.options.iconColor = this._setIconColor(value);
                    break;
                case "iconSymbol":
                    this.options.iconSymbol = this._setIconSymbol(value);
                    break;
                case "enableInfoBox":
                    this.options.enableInfoBox = this._setEnableInfoBox(value);
            }

            $.Widget.prototype._setOption.apply(this, arguments);

            this._super("_setOption", key, value);
        },
        _setIconSize: function (arg) {
            if (typeof arg == "number") {
                this.options.iconSize = arg;
            }
        },
        _setIconColor: function (arg) {
            if (strpos(arg, "#") !== false) {
                return arg;
            } else {
                return '#fff';
            }
        },
        _setIconSymbol: function (arg) {
            if (typeof arg == "string") {
                return arg;
            } else {
                return null;
            }
        },
        _setEnableInfoBox: function(arg){
          if(typeof arg == "boolean"){
              return arg;
          } else {
              return true;
          }
        },
        addBounds: function (position) {
            var bounds = this.get('bounds', new google.maps.LatLngBounds());
            bounds.extend(this._latLng(position));
            this.get('map').fitBounds(bounds);
            return this;
        },
        addMarker: function (options, callback) {
            options.map = this.get('map');
            options.position = this._latLng(options.position);

            var marker = new (options.marker || google.maps.Marker)(options),
                markers = this.get('markers'),
                overlays = this.get('overlays');

            var overlay = this._overlay({
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

            overlays.push(overlay);

            this._call(callback, options.map, marker);

            return $(marker);
        },
        openInfoWindow: function(infoWindowOptions, marker, callback) {

            if(this.options.enableInfoBox){
                var iw = this.get('iw', infoWindowOptions.infoWindow || new InfoBox());
                infoWindowOptions = this._createInfoBox(infoWindowOptions);
            } else {
                var iw = this.get('iw', infoWindowOptions.infoWindow || new google.maps.InfoWindow);
            }

            iw.setOptions(infoWindowOptions);
            iw.open(this.get('map'), this._unwrap(marker));

            this._call(callback, iw);
            return this;
        },
        closeInfoWindow: function() {
            if ( this.get('iw') != null ) {
                this.get('iw').close();
            }
            return this;
        },
        _createInfoBox: function(settings){
            var me = this.get('iw');

            var defaults = {
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-225, -70),
                alignBottom: true,
                zIndex: null,
                closeBoxMargin: "10px 2px 2px 2px",
                closeBoxURL: "",
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false
            };

            settings = $.extend(defaults, settings);

            var container = $('div').tag({'class':'uix-info-box animated fadeInDown'}),
                boxTitle = $('header').tag({'class':'uix-info-head'}),
                boxContent = $('div').tag({'class':'uix-info-content'}),
                boxCaret = $('div').tag({'class':'uix-info-caret'}).append('<i class="fa fa-caret-down"></i>'),
                closeCaret = $('i').tag({'class':'fa fa-times'}).css('cursor','pointer');

            google.maps.event.addListener(me, 'domready', function() {
                google.maps.event.addDomListener(document.querySelector('.fa-times'), "click", function(evt){
                    evt.cancelBubble = true;

                    if (evt.stopPropagation) {
                        evt.stopPropagation();
                    }

                    google.maps.event.trigger(me, "closeclick");

                    me.close();
                });
            });

            boxContent.append(settings.content);
            boxTitle.append(settings.title).append(closeCaret);

            container.append(boxTitle).append(boxContent).append(boxCaret);

            settings.content = container.get(0).outerHTML;

            return settings;
        },
        _overlay: function (options) {
            var that = this;

            var Overlay = function (settings) {

                this.setValues(settings);

                // Create the label container
                this.div = document.createElement('div');
                this.div.className = 'marker-label';
                var span = document.createElement('span');
                span.className = "marker-icon";
                this.div.appendChild(span);
            }

            Overlay.prototype = $.extend(new google.maps.OverlayView(), {
                onAdd: function () {
                    this.getPanes().overlayImage.appendChild(this.div);

                    // Ensures the label is redrawn if the text or position is changed.
                    var self = this;
                    this.listeners = [
                        google.maps.event.addListener(this, 'position_changed', function () {
                            self.draw();
                        }),
                        google.maps.event.addListener(this, 'text_changed', function () {
                            self.draw();
                        }),
                        google.maps.event.addListener(this, 'zindex_changed', function () {
                            self.draw();
                        }),
                        google.maps.event.addListener(this, 'map_changed', function () {
                            console.log('marker');
                        }),
                        google.maps.event.addListener(this, 'cluster_init', function () {
                            var label = $(this.get('text')).addClass('hidden');
                            this.text = label.get(0).outerHTML;

                            console.log(this);
                        }),
                    ];
                },
                onRemove: function () {
                    this.div.parentNode.removeChild(this.div);
                    // Label is removed from the map, stop updating its position/text
                    for (var i = 0, l = this.listeners.length; i < l; ++i) {
                        google.maps.event.removeListener(this.listeners[i]);
                    }
                },
                draw: function () {
                    var projection = this.getProjection(),
                        container = this.div,
                        containerPositions = projection.fromLatLngToDivPixel(this.get('position')),
                        iconSize = that.options.iconSize,
                        iconColor = that.options.iconColor;

                    container.style.top = Math.floor(containerPositions.y) + 'px';
                    container.style.left = Math.floor(containerPositions.x) + 'px';
                    container.style.fontSize = iconSize + 'px';
                    container.style.display = 'block';
                    container.style.position = 'absolute';
                    container.style.color = iconColor;
                    container.style.zIndex = this.get('zIndex');
                    container.style.whiteSpace = 'nowrap';
                    container.style.textAlign = 'center';

                    this.div.innerHTML = this.get('text').toString();
                }
            });

            var markerLabel = new Overlay(options);
            markerLabel.bindTo('position', options.marker, 'position');
            //markerLabel.bindTo('text', options.marker, 'position');

            return markerLabel;
        },
        addCluster: function(options, callback){
            var cluster = this.get('cl', options.cluster || new MarkerClusterer()),
                markers = this.get('markers'),
                overlays = this.get('overlays'),
                map = this.get('map');

            /*$.each(markers, function(index, marker){
                var label = marker.label;
                label = $(label).addClass('hidden');
                marker.label = label.get(0).outerHTML;
                google.maps.event.trigger(marker, 'text_changed');
                console.log(marker);
            });*/

            cluster.setMap(map);
            cluster.addMarkers(markers);

            google.maps.event.addListener(this.get('map'), 'zoom_changed', function() {
                /*console.log(cluster.getClusters());
                console.log(cluster.get("minZoom"));
                console.log(this.get('zoom'));*/

                $.each(overlays, function(index, overlay){
                    google.maps.event.trigger(overlay, 'map_changed');
                });
            });

            /*google.maps.event.addListener(this.get('map'), "idle", function () {
                console.log(this);
            });*/

            /*google.maps.event.addDomListener(window, 'load', function(){
                console.log($(this).find('.marker-label'));
            });*/

            google.maps.event.addListener(cluster, "clusteringend", function () {
                $.each(overlays, function(index, overlay){
                    google.maps.event.trigger(overlay, 'cluster_init');
                });
            });

            /*google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
                //this part runs when the mapobject is created and rendered
                $.each($(this.getDiv()).find('.marker-label'), function(index, marker){
                    $(marker).addClass('hidden');
                });
            });*/

            this._call(callback, cluster);

            return cluster;
        },
        get: function (key, value) {
            var instance = this.instance;
            if ( !instance[key] ) {
                if ( key.indexOf('>') > -1 ) {
                    var e = key.replace(/ /g, '').split('>');
                    for ( var i = 0; i < e.length; i++ ) {
                        if ( !instance[e[i]] ) {
                            if (value) {
                                instance[e[i]] = ( (i + 1) < e.length ) ? [] : value;
                            } else {
                                return null;
                            }
                        }
                        instance = instance[e[i]];
                    }
                    return instance;
                } else if ( value && !instance[key] ) {
                    this.set(key, value);
                }
            }
            return instance[key];
        },
        set: function(key, value) {
            this.instance[key] = value;
            return this;
        },
        refresh: function () {
            var map = this.get('map'),
                latLng = map.getCenter();

            $(map).triggerEvent('resize');

            map.setCenter(latLng);

            return this;
        },
        destroy: function () {
            $.Widget.prototype.destroy.call(this);
        },
        _latLng: function (latLng) {
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
        _call: function (callback) {
            if (callback && $.isFunction(callback)) {
                callback.apply(this, Array.prototype.slice.call(arguments, 1));
            }
        },
        _unwrap: function(obj) {
            return (!obj) ? null : ( (obj instanceof jQuery) ? obj[0] : ((obj instanceof Object) ? obj : $('#'+obj)[0]) )
        }
    });

    $.fn.extend({

        triggerEvent: function (eventType) {
            google.maps.event.trigger(this[0], eventType);
            return this;
        },

        addEventListener: function (eventType, eventDataOrCallback, eventCallback) {
            if (google.maps && this[0] instanceof google.maps.MVCObject) {
                google.maps.event.addListener(this[0], eventType, eventDataOrCallback);
            } else {
                if (eventCallback) {
                    this.bind(eventType, eventDataOrCallback, eventCallback);
                } else {
                    this.bind(eventType, eventDataOrCallback);
                }
            }
            return this;
        }
    });

    $.each(('click rightclick dblclick mouseover mouseout drag dragend').split(' '), function (i, name) {
        jQuery.fn[name] = function (a, b) {
            return this.addEventListener(name, a, b);
        }
    });
})(jQuery);