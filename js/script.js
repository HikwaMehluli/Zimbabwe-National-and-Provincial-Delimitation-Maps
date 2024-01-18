// 
// TippyJS, Tooltip Options - https://atomiks.github.io/tippyjs/v6/customization/
// 
tippy('[data-tippy-content]', {
	arrow: true,
	delay: [100, 100],
	followCursor: true
});



// 
// SVG Pan Zoom
// 
// TODO: Make SVG Clickable, https://www.freecodecamp.org/news/how-to-make-clickable-svg-map-html-css/

var panZoom = svgPanZoom('.svg', {
	viewportSelector: '.svg-pan-zoom_viewport',
	panEnabled: true,
	controlIconsEnabled: false,
	zoomEnabled: true,
	dblClickZoomEnabled: false,
	mouseWheelZoomEnabled: false,
	preventMouseEventsDefault: true,
	zoomScaleSensitivity: 0.2,
	minZoom: 0.5,
	maxZoom: 10,
	fit: true,
	contain: true,
	center: true,
	refreshRate: 'auto',

	// beforeZoom: function(){},
	// onZoom: function(){},
	// beforePan: function(){},
	// onPan: function(){},
	// onUpdatedCTM: function(){},

	// customEventsHandler: {
	// 	// Halt all touch events
	// 	haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],

	// 	// Init custom events handler
	// 	init: function(options) {
	// 	  // Init Hammer
	// 	  this.hammer = Hammer(options.svgElement)
	
	// 	  // Handle double tap
	// 	  this.hammer.on('doubletap', function(ev){
	// 		options.instance.zoomIn()
	// 	  })
	// 	},
	
	// 	// Destroy custom events handler
	// 	destroy: function(){
	// 	  this.hammer.destroy()
	// 	}
	// },

	// eventsListenerElement: null
});

document.getElementById('zoom-in').addEventListener('click', function (ev) {
	ev.preventDefault()
	panZoom.zoomIn()
});

document.getElementById('zoom-out').addEventListener('click', function (ev) {
	ev.preventDefault()
	panZoom.zoomOut()
});

document.getElementById('reset').addEventListener('click', function (ev) {
	ev.preventDefault()
	panZoom.resetZoom()
});