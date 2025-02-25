const achievementContainer = document.getElementById('achievement-container');
const achievementList = document.createElement('div');
achievementList.id = 'achievement-list';
achievementContainer.appendChild(achievementList);

const achievements = {
  'a': {
    title: 'Press A',
    description: 'You just typed the letter A.'
  },
  'b': {
    title: 'Press B',
    description: 'You just typed the letter B.'
  },
  'c': {
    title: 'Press C',
    description: 'You just typed the letter C.'
  },
  'd': {
    title: 'Press D',
    description: 'You just typed the letter D.'
  },
  'e': {
    title: 'Press E',
    description: 'You just typed the letter E.'
  },
  'f': {
    title: 'Press F',
    description: 'You just typed the letter F.'
  },
  'g': {
    title: 'Press G',
    description: 'You just typed the letter G.'
  },
  'h': {
    title: 'Press H',
    description: 'You just typed the letter H.'
  },
  'i': {
    title: 'Press I',
    description: 'You just typed the letter I.'
  },
  'j': {
    title: 'Press J',
    description: 'You just typed the letter J.'
  },
  'k': {
    title: 'Press K',
    description: 'You just typed the letter K.'
  },
  'l': {
    title: 'Press L',
    description: 'You just typed the letter L.'
  },
  'm': {
    title: 'Press M',
    description: 'You just typed the letter M.'
  },
  'n': {
    title: 'Press N',
    description: 'You just typed the letter N.'
  },
  'o': {
    title: 'Press O',
    description: 'You just typed the letter O.'
  },
  'p': {
    title: 'Press P',
    description: 'You just typed the letter P.'
  },
  'q': {
    title: 'Press Q',
    description: 'You just typed the letter Q.'
  },
  'r': {
    title: 'Press R',
    description: 'You just typed the letter R.'
  },
  's': {
    title: 'Press S',
    description: 'You just typed the letter S.'
  },
  't': {
    title: 'Press T',
    description: 'You just typed the letter T.'
  },
  'u': {
    title: 'Press U',
    description: 'You just typed the letter U.'
  },
  'v': {
    title: 'Press V',
    description: 'You just typed the letter V.'
  },
  'w': {
    title: 'Press W',
    description: 'You just typed the letter W.'
  },
  'x': {
    title: 'Press X',
    description: 'You just typed the letter X.'
  },
  'y': {
    title: 'Press Y',
    description: 'You just typed the letter Y.'
  },
  'z': {
    title: 'Press Z',
    description: 'You just typed the letter Z.'
  },
  '1': {
    title: 'Press 1',
    description: 'You just typed the number 1.'
  },
  '2': {
    title: 'Press 2',
    description: 'You just typed the number 2.'
  },
  '3': {
    title: 'Press 3',
    description: 'You just typed the number 3.'
  },
  '4': {
    title: 'Press 4',
    description: 'You just typed the number 4.'
  },
  '5': {
    title: 'Press 5',
    description: 'You just typed the number 5.'
  },
  '6': {
    title: 'Press 6',
    description: 'You just typed the number 6.'
  },
  '7': {
    title: 'Press 7',
    description: 'You just typed the number 7.'
  },
  '8': {
    title: 'Press 8',
    description: 'You just typed the number 8.'
  },
  '9': {
    title: 'Press 9',
    description: 'You just typed the number 9.'
  },
  '0': {
    title: 'Press 0',
    description: 'You just typed the number 0.'
  },
  '-': {
    title: 'Press -',
    description: 'You just typed -.'
  },
  '=': {
    title: 'Press =',
    description: 'You just typed =.'
  },
  '!': {
    title: 'Press !',
    description: 'You just typed !.'
  },
  '@': {
    title: 'Press @',
    description: 'You just typed @.'
  },
  '#': {
    title: 'Press #',
    description: 'You just typed #.'
  },
  '$': {
    title: 'Press $',
    description: 'You just typed $.'
  },
  '%': {
    title: 'Press %',
    description: 'You just typed %.'
  },
  '^': {
    title: 'Press ^',
    description: 'You just typed ^.'
  },
  '&': {
    title: 'Press &',
    description: 'You just typed &.'
  },
  '*': {
    title: 'Press *',
    description: 'You just typed *.'
  },
  '(': {
    title: 'Press (',
    description: 'You just typed (.'
  },
  ')': {
    title: 'Press )',
    description: 'You just typed ).'
  },
  '_': {
    title: 'Press _',
    description: 'You just typed _.'
  },
  '+': {
    title: 'Press +',
    description: 'You just typed +.'
  },
  '[': {
    title: 'Press [',
    description: 'You just typed [.'
  },
  ']': {
    title: 'Press ]',
    description: 'You just typed ].'
  },
  '{': {
    title: 'Press {',
    description: 'You just typed {.'
  },
  '}': {
    title: 'Press }',
    description: 'You just typed }.'
  },
  ';': {
    title: 'Press ;',
    description: 'You just typed ;.'
  },
  "'": {
    title: "Press '",
    description: "You just typed '."
  },
  ':': {
    title: 'Press :',
    description: 'You just typed :.'
  },
  '"': {
    title: 'Press "',
    description: 'You just typed ".'
  },
  '\\': {
    title: 'Press \\',
    description: 'You just typed \\.'
  },
  '|': {
    title: 'Press |',
    description: 'You just typed |.'
  },
  ',': {
    title: 'Press ,',
    description: 'You just typed ,.'
  },
  '<': {
    title: 'Press <',
    description: 'You just typed <.'
  },
  '.': {
    title: 'Press .',
    description: 'You just typed ..'
  },
  '>': {
    title: 'Press >',
    description: 'You just typed >.'
  },
  '/': {
    title: 'Press /',
    description: 'You just typed /.'
  },
  '?': {
    title: 'Press ?',
    description: 'You just typed ?.'
  },
  'enter': {
    title: 'Press Enter',
    description: 'You just pressed Enter.'
  },
  'arrowup': {
    title: 'Press Up Arrow',
    description: 'You just pressed the Up Arrow.'
  },
  'arrowdown': {
    title: 'Press Down Arrow',
    description: 'You just pressed the Down Arrow.'
  },
  'arrowleft': {
    title: 'Press Left Arrow',
    description: 'You just pressed the Left Arrow.'
  },
  'arrowright': {
    title: 'Press Right Arrow',
    description: 'You just pressed the Right Arrow.'
  },
  'control': {
    title: 'Press Ctrl',
    description: 'You just pressed Ctrl.'
  },
  'alt': {
    title: 'Press Alt',
    description: 'You just pressed Alt.'
  },
  'shift': {
    title: 'Press Shift',
    description: 'You just pressed Shift.'
  },
  'capslock': {
    title: 'Press Caps Lock',
    description: 'You just pressed Caps Lock.'
  },
  'tab': {
    title: 'Press Tab',
    description: 'You just pressed Tab.'
  },
  'space': {
    title: 'Press Space',
    description: 'You just pressed Space.'
  },
  'click': {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/mouse_pointer.png',
    title: 'Click!',
    description: 'You just clicked the page.'
  },
  'contextmenu': {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/mouse_pointer.png',
    title: 'Right Click!',
    description: 'You just right-clicked the page.'
  },
  'mousemove': {
    image: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/mouse_pointer.png',
    title: 'Mouse Move',
    description: 'You moved your mouse.'
  },
  'openachievements': {
    title: 'Open The Achievements',
    description: 'You opened the achievements, nice :D'
  },
  'cat': {
    image: 'https://static.vecteezy.com/system/resources/thumbnails/009/665/304/small/cute-kitty-cat-head-cartoon-element-free-png.png',
    title: 'Cat!',
    description: 'You typed "cat"!'
  },
  'achievementmasher': {
    title: 'Achievement Masher',
    description: 'Mashing achievement button will get you no where xd'
  }
};

