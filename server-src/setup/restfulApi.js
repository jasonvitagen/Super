import restfulApi from '../modules/restfulApi';
import braintree from 'braintree';

const
	gateway = braintree.connect({
		environment : braintree.Environment.Sandbox,
		merchantId : 'qkmkjp7j4nd8nvrn',
		publicKey : 'pcynh4hxk84cn9sm',
		privateKey : '2e2fd4a7494ad5827b90c84ea0510ba4'
	});

restfulApi.use('root', 'GET', (resourceName, req, res, done) => {
	gateway.clientToken.generate({
		customerId : 'jasonvitagen'
	}, (err, response) => {
		res.render('index', { initialData : JSON.stringify({
			clientToken : response.clientToken,
		})});
		done();
	});
});

restfulApi.use('root', 'POST', (resourceName, req, res, done) => {
	const {payment_method_nonce} = req.body;

	gateway.subscription.create({
		paymentMethodNonce : payment_method_nonce,
		planId : 'Super1'
	}, (err, result) => {
		if (err) {
			return done(err);
		}
		res.send(result);
		done();
	});
});
