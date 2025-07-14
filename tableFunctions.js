function getMaxSquareSize(taskCount) { // Returns the largest size table that can fit all of the generated tasks
  return Math.floor(Math.sqrt(taskCount));
}

function getBoardSettings() { // Checks user settings for the board
    let seed = checkSeed(document.getElementById('seedInput').value); // Gets seed and checks/clears it of non-numeric characters if not a secret seed
    const isSecret = typeof seed === 'string' && secretSeeds.hasOwnProperty(seed); // If seed returns as a string, then it is a secret seed
    const rawSeed = seed;

    if (seed === '') {
        seed = Math.floor(Math.random() * 1000000000); // Generate a random seed
        document.getElementById('seedInput').value = seed; // Display the selected seed
    }
    if (isSecret) {
        seed = Math.floor(Math.random() * 100); // Needs to be fixed to handle bingo syncing during secretseed use
    }

    return {
        seed: parseInt(seed, 10),
        rawSeed,
        isSecret,
        size: parseInt(document.getElementById('tableSize').value, 10),
        difficulty: parseInt(document.getElementById('difficulty').value, 10),
        forceUnique: document.getElementById('forceUnique').checked,
        enablePlants: document.getElementById('enablePlantSet').checked,
        enableTinkerables: document.getElementById('enableTinkerables').checked
        //enableTipSet eventually
    };
}

function generateTasks(settings, enabledAwards, iconPool) {
    const tasks = [];
    let unusedPinatas = [...iconPool]; // Handles cases when forceUnique is enabled
    let usedPinatas = new Set();
    let index = 0; // Helps vary the seed for each cell

    while (tasks.length < settings.size * settings.size) {
        let found = false;

        if (settings.forceUnique) {
            let attempts = 0;
            while (attempts < 1000 && !found && unusedPinatas.length > 0) {
                const randomIndex = Math.floor(seededRandom(settings.seed + index + attempts) * unusedPinatas.length);
                const pinataObj = unusedPinatas[randomIndex];
                const pinataURL = pinataObj.url;

                if (usedPinatas.has(pinataURL)) {
                    attempts++;
                    continue;
                }

                const validAwards = validCombos[pinataURL]?.filter(award =>
                    enabledAwards.includes(award) &&
                    !checkAwardByDifficulty(pinataURL, award, settings.difficulty)
                ) || [];

                if (validAwards.length > 0) {
                    const randomAwardIndex = Math.floor(seededRandom(settings.seed + index + attempts + 1) * validAwards.length);
                    const selectedAward = validAwards[randomAwardIndex];
                    tasks.push({ pinata: pinataURL, award: selectedAward });
                    unusedPinatas.splice(randomIndex, 1);
                    usedPinatas.add(pinataURL);
                    found = true;
                } else {
                    attempts++;
                }
            }
        } else {
            const result = getValidCombo(iconPool, enabledAwards, settings.seed, index);
            if (!result.pinata.includes('ErrorFallback')) {
                tasks.push(result);
                found = true;
            }
        }

        if (!found) break;
        index++;
    }

    return tasks;
}

function renderBoard(tasks, size) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const table = document.createElement('table');
    let taskIndex = 0;

    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const { pinata, award } = tasks[taskIndex++] || {};

            const cell = document.createElement('td');
            const iconContainer = document.createElement('div');
            iconContainer.classList.add('icon-container');

            const mainIcon = document.createElement('img');
            mainIcon.src = pinata;
            mainIcon.classList.add('pinata-icon');
            iconContainer.appendChild(mainIcon);

            const awardIcon = document.createElement('img');
            awardIcon.src = award;
            if (awardIcon.src.endsWith('UI_Icon_Attract.PNG?raw=true')) {
                awardIcon.classList.add('award-type2');
            } else {
                awardIcon.classList.add('award-type');
            }
            iconContainer.appendChild(awardIcon);

            cell.appendChild(iconContainer);
            cell.addEventListener('click', () => toggleOverlayImage(cell));
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}
