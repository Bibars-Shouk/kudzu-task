const nextBtn = document.querySelector("#process-btn");

const processContainer = document.querySelector("#process-container");
const processTerm = document.querySelector("#process-term");
const processDefinition = document.querySelector("#process-definition");

// svg elements
const hand = document.querySelector("#hand");
const handCircle = document.querySelector("#hand-circle");

let currentStep = 0;
const processSteps = [
  {
    term: "1.Emphasise",
    definition: `We gain an empathetic understanding of the problem we’re trying
    to solve, typically through user research. Empathy is crucial to
    a human-centered design process such as design thinking because
    it allows you to set aside your own assumptions about the world
    and gain real insight into users and their needs.`,
  },
  {
    term: "2.Define",
    definition: `We organize the information we have gathered during 
    the Empathize stage. We analyze your observations to define the core problems
    our team have identified up to this point.`,
  },
  {
    term: "3.Ideate",
    definition: `We’ve analyzed your observations in the Define stage to create
     a user centric problem statement. With this solid background, our 
     team members can start to look at the problem from different perspectives and ideate innovative solutions to our problem statement.`,
  },
  {
    term: "4.Prototype",
    definition: `We identify the best possible solution for each of the problems 
    identified during the first three stages. The solutions are 
    implemented within the prototypes and, one by one, they are 
    investigated and then accepted, improved or rejected based 
    on the users’ experiences.`,
  },
  {
    term: "5.Test",
    definition: `We rigorously test the complete product using the best solutions 
    identified in the Prototype stage.`,
  },
  {
    term: "6.Build",
    definition: `Finally! We biuld the product using the latest technologies and 
    ensure our customer satisfaction!`,
  },
];

const handleSvgAnimation = () => {
  const tepArr = [
    "emphasise",
    "define",
    "ideate",
    "prototype",
    "test",
    "build",
  ];

  document
    .querySelector(`#step-circle--${currentStep}`)
    .classList.remove("active");
  document
    .querySelector(`#step-number--${currentStep}`)
    .classList.remove("active");

  document
    .querySelector(`#step-tag-${tepArr[currentStep - 1]}`)
    .classList.remove("active");

  if (currentStep + 1 > 6) {
    currentStep = 0;
  }

  document
    .querySelector(`#step-tag-${tepArr[currentStep]}`)
    .classList.add("active");

  nextBtn.disabled = true;
  handCircle.classList.add("animate");
  hand.classList.add(`jump-to-step-${currentStep + 1}`);
  document
    .querySelector(`#step-circle--${currentStep + 1}`)
    .classList.add("active");
  document
    .querySelector(`#step-number--${currentStep + 1}`)
    .classList.add("active");
  setTimeout(() => {
    hand.classList.remove(`jump-to-step-${currentStep + 1}`);
    handCircle.classList.remove("animate");
    nextBtn.disabled = false;
  }, 1000);
};

const handleContent = () => {
  setTimeout(() => {
    processTerm.innerText = processSteps[currentStep].term;
    processDefinition.innerText = processSteps[currentStep].definition;
  }, 500);

  processContainer.classList.add("animate");
  setTimeout(() => {
    processContainer.classList.remove("animate");
  }, 1000);
};

nextBtn.addEventListener("click", (e) => {
  currentStep++;
  console.log(currentStep);
  handleSvgAnimation();
  handleContent();
});
