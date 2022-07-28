---
title: 'Http-Only Cookies Authentication with Next.js'
date: 'May 5, 2021'
excerpt: 'A JSON Web Token (JWT) is really just a way to transmit information between two parties. One party might be your frontend React application and another party might be your API.'
cover_image: '/https.png'
category: 'JavaScript, Nextjs'
author: 'Caleb Benjamin'
author_image: '/profileImage.jpg'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->

##Summary.
Greeting! folks, If you don't want to save your JWT-token in the client side then I believe that's why you're here, So welcome. In this article am going to show you how to handle authentication, JWT & HttpOnly Cookies with Next.js. This example will go with any API endpoints you are using. 
In order to follow along with the project, I create a starter project where all the styling is done so we can just focus on handling all the required Authentications in our application. You can grab it here [Starter files](https://github.com/calebbenjin/starter-jwtauth-nextjs)  



### What We're Going To Cover
* What Is JWT?
* JSON Web Token Dos and Don't
* Our JWT Strategy Explained
* Cloning And Setting Up Our Project
* Setting Up AuthContext
* Login And Get JWT
* Store JWT In Server HttpOnly Cookie
* Persist Logged in User
* Logout And Destroy Cookie
* Register User


#### What Is JWT?
A JSON Web Token (JWT) is really just a way to transmit information between two parties. One party might be your frontend React application and another party might be your API. The real value of JSON Web Tokens is they include a security feature. That is you can be sure that the information that was transmitted in the token wasn't tampered with along the way.

#### JSON Web Token Dos And Don't
I wanted to outline some do's and don'ts. Let's start with the don'ts.
* The first don't that I've got is don't store your tokens in Local Storage. The reason that it's risky to keep them in local storage is that local storage is easily scriptable.
* The next don't that I've got is don't keep these secret keys that go into signing your tokens in the browser. The only place that you should be keeping your secret keys is on your backend, because browsers are public clients. Any time a user loads up a website or an application, they get all of the code that goes into powering that application.

##### Now for the Do's,
Do keep long, strong, unguessable secrets. Keep something that is super long, strong, and unguessable.

#### Our JWT Strategy Explained
Now what we are going to do in our application is create an API routes within Nextjs which run on the server-side. We are going to have routes that we can hit, then from there we will make our request to the API Endpoint, get the token and then we will set the cookie on the server-side, what's called the Http-Only Cookie, that means it can't be accessed via the browser (local Storage) so that's a saver way to go. So let's dive into code and start to create our API routes.

#### Cloning And Setting Up Our Project
So like l said I have already created a starter files so Jump right in and clone it.

```
https://github.com/calebbenjin/starter-jwtauth-nextjs
```
After cloning the app, open it in your VScode and press `crtl+J` your terminal will open then type `yarn add or npm install` to install all necessary dependences. After that type `npm run dev or yarn run dev`: ![Your app will look this](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/spbjd2y473sx5ucapqua.png)

#### Setting Up AuthContext
Now we want to create our context, we are going to use the Context-API, where we can store all our Authentication methods, our users and also any errors that comes from authentication.
So we are going to create a new folder in the `root` called `context` then inside the context we're going to create a file called `AuthContext.js`. 

![your application should look like this](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xhytgrcssktd0p78ksbn.png)

So We want to basically create a context using `createContext` from react. So now go inside your `AuthContext` file and fill it with this code snippet below.

```javascript
import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import {NEXT_URL} from '../config/index'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  // Register user
  const register = async ({ fullname, email, password }) => {
    setIsLoading(true)
    console.log(fullname, email, password)
  }

  // Login user
const login = async ({email, password}) => {
  setIsLoading(true)
  console.log(email, password)
}

  // Logout user
  const logout = () => {
    console.log("User Logged out")
  }

  // Check if user id Logged in
  const checkedUserLoggedIn = async (user) => {
    console.log('Checked')
  }

  return (
    <AuthContext.Provider value={{ register, login, logout, isLoading, user, error}}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext
```

Now let me explain the code above. We imported some necessary hooks from react like `{ useState, useEffect, createContext }` and also `{useRouter}` from `next/router`, Next we imported our `{API_URL}` this will be your API endpoint URL of choice. Next we create a context by creating a variable called `AuthContext` and set it to `createContext`.
Next we created a provider that needs to wrap around our application so we can provides certain functions to our application and whatever component needed. Next we created some state `[user, setUser]` and `[error, setError]` and we set the default to null. Next we created some methods like `register, login, logout, checkUserLoggedIn` which we will use to hit our backend routes. Then as you can see we are exposing all the methods created so it can be accessible all over the application. So let's do that by going into our `_app.js` file in the pages folder and bring in our `AuthProvider` as you can see below.

```javascript
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {AuthProvider} from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
```

### Login & Get JWT
So in this section we are going to setup our login functionality and get the JWT token, we're not going to store it just yet but what we want to do is to create an `api-route` to connect to and in that `api-route` is were we are going to communicate with our backend-endpoint, we are going to send our request from there get the token and then our next step is to save the Http-Only Cookie. So let's dive right in by getting into our api folder and create a new file called `login.js` ![api-route folder](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m13egb7eauy9gb6p7rls.jpg)
Now copy the code below and paste in the `login.js` file you have created, I will explain things in details below.

```javascript
import { API_URL} from '../config/index'

export default async (req, res) => {
  if(req.method === 'POST') {

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}
```
First we import our `API_URL` this can be your `api url of choice`
Next we create an `async` function and pass in our `(req res)`
Next we want to make sure if is the `req.method` is equal to `POST`, else we want to `res.setHeader('Allow', ['POST']` and set the status `res.status(405)` which is method not allowed and send a `.json({message: `Method ${req.method} not allowed`})`.
Next after making sure is a post request we want to get the email, and password from the `req.body` so we do that by destructuring the email and password from `req.body`. 
Now in this our `api route` this were we want to login our user with actual `backend api-endpoint` or l should say fetch our token. Now go ahead and paste the code below inside of your code.

```javascript
   // destructure email, and password
    const { email, password } = req.body

    // Making a post request to hit our backend api-endpoint
    const apiRes = await fetch(`${API_URL}/your url of choice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await apiRes.json()

    if(apiRes.ok) {
      // @todo - Set Cookie

      res.status(200).json({user: data.user})
    } else {
      res.status(data.statusCode).json({message: data.message})
    }
```

So if you're following correctly your code show look like this below.

```javascript
import { API_URL} from '../config/index'

export default async (req, res) => {
  if(req.method === 'POST') {
    const { email, password } = req.body

    const apiRes = await fetch(`${API_URL}/your url of choice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await apiRes.json()

    console.log(data.jwt)

    if(apiRes.ok) {
      res.status(200).json({user: data.user})
    } else {
      res.status(data.statusCode).json({message: data.message})
    }

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}

```

So what we have done so far, which is creating this `api-endpoint` inside our Nextjs app, is like a middle man between our frontend and the backend-api, and then we are doing this so we can set `Http-Only Cookie` with token. 
You can `console.log(data.jwt)` to see it.
Next let's head over to `AuthContext` and go to the `login` method we create so we can make a request to our `api/login` api-endpoint we have created. So paste these code inside of the `login` function.

```javascript
const res = await fetch(`${NEXT_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const data = await res.json()

  if(res.ok) {
    setUser(data.user)
    router.push('/dashboard')
  } else {
    setError(data.message)
    setError(null)
  }
```
Now we are fetching the data from the api route we create in `api/login`. After that we check if the request is okay then we setUser(data.user) and make a redirect to our dashboard using `next/router`, But if is not `Ok` then we want to setError(data.message) and also setError(null) so the error will not remain in our state.
Next let's head on to our login page and bring in our login method from `AuthProvider`, so now update your login page with these code

```javascript

import AuthContext from '../context/AuthContext'

  const { login, error, user, isLoading } = useContext(AuthContext)

  const handleLoginSubmit = async ({ email, password }) => {
    login({email, password})
  }

``` 
We are importing our AuthContext, then we destructure out `login, error, user, isLoading` from it. Then in our handleLoginSubmit function we then call in the `login({email, password})` and then pass in `email, and password`.
Now at this point our app should be working very fine, next we are going to go head and store our jwt in the server httpOnly Cookie. Let's dive in.

### Store JWT In Server HttpOnly Cookie
Now what we want to do is set the Cookies, there's quite a few ways to do this, but we are going to use a package called `cookie` that let's us easily set cookie on the server-side, if you check in our `package.json` file you will see that l have install it already, or you can install it @ `yard add cookie` or `npm install cookie` if you are not using the start file.
Next we going to bring in our `api/login.js` file 

```javascript
import cookie from 'cookie'
```
So go down the code where we have our `@todo Set Cookie` comment and add these code there.

```javascript
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', String(apiRes.data.token), {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'strict',
      path: '/'
    })
 )
```
Now as you can see we are setting res.setHeader that's coming with `'Set-Cookie'` and a second parameter of `cookie.serialize()` then we set the name of the cookie to be `cookie.serialize('token')` and the value is going to be `cookie.serialize('token', String(apiRes.data.token)` and we also have an object option which is the `httpOnly: true` and `secure` since is going to be https and we want that to be `true` on `production` not `development` then we are going to set it to `process.env.NODE_ENV !== 'development',` and also check the node environment and see if that's not equal to `development` if is equal to `development` then is going to be false, if is in `production` is going to be true. Then we do `maxAge` is set to a week `maxAge: 60 * 60 * 24 * 7, // 1 week`. then we set `sameSite` to strict and `path` is set to '/' because we want it to be accessible everywhere. So this will set the cookie on the server-side once we login our app.

### Persist Logged in User
Now we are going to persist the user and that is going to happen with the `checkUserLoggedIn` function we created in our `AuthContext`. Now this `checkUserLoggedIn` is going to hit a new route called `user` so go ahead and create a `user.js` file inside of our `api folder`. Basically what we are going to do in this `user.js` is to hit the users endpoint of your api, what we can do is we can send our token which we have in our cookie right now, once we send the token it will give you back the user for that token, then what we do with in `AuthContext` is set the `user`. Now go head and copy the code and paste in the `user.js` file you have created.

```javascript
import { API_URL } from '@/lib/index'
import cookie from 'cookie'

export default = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({message: 'Not Authorized'})
      return
    }

    const { token } = cookie.parse(req.headers.cookie)

    const apiRes = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const user = await apiRes.json()

    if(apiRes.ok) {
      res.status(200).json({user})
    } else {
      res.status(403).json({message: 'User forbidden'})
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}


export default user

```
Now inside our function we are first checking to see if the cookie exist `(!req.headers.cookie)` if that's not there then `res.status(403).json({message: 'Not Authorized'})` and then we `return`.
But if is found then we need to pass the cookie and get the token. we then destructure the  token `const { token } = cookie.parse(req.headers.cookie)` this will put the token into a variable and then we can send into our backend-Api. Once we get the user back. and then check if the apiRes.ok then we want to set the `status(200)` and send the user object. else the user is forbidden `res.status(403).json({message: 'User forbidden'})`.
Now let's save that and hit this api-route with `checkUserLoggedIn`. now let's go to our `AuthContext` and fill in out `checkUserLoggedIn` with this code, just a simple get request


```javascript
 const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user.data.user)
    } else {
      setUser(null)
    }
  }
```
Now we are checking that if everything goes ok then we're setting `setUser(data.user.data.user)` the user we get back from our `backend-api` else we are going to `setUser` to `null` and then we want to call this up here in a `useEffect` so let's go under our state and call the useEffect. 

```javascript
  useEffect(() => checkUserLoggedIn(), [])

```

### Logout And Destroy Cookie
Now we are going to have another api route for this because we need to destroy the cookie that's going to happened in our server which in our api route. So let's create a `logout.js` in our api folder. after we have done that, go ahead and paste the code inside of the `logout.js` file we just create. I will explain the code below.

```javascript
import cookie from 'cookie'

export default = async (req, res) => {
  if (req.method === 'POST') {
    // DESTROY COOKIE
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/'
      })
    )

    res.status(200).json({ message: "Success"})

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}

export default logout

```
All we are doing here is just to destroy the cookie. Now if you look at the `cookie.serialize('token', '',)` you will see that the token is now set to an empty string.
Next we replace the `maxAge` with `expires` and we want to set it to something that's pass and we did that by passing a new data and pass in zero. And that's it this should destroy the cookie.
Now from our logout function in out `AuthContext` we just want to call that `api/logout.js` Now add these code inside of the `logout` function inside of the `AuthContext`


```javascript

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      setUser(null)
      router.push('/login')
    }
  }
```
What we are doing here is simply hitting that `api/logout` route and we then `setUser(null)` to `null`, this will remove our cookie, and redirect the user to the login page. Now let's go to our `Navbar` components and bring in the `logout` method from `AuthContext`, So now update your `navbar` component with this code below

```javascript
import { useContext } from 'react'

const { logout, user } = useContext(AuthContext)

{user ? <>
  <Link href="/dashboard">
    <a>Dashboard</a>
  </Link>
  <div>
    <a onClick={() => logout()}>Logout</a>
  </div>
</> : null}
```
Now once you click on logout everything should be working very fine, the cookie will be destroy.
Now the next thing is the register page, basically this will do the same thing as login except it will create the user and then it will send back the token basically do the same thing the login response does.

### Register User
Now let's go to our `api` folder and create our `register.js` file.
Now go ahead and copy these code and paste inside of your `register.js` file.

```javascript
import { API_URL } from '../../config/index'
import cookie from 'cookie'

const register = async (req, res) => {
  if (req.method === 'POST') {

    const {fullname, email, password} = req.body

    const apiRes = await fetch(`${API_URL}/your register endpoint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname,
        email,
        password
      }),
    })

    const resData = await apiRes.json()

    // console.log(resData.data.token)

    if (apiRes.ok) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', String(resData.data.token), {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/'
        })
      )

      res.status(200).json({ user: resData.data })
    } else {
      res.status(500).json({message: resData.message})
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}


