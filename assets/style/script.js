const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Emojis list
const emojis = ["😂","🥲","🤔","🙃","🤪","😎","🤯","💀","🍕","💩"];

// Stickers/GIFs list (local files or URLs)
const gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJjN2Vsa2trYjF0emtsanJxNHFmeWJxYWkzZmJzd3AwZnUwMnJhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/33avHSagADkpr7y1md/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanBnaHhtbHkzY3h3ZWowMnlzcnZ4bmZsdHpieXBzdDB4NjNrdmpleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tgn6SO4H7rJkvU4XyS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3BrOXZscWJoOTNqcXh6emplOXRvZmd6cDBvandsYWNtNmdnNDMyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4tJASeQSempsnWQP1C/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVnZGJqNW4xczM2aGFmOTIwbmZzMWZkM3hmbGd4Y2cwNmVxdWhhNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gXEguRNQJyQEUgYHRO/giphy.gif",
];


noBtn.addEventListener('mouseenter', () => {
    // Move button randomly
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Grow button
    const currentSize = parseInt(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = (currentSize + 2) + 'px';

    // Change button text
    const messages = ["Think sajd hehe","Think balik HAHAH","Basin pede pana ma yes?","Don't be shy ba HAHAH!","Sure najd na?", "lainaa:("];
    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Spawn emojis
    for (let i = 0; i < 4; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);
        emoji.style.left = (x + Math.random() * 100) + 'px';
        emoji.style.top = (y + Math.random() * 50) + 'px';
        setTimeout(() => emoji.remove(), 2000);
    }

    // Spawn GIF/sticker
    const gif = document.createElement('img');
    gif.src = gifs[Math.floor(Math.random() * gifs.length)];
    gif.classList.add('sticker');
    document.body.appendChild(gif);
    gif.style.left = (x + Math.random() * 100) + 'px';
    gif.style.top = (y + Math.random() * 50) + 'px';
    setTimeout(() => gif.remove(), 2000);
});

// YES button behavior
yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    yesBtn.textContent = "Yay! bengbang nadis HAHAHAHAHAH jok lungs";

    // Optional: spawn lots of GIFs for celebration
    for (let i = 0; i < 10; i++) {
        const gif = document.createElement('img');
        gif.src = gifs[Math.floor(Math.random() * gifs.length)];
        gif.classList.add('sticker');
        document.body.appendChild(gif);
        gif.style.left = Math.random() * window.innerWidth + 'px';
        gif.style.top = Math.random() * window.innerHeight + 'px';
        setTimeout(() => gif.remove(), 3000);
    }
});

