---
layout: post
title: What's New in React 16.6 By Example
date: '2018-10-24'
spoiler: Meet Memo, Lazy, and ContextType
draft: false
tags:
  - React
---

The [release of React's 16.6](https://reactjs.org/blog/2018/10/23/react-v-16-6.html) minor version bump came with some new React tools for React developers. Since it's a only a [minor version](https://semver.org/), React teams should feel comfortable upgrading because there aren't any breaking changes -- only new features and bugfixes.

# [Context Type](https://reactjs.org/docs/context.html#classcontexttype)

This is, in my opinion, the most exciting addition in 16.6.

The context API had its stable release in 16.3, but one feature it sacrificed was removing `this.context` as a way to interact with context. This feature has been missed among [developers who are uncertain if render props are the right direction](https://twitter.com/mjackson/status/1052681036709093377) to go in.

With 16.6, you can now declare a `contextType` in a component and then access `this.context` to get the context from your provider without having to pass down render props.

It's important to note that the context value is from the *closest matching Provider* above your current component in the tree.

So you'll still have to wrap your entire app (or at least your component) in your Provider, but then that provider is easily accessed with `this.context`.

For example, if you have a simple counter that's using state in a context provider, you'd previously have to do something like this to render it:

```jsx
const VoteContext = React.createContext();

const VoteCount extends Component {
  render() {
    return (
      <VoteContext.Consumer>
        {context => (
          <div>{context.state.count}</div>
        )}
      </VoteContext.Consumer>
    )
  }
}

```

Now, you can either add `static contextType` or add `.contextType` if you aren't using static class fields.

```jsx
const VoteContext = React.createContext();

class VoteCount extends Component {
  static contextType = VoteContext
  render() {
   return (
     <div>{this.context.state.count}</div>
   )
  }
}
```

If you want to see an example in action, I [created this CodeSandbox](https://codesandbox.io/s/n560yp5xx4) to demonstrate how to use contextType.

# [Memo](https://reactjs.org/docs/react-api.html#reactmemo)

Although the name of this new API has been met with [mixed feedback](https://twitter.com/dan_abramov/status/1054930594143109120), the Memo API is essentially a wrapper / higher-order component that provides the benefits of a [Pure Component](https://reactjs.org/docs/react-api.html#reactpurecomponent) to function components.

There's been plenty written about the [benefits of Pure Components,](https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b). The short version is that Pure Components can provide a performance boost by preventing a component from re-rendering if the props don't change. But be warned, if you're using deeply nested data, Pure Components only do a shallow check for performance reasons, so try to limit it to simple data or use [immutable objects.](https://facebook.github.io/immutable-js/).

Anyway, enough theory, let's see it in an example.

Let's say you have a stateless component that just displays a user's name and avatar in the top right of a dashboard. You have a simple functional component because it doesn't need to have state, it just needs to render out its props:

```jsx
function UserInfo(props) {
  const { name, avatar } = props;
  return (
    <div>
      <img src={avatar} alt={`${name}'s avatar`} />
      <span>{name}</span>
    </div>
  )
}
```

Now let's say you have this component and a "search" input component both in the header of your site.

Each time your user types into the input and changes the input of your header, `UserInfo` is going to actually trigger a re-render, even if the props for the UserInfo component don't change.

If you're already using a full React component, it'd be easy to switch over to `React.PureComponent` and remove this unnecessary render. But now with `Memo`, you can leverage that same performance boost with your functional components:

```jsx
const UserInfoMemo = React.memo((props) => {
 const { name, avatar } = props;
  return (
   <div className="user-info">
     <img src={avatar} alt={`${name}'s avatar`} />
     <span>{name}</span>
   </div>
  );
});
```

I created [this quick CodeSandbox](https://codesandbox.io/s/2x5z13y4p?expanddevtools=1) to demonstrate the differences. Type into the search input and notice how `UserInfoNormal` is actually re-rendering on every keystroke, even though the props aren't changing. Compare that to `UserInfoMemo`, which is only doing one initial render and not re-rendering when the main App component's state is changing.

# [React.lazy code-splitting](https://reactjs.org/docs/code-splitting.html#reactlazy)

Now, just be warned, this is a feature “from the future” that’s mainly intended to set things up for the upcoming release of React Suspense. Also, this feature isn’t available for server-side rendering just yet, so don’t try and mix this into NextJS (which luckily does code-splitting by default, anyway).

Code splitting tries to solve one of the trickier issues with monolithic Javascript apps: the dreaded Bundle Size.

`React.lazy` allows you to only load components _when they need to be rendered._

That means when you load into any page on your React app, you don’t have to load the source code for every single other component that exists in your app.

What this means is you can drastically increase initial loading speeds for React apps using a built-in APIs (although the React blog notes that [React-Loadable](https://github.com/jamiebuilds/react-loadable) is still a great options and currently offers server-side rendering).

Although the benefits of this API are a bit complicated, the implementation extremely easy. Below is the example from the official React docs, since it’s fairly straightforward.

```jsx
// Before
import OtherComponent from './OtherComponent';

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}

// After
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
```

Something to be cautious about, however, is that when `MyComponent` is initially rendered with `React.lazy` wrapping `OtherComponent`, the inner OtherComponent will initially render nothing while it loads in the source.

The `React.lazy` docs provide a solution: Using the even newer `<Suspense />` component.

I haven’t included `Suspense` in this list because it may be confused with the upcoming asynchronous [React Suspense](https://www.youtube.com/watch?v=nLF0n9SACd4) release, but for now the Suspense component can be used to provide a fallback while loading in component asynchronously.