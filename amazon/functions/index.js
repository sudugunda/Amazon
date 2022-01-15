const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IpqUCSHaeMQiHoV2dpWdeXfvg5uEWlcqpZpkrXIRNee8oG4cpHAOrN8HA6BwDzXOE4lqh6ikrjnbGynVnhdzsWp00lIBbPFTY')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
// app.get('/', (request, response) => response.status(200).send('hello shraddha'))

app.post('/payments/create', async  (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)


// Example end point
// http://localhost:5001/fir-800ef/us-central1/api