export default register

```
Now if you take a close look you will see that we are doing the same thing as the login route, the little difference here is that we are accepting an extra field which is `fullname`. So next let's dive right into the `AuthContext` and handle our `register` route we have just created. You can copy these code below and paste it in the `register async function` we created.


```javascript
 // Resister user
  // ====================================
  const signup = async ({ fullname, email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname, email, password }),
    })

    const resData = await res.json()

    if (res.ok) {
      setUser(resData.user)
      router.push('/dashboard')
    } else {
      setIsError(resData.message)
      setIsError(null)
    }
  }
```
Now we are hitting the `api/register.js` route that we just created, we are sending along the user object which is the `fullname, email, password` then we check to see if the response is ok, if is okay then we set the user and push/redirect to the dashboard and if there's an error we set that in the state.
Now let's go inside the `register` and update our `handleRegisterSubmit` with these code


```javascript

const handleRegisterSubmit = async ({ fullname, email, password }) => {
    register({ fullname, email, password })
  }

```
Now you can go ahead and test your app, everything should be working very fine now.

#### Conclusion
So having these API routes and being able to set an HTTP only cookie is another big benefit of using Next.Js because is not something you can do with just React. 
Where to store a JSON Web Tokens has always been kind of an issue with front end development. So this does give us one solution.


Hello, I hope you liked the article. I am Caleb, a JavaScript Developer. It takes a lot of work to research and write such an article, and a clap or a follow 👏 from you means the entire world 🌍to me. It takes less than 10 seconds for you, and it helps me with reach! You can also ask me any questions, or point out anything, or just drop a “Hey” 👇 down there.