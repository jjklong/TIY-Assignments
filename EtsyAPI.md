In order to access the Etsy API, you need to register your app and obtain a unique API Key.

For all requests, the base URL begins with the following:

		  https://openapi.etsy.com/v2  

Parameters are sent to determine the specific use so it is required to send the user_id after /users/

Once you have an API Key, you can insert it after a question mark (?) identifying that the api-key is to follow:


		https://openapi.etsy.com/v2/users/:user_id/?api_key=YOUR_API_KEY

The response contains an array with the userid, login name, and other feedback information.

A request can be made without an Oauth Authentication, but only for public endpoints. If you need to access private endpoints, Oauth Authentication is required. With this request, a request token  is sent with temporary credentials. After the token is approved, it is linked to the member's account and the app trades for an access token with permanent credentials.

The headers also contain rate limits for how many API calls have been made and how many are remaining.

Every resource and collection has an unique listing ID. This follows the URI /listings/:listing_id



---
What Resource in the API represents...
	an individual product?

    LISTING - active, sold out

a group or collection of products?

    SHOP_ID or SHOP_NAME

images associated with a product?

      MainImage shows an individual image

      Image shows the listing

sizes and colors for a product?
What actions and endpoints exist for each of these Resources?

* Variations allow product sizes and colors to be access. The Variations_Property is the key to a specific property, which is followed by the Variations_Option as the value.

* To get variations for a product, you just add /variations after the listing item and id.

* The variations can be set with an array of objects. Within each object, the property id is provided

What parameters do each endpoint require or accept?

 What fields are returned for each Resource, specifically:

	○ an individual product?

	○ a group or collection of products?

What additional fields can be requested for each?
