ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}

canDeletePost = function(user, post){
	if (!ownsDocument(user._id, post)) {
		return false;
    }
	return true;
}