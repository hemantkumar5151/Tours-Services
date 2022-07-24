import axios from 'axios';
import { showAlert } from './alerts';
const baseUrl = 'http://localhost:5000';
const api = '/api/v1';

export const bookTour = async tourId => {
  const stripe = Stripe('pk_test_cahReNKvg46Mkrj75Mn8l26h00iETVckaO');

  try {
    const session = await axios(
      `${baseUrl}${api}/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('err', err);
  }
};
