import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import HelloSvelte from './lib/HelloSvelte.svelte'
import UserApp from './lib/UserApp.svelte'

const app = mount(UserApp, {
  target: document.getElementById('app'),
})

export default app
