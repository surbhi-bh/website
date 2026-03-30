import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex({ extensions: ['.md'] })],
  kit: {
    adapter: adapter()
  }
};
