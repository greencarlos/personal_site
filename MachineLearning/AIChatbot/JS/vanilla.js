const container = document.querySelector('.container');
const submit = container.querySelector('.submit');
const userQuestion = container.querySelector('.userQuestion');

const train = container.querySelector('.train');
const yesBtn = train.querySelector('.yesBtn');
const noBtn = train.querySelector('.noBtn');

const dialog = container.querySelector('.dialogBox');

const debounce = (fn, time, timeout) => {
  return () => {
    const funcCall = () => fn();

    clearTimeout(timeout);
    timeout = setTimeout(funcCall, time);
  };
};

const helpful = () => (train.style.visibility = 'visible');
const trainBot = () => (train.style.visibility = 'hidden');
const wasHelpful = debounce(helpful, 5000);

yesBtn.addEventListener('click', trainBot);
noBtn.addEventListener('click', trainBot);

/*
TODO: Query Wikipedia API for larger and more general text pasage 

https://en.wikipedia.org/w/api.php

https://www.programmableweb.com/api/wikipedia-rest-api

*/

const passage =
  `Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet. The meaining of the universe is 42.Soon the robots will take over.Robots will be taking over soon.Robots will be self aware soon. This is all silly.It's is all fun and games until AI becomes a SuperIntelligence. 
	`;

submit.addEventListener('click', () => {
  const question = userQuestion.value.trim();
  dialog.innerHTML += `<p><b>${question}</b></p>`;
  console.log('passage', passage);

  // Load the model.
  qna.load().then(model => {
    // Find the answers
    model.findAnswers(question, passage).then(answers => {
      console.log('Answers: ', answers);

      if (answers.length === 0) {
        console.log('No valid answers!');
        dialog.innerHTML += `
				<br /><p><em>
					I'm not sure, try asking in a different way
					or a different question.
				</em></p>
				`;
        return;
      }

      let maxScore = answers[0].score;
      let maxScoreId = 0;

      answers.forEach((ans, idx) => {
        if (ans.score > maxScore) {
          maxScore = ans.score;
          maxScoreId = idx;
        }
      });

      dialog.innerHTML += `
			<br /><p><em>${answers[maxScoreId].text}</em></p>
			`;
      wasHelpful();
    });
  });

  setTimeout(() => {
    dialog.innerHTML += `
		  <br/> 
			<p>
			  <em>
				Give me a couple seconds to think...
				</em>
		 </p>
		`;
  }, 5000);

  setTimeout(() => {
    dialog.innerHTML += `<p><em>...</em></p>`;
  }, 15000);
});
