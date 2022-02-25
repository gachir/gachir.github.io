
  
const messageOutPut = () => {
  const plantType = ['leaves only', 'flowers', 'fruit', 'no leaves']
  let rand_Plant_Type = plantType[Math.floor(Math.random()*plantType.length)];
  
  
  const plantLocation = [' inside with low light', ' inside with bright light', ' outside with full sun', ' outside with part shade']
  let rand_Plant_Type_1 = plantLocation[Math.floor(Math.random()*plantLocation.length)];
  
  
     
  const name1 = rand_Plant_Type + rand_Plant_Type_1;
    if (name1/* == name1*/) {
        switch (name1) {
          case ('leaves only inside with low light'):
            const userMessage = ['not overwater.', 'rotate your plants more often.', 
            'regularly dust the leaves', 'enjoy your indoor jungle.'];
            let userOutput = userMessage[Math.floor(Math.random()*userMessage.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput}"`);
            break;
          case ('leaves only inside with bright light'):
            const userMessage1 = ['check for scales.', 'dust the leaves regularly', 
            'mist plants each day if humidity is low.', 
            'water and apply a balanced fertiliser regularly'];
            let userOutput1 = userMessage1[Math.floor(Math.random()*userMessage1.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput1}"`);
            break;
          case ('leaves only outside with full sun'):
            const userMessage2 = ['check regularly for insects and diseases.', 
            'marvel at your beautiful healthy plants', 
            'Do nothing', 'water regularly'];
            let userOutput2 = userMessage2[Math.floor(Math.random()*userMessage2.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput2}"`);
            break;
          case ('leaves only outside with part shade'):
            const userMessage3 = ['add an Oakleaf Hydrangea or Heuchera for colour and texture.', 
            'keep a close on soil moisture if plants are growing under trees.', 
            'enjoy your magical garde.', 'watch out for scales on leaves and stems.'];
            let userOutput3 = userMessage3[Math.floor(Math.random()*userMessage3.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput3}"`);
            break;
          case ('flowers inside with low light'):
            const userMessage_1 = ['enjoy the spectical.', 
            'move to a location with brighter light after you have enjoyed the amazing flower display.', 
            'consider adding some more plants - African Violets and Streptocarpus should do well and they look great.', 
            'check potting moisture levels if flowers are wilting.'];
            let userOutput_1 = userMessage_1[Math.floor(Math.random()*userMessage_1.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput_1}"`);
            break;
          case ('flowers inside with bright light'):
            const userMessage1_1 = ['congratulate yourself on a job well done.', 
            'water and fertilise regularly.', 'do nothing.', 'Jump for Joy.'];
            let userOutput1_1 = userMessage1_1[Math.floor(Math.random()*userMessage1_1.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput1_1}"`);
            break;
          case ('flowers outside with full sun'):
            const userMessage2_1 = ['enjoy the colour and floral scent.', 
            'water and fertilise regularly.', 
            'do nothing, just enjoy your hard work', 'observe insects and birds attracted to the flowers.'];
            let userOutput2_1 = userMessage2_1[Math.floor(Math.random()*userMessage2_1.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput2_1}"`);
            break;
          case ('flowers outside with part shade'):
            const userMessage3_1 = ['observe insects and birds attracted to the flowers.', 
            'keep an eye on soil moisture if plants are growing under trees.', 
            'consider adding some other amazing plants like azalea, deutzia or hydrangea.', 
            'post some photos on facebook.'];
            let userOutput3_1 = userMessage3_1[Math.floor(Math.random()*userMessage3_1.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput3_1}"`);
            break;
          case ('fruit inside with low light'):
            const userMessage_2 = ['congratulate yourself on managing to grow fruit inside and with low light.', 
            'move to a location with brighter light or even outside in a protected location.', 
            'take a photo to prove you can do anything.', 
            'Stop anyone from eating it... it might be delicious or deadly'];
            let userOutput_2 = userMessage_2[Math.floor(Math.random()*userMessage_2.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput_2}"`);
            break;
          case ('fruit inside with bright light'):
            const userMessage1_2 = ['congratulate yourself on managing to grow fruit inside.', 
            'watch potting mix moisture levels.', 'fertilise regularly.', 'Jump for Joy.'];
            let userOutput1_2 = userMessage1_2[Math.floor(Math.random()*userMessage1_2.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput1_2}"`);
            break;
          case ('fruit outside with full sun'):
            const userMessage2_2 = ['water well.', 'fertilise regularly', 'keep a close eye on insect pests, particularly sap suckers and fruit fly.', 'prepare for a feast.'];
            let userOutput2_2 = userMessage2_2[Math.floor(Math.random()*userMessage2_2.length)];
            return(`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput2_2}"`);
            break;
          case ('fruit outside with part shade'):
            const userMessage3_2 = ['think about adding some other plants -- currants, gooseberries and sour cherries can manage in part shade', 
            'check for scales... lots of ants on the fruit or branches can mean there are scales present.', 
            'do nothing and wait for a feast of juicy fruit.', 
            'water and fertilise regularly, particularly if plants are growing near or under large shrubs or trees.'];
            let userOutput3_2 = userMessage3_2[Math.floor(Math.random()*userMessage3_2.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput3_2}"`);
            break;
          case ('no leaves inside with low light'):
            const userMessage_3 = ['worry!!', 'check to see if it is still alive.', 
            'check the potting mix to see if it is very wet.', 
            'check the potting mix to see if it is dry... perhaps you forgot to water it.'];
            let userOutput_3 = userMessage_3[Math.floor(Math.random()*userMessage_3.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput_3}"`);
            break;
          case ('no leaves inside with bright light'):
            const userMessage1_3 = ['worry.. have you killed it.', 
            'check to see if it is still alive.', 'check for insects.', 
            'check the potting mix to see if it is dry... perhaps you forgot to water it.'];
            let userOutput1_3 = userMessage1_3[Math.floor(Math.random()*userMessage1_3.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput1_3}"`);
            break;
          case ('no leaves outside with full sun'):
            const userMessage2_3 = ['not worry, as the plant is deciduous.', 
            'think about raking all of the autumn leaves and composting them.', 
            'do nothing', 
            'worry if the plant is not deciduous as there might be something seriously wrong with the plant. Consult Dr Google ASAP.'];
            let userOutput2_3 = userMessage2_3[Math.floor(Math.random()*userMessage2_3.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput2_3}"`);
            break;
          case ('no leaves outside with part shade'):
            const userMessage3_3 = ['not worry, as the plant is deciduous.', 
            'think about raking all of the autumn leaves and composting them.', 
            'investigate further if the plant is not deciduous.', 'enjoy the wonders of winter'];
            let userOutput3_3 = userMessage3_3[Math.floor(Math.random()*userMessage3_3.length)];
            return (`If you have a plant that has "${rand_Plant_Type}" and is "${rand_Plant_Type_1}", you should "${userOutput3_3}"`);
            break;
          default:
            console.log('check');
      
        }}}
  //console.log(messageOutPut())
  
  //console.log(message_list);
  
  
  
  
  let button1 = document.getElementById('button');
  let output1 = document.getElementById('message');
  
  
  function content() {
    output1.innerHTML = messageOutPut();
  }
  
  
  button1.addEventListener('click', content)
  