const description = document.getElementById('pest-description');
const pic1 = document.getElementById('image-1');
const pic2 = document.getElementById('image-2');
const pic3 = document.getElementById('image-3');
const info1 = document.getElementById('info-1');
const info2 = document.getElementById('info-2');
const info3 = document.getElementById('info-3');
const info4 = document.getElementById('info-4');
const info5 = document.getElementById('info-5');
const info6 = document.getElementById('info-6');
const info7 = document.getElementById('info-7');
const info8 = document.getElementById('info-8');
const info9 = document.getElementById('info-9');
const info10 = document.getElementById('info-10');
const info11 = document.getElementById('info-11');
const info12 = document.getElementById('info-12');
const info13 = document.getElementById('info-13');
const potato = document.getElementById('potato');
const info14 = document.getElementById('info-14');
const info15 = document.getElementById('info-15');
const info16 = document.getElementById('info-16');
const info17 = document.getElementById('info-17');
const info18 = document.getElementById('info-18');
const info19 = document.getElementById('info-19');
const info20 = document.getElementById('info-20');
const info21 = document.getElementById('info-21');
const info22 = document.getElementById('info-22');
const info23 = document.getElementById('info-23');
const info24 = document.getElementById('info-24');
const info25 = document.getElementById('info-25');
const info26 = document.getElementById('info-26');
const info27 = document.getElementById('info-27');
const info28 = document.getElementById('info-28');



