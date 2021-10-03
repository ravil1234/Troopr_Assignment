'use strict';

module.exports = function(app) {
  const userController = require('../controllers/userController');
  app
    .route('/api/v1/user')
    .get(userController.list_all_users)
    .post(userController.create_a_user);

  app
    .route('/api/v1/user/:userId')
    .get(userController.get_a_user)
    .put(userController.update_a_user)
    .delete(userController.delete_a_user);
};
