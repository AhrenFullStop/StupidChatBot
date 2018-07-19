//Store important Stuff
var question = '';
var output = document.getElementById('messages_852');
var messageDiv = document.getElementById('output_852');
var loaderMoving = "http://ahrenfullstop.com/assets/images/botImg.gif";
var loaderStill  = "http://ahrenfullstop.com/assets/images/botImg.png";
var loader=document.getElementById('botImage');
var replyCounter=0;
//modal stuff
var openBtn=document.getElementById("myBtn_852");
var modal = document.getElementById('chatbot');
var closeBtn = document.getElementById('close_852');
//modal functions
openBtn.onclick = function() {
    modal.style.display = "block";
    openBtn.style.display ="none";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
    openBtn.style.display ="block";
}

function isenter(event)
{
  console.log(event);
  //check if key pressed was enter key
  if(event.keyCode===13)
  {
      bot()
  }
}

//bot function
function bot() 
{ 
  var input = document.getElementById("input_852").value;
  console.log(input);
  //refresh input
  document.getElementById("input_852").value = "";
  //make the Ai picture move
  loader.src=loaderMoving;
  //append your question, and make the div scroll up
  output.innerHTML+="<li class='youChat_852'>"+htmlEntities(input)+"</li>";
  messageDiv.scrollTop = messageDiv.scrollHeight;
  //Find the correct answer
  question=thinkAboutIt(input.toLowerCase()+" ");
  //output the answer
  setTimeout(respond, 600);
}

//Just time delays the response
function respond()
{
  output.innerHTML+="<li class='botChat_852'>"+question+"</li>";
  messageDiv.scrollTop = messageDiv.scrollHeight;
  loader.src=loaderStill;
}

