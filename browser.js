const
	{clientToken, customerId} = JSON.parse(document.getElementById('initial-data').textContent.trim());

braintree.setup(clientToken, 'dropin', {
	container : 'payment-form'
});
	
