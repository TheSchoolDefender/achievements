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

achievements['ctrlc'] = {
  title: 'Ctrl + C',
  description: 'You just pressed Ctrl + C!'
};
achievements['ctrlv'] = {
  title: 'Ctrl + V',
  description: 'You just pressed Ctrl + V!'
};
achievements['ctrlx'] = {
  title: 'Ctrl + X',
  description: 'You just pressed Ctrl + X!'
};
achievements['ctrlz'] = {
  title: 'Ctrl + Z',
  description: 'You just pressed Ctrl + Z!'
};
achievements['ctrly'] = {
  title: 'Ctrl + Y',
  description: 'You just pressed Ctrl + Y!'
};
achievements['ctrla'] = {
  title: 'Ctrl + A',
  description: 'You just pressed Ctrl + A!'
};
achievements['ctrls'] = {
  title: 'Ctrl + S',
  description: 'You just pressed Ctrl + S!'
};
achievements['ctrlp'] = {
  title: 'Ctrl + P',
  description: 'You just pressed Ctrl + P!'
};
achievements['ctrlf'] = {
  title: 'Ctrl + F',
  description: 'You just pressed Ctrl + F!'
};
achievements['ctrln'] = {
  title: 'Ctrl + N',
  description: 'You just pressed Ctrl + N!'
};
achievements['ctrlo'] = {
  title: 'Ctrl + O',
  description: 'You just pressed Ctrl + O!'
};
achievements['ctrlw'] = {
  title: 'Ctrl + W',
  description: 'You just pressed Ctrl + W!'
};
achievements['ctrlq'] = {
  title: 'Ctrl + Q',
  description: 'You just pressed Ctrl + Q!'
};
achievements['ctrlt'] = {
  title: 'Ctrl + T',
  description: 'You just pressed Ctrl + T!'
};
achievements['ctrlshiftt'] = {
  title: 'Ctrl + Shift + T',
  description: 'You just pressed Ctrl + Shift + T!'
};
achievements['ctrltab'] = {
  title: 'Ctrl + Tab',
  description: 'You just pressed Ctrl + Tab!'
};
achievements['ctrlshifttab'] = {
  title: 'Ctrl + Shift + Tab',
  description: 'You just pressed Ctrl + Shift + Tab!'
};
achievements['ctrld'] = {
  title: 'Ctrl + D',
  description: 'You just pressed Ctrl + D!'
};
achievements['ctrll'] = {
  title: 'Ctrl + L',
  description: 'You just pressed Ctrl + L!'
};
achievements['ctrlr'] = {
  title: 'Ctrl + R',
  description: 'You just pressed Ctrl + R!'
};
achievements['ctrlh'] = {
  title: 'Ctrl + H',
  description: 'You just pressed Ctrl + H!'
};
achievements['ctrle'] = {
  title: 'Ctrl + E',
  description: 'You just pressed Ctrl + E!'
};
achievements['ctrlk'] = {
  title: 'Ctrl + K',
  description: 'You just pressed Ctrl + K!'
};
achievements['ctrlu'] = {
  title: 'Ctrl + U',
  description: 'You just pressed Ctrl + U!'
};
achievements['ctrlb'] = {
  title: 'Ctrl + B',
  description: 'You just pressed Ctrl + B!'
};
achievements['ctrli'] = {
  title: 'Ctrl + I',
  description: 'You just pressed Ctrl + I!'
};
achievements['ctrlshiftn'] = {
  title: 'Ctrl + Shift + N',
  description: 'You just pressed Ctrl + Shift + N!'
};
achievements['ctrlshiftesc'] = {
  title: 'Ctrl + Shift + Esc',
  description: 'You just pressed Ctrl + Shift + Esc!'
};
achievements['ctrlesc'] = {
  title: 'Ctrl + Esc',
  description: 'You just pressed Ctrl + Esc!'
};
achievements['ctrlspace'] = {
  title: 'Ctrl + Space',
  description: 'You just pressed Ctrl + Space!'
};
achievements['alttab'] = {
  title: 'Alt + Tab',
  description: 'You just pressed Alt + Tab!'
};
achievements['altshifttab'] = {
  title: 'Alt + Shift + Tab',
  description: 'You just pressed Alt + Shift + Tab!'
};
achievements['altf4'] = {
  title: 'Alt + F4',
  description: 'You just pressed Alt + F4!'
};
achievements['altenter'] = {
  title: 'Alt + Enter',
  description: 'You just pressed Alt + Enter!'
};
achievements['altspace'] = {
  title: 'Alt + Space',
  description: 'You just pressed Alt + Space!'
};
achievements['altf'] = {
  title: 'Alt + F',
  description: 'You just pressed Alt + F!'
};
achievements['alte'] = {
  title: 'Alt + E',
  description: 'You just pressed Alt + E!'
};
achievements['altp'] = {
  title: 'Alt + P',
  description: 'You just pressed Alt + P!'
};
achievements['altd'] = {
  title: 'Alt + D',
  description: 'You just pressed Alt + D!'
};
achievements['alth'] = {
  title: 'Alt + H',
  description: 'You just pressed Alt + H!'
};
achievements['alts'] = {
  title: 'Alt + S',
  description: 'You just pressed Alt + S!'
};
achievements['altn'] = {
  title: 'Alt + N',
  description: 'You just pressed Alt + N!'
};
achievements['altshiftd'] = {
  title: 'Alt + Shift + D',
  description: 'You just pressed Alt + Shift + D!'
};
achievements['altshifts'] = {
  title: 'Alt + Shift + S',
  description: 'You just pressed Alt + Shift + S!'
};
achievements['altleftarrow'] = {
  title: 'Alt + Left Arrow',
  description: 'You just pressed Alt + Left Arrow!'
};
achievements['altrightarrow'] = {
  title: 'Alt + Right Arrow',
  description: 'You just pressed Alt + Right Arrow!'
};
achievements['altuparrow'] = {
  title: 'Alt + Up Arrow',
  description: 'You just pressed Alt + Up Arrow!'
};
achievements['altdownarrow'] = {
  title: 'Alt + Down Arrow',
  description: 'You just pressed Alt + Down Arrow!'
};
achievements['windowsd'] = {
  title: 'Windows + D',
  description: 'You just pressed Windows + D!'
};
achievements['windowse'] = {
  title: 'Windows + E',
  description: 'You just pressed Windows + E!'
};
achievements['windowsl'] = {
  title: 'Windows + L',
  description: 'You just pressed Windows + L!'
};
achievements['windowsr'] = {
  title: 'Windows + R',
  description: 'You just pressed Windows + R!'
};
achievements['windowsm'] = {
  title: 'Windows + M',
  description: 'You just pressed Windows + M!'
};
achievements['windowsshiftm'] = {
  title: 'Windows + Shift + M',
  description: 'You just pressed Windows + Shift + M!'
};
achievements['windowstab'] = {
  title: 'Windows + Tab',
  description: 'You just pressed Windows + Tab!'
};
achievements['windowspause'] = {
  title: 'Windows + Pause',
  description: 'You just pressed Windows + Pause!'
};
achievements['windowsi'] = {
  title: 'Windows + I',
  description: 'You just pressed Windows + I!'
};
achievements['windowsx'] = {
  title: 'Windows + X',
  description: 'You just pressed Windows + X!'
};
achievements['windowsa'] = {
  title: 'Windows + A',
  description: 'You just pressed Windows + A!'
};
achievements['windowsc'] = {
  title: 'Windows + C',
  description: 'You just pressed Windows + C!'
};
achievements['windowsv'] = {
  title: 'Windows + V',
  description: 'You just pressed Windows + V!'
};
achievements['windowsshifts'] = {
  title: 'Windows + Shift + S',
  description: 'You just pressed Windows + Shift + S!'
};
achievements['windowsplus'] = {
  title: 'Windows + Plus (+)',
  description: 'You just pressed Windows + Plus (+)'
};
achievements['windowsminus'] = {
  title: 'Windows + Minus (-)',
  description: 'You just pressed Windows + Minus (-)'
};
achievements['windowsprtscn'] = {
  title: 'Windows + PrtScn',
  description: 'You just pressed Windows + PrtScn'
};
achievements['windowsctrld'] = {
  title: 'Windows + Ctrl + D',
  description: 'You just pressed Windows + Ctrl + D'
};
achievements['windowsctrlleftarrow'] = {
  title: 'Windows + Ctrl + Left Arrow',
  description: 'You just pressed Windows + Ctrl + Left Arrow'
};
achievements['windowsctrlrightarrow'] = {
  title: 'Windows + Ctrl + Right Arrow',
  description: 'You just pressed Windows + Ctrl + Right Arrow'
};
achievements['windowsctrlf4'] = {
  title: 'Windows + Ctrl + F4',
  description: 'You just pressed Windows + Ctrl + F4'
};
achievements['f1'] = {
  title: 'F1',
  description: 'You just pressed F1'
};
achievements['f2'] = {
  title: 'F2',
  description: 'You just pressed F2'
};
achievements['f3'] = {
  title: 'F3',
  description: 'You just pressed F3'
};
achievements['f4'] = {
  title: 'F4',
  description: 'You just pressed F4'
};
achievements['f5'] = {
  title: 'F5',
  description: 'You just pressed F5'
};
achievements['f6'] = {
  title: 'F6',
  description: 'You just pressed F6'
};
achievements['f7'] = {
  title: 'F7',
  description: 'You just pressed F7'
};
achievements['f8'] = {
  title: 'F8',
  description: 'You just pressed F8'
};
achievements['f9'] = {
  title: 'F9',
  description: 'You just pressed F9'
};
achievements['f10'] = {
  title: 'F10',
  description: 'You just pressed F10'
};
achievements['f11'] = {
  title: 'F11',
  description: 'You just pressed F11'
};
achievements['f12'] = {
  title: 'F12',
  description: 'You just pressed F12'
};
achievements['shiftdelete'] = {
  title: 'Shift + Delete',
  description: 'You just pressed Shift + Delete'
};
achievements['shiftinsert'] = {
  title: 'Shift + Insert',
  description: 'You just pressed Shift + Insert'
};
achievements['shifttab'] = {
  title: 'Shift + Tab',
  description: 'You just pressed Shift + Tab'
};
achievements['shiftf10'] = {
  title: 'Shift + F10',
  description: 'You just pressed Shift + F10'
};
achievements['shiftf3'] = {
  title: 'Shift + F3',
  description: 'You just pressed Shift + F3'
};
achievements['shiftf5'] = {
  title: 'Shift + F5',
  description: 'You just pressed Shift + F5'
};
achievements['shiftf6'] = {
  title: 'Shift + F6',
  description: 'You just pressed Shift + F6'
};
achievements['shiftf7'] = {
  title: 'Shift + F7',
  description: 'You just pressed Shift + F7'
};
achievements['ctrlshiftl'] = {
  title: 'Ctrl + Shift + L',
  description: 'You just pressed Ctrl + Shift + L'
};
achievements['ctrlshiftk'] = {
  title: 'Ctrl + Shift + K',
  description: 'You just pressed Ctrl + Shift + K'
};
achievements['ctrlshiftp'] = {
  title: 'Ctrl + Shift + P',
  description: 'You just pressed Ctrl + Shift + P'
};
achievements['ctrlshiftc'] = {
  title: 'Ctrl + Shift + C',
  description: 'You just pressed Ctrl + Shift + C'
};
achievements['ctrlshiftv'] = {
  title: 'Ctrl + Shift + V',
  description: 'You just pressed Ctrl + Shift + V'
};
achievements['ctrlshifte'] = {
  title: 'Ctrl + Shift + E',
  description: 'You just pressed Ctrl + Shift + E'
};
achievements['ctrlshiftf'] = {
  title: 'Ctrl + Shift + F',
  description: 'You just pressed Ctrl + Shift + F'
};
achievements['ctrlshiftq'] = {
  title: 'Ctrl + Shift + Q',
  description: 'You just pressed Ctrl + Shift + Q'
};
achievements['ctrlshiftr'] = {
  title: 'Ctrl + Shift + R',
  description: 'You just pressed Ctrl + Shift + R'
};
achievements['ctrlshiftu'] = {
  title: 'Ctrl + Shift + U',
  description: 'You just pressed Ctrl + Shift + U'
};
achievements['ctrlshiftb'] = {
  title: 'Ctrl + Shift + B',
  description: 'You just pressed Ctrl + Shift + B'
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
  const ctrlPressed = event.ctrlKey;
  const shiftPressed = event.shiftKey;
  const altPressed = event.altKey;
  const windowsPressed = event.metaKey;

  if (ctrlPressed && key.toLowerCase() === 'c') {
      showAchievement('ctrlc');
  }
  if (ctrlPressed && key.toLowerCase() === 'v') {
      showAchievement('ctrlv');
  }
  if (ctrlPressed && key.toLowerCase() === 'x') {
      showAchievement('ctrlx');
  }
  if (ctrlPressed && key.toLowerCase() === 'z') {
      showAchievement('ctrlz');
  }
  if (ctrlPressed && key.toLowerCase() === 'y') {
      showAchievement('ctrly');
  }
  if (ctrlPressed && key.toLowerCase() === 'a') {
      showAchievement('ctrla');
  }
  if (ctrlPressed && key.toLowerCase() === 's') {
      showAchievement('ctrls');
  }
  if (ctrlPressed && key.toLowerCase() === 'p') {
      showAchievement('ctrlp');
  }
  if (ctrlPressed && key.toLowerCase() === 'f') {
      showAchievement('ctrlf');
  }
  if (ctrlPressed && key.toLowerCase() === 'n') {
      showAchievement('ctrln');
  }
  if (ctrlPressed && key.toLowerCase() === 'o') {
      showAchievement('ctrlo');
  }
  if (ctrlPressed && key.toLowerCase() === 'w') {
      showAchievement('ctrlw');
  }
  if (ctrlPressed && key.toLowerCase() === 'q') {
      showAchievement('ctrlq');
  }
  if (ctrlPressed && key.toLowerCase() === 't') {
      showAchievement('ctrlt');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 't') {
      showAchievement('ctrlshiftt');
  }
  if (ctrlPressed && key === 'Tab') {
      showAchievement('ctrltab');
  }
  if (ctrlPressed && shiftPressed && key === 'Tab') {
      showAchievement('ctrlshifttab');
  }
  if (ctrlPressed && key.toLowerCase() === 'd') {
      showAchievement('ctrld');
  }
  if (ctrlPressed && key.toLowerCase() === 'l') {
      showAchievement('ctrll');
  }
  if (ctrlPressed && key.toLowerCase() === 'r') {
      showAchievement('ctrlr');
  }
  if (ctrlPressed && key.toLowerCase() === 'h') {
      showAchievement('ctrlh');
  }
  if (ctrlPressed && key.toLowerCase() === 'e') {
      showAchievement('ctrle');
  }
  if (ctrlPressed && key.toLowerCase() === 'k') {
      showAchievement('ctrlk');
  }
  if (ctrlPressed && key.toLowerCase() === 'u') {
      showAchievement('ctrlu');
  }
  if (ctrlPressed && key.toLowerCase() === 'b') {
      showAchievement('ctrlb');
  }
  if (ctrlPressed && key.toLowerCase() === 'i') {
      showAchievement('ctrli');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'n') {
      showAchievement('ctrlshiftn');
  }
  if (ctrlPressed && shiftPressed && key === 'Escape') {
      showAchievement('ctrlshiftesc');
  }
  if (ctrlPressed && key === 'Escape') {
      showAchievement('ctrlesc');
  }
  if (ctrlPressed && key === ' ') {
      showAchievement('ctrlspace');
  }

  if (altPressed && key === 'Tab') {
      showAchievement('alttab');
  }
  if (altPressed && shiftPressed && key === 'Tab') {
      showAchievement('altshifttab');
  }
  if (altPressed && key === 'F4') {
      showAchievement('altf4');
  }
  if (altPressed && key === 'Enter') {
      showAchievement('altenter');
  }
  if (altPressed && key === ' ') {
      showAchievement('altspace');
  }
  if (altPressed && key.toLowerCase() === 'f') {
      showAchievement('altf');
  }
  if (altPressed && key.toLowerCase() === 'e') {
      showAchievement('alte');
  }
  if (altPressed && key.toLowerCase() === 'p') {
      showAchievement('altp');
  }
  if (altPressed && key.toLowerCase() === 'd') {
      showAchievement('altd');
  }
  if (altPressed && key.toLowerCase() === 'h') {
      showAchievement('alth');
  }
  if (altPressed && key.toLowerCase() === 's') {
      showAchievement('alts');
  }
  if (altPressed && key.toLowerCase() === 'n') {
      showAchievement('altn');
  }
  if (altPressed && shiftPressed && key.toLowerCase() === 'd') {
      showAchievement('altshiftd');
  }
  if (altPressed && shiftPressed && key.toLowerCase() === 's') {
      showAchievement('altshifts');
  }
  if (altPressed && key === 'ArrowLeft') {
      showAchievement('altleftarrow');
  }
  if (altPressed && key === 'ArrowRight') {
      showAchievement('altrightarrow');
  }
  if (altPressed && key === 'ArrowUp') {
      showAchievement('altuparrow');
  }
  if (altPressed && key === 'ArrowDown') {
      showAchievement('altdownarrow');
  }
  if (windowsPressed && key.toLowerCase() === 'd') {
      showAchievement('windowsd');
  }
  if (windowsPressed && key.toLowerCase() === 'e') {
      showAchievement('windowse');
  }
  if (windowsPressed && key.toLowerCase() === 'l') {
      showAchievement('windowsl');
  }
  if (windowsPressed && key.toLowerCase() === 'r') {
      showAchievement('windowsr');
  }
  if (windowsPressed && key.toLowerCase() === 'm') {
      showAchievement('windowsm');
  }
  if (windowsPressed && shiftPressed && key.toLowerCase() === 'm') {
      showAchievement('windowsshiftm');
  }
  if (windowsPressed && key === 'Tab') {
      showAchievement('windowstab');
  }
  if (windowsPressed && key === 'Pause') {
      showAchievement('windowspause');
  }
  if (windowsPressed && key.toLowerCase() === 'i') {
      showAchievement('windowsi');
  }
  if (windowsPressed && key.toLowerCase() === 'x') {
      showAchievement('windowsx');
  }
  if (windowsPressed && key.toLowerCase() === 'a') {
      showAchievement('windowsa');
  }
  if (windowsPressed && key.toLowerCase() === 'c') {
      showAchievement('windowsc');
  }
  if (windowsPressed && key.toLowerCase() === 'v') {
      showAchievement('windowsv');
  }
  if (windowsPressed && shiftPressed && key.toLowerCase() === 's') {
      showAchievement('windowsshifts');
  }
  if (windowsPressed && key === '+') {
      showAchievement('windowsplus');
  }
  if (windowsPressed && key === '-') {
      showAchievement('windowsminus');
  }
  if (windowsPressed && key === 'PrintScreen') {
      showAchievement('windowsprtscn');
  }
  if (windowsPressed && ctrlPressed && key.toLowerCase() === 'd') {
      showAchievement('windowsctrld');
  }
  if (windowsPressed && ctrlPressed && key === 'ArrowLeft') {
      showAchievement('windowsctrlleftarrow');
  }
  if (windowsPressed && ctrlPressed && key === 'ArrowRight') {
      showAchievement('windowsctrlrightarrow');
  }
  if (windowsPressed && ctrlPressed && key === 'F4') {
      showAchievement('windowsctrlf4');
  }
  if (key === 'F1') {
      showAchievement('f1');
  }
  if (key === 'F2') {
      showAchievement('f2');
  }
  if (key === 'F3') {
      showAchievement('f3');
  }
  if (key === 'F4') {
      showAchievement('f4');
  }
  if (key === 'F5') {
      showAchievement('f5');
  }
  if (key === 'F6') {
      showAchievement('f6');
  }
  if (key === 'F7') {
      showAchievement('f7');
  }
  if (key === 'F8') {
      showAchievement('f8');
  }
  if (key === 'F9') {
      showAchievement('f9');
  }
  if (key === 'F10') {
      showAchievement('f10');
  }
  if (key === 'F11') {
      showAchievement('f11');
  }
  if (key === 'F12') {
      showAchievement('f12');
  }
  if (shiftPressed && key === 'Delete') {
      showAchievement('shiftdelete');
  }
  if (shiftPressed && key === 'Insert') {
      showAchievement('shiftinsert');
  }
  if (shiftPressed && key === 'Tab') {
      showAchievement('shifttab');
  }
  if (shiftPressed && key === 'F10') {
      showAchievement('shiftf10');
  }
  if (shiftPressed && key === 'F3') {
      showAchievement('shiftf3');
  }
  if (shiftPressed && key === 'F5') {
      showAchievement('shiftf5');
  }
  if (shiftPressed && key === 'F6') {
      showAchievement('shiftf6');
  }
  if (shiftPressed && key === 'F7') {
      showAchievement('shiftf7');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'l') {
      showAchievement('ctrlshiftl');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'k') {
      showAchievement('ctrlshiftk');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'p') {
      showAchievement('ctrlshiftp');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'c') {
      showAchievement('ctrlshiftc');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'v') {
      showAchievement('ctrlshiftv');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'e') {
      showAchievement('ctrlshifte');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'f') {
      showAchievement('ctrlshiftf');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'q') {
      showAchievement('ctrlshiftq');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'r') {
      showAchievement('ctrlshiftr');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'u') {
      showAchievement('ctrlshiftu');
  }
  if (ctrlPressed && shiftPressed && key.toLowerCase() === 'b') {
      showAchievement('ctrlshiftb');
  }

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
aboutContent.innerHTML = '<p><a href="https://www.youtube.com/watch?v=rEcOzjg7vBU" target="_blank">Abc</a> and <span id="cat-name">Cat</span> are people</p>';
document.body.appendChild(aboutContent);

aboutTab.addEventListener('click', () => {
  aboutContent.classList.toggle('open');
});

const catNameSpan = document.getElementById('cat-name');
let keyImageVisible = false;
catNameSpan.addEventListener('click', () => {
    showAchievement('developerskey');
    if (!keyImageVisible) {
        keyImageVisible = true;
        const keyImageContainer = document.createElement('div');
        keyImageContainer.id = 'key-image-container';
        const keyImage = document.createElement('img');
        keyImage.src = 'https://i.pinimg.com/originals/03/84/8b/03848b2fe801b23ef242155660e185bc.png';
        keyImage.id = 'key-image';
        keyImageContainer.appendChild(keyImage);
        document.body.appendChild(keyImageContainer);
    }
});

achievements['developerskey'] = {
    title: 'Developers Key',
    description: 'woah :o howd u find this?'
};

totalAchievements = Object.keys(achievements).length;
updateAchievementList();
