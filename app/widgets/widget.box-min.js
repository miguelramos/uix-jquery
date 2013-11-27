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
 */(function(e,t){"use strict";e.widget("uix.box",{options:{onRemove:!1,classCSS:"uix-box",debug:!0},_create:function(){var e=this._setContainer();this.element.append(e);this.options.debug&&console.log(this);return this},_setOption:function(t,n){switch(t){case"onRemove":this.options.onRemove=this._setOnRemove(n);break;case"classCSS":this.options.classCSS=this._setCssClass(n)}e.Widget.prototype._setOption.apply(this,arguments);this._super("_setOption",t,n)},_setContainer:function(){var t=e("div").tag({"class":this.options.classCSS}),n=e("div").tag({"class":"uix-button-remove"}).append('<i class="fa fa-times-circle"></i>');if(this.options.onRemove){n.on("click",function(t){t.stopPropagation();e(this).parent().remove()});t.append(n)}return t},_setOnRemove:function(e){return typeof e=="boolean"?e:!1},_setCssClass:function(e){return typeof e=="string"?e:"uix-box"},destroy:function(){e.Widget.prototype.destroy.call(this)}})})(jQuery);