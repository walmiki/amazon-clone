const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HQ7pqGQ5hQqpk0vXml8VibacKTO5g9Q2bKuqdLSkIg5bhIAWYC2ptgI1RyaSCxNiI83pySzJiYtXNVS7XkrHd9H00aRt5Q0a6"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
		description: "test payment",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);
