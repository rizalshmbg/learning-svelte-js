import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import HelloSvelte from './lib/HelloSvelte.svelte'
import Counter from './lib/Counter.svelte'
import GlobalCounter from './lib/GlobalCounter.svelte'
import GlobalCounterApp from './lib/GlobalCounterApp.svelte'

const app = mount(GlobalCounterApp, {
  target: document.getElementById('app'),
})

export default app
