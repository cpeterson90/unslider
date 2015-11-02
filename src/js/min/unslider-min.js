!function($){return $?($.Unslider=function(t,e){var n=this;return n.defaults={autoplay:!1,delay:3e3,keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="unslider-arrow prev">Previous slide</a>',next:'<a class="unslider-arrow next">Next slide</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:"unslider-active",lastActiveClass:"unslider-last-active",index:0},n.$context=t,n.options={},n.$parent=null,n.$container=null,n.$slides=null,n.$nav=null,n.$arrows=[],n.total=0,n.current=0,n.sliderID=~~(2e3*Math.random()),n.prefix="unslider-",n.eventSuffix="."+n.prefix+n.sliderID,n.interval=null,n.init=function(t){return n.options=$.extend(n.defaults,t),n.$container=n.$context.find(n.options.selectors.container).addClass(n.prefix+"wrap"),n.$slides=n.$container.children(n.options.selectors.slides),n.setup(),["nav","arrows","keys"].forEach(function(t){n.options[t]!==!1&&n["init"+n._ucfirst(t)]()}),void 0!==typeof jQuery.event.special.swipe&&n.initSwipe(),n.options.autoplay&&n.start(),n.$context.trigger("unslider.ready"),n.animate(n.options.index||n.current)},n.setup=function(){n.$context.addClass(n.prefix+"slider "+n.prefix+n.options.animation).wrap('<div class="unslider" />'),n.$parent=n.$context.parent(".unslider");var t=n.$context.css("position"),e=["relative","absolute"];$.inArray(t,e)<0&&n.$context.css("position",e[0]),n.$context.css("overflow","hidden"),n.calculateSlides()},n.calculateSlides=function(){n.total=n.$slides.length,"fade"!==n.options.animation&&(n.$container.css("width",100*n.total+"%").addClass(n.prefix+"carousel"),n.$slides.css("width",100/n.total+"%"))},n.start=function(){n.interval=setTimeout(function(){n.next(),n.start()},n.options.delay)},n.stop=function(){clearTimeout(n.interval)},n.initNav=function(){var t=$('<nav class="'+n.prefix+'nav"><ol /></nav>');n.$slides.each(function(e){var n="Slide "+(e+1);this.getAttribute("data-nav")&&(n=this.getAttribute("data-nav")),t.children("ol").append('<li data-slide="'+e+'">'+n+"</li>")}),n.$nav=t.insertAfter(n.$context),n.$nav.find("li").on("click"+n.eventSuffix,function(){var t=$(this).addClass(n.options.activeClass);t.siblings().removeClass(n.options.activeClass),n.animate(t.attr("data-slide"))})},n.initArrows=function(){n.options.arrows===!0&&(n.options.arrows=$.Unslider.defaults.arrows),$.each(n.options.arrows,function(t,e){n.$arrows.push($(e).insertAfter(n.$context).on("click"+n.eventSuffix,n[t]))})},n.initKeys=function(){n.options.keys===!0&&(n.options.keys=$.Unslider.defaults.keys),$(document).on("keyup"+n.eventSuffix,function(t){$.each(n.options.keys,function(e,i){t.which===i&&$.isFunction(n[e])&&n[e].call(n)})})},n.initSwipe=function(){var t=n.$slides.width();n.$container.on({swipeleft:n.next,swiperight:n.prev,movestart:function(t){return t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY?!!t.preventDefault():void n.$container.css("position","relative")}}),"fade"!==n.options.animation&&n.$container.on({move:function(e){n.$container.css("left",100*e.distX/t+"%")},moveend:function(t){n.$container.animate({left:0},200)}})},n.destroyArrows=function(){n.$arrows.forEach(function(t){t.remove()})},n.destroySwipe=function(){n.$container.off("movestart swipeleft move moveend").css("left",0)},n.destroyKeys=function(){$(document).off("keyup"+n.eventSuffix)},n.setIndex=function(t){return 0>t&&(t=n.total-1),n.current=Math.min(Math.max(0,t),n.total-1),n.options.nav&&n.$nav.find('[data-slide="'+n.current+'"]')._toggleActive(n.options.activeClass),n.$slides.eq(n.current)._toggleActive(n.options.activeClass),n},n.animate=function(t,e){"first"===t&&(t=0),"last"===t&&(t=n.total),n.setIndex(t),n.$context.trigger("unslider.change",[t,n.$slides.eq(t)]);var i="animate"+n._ucfirst(n.options.animation);return $.isFunction(n[i])&&n[i](n.current,e),n},n.next=function(){var t=n.current+1;return t>=n.total&&(t=0),n.animate(t,"next")},n.prev=function(){return n.animate(n.current-1,"prev")},n.animateHorizontal=function(t){if(n.options.animateHeight){var e=n.$slides.eq(t).height();n.$context.css("height",e)}return n.$container._transform("translateX(-"+100/n.total*t+"%)")},n.animateFade=function(t,e){var i=n.$slides.removeClass(n.options.lastActiveClass).eq(t),s=i.prev();s.length||(s=n.$slides.last()),s.addClass(n.options.lastActiveClass).removeClass(n.options.activeClass),i.removeClass(n.options.lastActiveClass).addClass(n.options.activeClass)},n._ucfirst=function(t){return t.toString().toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},n.init(e)},$.fn._toggleActive=function(t){return this.addClass(t).siblings().removeClass(t)},$.fn._transform=function(t){return this.css({webkitTransform:t,msTransform:t,transform:t})},void($.fn.unslider=function(t){return this.each(function(){var e=$(this);if("string"==typeof t&&e.data("unslider")){t=t.split(":");var n=t[0],i=e.data("unslider")[n];if(t[1]){var s=t[1].split(",");return $.isFunction(i)&&i.apply(e,s)}return $.isFunction(i)&&i()}return e.data("unslider",new $.Unslider(e,t))})})):alert("Unslider requires jQuery to function. Make sure you've included jQuery in the source code before Unslider.")}(window.jQuery||!1);