const { createComment, addReply } = require('../../controllers/CommentController');

const router = require('express').Router();


// /api/comments/<pizzaId>
router.route('/comments/:id').post(createComment);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/comments/:id/:cId')
  .put(addReply)


// // /api/comments/<pizzaId>/<commentId>/<replyId>
// router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;