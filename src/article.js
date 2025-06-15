import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import HelloSvelte from './lib/HelloSvelte.svelte'
import Article from './lib/Article.svelte'

const app = mount(Article, {
  target: document.getElementById('app'),
})

export default app
