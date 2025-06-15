import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import HelloSvelte from './lib/HelloSvelte.svelte'

const app = mount(HelloSvelte, {
  target: document.getElementById('app'),
})

export default app
