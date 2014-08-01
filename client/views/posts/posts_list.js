var postsData = [
	{
		title: "Introducing Telescope",
		author: "Sascha Greiff",
		url: "http://saschagreiff.com/introducing-telescope"
	},
	{
		title: "Meteor",
		author: "Tom Coleman",
		url:  "http://meteor.com"
	},
]

Template.postsList.helpers({
	posts: postsData
});