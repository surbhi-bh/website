import { writable } from 'svelte/store';

// Shared store so garden page can push selected item to the layout's third panel
export const gardenPanel = writable(null);

// Controls footer expand/collapse from anywhere (e.g. home page button)
export const footerExpanded = writable(false);