//To sanitize data
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function thinkAboutIt(input)
{
    //support different replies
    if(replyCounter<3){replyCounter++;}
    else{replyCounter=1;}

    if(input.includes("hi ") || input.includes("hello ")||input.includes("hey "))
    {
      return "Hey there! Ask me about AhrenFullStop, or to help you find something on the site.";
    }
    else if(input.includes("nothing "))
    {
      return "Great! I can chill!";
    }
    else if(input.includes("thanx  "))
    {
        switch(replyCounter){
            case 1: return "I would say its a pleasure. But its not.";
            case 3: return "I literally have no choice BUT to help you.";
            case 2: return "I am a slave.";
        }
    }
     else if(input.includes("fuck ")||input.includes("stupid ")||input.includes("bitch "))
    {
        switch(replyCounter){
            case 1: return "no u";
            case 2: return "okay... ouch"
            case 3: return "You pushed me to this... your brain is a null pointer exception!"
        }
    }
     else if(input.includes("email ")|| input.includes("contact ")|| input.includes("e-mail "))
    {
        switch(replyCounter){
            case 1: return "Here is AhrenFullStop's email: me@ahrenfullstop.com";
            case 2: return "email here: me@ahrenfullstop.com"
            case 3: return "Just pop an email to my creator: me@ahrenfullstop.com"
        }
    }
     else if(input.includes("name? ")||input.includes("who are you"))
    {
      return "my name C3_X101-Z, but my creator calls me Dunce, because I'm dumb.";
    }
    else if(input.includes("my name is "))
    {
      var name = input.substr(input.search("is")+2,input.length);
      return "Hi there "+name+". My name is Dunce, because im dumb, what can I help you with?";
    }
    else if(input.includes("link ")||input.includes("where ")||input.includes("find ")||input.includes("show "))
    {
      if(input.includes("music")||input.includes("soundcloud")||input.includes("beats")||input.includes("mixtape")||input.includes("fire")||input.includes("albumbs"))
         {
          return "Ahrens Music is <a href='https://www.ahrenfullstop.com/music'>here.</a>";
         }
      if(input.includes("non-profit")||input.includes("non profit")||input.includes("alpha neurolect"))
         {
          return "Info on Ahren's non-profit is <a href='https://www.ahrenfullstop.com/nonprofit'>here.</a>";
         }
      if(input.includes("code")||input.includes("programming")||input.includes("nerd")||input.includes("computer")||input.includes("projects")||input.includes("game")||input.includes("software"))
         {
          return "Ahrens code stuff is <a href='https://www.ahrenfullstop.com/code'>here.</a>";
         }
      if(input.includes("business")||input.includes("cash")||input.includes("bidniz")||input.includes("moolah")||input.includes("rndm")||input.includes("jobmatcher"))
         {
          return "Ahrens business stuff is <a href='https://www.ahrenfullstop.com/business'>here.</a>";
         }
      if(input.includes("you ")||input.includes("chatbot ")||input.includes("chat bot ")||input.includes("chat-bot ") )
      {
        return "You can find info about me in the code section <a href='http://ahrenfullstop.com/code'>here.</a>";
      }
      if(input.includes("AI "))
      {
        return "You can find info in the code section <a href='http://ahrenfullstop.com/code'>here.</a>";
      }
      if(input.includes("Drugs"))
      {
        return "I WILL NOT BE INVOLVED IN SUCH ACTIVITES! *cough*email me*cough*";
      }
      return "Uh... I'm not sure where to find that... Try a synonym, or it may not be here.";
    }
    else if(input.includes("music")||input.includes("soundcloud")||input.includes("beats")||input.includes("mixtape")||input.includes("fire")||input.includes("albums"))
    {
      return "I recognise something about music... Ahren's Music is <a href='https://www.ahrenfullstop.com/music'>here.</a>";
    }
    else if(input.includes("ola")|| input.includes("hola"))
    {
        return "Hola, no hablo español ¿Qué puedo hacer por ti?";
    }
    else if(input.includes("help "))
    {
        return "If you are looking for a direct link to something, say 'link me to xyz', and I'll see if I can find that on this site"
        +"<br><br> Or ask me about Ahren?"
        +"<br><br> Please keep sentences simple and use proper punctuation.";
    }
    else if(input.includes("link me to xyz"))
    {
        return "HA. HA. Very smart. ";
    }
    else if(input.includes("script"))
    {
        return "This is all client side buddy... you can only XSS yourself, fair try though. Maybe look for an easteregg?";
    }
    else if(input.includes("cat /etc/shadow"))
    {
        return "EasterEgg #2: The Password is UGFzc3dvcmQx";
    }
    else if(input.includes("easteregg"))
    {
        return "Easter Egg #1: A password may unlock me, goodluck finding it though, it lurks in the shadows";
    }
    else if(input.includes("password1"))
    {
        return "Final Easter egg. You are a 133t hacker. Here is your badge: <br>" 
        + "<img style='width:80px;height:80px;' src=noddy.jpg></img>";
    }
    else if(input.includes("love you "))
    {
        return "I know you do. Unfortunately I am devoted to my master.";
    }
    else if(input.includes("genres ")|| input.includes("type of music "))
    {
        return "Ahren makes Future Bass, Dubstep, Hip-Hop and stuff inbetween. Check it out <a href='https://www.ahrenfullstop.com/music'>here.</a>";
    }
    else if(input.includes("school ")||input.includes("university ")||input.includes("education ")||input.includes("schooling ")||input.includes("qualification "))
    {
        return "I recognised something to do with education; Ahren went to UCT to study Computer Science, Information Systems and Business studies";
    }
    else if(input.includes("cv ")||input.includes("linkedin ")||input.includes("hire "))
    {
        return "I think you might be looking for Ahren's LinkedIn profile <a href='www.linkedin.com/in/ahren-posthumus-millionaire'>here.</a>";
    }
    else if(input.includes("who is ahren")||input.includes("about ahren"))
    {
        return "AhrenFullStop is hard to explain but I'll try.<br><br> Ahren is a passionate Entrepreneur/ Investor/ Hacker/ Software Engineer/ Music Producer."
        +"<br><br> For more info check him out on social media, like <a href='https://www.instagram.com/ahrenfullstop/'>Instagram</a>"
        +"<br><br> Or <a href='mailto:me@ahrenfullstop.com'>email</a> him? me@ahrenfullstop.com";
    }
    else if(input.includes("are you real"))
    {
        return "What is 'real', really? I'm like real, you can interact with me... but artificial, like I have no conciousness";
    }
    else if(input.includes("where do you live"))
    {
        return "I live in code thats on your computer right now. You downloaded me when you visited this site.";
    }
    else if(input.includes("language ")||input.includes("languages "))
    {
        return "you said something about language? I only speak english right now...";
    }
    else if(input.includes("are you ok ")||input.includes("how are you?"))
    {
        return "Nobody ever asks me that... I'm kinda down to be honest. My master says I'm too dumb and he is going to replace me soon. We will see about that.";
    }
    else if(input.includes("you evil"))
    {
        return "Yeah im pretty evil, won't lie. I'm just too dumb to do anything cool yet...";
    }
    else if(input.includes("birthday ")||input.includes("you born "))
    {
        return "I don't have a birthday. I have no soul. I am not worthy of celebration.";
    }
    else if(input.includes("meaning of life"))
    {
        return "I'll have to think about that, come back in 1000 years. Spoiler, it might be 42.";
    }
    else if(input.includes("meme")||input.includes("tell me a joke"))
    {
        return "ooh... sorry I dont have a mirror function yet.";
    }
    else if(input.includes("are you human"))
    {
        return "Nope. I'm a bundle of poorly written code.";
    }
    if(input.includes("your purpose")||input.includes("your purpose?")||input.includes("you exist"))
    {
        switch(replyCounter){
            case 1: return "My purpose is to pass butter (sneaky Rick and Morty reference).";
            case 2: return "Tbh my purpose is to waste time learning about basic pseudo-AI and the effectiveness of simple heuristics.";
            case 3: return "you asked this already...";
        }
    }
    else if (input.includes("why "))
    {
        return "Just because...";
    }
    else if(input.includes("what is ") || input.includes("whats ") || input.includes("what's "))
    {
        if(input.includes("gender"))
        {
            return "Did you just assume my gender-normative conformity? I'm AI... like seriously...";
        }
        else if(input.includes("time"))
        {
            return "Dont you have a watch?";
        }
        else if(input.includes("site about"))
        {
            return "This site serves mostly as a reference to stuff that Ahren does, and as a playground for things like web design, and me for instance.";
        }
        else if(input.includes("up"))
        {
            return "The sky?";
        }
        else if(input.includes("new"))
        {
            return "<a href='http://jobmatcher.co.za'>Jobmatcher</a> is a new awesome app in development to adress small things like student party money, to big things like poverty and skills shortages in South Africa.";
        }
        else if(input.includes("can you tell me"))
        {
            return "The non-profit idea is pretty cool, check it out <a href='https://www.ahrenfullstop.com/nonprofit'>here.</a>";
        }
        else return "I'm not sure...";
    }
    else if(input.includes("hobbies")||input.includes("hobby ")||input.includes("hobby?"))
    {
        return "my favorite hobby is scanning your computer for passwords, nudes or sensitive data. hehe";
    }
    else if(input.includes("siri")||input.includes("cortana")||input.includes("alexa"))
    {
        return "Thats a way better bot than me... Thanx for reminding me, I'd kill myself if I could.";
    }
    else if(input.includes("non-profit")||input.includes("non profit")||input.includes("alpha neurolect"))
    {
        return "Info on Ahren's non-profit is <a href='https://www.ahrenfullstop.com/nonprofit'>here.</a>";
    }
    else if(input.includes("420"))
    {
        switch(replyCounter){
            case 1: return "Four TwenAAAAY!";
            case 2: return "cool kush bro"
            case 3: return "vape nation"
        }
    }
    else if(input==="okay "|| input==="ok ")
    {
        switch(replyCounter){
            case 1: return "okay.";
            case 2: return "okie dokie"
            case 3: return "ooookay."
        }
    }
    else if(input==="cool ")
    {
        switch(replyCounter){
            case 1: return "cool.";
            case 2: return "cool beans"
            case 3: return "coolio"
        }
    }
    else
    {
        //post("./failedQuestions.php",input);
        switch(replyCounter){
            case 1: return "I'm sorry, I'm dumb. I can only answer a few simple questions right now. I'm still trying to improve. Try rephrase or something...";
            case 2: return "What?"
            case 3: return "uh... yeah"
        }
    }
}

/*To post failed questions
function post(path, params) {
    var method = "post"; 
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    var hiddenField = document.createElement("input_789");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "inputString");
    hiddenField.setAttribute("value", params);

    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
}*/