// Generate placeholder images using canvas
function createPlaceholderImage(width, height, text, bgColor, textColor) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Text
    ctx.fillStyle = textColor;
    ctx.font = `${Math.min(width, height) / 10}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    return canvas.toDataURL();
}

// Generate all placeholder images when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Hero portrait
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.src = createPlaceholderImage(800, 1000, 'Professional Portrait', '#2a2a2a', '#c9a961');
    }

    // Company logos
    for (let i = 1; i <= 5; i++) {
        const logo = document.getElementById(`logo${i}`);
        if (logo) {
            logo.src = createPlaceholderImage(200, 80, `Company ${i}`, '#1a1a1a', '#ffffff');
        }
    }

    // Portfolio images
    const portfolioTitles = [
        'Global Expansion',
        'Financial Restructuring',
        'Digital Overhaul',
        'Market Analysis'
    ];

    for (let i = 1; i <= 4; i++) {
        const portfolio = document.getElementById(`portfolio${i}`);
        if (portfolio) {
            portfolio.src = createPlaceholderImage(800, 600, portfolioTitles[i - 1], '#333333', '#c9a961');
        }
    }

    // Client portraits
    const clients = [
        { id: 'client1', name: 'Sarah M.' },
        { id: 'client2', name: 'Marcus C.' },
        { id: 'client3', name: 'Elena R.' }
    ];

    clients.forEach(client => {
        const img = document.getElementById(client.id);
        if (img) {
            img.src = createPlaceholderImage(200, 200, client.name, '#2a2a2a', '#c9a961');
        }
    });
});
