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
 */
;(function($, undefined){
	$.widget( "uix.icons", {
        widgetEventPrefix: 'on.event.',
        options: { 
        	'version': '0.0.3',
        	'debug': true,
        	'tag': 'i',
            'item': 'div',
            'selected': null,
            'colored': null,
        	'icons': [
        	'map-icon-art-gallery',
        	'map-icon-campground',   
        	'map-icon-bank',  
        	'map-icon-hair-care',   
        	'map-icon-gym',  
        	'map-icon-point-of-interest',   
        	'map-icon-post-box',   
        	'map-icon-post-office',   
        	'map-icon-university',   
        	'map-icon-beauty-salon',   
        	'map-icon-atm',   
        	'map-icon-rv-park',   
        	'map-icon-school',   
        	'map-icon-library',   
        	'map-icon-spa',
        	'map-icon-route',   
        	'map-icon-postal-code',   
        	'map-icon-stadium',   
        	'map-icon-postal-code-prefix',   
        	'map-icon-museum',   
        	'map-icon-finance',   
        	'map-icon-natural-feature',   
        	'map-icon-funeral-home',   
        	'map-icon-cemetery',   
        	'map-icon-park',   
        	'map-icon-lodging',
        	'map-icon-female',   
        	'map-icon-male',   
        	'map-icon-unisex',   
        	'map-icon-toilet',
        	'map-icon-bakery',   
        	'map-icon-cafe',   
        	'map-icon-restaurant',   
        	'map-icon-food',
        	'map-icon-liquor-store',   
        	'map-icon-bicycle-store',   
        	'map-icon-pet-store',   
        	'map-icon-hardware-store',   
        	'map-icon-book-store',   
        	'map-icon-furniture-store',   
        	'map-icon-department-store',   
        	'map-icon-electronics-store',   
        	'map-icon-jewelry-store',   
        	'map-icon-clothing-store',   
        	'map-icon-convenience-store',   
        	'map-icon-store',   
        	'map-icon-shopping-mall',   
        	'map-icon-movie-rental',   
        	'map-icon-grocery-or-supermarket',   
        	'map-icon-florist',   
        	'map-icon-laundry',
        	'map-icon-abseiling',   
        	'map-icon-archery',   
        	'map-icon-baseball',   
        	'map-icon-bicycling',   
        	'map-icon-climbing',   
        	'map-icon-golf',   
        	'map-icon-hang-gliding',   
        	'map-icon-horse-riding',   
        	'map-icon-inline-skating',   
        	'map-icon-motobike-trail',   
        	'map-icon-playground',   
        	'map-icon-skateboarding',   
        	'map-icon-tennis',   
        	'map-icon-trail-walking',   
        	'map-icon-viewing',   
        	'map-icon-walking',
        	'map-icon-boating',   
        	'map-icon-boat-ramp',   
        	'map-icon-boat-tour',   
        	'map-icon-canoe',   
        	'map-icon-diving',   
        	'map-icon-fishing',   
        	'map-icon-fishing-pier',   
        	'map-icon-fish-cleaning',   
        	'map-icon-jet-skiing',   
        	'map-icon-kayaking',   
        	'map-icon-marina',   
        	'map-icon-rafting',   
        	'map-icon-sailing',   
        	'map-icon-scuba-diving',   
        	'map-icon-surfing',   
        	'map-icon-swimming',   
        	'map-icon-waterskiing',   
        	'map-icon-whale-watching',   
        	'map-icon-wind-surfing',
        	'map-icon-chairlift',   
        	'map-icon-cross-country-skiing',   
        	'map-icon-ice-fishing',   
        	'map-icon-ice-skating',   
        	'map-icon-ski-jumping',   
        	'map-icon-skiing',   
        	'map-icon-sledding',   
        	'map-icon-snow-shoeing',   
        	'map-icon-snow',   
        	'map-icon-snowboarding',   
        	'map-icon-snowmobile',
        	'map-icon-train-station',   
        	'map-icon-subway-station',   
        	'map-icon-bus-station',   
        	'map-icon-transit-station',   
        	'map-icon-parking',   
        	'map-icon-gas-station',   
        	'map-icon-car-rental',   
        	'map-icon-car-dealer',   
        	'map-icon-car-repair',   
        	'map-icon-car-wash',   
        	'map-icon-airport',   
        	'map-icon-taxi-stand',
        	'map-icon-health',   
        	'map-icon-dentist',   
        	'map-icon-doctor',   
        	'map-icon-hospital',   
        	'map-icon-pharmacy',   
        	'map-icon-physiotherapist',   
        	'map-icon-veterinary-care',
        	'map-icon-bar',   
        	'map-icon-amusement-park',   
        	'map-icon-aquarium',   
        	'map-icon-casino',   
        	'map-icon-movie-theater',   
        	'map-icon-night-club',   
        	'map-icon-zoo',   
        	'map-icon-bowling-alley',
        	'map-icon-storage',   
        	'map-icon-electrician',   
        	'map-icon-moving-company',   
        	'map-icon-painter',   
        	'map-icon-plumber',   
        	'map-icon-roofing-contractor',   
        	'map-icon-general-contractor',   
        	'map-icon-locksmith',
        	'map-icon-insurance-agency',   
        	'map-icon-lawyer',   
        	'map-icon-real-estate-agency',   
        	'map-icon-travel-agency',   
        	'map-icon-accounting',
        	'map-icon-courthouse',  
        	'map-icon-political',   
        	'map-icon-local-government',   
        	'map-icon-embassy',   
        	'map-icon-city-hall',   
        	'map-icon-fire-station',   
        	'map-icon-police',
        	'map-icon-place-of-worship',   
        	'map-icon-church',   
        	'map-icon-mosque',   
        	'map-icon-synagogue',   
        	'map-icon-hindu-temple'
        	]
        },
        _create: function() {
            this._setAttributes();

        	var model = this._createModel(),
                containerIcons = null,
                hiddenIcon = $('input').tag({'name':'icon[]','type':'hidden','class':'id-icon-select'}),
                hiddenColor = $('input').tag({'name':'color[]','type':'hidden','class':'id-color-select'}),
        		map = [],
        		self = this;

        	$.each(this.options.icons, function(index, value){
        		var icon = model.clone();
        		
        		icon.append($(self.options.tag).tag({'class':value}));

        		map.push(icon);
        	});

        	this.element.on('on.event.check', self._onIconSelect);
            this.element.on('on.event.select', self._onColorSelect);

            containerIcons = this._setupIcons(map);

            if(this.options.selected){
                hiddenIcon.attr('value', this.options.selected);
            }

            if(this.options.colored){
                hiddenColor.attr('value', this.options.colored);
            }

            containerIcons.append(hiddenIcon).append(hiddenColor).append($('div').tag({'class':'clearfix'}));

        	this.element.append(containerIcons);

        	if(this.options.debug){
    			console.log(this);	
            }

    		return this;
        },
        _setAttributes: function(){
            if(this.element.data('iconItem')){
                this._setOption('item', this.element.data('iconItem'));
            }

            if(this.element.data('iconTag')){
                this._setOption('tag', this.element.data('iconTag'));
            }

            if(this.element.data('iconSelected')){
                this._setOption('selected', this.element.data('iconSelected'));
            }

            if(this.element.data('iconColor')){
                this._setOption('colored', this.element.data('iconColor'));
            }
        },
        _setupIcons: function(map){
        	var container = $('div').tag({'class':'uix-icon-container'}),
        		itemSelect = $('div').tag({'class':'ui-icon-check'}).append($('i').tag({'class':'fa fa-check'})),
                colorSelect = $('div').tag({'class':'js-ui-color'}),
        		self = this;

        	$.each(map, function(index, icon){
                var color = colorSelect.clone();

                icon.append(itemSelect.clone());

                color.on('click', function(evt){
                    evt.preventDefault();
                    evt.stopPropagation();

                    var that = $(this);

                    $(this).ColorPicker({
                        'flat': false,
                        onShow: function (el) {
                            if(that.attr('color')){
                                that.css('backgroundColor',that.attr('color'));
                                that.ColorPickerSetColor(that.attr('color')); 
                            }

                            that.css({'display':'block'});
                        },
                        onHide: function(el){
                            that.css({'display':''});
                        },
                        onChange: function(hsb, hex, rgb){
                            that.css('backgroundColor','#'+hex);
                        },
                        onSubmit: function(hsb, hex, rgb){
                            that.css({'backgroundColor':'#'+hex, 'display': ''});
                            that.attr('color','#'+hex);
                            that.ColorPickerHide();

                            self.options.color = '#'+hex;
                            self._trigger('select', evt, {'color': '#'+hex, 'trigger': this});
                        }
                    });

                    $(this).ColorPickerShow();
                });

        		icon.on('click', function(evt){
        			evt.preventDefault();
        			evt.stopPropagation();

        			if($(this).parent().find('.icon-select')){
        				$(this).parent().find('.icon-select').removeClass('icon-select').children('.ui-icon-check').css('display','none');
        			}

        			$(this).children('.ui-icon-check').css('display','block');
        			$(this).addClass('icon-select');

                    self.options.selected = $(self.options.tag, icon).attr('class');
        			self._trigger('check', evt, {'icon': self.options.selected});
        		});

        		icon.append(color);

                if(self.options.selected && self.options.selected.localeCompare($(self.options.tag, icon).attr('class')) == 0){
                    icon.addClass('icon-select');
                    icon.children('.ui-icon-check').css('display','block');

                    if(self.options.colored){
                        icon.css('color',self.options.colored);
                        color.css('backgroundColor', self.options.colored).attr('color',self.options.colored);
                    }
                }

        		container.append(icon);
        	});

        	return container;
        },
        _onIconSelect: function(evt, args){
        	$(this).find('input.id-icon-select').attr('value',args.icon);
        },
        _onColorSelect: function(evt, args){
            $(args.trigger.el).parent().css('color',args.color);
            $(this).find('input.id-color-select').attr('value',args.color);
        },
        _createModel: function(){
        	return $(this.options.item).tag({'class':'js-uix-icon'});
        },
        _setOption: function( key, value ) {
          switch( key ) {
            case "tag":
                this.options.tag = this._setTag(value);
            break;
            case "selected":
                this.options.selected = this._setIconSelected(value);
            break;
            case "colored":
                this.options.colored = this._setIconColor(value);
            break;
            case "item":
                this.options.item = this._setItem(value);
            break;
          }

          $.Widget.prototype._setOption.apply( this, arguments );

          this._super( "_setOption", key, value );
        },
        _setTag: function(arg){
            if(typeof arg == "string"){
                return tag;
            } else {
                return 'i';
            }
        },
        _setIconSelected: function(arg){
            if(in_array(arg, this.options.icons)){
                return arg;
            } else {
                return null;
            }
        },
        _setIconColor: function(arg){
            if(strpos(arg, "#") !== false){
                return arg;
            } else {
                return null
            }
        },
        _setItem: function(arg){
            if(typeof arg == "string"){
                return arg;
            } else {
                return 'div';
            }
        },
        destroy: function() {
          $.Widget.prototype.destroy.call( this );
        }
    });
})(jQuery);