### How does the API handle authentication?
The authentication helps secure private information. When a request needs login credentials, the API ensures the proper name and password match the users profile. If the input sends too many invalid requests, the API doesn't accept anymore.  

### Do I need to authenticate?
Yes. I will need to register their application before I can start. The documentation steps are in the OAuth section.

### What can I do with an unauthenticated request?
Not allow access to information after a number of attempts.

### How can I authenticate my request? (3 ways)
* Basic Authentication
* OAuth2 Token (sent in a header)
* OAuth2 Token (sent as a parameter)

### How do I ask the API for...
### The profile information for a specific user?
### The repository listing for a specific user?
### The recent, public activity for a specific user?

### Is there a limit to the number of requests I can make?
Yes. 5,000 requests are allowed per hour, however, only 60 unauthenticated requests are allowed per hour.

### Is there a way of extending that limit?
Yes. You can extend the limit by providing the app's client ID and secret in the query string.

### What happens when I hit the limit?
You will get an error response.

### What if there is a lot of data returned?

### How can I ask for more (or less) data from a request?
### How do I know that there is more data available?
### What are the endpoints for fetching...
* the profile data for a user?
* the organizations a user belongs to?
* the repositories a user has created?
* a filtered list of repositories?
* a sorted list of repositories?
* public events for a user?

### When fetching public events for a user...
How many results are returned by default?
What limitations exist on fetching more results?
What is the basic structure of the results?
What fields are included in each result?
What are the data types for each field?
What are some of the different values for the type field?
