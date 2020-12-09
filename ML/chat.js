const container = document.querySelector('.container');
const submit = document.querySelector('.submit');
const userMessage = document.querySelector('.userMessage');

const train = document.querySelector('.train');
const yesBtn = train.querySelector('.yesBtn');
const noBtn = train.querySelector('.noBtn');

const sep = document.querySelector('.sep')

for (let i = 0; i < 100; i++) {
	sep.innerHTML += `<h1>Hello World!</h1>`
}

submit.addEventListener('click', () => {
  console.log('submit was clicked!');
  const message = userMessage.value;
  container.innerHTML += `<p><b>${message}</b></p>`;

  setTimeout(() => {
    train.style.visibility = 'visible';
    console.log('train', train);
    container.innerHTML += `
		       <br/>
					<p><i>48</i></p>
				`;
  }, 1000);
});

yesBtn.addEventListener('click', () => {
  console.log('yes was clicked');
  train.style.visibility = 'hidden';
});

noBtn.addEventListener('click', () => {
  console.log('no was clicked');
  train.style.visibility = 'hidden';
});
