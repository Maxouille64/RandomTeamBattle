const toggle = document.getElementById('three-island-switch');

toggle.addEventListener('change', event => {
	const value = event.target.checked;
	console.log(event);
	chrome.storage.sync.set({ enabled: value ? 'true' : '' }, console.error);
});

window.addEventListener('DOMContentLoaded', () => {
	chrome.storage.sync.get('enabled', val => {
		toggle.checked = (val.enabled !== '');
	});
});