function mallow() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Mallow.common_name}</h1><h3>(<em>${Mallow.botanical_name}</em>)</h3> <p> \
    ${Mallow.cultural}</p><p>${Mallow.hosts}.</p><p>Uses: ${Mallow.uses}</p>\
    <p>Links: <a href='${Mallow.links[1]}' target='_blank'>${Mallow.links[0]}</a></p>\
    <p>Links: <a href='${Mallow.links[3]}' target='_blank'>${Mallow.links[2]}</a></p>\
    <p>Links: <a href='${Mallow.links[5]}' target='_blank'>${Mallow.links[4]}</a></p>\
    <p>Links: <a href='${Mallow.links[7]}' target='_blank'>${Mallow.links[6]}</a></p>\
    <p>Field Observations:</p><p>${Mallow.observations}</p>`;
    pic3.innerHTML = `${Mallow.pest_images[0]}`;
    pic2.innerHTML = `${Mallow.pest_images[1]}`;
    pic1.innerHTML = `${Mallow.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${Mallow.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${Mallow.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${Mallow.pest_images[2]}`;
}
function nightshade() {
    document.querySelector('.display').style.visibility = 'visible';
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${shade.common_name}</h1> <h3>(<em>${shade.botanical_name}</em>)</h3> <p> \
    ${shade.cultural}</p><p>${shade.hosts}</p><p>Uses: ${shade.uses}</p>\
    <p>Links: <a href='${shade.links[1]}' target='_blank'>${shade.links[0]}</a></p>\
    <p>Links: <a href='${shade.links[3]}' target='_blank'>${shade.links[2]}</a></p>\
    <p>Links: <a href='${shade.links[5]}' target='_blank'>${shade.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${shade.observations}</p>`;
    pic3.innerHTML = `${shade.pest_images[0]}`;
    pic2.innerHTML = `${shade.pest_images[1]}`;
    pic1.innerHTML = `${shade.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${shade.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${shade.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${shade.pest_images[2]}`;
}

function thickhead() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${crasso.common_name}</h1> <h3>(<em>${crasso.botanical_name}</em>)</h3> <p> \
    ${crasso.cultural}</p><p>${crasso.hosts}.</p><p>Uses: ${crasso.uses}</p>\
    <p>Links: <a href='${crasso.links[1]}' target='_blank'>${crasso.links[0]}</a></p>\
    <p>Links: <a href='${crasso.links[3]}' target='_blank'>${crasso.links[2]}</a></p>\
    <p>Links: <a href='${crasso.links[5]}' target='_blank'>${crasso.links[4]}</a></p>\
    <p>Links: <a href='${crasso.links[7]}' target='_blank'>${crasso.links[6]}</a></p>\
    <p>Links: <a href='${crasso.links[9]}' target='_blank'>${crasso.links[8]}</a></p>\
    <p>Field Observations:</p>\
    <p>${crasso.observations}</p>`;
    pic3.innerHTML = `${crasso.pest_images[0]}`;
    pic2.innerHTML = `${crasso.pest_images[1]}`;
    pic1.innerHTML = `${crasso.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${crasso.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${crasso.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${crasso.pest_images[2]}`;
}

function amaranthus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${amaranth.common_name}</h1> <h3>(${amaranth.botanical_name})</h3> <p> \
    ${amaranth.cultural}</p><p>${amaranth.hosts}.</p><p>Uses: ${amaranth.uses}</p>\
    <p>Links: <a href='${amaranth.links[1]}' target='_blank'>${amaranth.links[0]}</a></p>\
    <p>Links: <a href='${amaranth.links[3]}' target='_blank'>${amaranth.links[2]}</a>\
    <p>Links: <a href='${amaranth.links[5]}' target='_blank'>${amaranth.links[4]}</a></p><p>Field Observations:</p>\
    <p>${amaranth.observations}</p>`;
    pic3.innerHTML = `${amaranth.pest_images[0]}`;
    pic2.innerHTML = `${amaranth.pest_images[1]}`;
    pic1.innerHTML = `${amaranth.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${amaranth.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${amaranth.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${amaranth.pest_images[2]}`;
}

function gomphrena() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Gomphrena.common_name}</h1> <h3>(${Gomphrena.botanical_name})</h3> <p> \
    ${Gomphrena.cultural}</p><p>${Gomphrena.hosts}.</p><p>Uses: ${Gomphrena.uses}</p>\
    <p>Links: <a href='${Gomphrena.links[1]}' target='_blank'>${Gomphrena.links[0]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[3]}' target='_blank'>${Gomphrena.links[2]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[5]}' target='_blank'>${Gomphrena.links[4]}</a></p>\
    <p>Links: <a href='${Gomphrena.links[7]}' target='_blank'>${Gomphrena.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Gomphrena.observations}</p>`;
    
    pic3.innerHTML = `${Gomphrena.pest_images[0]}`;
    pic2.innerHTML = `${Gomphrena.pest_images[1]}`;
    pic1.innerHTML = `${Gomphrena.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${Gomphrena.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${Gomphrena.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${Gomphrena.pest_images[2]}`;
}

function verbenaB() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${purpletop.common_name}</h1> <h3>(${purpletop.botanical_name})</h3> <p> \
    ${purpletop.cultural}</p><p>${purpletop.hosts}.</p><p>Uses: ${purpletop.uses}</p>\
    <p>Links: <a href='${purpletop.links[1]}' target='_blank'>${purpletop.links[0]}</a></p>\
    <p>Links: <a href='${purpletop.links[3]}' target='_blank'>${purpletop.links[2]}</a></p>\
    <p>Links: <a href='${purpletop.links[5]}' target='_blank'>${purpletop.links[4]}</a></p><p>Field Observations:</p>\
    <p>${purpletop.observations}</p>`;
    
    pic3.innerHTML = `${purpletop.pest_images[0]}`;
    pic2.innerHTML = `${purpletop.pest_images[1]}`;
    pic1.innerHTML = `${purpletop.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${purpletop.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${purpletop.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${purpletop.pest_images[2]}`;
}

function tropicalchickweed() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${tropChick.common_name}</h1> <h3>(<em>${tropChick.botanical_name}</em>)</h3> <p> \
    ${tropChick.cultural}</p><p>${tropChick.hosts}.</p><p>Uses: ${tropChick.uses}</p>\
    <p>Links: <a href='${tropChick.links[1]}' target='_blank'>${tropChick.links[0]}</a></p>\
    <p>Links: <a href='${tropChick.links[3]}' target='_blank'>${tropChick.links[2]}</a></p>\
    <p>Links: <a href='${tropChick.links[5]}' target='_blank'>${tropChick.links[4]}</a></p>\
    <p>Links: <a href='${tropChick.links[7]}' target='_blank'>${tropChick.links[6]}</a></p><p>Field Observations:</p>\
    <p>${tropChick.observations}</p>`;
    
    pic3.innerHTML = `${tropChick.pest_images[0]}`;
    pic2.innerHTML = `${tropChick.pest_images[1]}`;
    pic1.innerHTML = `${tropChick.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${tropChick.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${tropChick.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${tropChick.pest_images[2]}`;
}

function Capsella() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${capsella.common_name}</h1> <h3>(${capsella.botanical_name})</h3> <p> \
    ${capsella.cultural}</p><p>${capsella.hosts}.</p><p>Uses: ${capsella.uses}</p>\
    <p>Links: <a href='${capsella.links[1]}' target='_blank'>${capsella.links[0]}</a></p>\
    <p>Links: <a href='${capsella.links[3]}' target='_blank'>${capsella.links[2]}</a></p>\
    <p>Links: <a href='${capsella.links[5]}' target='_blank'>${capsella.links[4]}</a></p>\
    <p>Links: <a href='${capsella.links[7]}' target='_blank'>${capsella.links[6]}</a></p>\
    <p>Links: <a href='${capsella.links[9]}' target='_blank'>${capsella.links[8]}</a></p>\
    <p>Links: <a href='${capsella.links[11]}' target='_blank'>${capsella.links[10]}</a></p>\
    <p>Links: <a href='${capsella.links[13]}' target='_blank'>${capsella.links[12]}</a></p>\
    <p>Links: <a href='${capsella.links[15]}' target='_blank'>${capsella.links[14]}</a></p>\
    <p>Links: <a href='${capsella.links[17]}' target='_blank'>${capsella.links[16]}</a></p>\
    <p>Links: <a href='${capsella.links[19]}' target='_blank'>${capsella.links[18]}</a></p>\
    <p>Field Observations:</p>\
    <p>${capsella.observations}</p>`;
    
    pic3.innerHTML = `${capsella.pest_images[0]}`;
    pic2.innerHTML = `${capsella.pest_images[1]}`;
    pic1.innerHTML = `${capsella.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${capsella.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${capsella.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${capsella.pest_images[2]}`;
}

function Heliotrope() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${heliotropium.common_name}</h1> <h3>(${heliotropium.botanical_name})</h3> <p> \
    ${heliotropium.cultural}</p><p>${heliotropium.hosts}.</p><p>Uses: ${heliotropium.uses}</p>\
    <p>Links: <a href='${heliotropium.links[1]}' target='_blank'>${heliotropium.links[0]}</a></p>\
    <p>Links: <a href='${heliotropium.links[3]}' target='_blank'>${heliotropium.links[2]}</a></p>\
    <p>Links: <a href='${heliotropium.links[5]}' target='_blank'>${heliotropium.links[4]}</a></p>\
    <p>Field Observations:</p>\
    <p>${heliotropium.observations}</p>`;
    
    pic3.innerHTML = `${heliotropium.pest_images[0]}`;
    pic2.innerHTML = `${heliotropium.pest_images[1]}`;
    pic1.innerHTML = `${heliotropium.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${heliotropium.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${heliotropium.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${heliotropium.pest_images[2]}`;
}

function Khaki() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${khaki.common_name}</h1> <h3>(${khaki.botanical_name})</h3> <p> \
    ${khaki.cultural}</p><p>${khaki.hosts}.</p><p>Uses: ${khaki.uses}</p>\
    <p>Links: <a href='${khaki.links[1]}' target='_blank'>${khaki.links[0]}</a></p>\
    <p>Links: <a href='${khaki.links[3]}' target='_blank'>${khaki.links[2]}</a></p>\
    <p>Field Observations:</p>\
    <p>${khaki.observations}</p>`;
    
    pic3.innerHTML = `${khaki.pest_images[0]}`;
    pic2.innerHTML = `${khaki.pest_images[1]}`;
    pic1.innerHTML = `${khaki.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${khaki.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${khaki.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${khaki.pest_images[2]}`;
}

function Fleabane() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${fleabane.common_name}</h1> <h3>(${fleabane.botanical_name})</h3> <p> \
    ${fleabane.cultural}</p><p>${fleabane.hosts}.</p><p>Uses: ${fleabane.uses}</p>\
    <p>Links: <a href='${fleabane.links[1]}' target='_blank'>${fleabane.links[0]}</a></p>\
    <p>Links: <a href='${fleabane.links[3]}' target='_blank'>${fleabane.links[2]}</a></p>\
    <p>Field Observations:</p>\
    <p>${fleabane.observations}</p>`;
    
    pic3.innerHTML = `${fleabane.pest_images[0]}`;
    pic2.innerHTML = `${fleabane.pest_images[1]}`;
    pic1.innerHTML = `${fleabane.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${fleabane.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${fleabane.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${fleabane.pest_images[2]}`;
}

function Bidens() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cobblers.common_name}</h1> <h3>(${cobblers.botanical_name})</h3> <p> \
    ${cobblers.cultural}</p><p>${cobblers.hosts}.</p><p>Uses: ${cobblers.uses}</p>\
    <p>Links: <a href='${cobblers.links[1]}' target='_blank'>${cobblers.links[0]}</a></p>\
    <p>Links: <a href='${cobblers.links[3]}' target='_blank'>${cobblers.links[2]}</a></p>\
    <p>Links: <a href='${cobblers.links[5]}' target='_blank'>${cobblers.links[4]}</a></p>\
    <p>Links: <a href='${cobblers.links[7]}' target='_blank'>${cobblers.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${cobblers.observations}</p>`;
    
    pic3.innerHTML = `${cobblers.pest_images[0]}`;
    pic2.innerHTML = `${cobblers.pest_images[1]}`;
    pic1.innerHTML = `${cobblers.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${cobblers.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${cobblers.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${cobblers.pest_images[2]}`;
}

function Potato() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${potato_weed.common_name}</h1> <h3>(${potato_weed.botanical_name})</h3> <p> \
    ${potato_weed.cultural}</p><p>${potato_weed.hosts}.</p><p>Uses: ${potato_weed.uses}</p>\
    <p>Links: <a href='${potato_weed.links[1]}' target='_blank'>${potato_weed.links[0]}</a></p>\
    <p>Links: <a href='${potato_weed.links[3]}' target='_blank'>${potato_weed.links[2]}</a></p>\
    <p>Links: <a href='${potato_weed.links[5]}' target='_blank'>${potato_weed.links[4]}</a></p>\
    <p>Links: <a href='${potato_weed.links[7]}' target='_blank'>${potato_weed.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${potato_weed.observations}</p>`;
    
    pic3.innerHTML = `${potato_weed.pest_images[0]}`;
    pic2.innerHTML = `${potato_weed.pest_images[1]}`;
    pic1.innerHTML = `${potato_weed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${potato_weed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${potato_weed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${potato_weed.pest_images[2]}`;
}

function willowherb() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${willowHerb.common_name}</h1> <h3>(${willowHerb.botanical_name})</h3> <p> \
    ${willowHerb.cultural}</p><p>${willowHerb.hosts}.</p><p>Uses: ${willowHerb.uses}</p>\
    <p>Links: <a href='${willowHerb.links[1]}' target='_blank'>${willowHerb.links[0]}</a></p>\
    <p>Links: <a href='${willowHerb.links[3]}' target='_blank'>${willowHerb.links[2]}</a></p>\
    <p>Links: <a href='${willowHerb.links[5]}' target='_blank'>${willowHerb.links[4]}</a></p>\
    <p>Links: <a href='${willowHerb.links[7]}' target='_blank'>${willowHerb.links[6]}</a></p>\
    <p>Field Observations:</p>\
    <p>${willowHerb.observations}</p>`;
    
    pic3.innerHTML = `${willowHerb.pest_images[0]}`;
    pic2.innerHTML = `${willowHerb.pest_images[1]}`;
    pic1.innerHTML = `${willowHerb.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${willowHerb.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${willowHerb.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${willowHerb.pest_images[2]}`;
}

function cotton() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${BalloonCotton.common_name}</h1> <h3>(${BalloonCotton.botanical_name})</h3> <p> \
    ${BalloonCotton.cultural}</p><p>${BalloonCotton.hosts}.</p><p>Uses: ${BalloonCotton.uses}</p>\
    <p>Links: <a href='${BalloonCotton.links[1]}' target='_blank'>${BalloonCotton.links[0]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[3]}' target='_blank'>${BalloonCotton.links[2]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[5]}' target='_blank'>${BalloonCotton.links[4]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[7]}' target='_blank'>${BalloonCotton.links[6]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[9]}' target='_blank'>${BalloonCotton.links[8]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[11]}' target='_blank'>${BalloonCotton.links[10]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[13]}' target='_blank'>${BalloonCotton.links[12]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[15]}' target='_blank'>${BalloonCotton.links[14]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[17]}' target='_blank'>${BalloonCotton.links[16]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[19]}' target='_blank'>${BalloonCotton.links[18]}</a></p>\
    <p>Links: <a href='${BalloonCotton.links[21]}' target='_blank'>${BalloonCotton.links[20]}</a></p>\
    <p>Field Observations:</p>\
    <p>${BalloonCotton.observations}</p>`;
    
    pic3.innerHTML = `${BalloonCotton.pest_images[0]}`;
    pic2.innerHTML = `${BalloonCotton.pest_images[1]}`;
    pic1.innerHTML = `${BalloonCotton.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${BalloonCotton.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${BalloonCotton.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${BalloonCotton.pest_images[2]}`;
}

function brazilian() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${Brazilian_nightshade.common_name}</h1> <h3>(${Brazilian_nightshade.botanical_name})</h3> <p> \
    ${Brazilian_nightshade.cultural}</p><p>${Brazilian_nightshade.hosts}.</p><p>Uses: ${Brazilian_nightshade.uses}</p>\
    <p>Links: <a href='${Brazilian_nightshade.links[1]}' target='_blank'>${Brazilian_nightshade.links[0]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[3]}' target='_blank'>${Brazilian_nightshade.links[2]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[5]}' target='_blank'>${Brazilian_nightshade.links[4]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[7]}' target='_blank'>${Brazilian_nightshade.links[6]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[9]}' target='_blank'>${Brazilian_nightshade.links[8]}</a></p>\
    <p>Links: <a href='${Brazilian_nightshade.links[11]}' target='_blank'>${Brazilian_nightshade.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${Brazilian_nightshade.observations}</p>`;
    
    pic3.innerHTML = `${Brazilian_nightshade.pest_images[0]}`;
    pic2.innerHTML = `${Brazilian_nightshade.pest_images[1]}`;
    pic1.innerHTML = `${Brazilian_nightshade.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${Brazilian_nightshade.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${Brazilian_nightshade.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${Brazilian_nightshade.pest_images[2]}`;
}

function Mitracarpus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${mitracarpus.common_name}</h1> <h3>(${mitracarpus.botanical_name})</h3> <p> \
    ${mitracarpus.cultural}</p><p>${mitracarpus.hosts}.</p><p>Uses: ${mitracarpus.uses}</p>\
    <p>Links: <a href='${mitracarpus.links[1]}' target='_blank'>${mitracarpus.links[0]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[3]}' target='_blank'>${mitracarpus.links[2]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[5]}' target='_blank'>${mitracarpus.links[4]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[7]}' target='_blank'>${mitracarpus.links[6]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[9]}' target='_blank'>${mitracarpus.links[8]}</a></p>\
    <p>Links: <a href='${mitracarpus.links[11]}' target='_blank'>${mitracarpus.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${mitracarpus.observations}</p>`;
    
    pic3.innerHTML = `${mitracarpus.pest_images[0]}`;
    pic2.innerHTML = `${mitracarpus.pest_images[1]}`;
    pic1.innerHTML = `${mitracarpus.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${mitracarpus.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${mitracarpus.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${mitracarpus.pest_images[2]}`;
}

function Richardia() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${richardia.common_name}</h1> <h3>(${richardia.botanical_name})</h3> <p> \
    ${richardia.cultural}</p><p>${richardia.hosts}.</p><p>Uses: ${richardia.uses}</p>\
    <p>Links: <a href='${richardia.links[1]}' target='_blank'>${richardia.links[0]}</a></p>\
    <p>Links: <a href='${richardia.links[3]}' target='_blank'>${richardia.links[2]}</a></p>\
    <p>Links: <a href='${richardia.links[5]}' target='_blank'>${richardia.links[4]}</a></p>\
    <p>Links: <a href='${richardia.links[7]}' target='_blank'>${richardia.links[6]}</a></p>\
    <p>Links: <a href='${richardia.links[9]}' target='_blank'>${richardia.links[8]}</a></p>\
    <p>Links: <a href='${richardia.links[11]}' target='_blank'>${richardia.links[10]}</a></p>\
    <p>Field Observations:</p>\
    <p>${richardia .observations}</p>`;
    
    pic3.innerHTML = `${richardia.pest_images[0]}`;
    pic2.innerHTML = `${richardia.pest_images[1]}`;
    pic1.innerHTML = `${richardia.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${richardia.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${richardia.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${richardia.pest_images[2]}`;
}

function Sida() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sida_acuta.common_name}</h1> <h3>(${sida_acuta.botanical_name})</h3> <p> \
    ${sida_acuta.cultural}</p><p>${sida_acuta.hosts}.</p><p>Uses: ${sida_acuta.uses}</p>\
    <p>Links: <a href='${sida_acuta.links[1]}' target='_blank'>${sida_acuta.links[0]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[3]}' target='_blank'>${sida_acuta.links[2]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[5]}' target='_blank'>${sida_acuta.links[4]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[7]}' target='_blank'>${sida_acuta.links[6]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[9]}' target='_blank'>${sida_acuta.links[8]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[11]}' target='_blank'>${sida_acuta.links[10]}</a></p>\
    <p>Links: <a href='${sida_acuta.links[13]}' target='_blank'>${sida_acuta.links[12]}</a></p>\
    <p>Field Observations:</p>\
    <p>${sida_acuta.observations}</p>`;
    
    pic3.innerHTML = `${sida_acuta.pest_images[0]}`;
    pic2.innerHTML = `${sida_acuta.pest_images[1]}`;
    pic1.innerHTML = `${sida_acuta.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sida_acuta.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sida_acuta.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sida_acuta.pest_images[2]}`;
}

function Sida_rhom() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sida_rhombifolia.common_name}</h1> <h3>(${sida_rhombifolia.botanical_name})</h3> <p> \
    ${sida_rhombifolia.cultural}</p><p>${sida_rhombifolia.hosts}.</p><p>Uses: ${sida_rhombifolia.uses}</p>\
    <p>Links: <a href='${sida_rhombifolia.links[1]}' target='_blank'>${sida_rhombifolia.links[0]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[3]}' target='_blank'>${sida_rhombifolia.links[2]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[5]}' target='_blank'>${sida_rhombifolia.links[4]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[7]}' target='_blank'>${sida_rhombifolia.links[6]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[9]}' target='_blank'>${sida_rhombifolia.links[8]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[11]}' target='_blank'>${sida_rhombifolia.links[10]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[13]}' target='_blank'>${sida_rhombifolia.links[12]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[15]}' target='_blank'>${sida_rhombifolia.links[14]}</a></p>\
    <p>Links: <a href='${sida_rhombifolia.links[17]}' target='_blank'>${sida_rhombifolia.links[16]}</a></p>\
    <p>Field Observations:</p>\
    <p>${sida_rhombifolia.observations}</p>`;
    
    pic3.innerHTML = `${sida_rhombifolia.pest_images[0]}`;
    pic2.innerHTML = `${sida_rhombifolia.pest_images[1]}`;
    pic1.innerHTML = `${sida_rhombifolia.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sida_rhombifolia.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sida_rhombifolia.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sida_rhombifolia.pest_images[2]}`;
}

function Sida_cord() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sida_cordifolia.common_name}</h1> <h3>(${sida_cordifolia.botanical_name})</h3> <p> \
    ${sida_cordifolia.cultural}</p><p>${sida_cordifolia.hosts}.</p><p>Uses: ${sida_cordifolia.uses}</p>\
    <p>Links: <a href='${sida_cordifolia.links[1]}' target='_blank'>${sida_cordifolia.links[0]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[3]}' target='_blank'>${sida_cordifolia.links[2]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[5]}' target='_blank'>${sida_cordifolia.links[4]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[7]}' target='_blank'>${sida_cordifolia.links[6]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[9]}' target='_blank'>${sida_cordifolia.links[8]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[11]}' target='_blank'>${sida_cordifolia.links[10]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[13]}' target='_blank'>${sida_cordifolia.links[12]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[15]}' target='_blank'>${sida_cordifolia.links[14]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[17]}' target='_blank'>${sida_cordifolia.links[16]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[19]}' target='_blank'>${sida_cordifolia.links[18]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[21]}' target='_blank'>${sida_cordifolia.links[20]}</a></p>\
    <p>Links: <a href='${sida_cordifolia.links[23]}' target='_blank'>${sida_cordifolia.links[22]}</a></p>\
    <p>Field Observations:</p>\
    <p>${sida_cordifolia.observations}</p>`;
    
    pic3.innerHTML = `${sida_cordifolia.pest_images[0]}`;
    pic2.innerHTML = `${sida_cordifolia.pest_images[1]}`;
    pic1.innerHTML = `${sida_cordifolia.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sida_cordifolia.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sida_cordifolia.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sida_cordifolia.pest_images[2]}`;
}

function Malvastrum() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${malvastrum.common_name}</h1> <h3>(${malvastrum.botanical_name})</h3> <p> \
    ${malvastrum.cultural}</p><p>${malvastrum.hosts}.</p><p>Uses: ${malvastrum.uses}</p>\
    <p>Links: <a href='${malvastrum.links[1]}' target='_blank'>${malvastrum.links[0]}</a></p>\
    <p>Links: <a href='${malvastrum.links[3]}' target='_blank'>${malvastrum.links[2]}</a></p>\
    <p>Links: <a href='${malvastrum.links[5]}' target='_blank'>${malvastrum.links[4]}</a></p>\
    <p>Links: <a href='${malvastrum.links[7]}' target='_blank'>${malvastrum.links[6]}</a></p>\
    <p>Links: <a href='${malvastrum.links[9]}' target='_blank'>${malvastrum.links[8]}</a></p>\
    <p>Links: <a href='${malvastrum.links[11]}' target='_blank'>${malvastrum.links[10]}</a></p>\
    <p>Links: <a href='${malvastrum.links[13]}' target='_blank'>${malvastrum.links[12]}</a></p>\
    <p>Links: <a href='${malvastrum.links[15]}' target='_blank'>${malvastrum.links[14]}</a></p>\
    <p>Links: <a href='${malvastrum.links[17]}' target='_blank'>${malvastrum.links[16]}</a></p>\
    <p>Links: <a href='${malvastrum.links[19]}' target='_blank'>${malvastrum.links[18]}</a></p>\
    <p>Field Observations:</p>\
    <p>${malvastrum.observations}</p>`;
    
    pic3.innerHTML = `${malvastrum.pest_images[0]}`;
    pic2.innerHTML = `${malvastrum.pest_images[1]}`;
    pic1.innerHTML = `${malvastrum.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${malvastrum.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${malvastrum.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${malvastrum.pest_images[2]}`;
}

function Indigo() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${indigo.common_name}</h1> <h3>(${indigo.botanical_name})</h3> <p> \
    ${indigo.cultural}</p><p>${indigo.hosts}.</p><p>Uses: ${indigo.uses}</p>\
    <p>Links: <a href='${indigo.links[1]}' target='_blank'>${indigo.links[0]}</a></p>\
    <p>Links: <a href='${indigo.links[3]}' target='_blank'>${indigo.links[2]}</a></p>\
    <p>Links: <a href='${indigo.links[5]}' target='_blank'>${indigo.links[4]}</a></p>\
    <p>Links: <a href='${indigo.links[7]}' target='_blank'>${indigo.links[6]}</a></p>\
    <p>Links: <a href='${indigo.links[9]}' target='_blank'>${indigo.links[8]}</a></p>\
    <p>Links: <a href='${indigo.links[11]}' target='_blank'>${indigo.links[10]}</a></p>\
    <p>Links: <a href='${indigo.links[13]}' target='_blank'>${indigo.links[12]}</a></p>\
    <p>Links: <a href='${indigo.links[15]}' target='_blank'>${indigo.links[14]}</a></p>\
    <p>Links: <a href='${indigo.links[17]}' target='_blank'>${indigo.links[16]}</a></p>\
    <p>Links: <a href='${indigo.links[19]}' target='_blank'>${indigo.links[18]}</a></p>\
    <p>Field Observations:</p>\
    <p>${indigo.observations}</p>`;
    
    pic3.innerHTML = `${indigo.pest_images[0]}`;
    pic2.innerHTML = `${indigo.pest_images[1]}`;
    pic1.innerHTML = `${indigo.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${indigo.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${indigo.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${indigo.pest_images[2]}`;
}

function Crotalaria() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${crotalaria.common_name}</h1> <h3>(${crotalaria.botanical_name})</h3> <p> \
    ${crotalaria.cultural}</p><p>${crotalaria.hosts}.</p><p>Uses: ${crotalaria.uses}</p>\
    <p>Links: <a href='${crotalaria.links[1]}' target='_blank'>${crotalaria.links[0]}</a></p>\
    <p>Links: <a href='${crotalaria.links[3]}' target='_blank'>${crotalaria.links[2]}</a></p>\
    <p>Links: <a href='${crotalaria.links[5]}' target='_blank'>${crotalaria.links[4]}</a></p>\
    <p>Links: <a href='${crotalaria.links[7]}' target='_blank'>${crotalaria.links[6]}</a></p>\
    <p>Links: <a href='${crotalaria.links[9]}' target='_blank'>${crotalaria.links[8]}</a></p>\
    <p>Links: <a href='${crotalaria.links[11]}' target='_blank'>${crotalaria.links[10]}</a></p>\
    <p>Links: <a href='${crotalaria.links[13]}' target='_blank'>${crotalaria.links[12]}</a></p>\
    <p>Links: <a href='${crotalaria.links[15]}' target='_blank'>${crotalaria.links[14]}</a></p>\
    <p>Links: <a href='${crotalaria.links[17]}' target='_blank'>${crotalaria.links[16]}</a></p>\
    <p>Links: <a href='${crotalaria.links[19]}' target='_blank'>${crotalaria.links[18]}</a></p>\
    <p>Links: <a href='${crotalaria.links[21]}' target='_blank'>${crotalaria.links[20]}</a></p>\
    <p>Links: <a href='${crotalaria.links[23]}' target='_blank'>${crotalaria.links[22]}</a></p>\
    <p>Links: <a href='${crotalaria.links[25]}' target='_blank'>${crotalaria.links[24]}</a></p>\
    <p>Links: <a href='${crotalaria.links[27]}' target='_blank'>${crotalaria.links[26]}</a></p>\
    <p>Field Observations:</p>\
    <p>${crotalaria.observations}</p>`;
    
    pic3.innerHTML = `${crotalaria.pest_images[0]}`;
    pic2.innerHTML = `${crotalaria.pest_images[1]}`;
    pic1.innerHTML = `${crotalaria.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${crotalaria.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${crotalaria.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${crotalaria.pest_images[2]}`;
}

function Sonchus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${sonchus.common_name}</h1> <h3>(${sonchus.botanical_name})</h3> <p> \
    ${sonchus.cultural}</p><p>${sonchus.hosts}.</p><p>Uses: ${sonchus.uses}</p>\
    <p>Links: <a href='${sonchus.links[1]}' target='_blank'>${sonchus.links[0]}</a></p>\
    <p>Links: <a href='${sonchus.links[3]}' target='_blank'>${sonchus.links[2]}</a></p>\
    <p>Links: <a href='${sonchus.links[5]}' target='_blank'>${sonchus.links[4]}</a></p>\
    <p>Links: <a href='${sonchus.links[7]}' target='_blank'>${sonchus.links[6]}</a></p>\
    <p>Links: <a href='${sonchus.links[9]}' target='_blank'>${sonchus.links[8]}</a></p>\
    <p>Links: <a href='${sonchus.links[11]}' target='_blank'>${sonchus.links[10]}</a></p>\
    <p>Links: <a href='${sonchus.links[13]}' target='_blank'>${sonchus.links[12]}</a></p>\
    <p>Links: <a href='${sonchus.links[15]}' target='_blank'>${sonchus.links[14]}</a></p>\
    <p>Links: <a href='${sonchus.links[17]}' target='_blank'>${sonchus.links[16]}</a></p>\
    
    <p>Field Observations:</p>\
    <p>${sonchus.observations}</p>`;
    
    pic3.innerHTML = `${sonchus.pest_images[0]}`;
    pic2.innerHTML = `${sonchus.pest_images[1]}`;
    pic1.innerHTML = `${sonchus.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${sonchus.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${sonchus.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${sonchus.pest_images[2]}`;
}

function Coronopus() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${coronopus.common_name}</h1> <h3>(${coronopus.botanical_name})</h3> <p> \
    ${coronopus.cultural}</p><p>${coronopus.hosts}.</p><p>Uses: ${coronopus.uses}</p>\
    <p>Links: <a href='${coronopus.links[1]}' target='_blank'>${coronopus.links[0]}</a></p>\
    <p>Links: <a href='${coronopus.links[3]}' target='_blank'>${coronopus.links[2]}</a></p>\
    <p>Links: <a href='${coronopus.links[5]}' target='_blank'>${coronopus.links[4]}</a></p>\
    <p>Links: <a href='${coronopus.links[7]}' target='_blank'>${coronopus.links[6]}</a></p>\
    
    <p>Field Observations:</p>\
    <p>${coronopus.observations}</p>`;
    
    pic3.innerHTML = `${coronopus.pest_images[0]}`;
    pic2.innerHTML = `${coronopus.pest_images[1]}`;
    pic1.innerHTML = `${coronopus.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${coronopus.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${coronopus.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${coronopus.pest_images[2]}`;
}

function Cudweed() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cudweed.common_name}</h1> <h3>(${cudweed.botanical_name})</h3> <p> \
    ${cudweed.cultural}</p><p>${cudweed.hosts}.</p><p>Uses: ${cudweed.uses}</p>\
    <p>Links: <a href='${cudweed.links[1]}' target='_blank'>${cudweed.links[0]}</a></p>\
    <p>Links: <a href='${cudweed.links[3]}' target='_blank'>${cudweed.links[2]}</a></p>\
    <p>Links: <a href='${cudweed.links[5]}' target='_blank'>${cudweed.links[4]}</a></p>\
    <p>Links: <a href='${cudweed.links[7]}' target='_blank'>${cudweed.links[6]}</a></p>\
    <p>Links: <a href='${cudweed.links[9]}' target='_blank'>${cudweed.links[8]}</a></p>\
    <p>Field Observations:</p>\
    <p>${cudweed.observations}</p>`;
    
    pic3.innerHTML = `${cudweed.pest_images[0]}`;
    pic2.innerHTML = `${cudweed.pest_images[1]}`;
    pic1.innerHTML = `${cudweed.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${cudweed.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${cudweed.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${cudweed.pest_images[2]}`;
}

function Cotula() {
    document.querySelector('.display').style.visibility = 'visible';
    description.innerHTML =
    `<h1>${cotula.common_name}</h1> <h3>(${cotula.botanical_name})</h3> <p> \
    ${cotula.cultural}</p><p>${cotula.hosts}.</p><p>Uses: ${cotula.uses}</p>\
    <p>Links: <a href='${cotula.links[1]}' target='_blank'>${cotula.links[0]}</a></p>\
    <p>Links: <a href='${cotula.links[3]}' target='_blank'>${cotula.links[2]}</a></p>\
    <p>Links: <a href='${cotula.links[5]}' target='_blank'>${cotula.links[4]}</a></p>\
    <p>Links: <a href='${cotula.links[7]}' target='_blank'>${cotula.links[6]}</a></p>\
    <p>Links: <a href='${cotula.links[9]}' target='_blank'>${cotula.links[8]}</a></p>\
    <p>Links: <a href='${cotula.links[11]}' target='_blank'>${cotula.links[10]}</a></p>\
    
    <p>Field Observations:</p>\
    <p>${cotula.observations}</p>`;
    
    pic3.innerHTML = `${cotula.pest_images[0]}`;
    pic2.innerHTML = `${cotula.pest_images[1]}`;
    pic1.innerHTML = `${cotula.pest_images[2]}`;
    document.getElementById('insect3').innerHTML = `${cotula.pest_images[0]}`;
    document.getElementById('insect2').innerHTML = `${cotula.pest_images[1]}`;
    document.getElementById('insect1').innerHTML = `${cotula.pest_images[2]}`;
}


/*      POPUP BOXES FOR IMAGES      */
/*  MALLOW  */ 
(function() {    
    var dialog = document.getElementById('mallow');    
    document.getElementById('mal').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-mallow').onclick = function() {    
        dialog.close();    
    };    
})(); 

/* BLACKBERRY NIGHTSHADE    */
(function() {    
    var dialog = document.getElementById('blackberry');    
    document.getElementById('black').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-blackberry').onclick = function() {    
        dialog.close();    
    };    
})();

/*  THICKHEAD   */
(function() {    
    var dialog = document.getElementById('thickhead');    
    document.getElementById('thick').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-thick').onclick = function() {    
        dialog.close();    
    };    
})();   

/* AMARANTH */
(function() {    
    var dialog = document.getElementById('amaranth');    
    document.getElementById('ama').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-amaranth').onclick = function() {    
        dialog.close();    
    };    
})();  

/* GOMPHRENA    */
(function() {    
    var dialog = document.getElementById('gomphrena');    
    document.getElementById('gom').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-gomphrena').onclick = function() {    
        dialog.close();    
    };    
})();   

/* PURPLE TOP    */
(function() {    
    var dialog = document.getElementById('purple');    
    document.getElementById('purp').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-purple').onclick = function() {    
        dialog.close();    
    };    
})();   

/* TROPICAL CHICKWEED    */
(function() {    
    var dialog = document.getElementById('tropchick');    
    document.getElementById('trop').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-tropchick').onclick = function() {    
        dialog.close();    
    };    
})();  

/* CAPSELLA    */
(function() {    
    var dialog = document.getElementById('capsella');    
    document.getElementById('cap').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-capsella').onclick = function() {    
        dialog.close();    
    };    
})();

/* BLUE HELIOTROPE    */
(function() {    
    var dialog = document.getElementById('heliotrope');    
    document.getElementById('hel').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-heliotrope').onclick = function() {    
        dialog.close();    
    };    
})();

/* KHAKI WEED    */
(function() {    
    var dialog = document.getElementById('khaki');    
    document.getElementById('kha').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-khaki').onclick = function() {    
        dialog.close();    
    };    
})();

/* FLEABANE    */
(function() {    
    var dialog = document.getElementById('fleabane-1');    
    document.getElementById('flea').onclick = function() {    
        dialog.showModal();    
    };    
    document.getElementById('hide-fleabane-1').onclick = function() {    
        dialog.close();    
    };    
})();

/* COBBLERS PEGS    */
(function() {    
    var dialog = document.getElementById('bidens');    
    document.getElementById('bid').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-bidens').onclick = function() {    
        dialog.close();    
    };    
})();

/* POTATO WEED    */
(function() {    
    var dialog = document.getElementById('potato'); 
    document.getElementById('pot').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-potato').onclick = function() {    
        dialog.close();    
    };    
})();

/* WILLOWHERB    */
(function() {    
    var dialog = document.getElementById('willHerb'); 
    document.getElementById('willow').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-willow').onclick = function() {    
        dialog.close();    
    };    
})();

/* BALLOON COTTON    */
(function() {    
    var dialog = document.getElementById('balloonCotton'); 
    document.getElementById('balloon').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-balloon').onclick = function() {    
        dialog.close();    
    };    
})();

/* BRAZILIAN NIGHTSHADE    */
(function() {    
    var dialog = document.getElementById('brazNight'); 
    document.getElementById('brazil').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-brazil').onclick = function() {    
        dialog.close();    
    };    
})();

/* MITRACARPUS    */
(function() {    
    var dialog = document.getElementById('mitraCarpus'); 
    document.getElementById('mitra').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-mitra').onclick = function() {    
        dialog.close();    
    };    
})();

/* RICHARDIA       */
(function() {    
    var dialog = document.getElementById('richArdia'); 
    document.getElementById('rich').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-rich').onclick = function() {    
        dialog.close();    
    };    
})();

/* SIDA ACUTA       */
(function() {    
    var dialog = document.getElementById('sidA'); 
    document.getElementById('si').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-si').onclick = function() {    
        dialog.close();    
    };    
})();

/* SIDA RHOMBIFOLIA       */
(function() {    
    var dialog = document.getElementById('s-Rhom'); 
    document.getElementById('s-rhom').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-s-rhom').onclick = function() {    
        dialog.close();    
    };    
})();

/* SIDA CORDIFOLIA      */
(function() {    
    var dialog = document.getElementById('s-Cord'); 
    document.getElementById('s-cord').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-s-cord').onclick = function() {    
        dialog.close();    
    };    
})();

/* MALVASTRUM      */
(function() {    
    var dialog = document.getElementById('malV'); 
    document.getElementById('malv').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-malv').onclick = function() {    
        dialog.close();    
    };    
})();

/* INDIGO      */
(function() {    
    var dialog = document.getElementById('indiGO'); 
    document.getElementById('indi').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-indi').onclick = function() {    
        dialog.close();    
    };    
})();

/* crotalaria      */
(function() {    
    var dialog = document.getElementById('crotAL'); 
    document.getElementById('crot').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-crot').onclick = function() {    
        dialog.close();    
    };    
})();

/* sonchus     */
(function() {    
    var dialog = document.getElementById('sonCH'); 
    document.getElementById('son').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-son').onclick = function() {    
        dialog.close();    
    };    
})();

/* CORONOPUS     */
(function() {    
    var dialog = document.getElementById('coroNO'); 
    document.getElementById('coro').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-coro').onclick = function() {    
        dialog.close();    
    };    
})();

/* CUDWEED     */
(function() {    
    var dialog = document.getElementById('cudW'); 
    document.getElementById('cud').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-cud').onclick = function() {    
        dialog.close();    
    };    
})();

/* COTULA     */
(function() {    
    var dialog = document.getElementById('cotulA'); 
    document.getElementById('cotula').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-cotula').onclick = function() {    
        dialog.close();    
    };    
})();



/* TEST CODE TO MOVE THROUGH PHOTOS */
/* CROTALARIA      */
/*et img_now = 0;
let images = ['./images/spider.png', './images/thrips.png'];
let im_len = images.length;


    //event.target here is refer to clicked <img>
    //that triger the event

(function() {    
    //var dialog = document.getElementById('indiGO'); 
    document.getElementById('col').onclick = function() { 
        let ff = document.getElementById('image1');
        let dd = document.getElementById('hide-col');
        let ss = document.getElementById('image2');
        dd.style.visibility = 'visible';     
        ff.style.visibility = 'visible';
        ss.style.visibility = 'visible';
    };

    let elm = document.getElementById('image2');
    elm.addEventListener('click', function() {
        let ff = document.getElementById('image1');
        if (img_now > im_len-1) {
            img_now = 0;
        }
        ff.src = images[img_now++]
    });
    
    document.getElementById('hide-col').onclick = function() {  
        let ff = document.getElementById('image1');
        let dd = document.getElementById('hide-col');  
        ff.style.visibility = 'hidden';  
        dd.style.visibility = 'hidden';
    };    
})();   */   


/* pest 1    */
(function() {    
    var dialog = document.getElementById('pest1'); 
    document.getElementById('image-1').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-pest1').onclick = function() {    
        dialog.close();    
    };    
})();

/* pest 2    */
(function() {    
    var dialog = document.getElementById('pest2'); 
    document.getElementById('image-2').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-pest2').onclick = function() {    
        dialog.close();    
    };    
})();

/* pest 3    */
(function() {    
    var dialog = document.getElementById('pest3'); 
    document.getElementById('image-3').onclick = function() {    
        dialog.showModal();    
    };
    
    document.getElementById('hide-pest3').onclick = function() {    
        dialog.close();    
    };    
})();




info1.addEventListener('click', function(e) {
    e.preventDefault();
    mallow();
})
info2.addEventListener('click', function(e) {
    e.preventDefault();
    nightshade();
})
info3.addEventListener('click', function(e) {
    e.preventDefault();
    thickhead();
})
info4.addEventListener('click', function(e) {
    e.preventDefault();
    amaranthus();
})
info5.addEventListener('click', function(e) {
    e.preventDefault();
    gomphrena();
})
info6.addEventListener('click', function(e) {
    e.preventDefault();
    verbenaB();
})
info7.addEventListener('click', function(e) {
    e.preventDefault();
    tropicalchickweed();
})
info8.addEventListener('click', function(e) {
    e.preventDefault();
    Capsella();
})
info9.addEventListener('click', function(e) {
    e.preventDefault();
    Heliotrope();
})
info10.addEventListener('click', function(e) {
    e.preventDefault();
    Khaki();
})
info11.addEventListener('click', function(e) {
    e.preventDefault();
    Fleabane();
})
info12.addEventListener('click', function(e) {
    e.preventDefault();
    Bidens();
})
info13.addEventListener('click', function(e) {
    e.preventDefault();
    Potato();
})
info14.addEventListener('click', function(e) {
    e.preventDefault();
    willowherb();
})
info15.addEventListener('click', function(e) {
    e.preventDefault();
    cotton();
})
info16.addEventListener('click', function(e) {
    e.preventDefault();
    brazilian();
})
info17.addEventListener('click', function(e) {
    e.preventDefault();
    Mitracarpus();
})
info18.addEventListener('click', function(e) {
    e.preventDefault();
    Richardia();
})
info19.addEventListener('click', function(e) {
    e.preventDefault();
    Sida();
})
info20.addEventListener('click', function(e) {
    e.preventDefault();
    Sida_rhom();
})
info21.addEventListener('click', function(e) {
    e.preventDefault();
    Sida_cord();
})
info22.addEventListener('click', function(e) {
    e.preventDefault();
    Malvastrum();
})
info23.addEventListener('click', function(e) {
    e.preventDefault();
    Indigo();
})
info24.addEventListener('click', function(e) {
    e.preventDefault();
    Crotalaria();
})
info25.addEventListener('click', function(e) {
    e.preventDefault();
    Sonchus();
})
info26.addEventListener('click', function(e) {
    e.preventDefault();
    Coronopus();
})
info27.addEventListener('click', function(e) {
    e.preventDefault();
    Cudweed();
})
info28.addEventListener('click', function(e) {
    e.preventDefault();
    Cotula();
})
