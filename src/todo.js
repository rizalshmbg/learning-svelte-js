import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import HelloSvelte from './lib/HelloSvelte.svelte';
import TodoApp from './lib/TodoApp.svelte';

const app = mount(TodoApp, {
  target: document.getElementById('app'),
})

export default app;
