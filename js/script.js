/*
* Fills html page with information
in the json file generated.
*/

// for retrieving content from generated js file
const TOP_PEOPLE = "top_people";
const TOTAL_REACTS_AND_STICKERS = "total_reacts_and_stickers";
const TOTAL_MESSAGES = "total_messages";
const TOP_PHRASES = "top_phrases";
const SHARE_NAMES = "share_names";
const CUSTOM_IMAGE = "custom_image";

window.onload = function() {
  const topPeopleHeading = document.getElementById("top-people-or-num-messages-sent");
  const topPeople = document.getElementById("top-people");
  const topPhrases = document.getElementById("top-phrases");
  const totalMessages = document.getElementById("total-messages");
  const totalReactsAndStickers = document.getElementById("total-reacts-and-stickers");
  const pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", pauseStartAnimation);

  // if person chose to show names, set heading to be "top people".
  // if person chose to show number of messages that their top people sent,
  // set heading to be "top number of messages others sent"
  if (!yourData[SHARE_NAMES]) {
    topPeopleHeading.innerText = "Top # Messages Others Sent";
  }

  // populate top people
  for (let i = 0; i < yourData[TOP_PEOPLE].length; i++) {
    let el = document.createElement("li");
    el.innerText = yourData[TOP_PEOPLE][i];
    topPeople.appendChild(el);
  }

  // populate top phrases
  for (let i = 0; i < yourData[TOP_PHRASES].length; i++) {
    let el = document.createElement("li");
    el.innerText = yourData[TOP_PHRASES][i];
    topPhrases.appendChild(el);
  }

  // populate total messages sent
  totalMessages.innerText = yourData[TOTAL_MESSAGES].toLocaleString();

  // populate total reacts and stickers sent
  totalReactsAndStickers.innerText = yourData[TOTAL_REACTS_AND_STICKERS].toLocaleString();
}

function pauseStartAnimation() {
  const pauseButtonText = document.getElementById("pause-button-text");
  const pauseButtonIcon = document.getElementById("pause-button-icon");
  if (paused) {
    pauseButtonText.innerText = "Pause";
    pauseButtonIcon.innerText = "pause";
    paused = false;
  } else {
    pauseButtonText.innerText = "Play";
    pauseButtonIcon.innerText = "play_arrow";
    paused = true;
  }
}
