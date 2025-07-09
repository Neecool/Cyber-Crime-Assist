const scenarios = {
  "UPI Fraud": [
    "Never approve unexpected UPI collect requests.",
    "Take screenshot of the request and transaction ID.",
    "Call your bank's helpline immediately.",
    "Report at cybercrime.gov.in or call 1930."
  ],
  "Unauthorized Bank Debit": [
    "Freeze your debit/credit card or net banking.",
    "Note down the transaction and bank details.",
    "Submit written complaint to the bank.",
    "Report at cybercrime.gov.in and lodge FIR if needed."
  ],
  "Fake Online Purchase": [
    "Collect payment proof and seller details.",
    "Try contacting the seller/support.",
    "File dispute with your bank or payment app.",
    "Report scam on cybercrime.gov.in with evidence."
  ],
  "Job Scam": [
    "Do not pay for job offers or training.",
    "Research the company on LinkedIn/Google.",
    "Collect screenshots of emails, chats.",
    "File complaint with cybercrime.gov.in."
  ],
  "Threatening Messages": [
    "Do not respond to threatening messages.",
    "Take clear screenshots with phone number.",
    "Report on cybercrime.gov.in and call 1930.",
    "Visit nearby cyber police station if serious."
  ],
  "Social Media Hacking": [
    "Try account recovery via email/phone.",
    "Change passwords of linked accounts.",
    "Report the hack to platform support.",
    "File complaint with cyber cell with screenshots."
  ],
  "Identity Theft": [
    "Check if your Aadhaar/PAN is misused.",
    "Inform the issuing authority (UIDAI/IT).",
    "Collect any fake profile details/screenshots.",
    "Report online + visit cyber cell."
  ],
  "KYC/Loan App Scam": [
    "Do not click links or share OTP.",
    "Uninstall fake apps immediately.",
    "Block calls/SMS from scammers.",
    "Report loan fraud or harassment online."
  ],
  "Investment Scam": [
    "Do not trust unknown WhatsApp/Telegram groups.",
    "Save chat, screenshot transaction proofs.",
    "Report to RBI/SEBI and cybercrime portal.",
    "Do not invest further without due diligence."
  ],
  "Sextortion": [
    "Don’t panic or delete chat/media.",
    "Take full chat screenshots + call logs.",
    "Do not pay or agree to blackmail.",
    "Report immediately to cyber cell."
  ],
  "QR Code Scam": [
    "Never scan QR codes to receive money.",
    "Take note of the QR & payment app info.",
    "Block the number and contact support.",
    "File complaint with evidence of fraud."
  ],
  "Fake Officer Scam": [
    "Do not share Aadhaar/PAN over call.",
    "Demand written official email ID.",
    "Record call if threatened or blackmailed.",
    "Report and visit nearest cyber police."
  ],
  "Phishing Email": [
    "Do not click on suspicious email links.",
    "Report phishing to your email provider.",
    "Forward mail to cybercrime.gov.in.",
    "Delete and block the sender."
  ],
  "OTP Fraud": [
    "Never share OTP, even with 'officials'.",
    "Disconnect the call & save number.",
    "Report to your bank and cyber portal.",
    "Visit cyber police station if amount is debited."
  ]
};

const contacts = {
  AndhraPradesh: "Vijayawada Cyber Cell: 0866‑2970146",
  ArunachalPradesh: "Itanagar: 0360‑2212174",
  Assam: "Guwahati: 0361‑2736937",
  Bihar: "Patna: 0612‑2294204",
  Chhattisgarh: "Raipur: 0771‑4014158",
  Goa: "Panaji: 0832‑2421208",
  Gujarat: "Ahmedabad: 079‑25604000",
  Haryana: "Gurgaon: 0124‑2320106",
  HimachalPradesh: "Shimla: 0177‑2812341",
  Jharkhand: "Ranchi: 0651‑2216999",
  Karnataka: "Bengaluru: 080‑22943225",
  Kerala: "Trivandrum: 0471‑2721547",
  MadhyaPradesh: "Bhopal: 0755‑2443850",
  Maharashtra: "Mumbai: 022‑26573333",
  Manipur: "Imphal: 0385‑2450214",
  Meghalaya: "Shillong: 0364‑2222277",
  Mizoram: "Aizawl: 0389‑2336036",
  Nagaland: "Kohima: 0370‑2244321",
  Odisha: "Bhubaneswar: 0674‑2544477",
  Punjab: "Mohali: 0172‑2226251",
  Rajasthan: "Jaipur: 0141‑2710871",
  Sikkim: "Gangtok: 03592‑202410",
  TamilNadu: "Chennai: 044‑28513224",
  Telangana: "Hyderabad: 040‑27854730",
  Tripura: "Agartala: 0381‑2416022",
  UttarPradesh: "Lucknow: 0522‑2624547",
  Uttarakhand: "Dehradun: 0135‑2712888",
  WestBengal: "Kolkata: 033‑22143230",
  Delhi: "Delhi: 011‑23490312",
  Chandigarh: "Chandigarh: 0172‑2741900",
  JammuAndKashmir: "Jammu: 0191‑2547750",
  Ladakh: "Leh: 01982‑252200",
  AndamanAndNicobar: "Port Blair: 03192‑230397",
  Puducherry: "Puducherry: 0413‑2231234",
  DamanAndDiu: "Daman: 0260‑2230574",
  Lakshadweep: "Kavaratti: 04896‑262222"
};

window.onload = () => {
  const grid = document.getElementById("scenarios");
  Object.keys(scenarios).forEach(name => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = name;
    card.onclick = () => alertGuide(name);
    grid.appendChild(card);
  });

  const stateDropdown = document.getElementById("state-dropdown");
  Object.keys(contacts).forEach(key => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.innerText = key.replace(/([A-Z])/g, " $1").trim();
    stateDropdown.appendChild(opt);
  });
};

function alertGuide(name) {
  document.getElementById("scenario-title").innerText = name;
  const list = scenarios[name];
  const ul = document.getElementById("guide-list");
  ul.innerHTML = "";
  list.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    ul.appendChild(li);
  });
  document.getElementById("guide-box").classList.remove("hidden");
}

function showContact() {
  const selected = document.getElementById("state-dropdown").value;
  document.getElementById("contact-info").innerText =
    contacts[selected] || "";
}
