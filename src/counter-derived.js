import { mount } from 'svelte'
import './app.css'
import CounterDerived from './lib/CounterDerived.svelte'

const app = mount(CounterDerived, {
  target: document.getElementById('app'),
})

export default app
