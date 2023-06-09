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
// https://github.com/ariutta/svg-pan-zoom
//
svgPanZoom('.svg', {
	viewportSelector: '.svg-pan-zoom_viewport',
	panEnabled: true,
	controlIconsEnabled: true,
	zoomEnabled: true,
	dblClickZoomEnabled: false,
	mouseWheelZoomEnabled: true,
	preventMouseEventsDefault: true,
	zoomScaleSensitivity: 0.2,
	minZoom: 0.5,
	maxZoom: 10,
	fit: true,
	contain: false,
	center: true,
	refreshRate: 'auto',

	// beforeZoom: function(){},
	// onZoom: function(){},
	// beforePan: function(){},
	// onPan: function(){
	// 	console.log('I am Panning')
	// },
	// onUpdatedCTM: function(){
	// 	document.getElementById("link").addEventListener('click', function(e){
	// 		e.preventDefault()
	// 		console.log('I was Clicked!', e);
	// 	});
	// },
	// customEventsHandler: {},
	// eventsListenerElement: null
});