achievements['catpetter'] = {
  image: 'https://static.vecteezy.com/system/resources/thumbnails/009/665/304/small/cute-kitty-cat-head-cartoon-element-free-png.png',
  title: 'Cat Petter',
  description: 'You really love petting cats :D'
};

achievements['deathbycat'] = {
  image: 'https://i1.sndcdn.com/artworks-72yxlmSCdMiI98OI-BMEuqg-t500x500.jpg',
  title: 'Death by...cat?',
  description: 'How did u get into this situation?'
};

achievements['scroll'] = {
  title: 'Scrolling!',
  description: 'You just scrolled the page.'
};

achievements['copy'] = {
  title: 'Copied!',
  description: 'You just copied something!'
};

achievements['paste'] = {
  title: 'Pasted!',
  description: 'You just pasted something!'
};

achievements['cut'] = {
  title: 'Cut!',
  description: 'You just cut something!'
};

const unlockedAchievements = new Set();
let totalAchievements = Object.keys(achievements).length;
let catInput = '';
let achievementButtonClicks = 0;
let catClicks = 0;
let catImageVisible = false;
let cutsceneActive = false;
let catUnlocked = false;
let clickCounter = 0;

function showAchievement(key) {
  if (cutsceneActive) return;

  if (unlockedAchievements.has(key)) {
    return;
  }

  unlockedAchievements.add(key);
  updateAchievementList();
  const achievementData = achievements[key];

  if (!achievementData) {
    return;
  }

  const achievementDiv = document.createElement('div');
  achievementDiv.classList.add('achievement');

  let imageHtml = '';
  if (achievementData.image) {
    imageHtml = `<img src="${achievementData.image}" alt="${achievementData.title}">`;
  } else {
    const keyFound = Object.keys(achievements).find(k => achievements[k] === achievementData);
    const letter = keyFound ? keyFound.charAt(0).toUpperCase() : '?';
    imageHtml = `<span class="achievement-letter">${letter}</span>`;
  }

  achievementDiv.innerHTML = `
    ${imageHtml}
    <div class="achievement-text">
      <h3>${achievementData.title}</h3>
      <p>${achievementData.description}</p>
    </div>
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
  `;

  achievementContainer.appendChild(achievementDiv);

  void achievementDiv.offsetWidth;

  achievementDiv.classList.add('show');

  const progressBar = achievementDiv.querySelector('.progress');
  const duration = 1500;
  progressBar.style.transitionDuration = `${duration}ms`;
  progressBar.style.width = '0%';

  setTimeout(() => {
    achievementDiv.classList.remove('show');
    setTimeout(() => {
      achievementDiv.remove();
    }, 100);
  }, duration);
}

