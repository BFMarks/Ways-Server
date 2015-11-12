 /**
* Posts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		description: 'string',
  		target_date: 'date',
  		target_location: 'string'
  		// privacy: 'string',
      // timeStamp: 'date',
  		// authorId: {
  		// 	type: 'string',
  		// 	required: 'true'
  		// },
  		// owner: {
  		// 	model: 'user'
  		// },
      // comments: { 
      //   type: 'array',
      //   userId: 'string',
      //   username: 'string',
      //   first_name: 'string',
      //   last_name: 'string',
      //   message: 'string',
      //   timeStamp: 'date',
      //   defaultsTo: []
      // }
    }
};

