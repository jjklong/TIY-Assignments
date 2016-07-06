# How do I make API requests?

## What is the base URL for all requests?

  In order to access the Etsy API, you need to register your app and obtain a unique API Key.

  For all requests, the base URL begins with the following:

  		  https://openapi.etsy.com/v2  


## Are there any headers or query parameters required?

Parameters are sent to determine the specific use so it is required to send the user_id after /users/
Once you have an API Key, you can insert it after a question mark (?) identifying that the api-key is to follow:


		https://openapi.etsy.com/v2/users/:user_id/?api_key=YOUR_API_KEY


## What kind of response should I expect?


The response contains an array with the userid, login name, and other feedback information.

# How does the API handle authentication?

A request can be made without an Oauth Authentication, but only for public endpoints. If you need to access private endpoints, Oauth Authentication is required. With this request, a request token  is sent with temporary credentials. After the token is approved, it is linked to the member's account and the app trades for an access token with permanent credentials.

The headers also contain rate limits for how many API calls have been made and how many are remaining.

Every resource and collection has an unique listing ID. This follows the URI /listings/:listing_id

## Do I need to authenticate? with user credentials?
## What can I do with an unauthenticated request?
## How can I authenticate my request? (what methods)

# What Resource in the API represents...
## an individual product?

To see if an item is in stock or sold out

    'Listing' is the endpoint

## a group or collection of products?

Each group or collection of products is associated with a

    shop_id    OR    shop_name

endpoint to view the listings

## images associated with a product?

Each image associated with a product can be displayed in the listings view to show all images for each product

    Image

For an individual image on a particular product, use

    MainImage


## sizes and colors for a product?

Sizes and colors for a product are handled with Variations to allow different properties to be accessed.

### What actions and endpoints exist for each of these Resources?

To get variations for a product, after the listing item and id, include:

    /variations


### What parameters do each endpoint require or accept?

**Variations_Property** is the key to a specific property, which is followed by the **Variations_Option** as the value.

### What fields are returned for each Resource, specifically:

    The variations can be set with an array of objects. Within each object, the property ID is provided.

## an individual product?

* property_id
* formatted_name
* options

## a group or collection of products?

* value_id
* value
* formatted_value

## What additional fields can be requested for each?

* sizing_scale
* weight_scale
* height_scale
* width_scale
* diameter_scale
* dimensions_scale
