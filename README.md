# CISCO virtual experience 
The tasks for the CISCO Virtual Experience on Forage

## Task Five: Final Task
Create a short video with OBS showcasing Sextant.

https://user-images.githubusercontent.com/97693483/188325540-ae3967a0-55dc-4fa9-9e72-30fbb70153cc.mp4


## Task Four
Create a new React Component, which displays packet latency from Pylon. Your component should open a websocket to ws://localhost:55455, the endpoint advertised by Pylon.
The latency from Pylon was never received.
The error message on the console was:

![2022-09-04 (1)](https://user-images.githubusercontent.com/97693483/188322930-3c34812f-af69-4dca-b22f-cdeac22cde08.png)

I came to understand from StackOverflow answers that the issue is the ws (rather than wss) connection, lacks a TLC certificate. I looked at the model answer after submission to make sure there was no issue from my code, and there was not.


## Task Three
Create a new component that should make an HTTP request to the ipify API as soon as it is mounted and surface the resultant data to the user. The component should accept a prop that determines whether it requests an ipv4 address or an ipv6 address.
Add two instances of this component to your page, both wrapped in an exhibit component from the last task. One should display the user’s ipv4 address, and the other should display the user’s ipv6 address.

![2022-09-04](https://user-images.githubusercontent.com/97693483/188316640-6f6c678a-e2dc-4fe8-91ec-8144f2a371e4.png)


## Task Two
Create a banner component at the top of the page which displays the site’s title. And an exhibit component that displays a heading and any child components.

![2022-09-03](https://user-images.githubusercontent.com/97693483/188292550-5c21abc6-73f9-490a-993f-ae241990b973.png)

