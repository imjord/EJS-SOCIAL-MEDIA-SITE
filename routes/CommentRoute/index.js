const { ensureAuthenticated } = require('../../config/auth');
const { createComment, addReply } = require('../../controllers/CommentController');

const router = require('express').Router();



router.route('/comments/:id', ensureAuthenticated).post(createComment);


router
  .route('/comments/:id/:cId')
  .put(addReply)



module.exports = router;