---
layout: post
title: Practical Examples for React Context
date: '2018-10-16'
spoiler: Real-world examples, with Context
draft: false
tags:
  - React
---


React's [context API](https://reactjs.org/docs/context.html) has been stable for about six months now (at time of writing). And while there are several [good guides](https://wesbos.com/react-context/) about the basics, I've struggled to find practical examples and suggested design patterns for Context.

In my personal usage, I've found it to be a great stand-in for state containers like Redux. Instead of having to create boilerplate for reducers, actions and stores, ultimately "Context" is just a component. It has state, it can have methods and it passes its state through props.

For this example, let's say we have a simple dashboard app for managing blog posts.

### Setup

First, we'll create a simple Provider and Consumer pair.

```jsx
const StoreContext = React.createContext();

class StoreProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Me'
    }
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export const StoreConsumer = StoreContext.Consumer;

export default StoreProvider;
```

Using this example, you'll now have a file that exports both a provider and a consumer for your App's "store".

In this case, "store" is just referring to the parent component, which works like any other React component. You can give it a state, set the state, and create functions to make API calls and update the state.

In my experience, I find this much easier to work with than something like Redux, where you usually need reducers and actions and a lot of other boilerplate.

### Basic Usage

In the root of your app, usually `index.js`, put the `StoreProvider` component as high as possible.

```jsx
class App extends Component {
  render() {
    return (
      <StoreProvider>
        <Main />
      </StoreProvider>
    )
  }
}
```

Now, you can access your context anywhere in your app using the `StoreConsumer` and render props.

For example, if you want to display the current user in the top right it might be nested in several components.

Instead of having to pass props down several levels (also called [prop drilling](https://blog.kentcdodds.com/prop-drilling-bb62e02cb691?gi=9a8599aea1be)), you can instead just use the `StoreConsumer` to access it wherever you need it.

```jsx
import { StoreConsumer } from './StoreProvider';

const User = (props) => {
  return (
    <StoreConsumer>
      {(context) => (
        <span>{context.state.user}</span>
      )}
    </Storeconsumer>
  );
}
```

### Data Fetching

Instead of having to reach for [middleware](https://github.com/redux-saga/redux-saga), async data fetching with Context works just like it would in a normal component.

Let's say that we want to preserve someone's login state by checking `localStorage` for a token. If they have a valid token, then we want to fetch all their blog posts.

```jsx
class StoreProvider extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const token = window.localStorage.getItem('auth-token');

    if (token) {
      const res = await axios.get('https://myapi.com/posts');
      this.setState({
        posts: res.data,
      });
    }
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
```

Now, `posts` are globally available to your app. Anywhere you need to access them, you can use your consumer and access the context's state.

If you need to refetch, you can just add a method to your context component and call it in your consumer.

```jsx
class StoreProvider extends Component {
  {/* ...same code as above */}
  async refetchData {
    const res = await axios.get('https:/myapi.com/posts');
    this.setState({ posts: res.data });
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          state: this.state,
        }}
        refetchData={this.refetchData}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
```

Make sure to pass your methods to your components as props, or else you won't be able to access your context's methods in the consumer.

### Higher Order Component

If you find it clunky / messy to do the whole [render prop](https://reactjs.org/docs/render-props.html) song and dance, you can append this [higher order component](https://reactjs.org/docs/higher-order-components.html) when you export your component.

This usage is similar to how [Redux uses `connect`](https://redux.js.org/basics/usagewithreact#implementing-container-components). Basically, you're extending the component's own props with the props from the context component.

```jsx
import { StoreConsumer } from './StoreProvider';

function withContext(WrapperComponent) {
  return class extends React.Component {
    render() {
      return (
        <StoreConsumer>
          {context => <WrapperComponent context={context} {...this.props} />}
        </StoreConsumer>
      );
    }
  };
}
```

So in your user component, you could change your export to this:

```jsx
export default withContext(User)
```

And then your `User` component would have all the context passed to it in a new `context` prop:

```jsx
const User = (props) => {
  const { context } = this.props;
  const { user } = context.state;
  return (
    <div>
      <span>{user}</span>
    </div>
  );
}
```
