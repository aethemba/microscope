Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
	this.route('postsList', {path: '/'});

	this.route('postPage', {
		path: '/posts/:_id',
		data: function() {return Posts.findOne(this.params._id);}
	});

	// The order of the routes turns out to be important. The postEdit route must come 
	// before the postSubmit route
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		data: function() { return Posts.findOne(this.params_id);}
	});

	this.route('postSubmit', {
		path: '/submit'
	});


});

var requireLogin = function(pause) {
	if (! Meteor.user()) {

		if (Meteor.loggingIn())
		  this.render(this.loadingTemplate);
		else
		  this.render('accessDenied');

		pause();
	}
};

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(function() { Errors.clearSeen(); });

