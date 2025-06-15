import { mount } from 'svelte'
import './app.css'
import CounterReactive from './lib/CounterReactive.svelte'

const app = mount(CounterReactive, {
  target: document.getElementById('app'),
})

export default app
