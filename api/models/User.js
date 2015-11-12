/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	//User attributes
	attributes: {
		facebookId: 'string',
		accessToken: 'string',
		location: 'string',
		email: 'string',
		first_name: 'string',
		last_name: 'string',
		about: {
			interests: 'string',
			goals: 'strings'
		},

		// friends: {
  //    		type: 'array',
  //    		userId: 'string',
  //    		name: 'string',
  //    		profilePicture: 'string',
  //   		defaultsTo: []
  //  		 },
   		 // friendRequests: {
     	// 	type: 'array',
     	// 	userId: 'string',
     	// 	name: 'string',
     	// 	profilePicture: 'string',
    		// defaultsTo: []
   		 // },

		// posts: {
		// 	collection: 'posts',
		// 	via: 'owner'
		// },

 		picture: {
   		 	data: {
     	 		url: 'string'    }
 		 }
		// groups: {
		// 	collection: 'group'
		// }
	}
	
};

