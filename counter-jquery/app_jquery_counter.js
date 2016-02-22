jQuery(function ($) {
	'use strict';

	var App = {
		init: function () {
			this.count = 0;
			this.bindEvents();
			this.render();
		},
		bindEvents: function () {
			$('.CounterContainer')
				.on('click', 'a', this.anchorClick.bind(this));
		},
		render: function () {
			$(".CounterContainer .value").html(this.count);
		},
		anchorClick: function() {
			this.count++;
			this.render();
		}
	};

	App.init();
});