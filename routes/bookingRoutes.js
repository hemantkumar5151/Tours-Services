const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSessoion
);

router.use(authController.protect);

router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;

module.exports = router;
