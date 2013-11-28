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
 */(function(e){"use strict";e.widget("uix.box",{options:{removeEnable:!1,classCSS:"uix-box",debug:!1,version:"0.0.3"},_create:function(){var e=this._setContainer();this.element.append(e);this.options.debug&&console.log(this);return this},_setAttributes:function(){typeof this.element.data("boxRemoveEnable")=="boolean"&&this._setOption("removeEnable",this.element.data("boxRemoveEnable"))},_setOption:function(t,n){switch(t){case"removeEnable":this.options.removeEnable=this._setRemoveEnable(n);break;case"classCSS":this.options.classCSS=this._setCssClass(n)}e.Widget.prototype._setOption.apply(this,arguments);this._super("_setOption",t,n)},_setContainer:function(){var t,n;this._setAttributes();t=e("div").tag({"class":this.options.classCSS}),n=e("div").tag({"class":"uix-button-remove"}).append('<i class="fa fa-times-circle"></i>');if(this.options.removeEnable){n.on("click",function(t){t.stopPropagation();e(this).parent().remove()});t.append(n)}return t},_setRemoveEnable:function(e){return typeof e=="boolean"?e:!1},_setCssClass:function(e){return typeof e=="string"?e:"uix-box"},addContent:function(e){this.element.children("."+this.options.classCSS).append(e)},removeContent:function(e){this.element.find(e)&&this.element.find(e).remove()},destroy:function(){e.Widget.prototype.destroy.call(this)}})})(jQuery);