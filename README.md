# About

This Vue hook was created as an sample to explain the process to create publishable Open Source Vue libraries.

Tutorial on [Medium](https://medium.com/@ankurr.singhal/create-a-publishable-open-source-vue-library-usecounter-be80278b9ed0)!

# Install

```
npm install vue-use-counter
```

# Usage

```
<template>
  <div id="app">
    <div>
      {{ counter }}
    </div>
    <div>
      <button @click="handleClick">Inc</button>
    </div>
  </div>
</template>

<script>
import { useCounter } from 'vue-use-counter';

export default {
  name: 'App',
  setup() {
    const { counter, inc } = useCounter();

    function handleClick() {
      inc();
    }

    return {
      counter,
      handleClick,
    };
  },
};
</script>
```