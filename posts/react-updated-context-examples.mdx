---
layout: post
title: Using React Context (Now With Hooks)
date: '2019-11-01'
spoiler: Real-world examples with Context
draft: false
tags:
  - React
---

React Context has come a long way since its stable release almost a year and a half ago.

The [context API](https://reactjs.org/docs/context.html) is designed to allow state to be shared between components, and it's a great choice for storing things like a "global" setting (such as theme color) or data about the current user.

Now with the release of [React hooks](https://reactjs.org/docs/hooks-intro.html), you no longer have to use the "render prop" pattern to access state globally.

For this example we'll say that we have a current user in an app and we want to display their name in multiple places.

### Setup

First we need to call `React.createContext()`, which will return a `Consumer` and `Provider`.

A Context Provider is a component that allows all components inside of it to access the shared state. The consumer is then used to access the data from the provider.

Usually it's best to put these all in their own file, so we'll call it `UserContext.js`

```js
import React, { useState, createContext } from 'react';

const UserContext = createContext();
```

Next, we'll create a provider component we can use at the root of our app. We'll also give it some state to store the user object later, because our `UserProvider` is just another React component.

```jsx
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// you can also create this helper to avoid having to import two things to use this context
const useUserContext = () => {
  useContext(UserContext);
}

export { UserProvider, UserContext, useUserContext };
```

Here we set the value on the provider by passing it the `value` prop and giving it the data we want to make available to other components. We're also passing `setUser`, which will allow us to change the state of the provider from other components.

Now in the root of our app (usually something like `App.js` or `index.js`), we can add this provider:

```jsx
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      {/* all the other stuff from your app... */}
    </UserProvider>
  )
}
```

So if we had a login page where we were getting information about the current user from an API, we would want to store that in our `UserProvider`.

To do that, we use the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook and pass it our `UserContext`.

```jsx{3-4,11}
import { UserContext } from './UserContext';
const LoginPage = () => {
  const context = useContext(UserContext);
  const { setUser } = context;

  const handleLogin = async () => {
    // get some data from your API...
    const res = { name: 'Eleven' }

    // and set it to context
    setUser(res)
  }

  // the rest of your component would go here
}
```

So now, if we had a navigation component that displayed the current user's name, we could do this:

```jsx
const NavBar = () => {
  const context = useContext(UserContext);
  const { user } = context;

  return (
    <nav>
      {user.name} {/* => 'Eleven' */}
    </nav>
  )
}
```