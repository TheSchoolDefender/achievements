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

const unlockedAchievements = new Set();
let totalAchievements = Object.keys(achievements).length;
let catInput = '';
let achievementButtonClicks = 0;
let catClicks = 0;

function showAchievement(key) {
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

document.addEventListener('keydown', (event) => {
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
    catInput = '';
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
  showAchievement('click');
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  showAchievement('contextmenu');
});

document.addEventListener('mousemove', () => {
  showAchievement('mousemove');
});

const catImage = document.createElement('img');
catImage.src = 'https://static.vecteezy.com/system/resources/thumbnails/009/665/304/small/cute-kitty-cat-head-cartoon-element-free-png.png';
catImage.id = 'cat-image';
document.body.appendChild(catImage);

catImage.addEventListener('click', () => {
  catClicks++;
  if (catClicks >= 10) {
    showAchievement('catpetter');
    catClicks = 0;
  }
});

updateAchievementList();
