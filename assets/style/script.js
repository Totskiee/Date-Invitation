const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

const emojis = ["😂","🥲","🤔","🙃","🤪","😎","🤯","💀","🍕","💩"];
const gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJjN2Vsa2trYjF0emtsanJxNHFmeWJxYWkzZmJzd3AwZnUwMnJhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/33avHSagADkpr7y1md/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanBnaHhtbHkzY3h3ZWowMnlzcnZ4bmZsdHpieXBzdDB4NjNrdmpleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tgn6SO4H7rJkvU4XyS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3BrOXZscWJoOTNqcXh6emplOXRvZmd6cDBvandsYWNtNmdnNDMyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4tJASeQSempsnWQP1C/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVnZGJqNW4xczM2aGFmOTIwbmZzMWZkM3hmbGd4Y2cwNmVxdWhhNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gXEguRNQJyQEUgYHRO/giphy.gif",
];

const maxFontSize = 24; // px

function hoverNoButton() {
    // Move button randomly but stay inside screen
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - 20));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - 20));
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Grow button but limit max size
    const currentSize = parseInt(window.getComputedStyle(noBtn).fontSize);
    if (currentSize < maxFontSize) {
        noBtn.style.fontSize = (currentSize + 2) + 'px';
    }

    // Change text
    const messages = ["Think sajd hehe","Think balik HAHAH","Basin pede pana ma yes?","Don't be shy ba HAHAH!","Sure najd na?", "lainaa:(", "yes na guro na uy HAHA", "YES IS THE WAY!", "Ayaw pag NO HAHA", "Sige na HAHAHA", "AW WAY DAOG HAHA"];
    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Spawn emojis
    for (let i = 0; i < 4; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);
        emoji.style.left = Math.min(x + Math.random() * 100, window.innerWidth - 30) + 'px';
        emoji.style.top = Math.min(y + Math.random() * 50, window.innerHeight - 30) + 'px';
        setTimeout(() => emoji.remove(), 2000);
    }

    // Spawn GIF
    const gif = document.createElement('img');
    gif.src = gifs[Math.floor(Math.random() * gifs.length)];
    gif.classList.add('sticker');
    document.body.appendChild(gif);
    gif.style.left = Math.min(x + Math.random() * 100, window.innerWidth - 200) + 'px';
    gif.style.top = Math.min(y + Math.random() * 50, window.innerHeight - 200) + 'px';
    setTimeout(() => gif.remove(), 7000);
}

// Attach hover for desktop and touch for phones
noBtn.addEventListener('mouseenter', hoverNoButton);
noBtn.addEventListener('touchstart', hoverNoButton);

// YES button click
yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    yesBtn.textContent = "Yay! bengbang nadis HAHAHAHAHAH jok lungs";

    for (let i = 0; i < 10; i++) {
        const gif = document.createElement('img');
        gif.src = gifs[Math.floor(Math.random() * gifs.length)];
        gif.classList.add('sticker');
        document.body.appendChild(gif);
        gif.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        gif.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        setTimeout(() => gif.remove(), 3000);
    }
});

yesBtn.addEventListener('click', () => {
    // Send notification to backend
    fetch('/yes-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: 'Guest' }) // you can change 'Guest' to a name input later
    });

    // Hide No button and change text
    noBtn.style.display = 'none';
    yesBtn.textContent = "Yay! Thanks for saying YES! ❤️";

    // Optional: spawn celebration GIFs
    for (let i = 0; i < 10; i++) {
        const gif = document.createElement('img');
        gif.src = gifs[Math.floor(Math.random() * gifs.length)];
        gif.classList.add('sticker');
        document.body.appendChild(gif);
        gif.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        gif.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        setTimeout(() => gif.remove(), 3000);
    }
});
