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

## How do I ask the API for...
### The profile information for a specific user?
You can call a specific user:

    GET /users/:username

### The repository listing for a specific user?
To get the public repositories:

    GET /users/:username/repos

### The recent, public activity for a specific user?
To get public activity within the past 90 days:

    GET /events


### Is there a limit to the number of requests I can make?
Yes. 5,000 requests are allowed per hour, however, only 60 unauthenticated requests are allowed per hour.

### Is there a way of extending that limit?
Yes. You can extend the limit by providing the app's client ID and secret in the query string.

### What happens when I hit the limit?
You will get an error response.

### What if there is a lot of data returned?
An error could pop up if there is too much data and the request timesout.

### How can I ask for more (or less) data from a request?
Specify the information you are requesting.

### How do I know that there is more data available?
If the request does not return an error.


### What are the endpoints for fetching...
**the profile data for a user?**

    curl https://api.github.com/users/USERNAME

**the organizations a user belongs to?**

    GET /users/:username/orgs

**the repositories a user has created?**

Using the sort parameter:

    GET /users/:username/repos

**a filtered list of repositories?**

Using the type parameter

**a sorted list of repositories?**

Using the direction parameter.

**public events for a user?**

    GET /users/:username/received_events/public

### When fetching public events for a user...
How many results are returned by default?

* 300 total with a fixed page size of 30.

What limitations exist on fetching more results?

* You can only fetch results within the past 90 days.

What is the basic structure of the results?

* Brackets including the parameters and any information nexted within the parent.

What fields are included in each result?

* type, public, repo, actor, org, and create_at

What are the data types for each field?

* repo includes the id, the name and the url
* actor includes the id, login, gravatar, avatar url, and url
* org includes the id, login, gravatar, avatar url, and url

What are some of the different values for the type field?

* object or string
