// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
  }
}

// Toggle theme
function toggleTheme() {
  body.classList.toggle('dark-theme');
  
  // Save theme preference
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Event listener for theme toggle
themeToggle.addEventListener('change', toggleTheme);

// Load theme on page load
loadTheme();

// Tool Configuration
const tools = [
  {
    name: 'External Resource Checker',
    description: 'Verify libraries and resources used on web pages.',
    url: 'https://kvanrooyen-inv.github.io/external-resource-verifier/'
  },
  {
    name: 'Placeholder Replacer',
    description: 'Enter a URL to replace its image links with random placeholders.',
    url: 'https://mjwells-inv.github.io/imageswap/swap.html'
  },
  {
    name: 'Audio Placeholder Replacer',
    description: 'Enter a URL to replace its audio links.',
    url: 'https://mjwells-inv.github.io/imageswap/audioswap.html'
  },
  {
    name: 'Image Placeholder Guide',
    description: 'An interactive guide on how to deal with images placeholders.',
    url: 'https://sites.google.com/invisible.email/interactive-webpages/video-placeholders-guide'
  },
  {
    name: 'Video Placeholder Guide',
    description: 'An interactive guide on how to deal with video placeholders.',
    url: 'https://sites.google.com/invisible.email/interactive-webpages/video-placeholders-guide'
  }
];

// Render Tools
function renderTools() {
  const toolsContainer = document.getElementById('tools-container');
  
  tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.classList.add('tool-card');
    
    toolCard.innerHTML = `
      <h2>${tool.name}</h2>
      <p>${tool.description}</p>
    `;
    
    toolCard.addEventListener('click', () => {
      window.location.href = tool.url;
    });
    
    toolsContainer.appendChild(toolCard);
  });
}

// Render tools on page load
document.addEventListener('DOMContentLoaded', renderTools);
