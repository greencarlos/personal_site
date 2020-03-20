AUDIO

<audio src="https://songz.c0d3.com/js4/examples/0415.mp3" class="aud" controls></audio>

- the src attribute tells the browser where to get the audio file
- the controls attribute tells the browser to display the audio controls 

The audio tag has a seperate closing tag because it's possible to give it children elements.

Audio elements have helper functions such as play() and pause().


VIDEO

Video works very similarly to audio elements.


WEBCAM

Now that you know how to create a video element, you can use it
to display the video from your webcam.

Steps to display webcam video:
1. use navigator.mediaDevices.getUserMedia to the system devices.
This function returns a promise.

2. After getting the video stream from the webcam, set the
srcObject attribute of the video element to the video stream.
We are not using src because it is used for URLs.

3. Play the video


CANVAS
The canvas HTML tag creates an element that you can draw 
pictures and shapes in using Javascript.

First you must get the canvas element, then you get the context
by running the canvas element's getContext function.

The context is what lets your actually daw on the canvas;
think of it like a paintbrush that you would use to paint 
onto a physical canvas.


