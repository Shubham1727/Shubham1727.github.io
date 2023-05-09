AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Decentralised Raffle Lottery Deployed On A Blockchain",
    cardImage: "assets/images/project-page/eth2.jpg",
    description:
      "Made a verifiably random autonomus decentralised lottery and was deployed on a blockchain.",
    tagimg: "assets/images/project-page/solidity.svg",
    Previewlink: "",
    Githublink: "https://github.com/Shubham1727/Decentralised-Raffle-lottery-deployed-on-a-blockchain",
  },
  {
    title: "Hardhat Fund Me ",
    cardImage: "assets/images/project-page/lottery.png",
    description:
      "A decentralised crowdfunding platform built on Eth blockchain using Hardhat.",
    tagimg: "assets/images/project-page/solidity.svg",
    Previewlink: "",
    Githublink: "https://github.com/Shubham1727/hardhat-fund-me",
  },
  {
    title: "MoneyFlo",
    cardImage: "assets/images/project-page/ds.jpg",
    description:
      "Banking-Management-System with Twilio API for real-time messaging and efficient transaction management.",
    tagimg: "assets/images/project-page/python.jpg",
    Previewlink: "",
    Githublink: "https://github.com/agakshay304/DS-Lab-Mini-Project",
  },
  {
    title: "iFilter ",
    cardImage: "assets/images/project-page/imageP.png",
    description: "CUDA-based image processing project that enables users to apply filters.",
    tagimg: "assets/images/project-page/cuda.jpg",
    Previewlink: "",
    Githublink: "https://github.com/agakshay304/PCAP-Mini-Project",
  },
  {
    title: "VaultifyMe",
    cardImage: "assets/images/project-page/vaultifyme.jpg",
    description:
      "A convenient platform to store, access and manage essential documents",
    tagimg: "assets/images/project-page/django.jpg",
    Previewlink: "",
    Githublink: "https://github.com/agakshay304/IT-Lab-Mini-Project",
  },
  {
    title: "CommDeviceIdentifier",
    cardImage: "assets/images/project-page/detect.avif",
    description:
      "A tool to identify the types of devices used in communication (Such as Mobile/Desktop)",
    tagimg: "assets/images/project-page/python.jpg",
    Previewlink: "",
    Githublink: "https://github.com/agakshay304/CN-Mini-Project",
  },
  {
    title: "Multithreading and Multiprocessing",
    cardImage: "assets/images/project-page/multithreading.jpg",
    description:
      "A Comparative Study of Multithreading and Multiprocessing in Various Algorithms.",
    tagimg: "assets/images/project-page/c.png",
    Previewlink: "",
    Githublink: "https://github.com/agakshay304/OS-Mini-Project",
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, description, cardImage, Previewlink, Githublink,tagimg }) => {
      output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header"></div>
            <div class="tagging">
              <div class="tagging-content">
                <img src="${tagimg}" alt="" class="tagging-img" style="position: absolute; top: 5px; right: 5px; width: 30px; height: 30px;" />
              </div>
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div"><h1 class="title"><a href="#">${title}</a></h1><ul class="menu-content"><br>
                <li><a href="${Githublink}" " target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
              </ul></div>
                <div class="description"><p style="font-family: 'Courier New', Courier, monospace;">${description}</p></div>
              </div>
            </div>
          </div>
        </div>`;
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
