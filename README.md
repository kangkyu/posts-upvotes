There are two branches to use, one is to explore es6, you should run `npm install` for that branch, the other one is to use Angular with bower and sprockets, which you should run `bower install` for.

#### GET '/posts'

```
curl -X GET "http://localhost:3000/posts"
# => [{"id":1,"title":"It's a College Basketball Vacation","votes":9},{"id":2,"title":"A Short History of Brokered Conventions","votes":1},{"id":3,"title":"The Other Works of George Martin","votes":12},{"id":4,"title":"Food Origins","votes":21},{"id":6,"title":"Sports and Measures","votes":3},{"id":7,"title":"The Epic Story of Dropbox's Exodus from the Amazon Cloud Empire","votes":5}]
```

#### POST '/posts'

```
curl -X POST -H "Content-Type: application/json" -d "{\"post\":{\"title\":\"The Epic Story of Dropbox's Exodus from the Amazon Cloud Empire\",\"votes\":5}}" http://localhost:3000/posts
# => {"id":7,"title":"The Epic Story of Dropbox's Exodus from the Amazon Cloud Empire","votes":5}
```

#### PUT '/posts/:id/upvote'

```
curl -X PUT -H "Content-Type: application/json" -d "" http://localhost:3000/posts/7/upvote
# => {"id":7,"title":"The Epic Story of Dropbox's Exodus from the Amazon Cloud Empire","votes":6}
```

#### CSRF exception

For API, add authentication!
```
Can't verify CSRF token authenticity
Completed 422 Unprocessable Entity in 1ms (ActiveRecord: 0.0ms)
```
