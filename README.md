Intro
==========================
This is a ridiculously stupid chat-bot I coded for my personal website (www.ahrenfullstop.com). It's a false AI that heuristically creates the impression of a thinking bot.
V1 This version, of many more chat-bots to come, was coded mainly to learn about the nuances and pitfalls of doing it this way.
V2 Involves basic natural language processing and conversation flow using a database.
V3 Involves actual machine learning using a neural network.

Tech Stack
==========================
This is super basic pure JavaScript, HTML and CSS.
It was done like this to keep dependencies and conflicts to a minimum.
Ajax, JQuery etc. could all make this more efficient, but they clashed with my existing website.

How it works
==========================
The client side script picks up on predefined phrases or words to decide how to respond.
Some of these phrases are context aware. But not many.
The Chat-bot also has some responses which change dynamically so as not to seem too repetitive. 
This all appeals to human heuristics which may lead to the impression of intelligence, as is well documented in game design with the use of solid state machines.

Why? Just... why?
==========================
Q: Why is the CSS in the same file as the HTML???
A: Because adding resources from a seperate CSS file causes issues in a wordpress site. All in one is the easiest fix.

Q: Okay, so then why is the JS seperate?
A: The JS is hosted seperately for ease of changes and referencing.

Q: Whats with the noddy image?
A: That is for an easteregg coded into the bot.

Licence
=========================
Nothing here is proprietary, nor particulaly useful... Go for it.