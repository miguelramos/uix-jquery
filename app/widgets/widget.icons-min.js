/**
 *  ─────╔╗╔═╗─╔╗──╔╗
 *	╔╦╦╦═╣╚╣═╬╦╣╚╦╗╠╬══╦═╗╔═╦═╦══╗
 *	║║║║╩╣╬╠═║║║╬║╚╣║║║║╩╬╣═╣╬║║║║
 *	╚══╩═╩═╩═╩═╩═╩═╩╩╩╩╩═╩╩═╩═╩╩╩╝
 * ------------------------------------------------------------------------------------
 * widget.icons.js
 * ------------------------------------------------------------------------------------
 *
 * Icons maps.
 * 
 * @package Widget Icones
 * @author  Miguel Ramos <miguel.marques.ramos@gmail.com>
 * @link    https://www.websublime.com
 * @version 0.0.3
 */(function(e,t){e.widget("uix.icons",{options:{version:"0.0.3",debug:!0,tag:"i",item:"div",icons:["map-icon-art-gallery","map-icon-campground","map-icon-bank","map-icon-hair-care","map-icon-gym","map-icon-point-of-interest","map-icon-post-box","map-icon-post-office","map-icon-university","map-icon-beauty-salon","map-icon-atm","map-icon-rv-park","map-icon-school","map-icon-library","map-icon-spa","map-icon-route","map-icon-postal-code","map-icon-stadium","map-icon-postal-code-prefix","map-icon-museum","map-icon-finance","map-icon-natural-feature","map-icon-funeral-home","map-icon-cemetery","map-icon-park","map-icon-lodging","map-icon-female","map-icon-male","map-icon-unisex","map-icon-toilet","map-icon-bakery","map-icon-cafe","map-icon-restaurant","map-icon-food","map-icon-liquor-store","map-icon-bicycle-store","map-icon-pet-store","map-icon-hardware-store","map-icon-book-store","map-icon-furniture-store","map-icon-department-store","map-icon-electronics-store","map-icon-jewelry-store","map-icon-clothing-store","map-icon-convenience-store","map-icon-store","map-icon-shopping-mall","map-icon-movie-rental","map-icon-grocery-or-supermarket","map-icon-florist","map-icon-laundry","map-icon-abseiling","map-icon-archery","map-icon-baseball","map-icon-bicycling","map-icon-climbing","map-icon-golf","map-icon-hang-gliding","map-icon-horse-riding","map-icon-inline-skating","map-icon-motobike-trail","map-icon-playground","map-icon-skateboarding","map-icon-tennis","map-icon-trail-walking","map-icon-viewing","map-icon-walking","map-icon-boating","map-icon-boat-ramp","map-icon-boat-tour","map-icon-canoe","map-icon-diving","map-icon-fishing","map-icon-fishing-pier","map-icon-fish-cleaning","map-icon-jet-skiing","map-icon-kayaking","map-icon-marina","map-icon-rafting","map-icon-sailing","map-icon-scuba-diving","map-icon-surfing","map-icon-swimming","map-icon-waterskiing","map-icon-whale-watching","map-icon-wind-surfing","map-icon-chairlift","map-icon-cross-country-skiing","map-icon-ice-fishing","map-icon-ice-skating","map-icon-ski-jumping","map-icon-skiing","map-icon-sledding","map-icon-snow-shoeing","map-icon-snow","map-icon-snowboarding","map-icon-snowmobile","map-icon-train-station","map-icon-subway-station","map-icon-bus-station","map-icon-transit-station","map-icon-parking","map-icon-gas-station","map-icon-car-rental","map-icon-car-dealer","map-icon-car-repair","map-icon-car-wash","map-icon-airport","map-icon-taxi-stand","map-icon-health","map-icon-dentist","map-icon-doctor","map-icon-hospital","map-icon-pharmacy","map-icon-physiotherapist","map-icon-veterinary-care","map-icon-bar","map-icon-amusement-park","map-icon-aquarium","map-icon-casino","map-icon-movie-theater","map-icon-night-club","map-icon-zoo","map-icon-bowling-alley","map-icon-storage","map-icon-electrician","map-icon-moving-company","map-icon-painter","map-icon-plumber","map-icon-roofing-contractor","map-icon-general-contractor","map-icon-locksmith","map-icon-insurance-agency","map-icon-lawyer","map-icon-real-estate-agency","map-icon-travel-agency","map-icon-accounting","map-icon-courthouse","map-icon-political","map-icon-local-government","map-icon-embassy","map-icon-city-hall","map-icon-fire-station","map-icon-police","map-icon-place-of-worship","map-icon-church","map-icon-mosque","map-icon-synagogue","map-icon-hindu-temple"]},_create:function(){var t=this._createModel(),n=[],r=this;this.hiddenSelect=e("input").tag({name:"icon[]",type:"hidden","class":"id-icon-select"});e.each(this.options.icons,function(i,s){var o=t.clone();o.append(e(r.options.tag).tag({"class":s}));n.push(o)});this.element.on("iconsselect",r._onSelect);this.element.append(this._setupIcons(n));this.options.debug&&console.log(this);return this},_setupIcons:function(t){var n=e("div").tag({"class":"uix-icon-container"}),r=e("div").tag({"class":"ui-icon-check"}).append(e("i").tag({"class":"fa fa-check"})),i=this;e.each(t,function(t,s){s.on("click",function(t){t.preventDefault();t.stopPropagation();if(e(this).parent().find(".icon-select")){e(this).parent().find(".icon-select").removeClass("icon-select");e(this).parent().find(".ui-icon-check").css("display","none")}e(this).children(".ui-icon-check").css("display","block");e(this).addClass("icon-select");i._trigger("select",t,{icon:e(i.options.tag,s).attr("class")})});s.append(r.clone());n.append(s)});n.append(this.hiddenSelect);return n},_onSelect:function(t,n){var r=e(t.originalEvent.currentTarget);e(this).find("input.id-icon-select").attr("value",n.icon);console.log(t);console.log(n)},_createModel:function(){return e(this.options.item).tag({"class":"js-uix-icon"})},_setOption:function(t,n){switch(t){case"clear":}e.Widget.prototype._setOption.apply(this,arguments);this._super("_setOption",t,n)},destroy:function(){e.Widget.prototype.destroy.call(this)}})})(jQuery);