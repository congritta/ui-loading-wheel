# @congritta-ui/loading-wheel

This is loading wheel React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/loading-wheel`;

Add

```javascript
import LoadingWheel from '@congritta-ui/loading-wheel';
```

into your code

## How to use

Example:

```jsx
<LoadingWheel size={50} width={5} spinsPerSecond={.7} />
```

### Props

| Prop name               | Description                                                              | Is Required | Default value                 |
|-------------------------|--------------------------------------------------------------------------|-------------|-------------------------------|
| size                    | Size of the wheel (in pixels)                                            | true        |                               |
| width                   | Width of the ring (in pixels)                                            | true        |                               |
| spinsPerSecond          | How many spins per second                                                | true        |                               |
| color                   | Color of the ring                                                        | false       | `var(--cui-accent-color-700)` |
| animationTimingFunction | Timing function for speed. See CSS animation timing function docs        | false       | `linear`                      |
| additionalClassName     | Classname for providing your styles                                      | false       |                               |
| domProps                | HTML general attributes for div element (like `onClick`, `id` and so on) | false       |                               |
