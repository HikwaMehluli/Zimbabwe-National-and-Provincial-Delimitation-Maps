import './popper.min.js';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import svgPanZoom from './svg-pan-zoom.min.js'

// 
// TippyJS, Tooltip Options - https://atomiks.github.io/tippyjs/v6/customization
// 
tippy('[data-tippy-content]', {
	arrow: true,
	delay: [100, 100],
	followCursor: true,
});

//
// SVG Pan Zoom - https://github.com/bumbu/svg-pan-zoom#how-to-use
//
const panZoom = svgPanZoom('.svg', {
	viewportSelector: '.svg-pan-zoom_viewport',
	panEnabled: true,
	controlIconsEnabled: false,
	zoomEnabled: true,
	dblClickZoomEnabled: false,
	mouseWheelZoomEnabled: true,
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
	// customEventsHandler: {},
	// eventsListenerElement: null
});

// Custom Zoom in/out and Reset Functions
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