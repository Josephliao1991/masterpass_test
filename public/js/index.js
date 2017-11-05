$(function() {
    
    $sendButton.click(function() {
        
        // Invoke below javascript method
        masterpass.checkout({
            "checkoutId": "c26966b0eae94a3fbe47f994b94394b2",                                   // Merchant checkout identifier received during when merchant onboarded for masterpass
            "allowedCardTypes": ["master,amex,diners,discover,jcb,maestro,visa"],               // Card types accepted by merchant
            "amount": "789.53",                                                                 // Shopping cart subtotal
            "currency": "USD",                                                                  // Currency code for cart
            "shippingLocationProfile": "US,AU,BE",                                              // Shipping locations supported by merchant - configured in merchant portal
            "suppress3Ds": false,                                                               // Set true when 3DS not mandatory for the spcecific country
            "suppressShippingAddress": false,                                                   // Set true when cart items has digital goods only
            "cartId": "1efed583-1824-436a-869f-286ebdb22ae2",                                   // Unique identifier for cart generated by merchant
            "callbackUrl": "<merchant callback URL>"                                            // The URL to which the browser must redirect when checkout is complete
        });

    })


})