function updateAchievementList() {
  achievementList.innerHTML = `
    <h2>Achievements (${unlockedAchievements.size}/${totalAchievements})</h2>
    <ul class="achievement-grid">
      ${Object.keys(achievements).map(key => {
        const achievementData = achievements[key];
        const isUnlocked = unlockedAchievements.has(key);
        const letter = key.charAt(0).toUpperCase();

        let imageHtml = '';
        if (achievementData.image) {
          imageHtml = `<img src="${achievementData.image}" alt="${achievementData.title}">`;
        } else {
          imageHtml = `<span class="achievement-letter">${letter}</span>`;
        }

        return `
          <li class="achievement-grid-item ${isUnlocked ? 'unlocked' : 'locked'}">
            ${isUnlocked ? imageHtml : '<span class="achievement-letter">?</span>'}
            <div class="achievement-text">
              <h3>${isUnlocked ? achievementData.title : '???'}</h3>
              <p>${isUnlocked ? achievementData.description : '???'} </p>
            </div>
          </li>
        `;
      }).join('')}
    </ul>
  `;
}

function showCatImage() {
  if (catImageVisible) return;
  catImageVisible = true;
  let catImage = document.createElement('img');
  catImage.src = 'https://static.vecteezy.com/system/resources/thumbnails/009/665/304/small/cute-kitty-cat-head-cartoon-element-free-png.png';
  catImage.id = 'cat-image';
  document.body.appendChild(catImage);

  const clickCounterElement = document.createElement('div');
  clickCounterElement.id = 'click-counter';
  clickCounterElement.style.position = 'absolute';
  clickCounterElement.style.top = '-20px';
  clickCounterElement.style.left = '50%';
  clickCounterElement.style.transform = 'translateX(-50%)';
  clickCounterElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  clickCounterElement.style.color = 'white';
  clickCounterElement.style.padding = '5px 10px';
  clickCounterElement.style.borderRadius = '5px';
  clickCounterElement.style.fontSize = '14px';
  clickCounterElement.textContent = 'Clicks: 0';
  catImage.parentElement.style.position = 'relative'; 
  catImage.parentElement.appendChild(clickCounterElement);

  catImage.addEventListener('click', catClickHandler);
}

function hideCatImage() {
  if (!catImageVisible) return;
  catImageVisible = false;
  let catImage = document.querySelector('#cat-image');
  if (catImage) {
    catImage.removeEventListener('click', catClickHandler);
    document.body.removeChild(catImage);
  }
  let clickCounterElement = document.querySelector('#click-counter');
  if (clickCounterElement) {
    clickCounterElement.remove();
  }
}

function catClickHandler() {
  catClicks++;
  updateClickCounter(); 
  if (catClicks >= 20) {
    let catImage = document.querySelector('#cat-image');
    let clickCounterElement = document.querySelector('#click-counter');
    if (catImage) {
      catImage.removeEventListener('click', catClickHandler);
      clickCounterElement.remove();
    }
    startCatExplosionCutscene();
  } else if (catClicks >= 10) {
    showAchievement('catpetter');
  }
}

function updateClickCounter() {
  const clickCounterElement = document.querySelector('#click-counter');
  if (clickCounterElement) {
    clickCounterElement.textContent = `Clicks: ${catClicks}`;
  }
}

