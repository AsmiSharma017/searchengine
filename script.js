document.addEventListener('DOMContentLoaded', () => {
    const si = document.getElementById('si');
    const sb = document.getElementById('sb');
    const ch = document.getElementById('ch');
    const shList = document.getElementById('sh');

    // Load search history from JSON file
    loadsh();

    sb.addEventListener('click', () => {
        const query = si.value.trim();
        if (query) {
            saveSearch(query);
            displaysh();
            si.value = ''; // Clear input after search
        }
    });

    ch.addEventListener('click', () => {
        localStorage.removeItem('sh');
        shList.innerHTML = ''; // Clear displayed history
    });

    function saveSearch(query) {
        let history = JSON.parse(localStorage.getItem('sh')) || [];
        history.push(query);
        localStorage.setItem('sh', JSON.stringify(history));
    }

    function loadsh() {
        const history = JSON.parse(localStorage.getItem('sh')) || [];
        history.forEach(query => {
            const li = document.createElement('li');
            li.textContent = query;
            shList.appendChild(li);
        });
    }

    function displaysh() {
        const history = JSON.parse(localStorage.getItem('sh')) || [];
        const li = document.createElement('li');
        li.textContent = history[history.length - 1]; // Add the last search
        shList.appendChild(li);
    }
});
