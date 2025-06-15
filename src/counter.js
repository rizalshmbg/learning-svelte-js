import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import HelloSvelte from './lib/HelloSvelte.svelte'
import Counter from './lib/Counter.svelte'

const app = mount(Counter, {
  target: document.getElementById('app'),
})

export default app
