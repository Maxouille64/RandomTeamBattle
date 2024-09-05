const select = document.getElementById('select');
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

select.addEventListener('change', function handleChange(event) {
  // 👇️ get selected VALUE even outside event handler
  var choice = select.options[select.selectedIndex].value
  chrome.cookies.set({ url: "https://play.pokemonshowdown.com/", name: "mod", value: choice, expirationDate: (new Date().getTime()/1000) + 60 * 60 * 24 * 30});

  // 👇️ get selected TEXT in or outside event handler
  console.log(select.options[select.selectedIndex].text);
});
