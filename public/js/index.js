$(function() {
    
    var $sendButton = $('#sendButton')

    $sendButton.click(function() {
        
        // Invoke below javascript method
        /*
        masterpass.checkout({
            "checkoutId": "ce2062f5c2594b7c9997a401064501a1",                                   // Merchant checkout identifier received during when merchant onboarded for masterpass
            "allowedCardTypes": ["master"],               // Card types accepted by merchant
            "amount": "1",                                                                 // Shopping cart subtotal
            "currency": "TWD",                                                                  // Currency code for cart
            //"shippingLocationProfile": "US,AU,BE",                                              // Shipping locations supported by merchant - configured in merchant portal
            "suppress3Ds": false,                                                               // Set true when 3DS not mandatory for the spcecific country
            "suppressShippingAddress": false,                                                   // Set true when cart items has digital goods only
            "cartId": "1efed583-1824-436a-869f-286ebdb22ae3",                                   // Unique identifier for cart generated by merchant
            "callbackUrl": "https://masterpass-test.herokuapp.com/callback",                                            // The URL to which the browser must redirect when checkout is complete
            "requestPairing": true,                                                 // Set true to request pairing consent from consumer
            "userId": "gn02239440"                                                         // The unique consumer user identifier from the Me
        });
        */
        masterpass.pair({
            "checkoutId": "ce2062f5c2594b7c9997a401064501a1",                                   // Merchant checkout identifier received during when merchant onboarded for masterpass
            "userId": "gn02239440"                                                         // The unique consumer user identifier from the Me
        });


    })

})