function startCatExplosionCutscene() {
  cutsceneActive = true;
  let catImage = document.querySelector('#cat-image');
  let clickCounterElement = document.querySelector('#click-counter');

  if (catImage) {
    catImage.src = 'https://media.pinatafarm.com/protected/9CB33540-63CA-4013-AD4C-17771C92EDC4/e60c8403-7246-497d-a2b3-23a178e97dfe-1666892115455-pfarm-with-png-watermarked.webp';
  }
  setTimeout(() => {
    if (catImage) {
      catImage.remove();
    }
    if (clickCounterElement) {
      clickCounterElement.remove();
    }
    playCatExplosionCutscene();
  }, 1000);
}

async function playCatExplosionCutscene() {
  const fadeOverlay = document.createElement('div');
  fadeOverlay.id = 'fade-overlay';
  const deathText = document.createElement('div');
  deathText.id = 'death-text';
  fadeOverlay.appendChild(deathText);
  document.body.appendChild(fadeOverlay);

  const textLines = [
    "hewo huemen, u makin my kity go boom :(",
    "me vewy sad",
    "goodbye fwend >.<"
  ];

  fadeOverlay.classList.add('active');

  await typewriteText(deathText, textLines);

  document.body.style.transition = 'background-color 0.1s ease';
  for (let i = 0; i < 5; i++) {
    document.body.style.backgroundColor = 'white';
    await delay(100);
    document.body.style.backgroundColor = 'black';
    await delay(100);
  }
  document.body.style.backgroundColor = '';
  document.body.style.transition = '';

  deathText.classList.add('active');
  setTimeout(() => {
    deathText.classList.remove('active');
    fadeOverlay.classList.remove('active');
    document.body.removeChild(fadeOverlay);
    showAchievement('deathbycat');
    catClicks = 0;
    cutsceneActive = false;
    if(catUnlocked){
      showCatImage();
    }
  }, 3000);
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function typewriteText(element, lines) {
  element.classList.remove('active'); 
  element.textContent = ''; 
  element.classList.add('active');

  for (const line of lines) {
    for (let i = 0; i < line.length; i++) {
      element.textContent += line[i];
      await delay(50);
    }
    element.textContent += '\n';
    await delay(500);
  }
}

document.addEventListener('keydown', (event) => {
  if (cutsceneActive) return;
  let key = event.key;
  let achievementKey = key.toLowerCase();

  if (achievements.hasOwnProperty(achievementKey)) {
    showAchievement(achievementKey);
  } else if (key.length === 1 && key === key.toUpperCase() && key !== key.toLowerCase()) {
    achievementKey = key.toLowerCase();

    const capitalizedAchievementKey = `capitalized${achievementKey}`;
    const capitalizedAchievement = {
      title: `Capitalized ${key}`,
      description: `You capitalized "${key}" wow impressive!`
    };

    achievements[capitalizedAchievementKey] = capitalizedAchievement;
    showAchievement(capitalizedAchievementKey);
  } else if (key === ' ') {
    showAchievement('space');
  }

  catInput += key.toLowerCase();
  if (catInput.includes('cat')) {
    showAchievement('cat');
    showCatImage();
    catInput = '';
    catUnlocked = true;
  } else {
    if (!catInput.includes('cat') && !catUnlocked) {
      hideCatImage();
    }
  }
  if (catInput.length > 3) {
    catInput = catInput.slice(1);
  }

  if (achievementKey === 'a') {
    achievementContainer.classList.toggle('open');
    updateAchievementList();
    if (achievementContainer.classList.contains('open')) {
      showAchievement('openachievements');
      achievementButtonClicks++;
      if (achievementButtonClicks >= 10) {
        showAchievement('achievementmasher');
        achievementButtonClicks = 0;
      }
    }
  }
});

document.addEventListener('click', () => {
  if (cutsceneActive) return;
  showAchievement('click');
});

document.addEventListener('contextmenu', (event) => {
  if (cutsceneActive) return;
  event.preventDefault();
  showAchievement('contextmenu');
});

document.addEventListener('mousemove', () => {
  if (cutsceneActive) return;
  showAchievement('mousemove');
});

document.addEventListener('wheel', () => {
  if (cutsceneActive) return;
  showAchievement('scroll');
});

document.addEventListener('copy', () => {
  if (cutsceneActive) return;
  showAchievement('copy');
});

document.addEventListener('paste', () => {
  if (cutsceneActive) return;
  showAchievement('paste');
});

document.addEventListener('cut', () => {
  if (cutsceneActive) return;
  showAchievement('cut');
});

const aboutTab = document.createElement('div');
aboutTab.id = 'about-tab';
aboutTab.textContent = 'About the Developers';
document.body.appendChild(aboutTab);

const aboutContent = document.createElement('div');
aboutContent.id = 'about-content';
aboutContent.innerHTML = '<p>Abc and Cat are people</p>';
document.body.appendChild(aboutContent);

aboutTab.addEventListener('click', () => {
  aboutContent.classList.toggle('open');
});

updateAchievementList();
