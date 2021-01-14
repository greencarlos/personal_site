const container = document.querySelector('.container');
const submit = container.querySelector('.submit');
const userMessage = container.querySelector('.userMessage');

const train = container.querySelector('.train');
const yesBtn = train.querySelector('.yesBtn');
const noBtn = train.querySelector('.noBtn');

const dialog = container.querySelector('.dialogBox')

const debounce = (fn, time, timeout) => {
	return () => {
		const funcCall = () => fn()

		clearTimeout(timeout)
		timeout = setTimeout(funcCall, time)
	}
}

const helpful = () => train.style.visibility = 'visible'
const trainBot = () =>	train.style.visibility = 'hidden' 
const wasHelpful = debounce(helpful, 15000)

yesBtn.addEventListener('click', trainBot);
noBtn.addEventListener('click', trainBot);
userMessage.addEventListener('keyup', wasHelpful)

submit.addEventListener('click', () => {
  const message = userMessage.value;
  dialog.innerHTML += `<p><b>${message}</b></p>`;

  setTimeout(() => {
    dialog.innerHTML += `
		  <br/> <p><i>48</i></p>
		`;
  }, 2000);
});
