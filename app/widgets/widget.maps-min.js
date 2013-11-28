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
 */(function(e){e.widget("uix.maps",{widgetEventPrefix:"on.event.",options:{version:"0.0.3",debug:!0,google:{zoom:12,center:new google.maps.LatLng(41.358773,-8.753555),mapTypeId:google.maps.MapTypeId.ROADMAP}},_create:function(){var t=e("div").tag({"class":"uix-container-maps",id:"id-map-container"});this._initMap(t);this.element.append(t);this.options.debug&&console.log(this)},_initMap:function(e){this.gmap=new google.maps.Map(e[0],this.options.google)},_setOption:function(t,n){switch(t){case"clear":}e.Widget.prototype._setOption.apply(this,arguments);this._super("_setOption",t,n)},destroy:function(){e.Widget.prototype.destroy.call(this)}})})(jQuery);