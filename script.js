// let detailsHeadersLeft = document.querySelector(
//   ".details-sec-box .left-side div:nth-child()"
// );

// let detailsHeadersright = document.querySelector(
//   ".details-sec-box .right-side div h6"
// );
let clockBox = document.querySelector(".clock-sec .clock-sec-box"),
  quoteBox = document.querySelector(".clock-sec .clock-sec-box .quote"),
  timeMsg = document.querySelector(
    ".clock-sec .clock-sec-box .clock .msg span"
  ),
  timeMsgIcon = document.querySelector(
    ".clock-sec .clock-sec-box .clock .msg svg"
  ),
  current_time = document.querySelector(
    ".clock-sec .clock-sec-box .clock .time"
  ),
  current_offset = document.querySelector(
    ".clock-sec .clock-sec-box .clock .offset"
  ),
  current_location = document.querySelector(
    ".clock-sec .clock-sec-box .clock .location span"
  ),
  quote = document.querySelector(".clock-sec .clock-sec-box .quote p"),
  author = document.querySelector(".clock-sec .clock-sec-box .quote .author"),
  refreshBtn = document.querySelector(
    ".clock-sec .clock-sec-box .quote .refresh"
  ),
  detailsBox = document.querySelector(".details-sec"),
  current_timezone = document.querySelector(
    ".details-sec .details-sec-box .left-side .timezone h2"
  ),
  current_dayOfYear = document.querySelector(
    ".details-sec .details-sec-box .left-side .doy h2"
  ),
  current_dayOfWeek = document.querySelector(
    ".details-sec .details-sec-box .right-side .dow h2"
  ),
  current_weekNumber = document.querySelector(
    ".details-sec .details-sec-box .right-side .week-num h2"
  ),
  ShowMoreBtn = document.querySelector(".clock-sec .clock-sec-box .clock .btn");
var DateTime = luxon.DateTime;

// Main toggle view (More/Less Button)
ShowMoreBtn.addEventListener("click", () => {
  ShowMoreBtn.classList.toggle("show");

  if (ShowMoreBtn.classList.contains("show")) {
    ShowMoreBtn.innerHTML = `Less <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>`;

    quoteBox.style.display = "none";
    detailsBox.style.display = "block";
    clockBox.style.height = "50vh";
  } else {
    ShowMoreBtn.innerHTML = `More <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#FFF" stroke-width="2" fill="none" d="m1 1 6 6 6-6" />
    </svg>`;

    quoteBox.style.display = "block";
    detailsBox.style.display = "none";
    clockBox.style.height = "100vh";
  }
});

function renderQuoteBox(data) {
  quote.innerText = data.content;
  author.innerText = data.author;
}
function renderTimeBox(data) {
  if (data.hour >= 5 && data.hour < 12) {
    timeMsg.innerText = "Good Morning";

    document.body.style.backgroundImage =
      "url('./assets/desktop/bg-image-daytime.jpg')";
    detailsBox.style.backgroundColor = "#fff";
    timeMsgIcon.innerHTML = `
    <path
      d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z"
      fill="#FFF" fill-rule="nonzero" />
    `;
  } else if (data.hour >= 12 && data.hour < 18) {
    timeMsg.innerText = "Good afternoon";
    document.body.style.backgroundImage =
      "url('./assets/desktop/bg-image-daytime.jpg')";
    detailsBox.style.backgroundColor = "#fff";
    document.body.classList.toggle("day");
    timeMsgIcon.innerHTML = `
    <path
      d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z"
      fill="#FFF" fill-rule="nonzero" />
    `;
  } else {
    timeMsg.innerText = "Good Evening";
    document.body.style.backgroundImage =
      "url('./assets/desktop/bg-image-nighttime.jpg')";
    detailsBox.style.backgroundColor = "#000";
    // detailsHeadersLeft.style.color = "#fff";
    // detailsHeadersright.style.color = "#fff";
    timeMsgIcon.innerHTML = `
    <path d="M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z" fill="#FFF" fill-rule="nonzero"/>
    `;
  }

  current_time.innerText = `${data.hour}:${data.minute}`;
  current_offset.innerText = data.offsetNameShort;
  current_dayOfYear.innerText = data.ordinal;
  current_dayOfWeek.innerText = data.weekday;
  current_weekNumber.innerText = data.weekNumber;
}

function renderLocationBox(data) {
  current_location.innerText = `${data.regionName}, ${data.countryCode}`;
  current_timezone.innerText = data.timezone;
  api_timezone = `${data.timezone}/${data.regionName}`;
}

// Fetching & rendering Location|Quote
const location_api = "http://ip-api.com/json/ ";
const quote_api = "https://api.quotable.io/random/";

async function getQuote() {
  try {
    const { data } = await axios(quote_api);
    renderQuoteBox(data);
  } catch (error) {
    if (error.response.status === 404) {
      return error;
    }
  }
}

async function getTime() {
  // useing luxon library to get time
  const dt = DateTime.local();
  renderTimeBox(dt);
}

async function getLocation() {
  try {
    const { data } = await axios(location_api);
    renderLocationBox(data);
  } catch (error) {
    if (error.response.status === 404) {
      return error;
    }
  }
}

refreshBtn.addEventListener("click", () => {
  getQuote();
});

window.onload = () => {
  getQuote();
  getTime();
  getLocation();
};
