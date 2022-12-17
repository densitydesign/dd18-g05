 let keywords = [/\b(aircraft)\b/gi, /\b(airplane)\b/gi, /\b(airplanes)\b/gi, /\b(airport)\b/gi, /\b(airports)\b/gi, /\b(animals)\b/gi,
    /\b(atmosphere)\b/gi, /\b(aviation)\b/gi, /\b(bag)\b/gi, /\b(ban)\b/gi, /\b(beach)\b/gi, /\b(bike)\b/gi, /\b(millionaires)\b/gi,
    /\b(billionaire)\b/gi, /\b(billionaires)\b/gi, /\b(bottle)\b/gi, /\b(boycott)\b/gi, /\b(brands)\b/gi, /\b(bryant)\b/gi, /\b(bus)\b/gi,
    /\b(business)\b/gi, /\b(ca)\b/gi, /\b(california)\b/gi, /\b(cam)\b/gi, /\b(camarillo)\b/gi, /\b(cans)\b/gi, /\b(capitalism)\b/gi,
    /\b(car)\b/gi, /\b(cars)\b/gi, /\b(carbon)\b/gi, /\b(celeb)\b/gi, /\b(celebrities)\b/gi, /\b(celebrity)\b/gi, /\b(celebs)\b/gi,
    /\b(change)\b/gi, /\b(charter)\b/gi, /\b(chickpeas)\b/gi, /\b(china)\b/gi, /\b(elite)\b/gi, /\b(climate)\b/gi, /\b(company)\b/gi,
    /\b(companies)\b/gi, /\b(consequences)\b/gi, /\b(consumption)\b/gi, /\b(corporations)\b/gi, /\b(cosmetics)\b/gi, /\b(makeup)\b/gi,
    /\b(culture)\b/gi, /\b(damage)\b/gi, /\b(dicaprio)\b/gi, /\b(leo)\b/gi, /\b(leonardo)\b/gi, /\b(drake)\b/gi, /\b(drakes)\b/gi, /\b(drive)\b/gi,
    /\b(driving)\b/gi, /\b(drought)\b/gi, /\b(eat)\b/gi, /\b(electric)\b/gi, /\b(elon)\b/gi, /\b(emissions)\b/gi, /\b(environmental)\b/gi, /\b(environment)\b/gi,
    /\b(europe)\b/gi, /\b(fan)\b/gi, /\b(fans)\b/gi, /\b(fault)\b/gi, /\b(fire)\b/gi, /\b(fires)\b/gi, /\b(floyd)\b/gi, /\b(fly)\b/gi, /\b(flying)\b/gi,
    /\b(flight)\b/gi, /\b(food)\b/gi, /\b(footprint)\b/gi, /\b(france)\b/gi, /\b(fuel)\b/gi, /\b(garbage)\b/gi, /\b(gas)\b/gi, /\b(government)\b/gi,
    /\b(green)\b/gi, /\b(hamilton)\b/gi, /\b(hangar)\b/gi, /\b(hanger)\b/gi, /\b(heat)\b/gi, /\b(helicopters)\b/gi, /\b(henderson)\b/gi, /\b(hills)\b/gi,
    /\b(hollywood)\b/gi, /\b(hour)\b/gi, /\b(hours)\b/gi, /\b(hypocrites)\b/gi, /\b(ig)\b/gi, /\b(impact)\b/gi, /\b(india)\b/gi, /\b(industry)\b/gi,
    /\b(jack)\b/gi, /\b(jets)\b/gi, /\b(joke)\b/gi, /\b(kardashian)\b/gi, /\b(kardashians)\b/gi, /\b(kim)\b/gi, /\b(kimkardashian)\b/gi, /\b(kourtney)\b/gi,
    /\b(kenny)\b/gi, /\b(kobe)\b/gi, /\b(kylie)\b/gi, /\b(kyliejenner)\b/gi, /\b(jenner)\b/gi, /\b(jenners)\b/gi, /\b(la)\b/gi, /\b(law)\b/gi, /\b(laws)\b/gi,
    /\b(lifestyle)\b/gi, /\b(maintenance)\b/gi, /\b(mayweather)\b/gi, /\b(meat)\b/gi, /\b(media)\b/gi, /\b(miles)\b/gi, /\b(minute)\b/gi, /\b(minutes)\b/gi,
    /\b(money)\b/gi, /\b(musk)\b/gi, /\b(ocean)\b/gi, /\b(oil)\b/gi, /\b(oxnard)\b/gi, /\b(paper)\b/gi, /\b(pay)\b/gi, /\b(peasants)\b/gi, /\b(people)\b/gi,
    /\b(peoples)\b/gi, /\b(ppl)\b/gi, /\b(pilot)\b/gi, /\b(pilots)\b/gi, /\b(planes)\b/gi, /\b(plane)\b/gi, /\b(planet)\b/gi, /\b(world)\b/gi, /\b(earth)\b/gi,
    /\b(plastic)\b/gi, /\b(politicians)\b/gi, /\b(politician)\b/gi, /\b(polluting)\b/gi, /\b(pollution)\b/gi, /\b(privacy)\b/gi, /\b(recycle)\b/gi,
    /\b(recycling)\b/gi, /\b(repositioning)\b/gi, /\b(rich)\b/gi, /\b(ride)\b/gi, /\b(rides)\b/gi, /\b(rules)\b/gi, /\b(scam)\b/gi, /\b(scott)\b/gi,
    /\b(seinfeld)\b/gi, /\b(service)\b/gi, /\b(shame)\b/gi, /\b(society)\b/gi, /\b(straw)\b/gi, /\b(straws)\b/gi, /\b(tax)\b/gi, /\b(taxed)\b/gi,
    /\b(taxes)\b/gi, /\b(taylor)\b/gi, /\b(tiktok)\b/gi, /\b(tons)\b/gi, /\b(toronto)\b/gi, /\b(town)\b/gi, /\b(traffic)\b/gi, /\b(trip)\b/gi,
    /\b(trips)\b/gi, /\b(turtles)\b/gi, /\b(twitter)\b/gi, /\b(uk)\b/gi, /\b(valley)\b/gi, /\b(van nuys)\b/gi, /\b(vegan)\b/gi, /\b(vegas)\b/gi,
    /\b(ventura)\b/gi, /\b(county)\b/gi, /\b(waste)\b/gi, /\b(water)\b/gi, /\b(wealth)\b/gi, /\b(wedding)\b/gi];
  
  let change = ["<span class='CLUSTER1'>aircraft</span>", "<span class='CLUSTER1'>airplane</span>", "<span class='CLUSTER1'>airplanes</span>", "<span class='CLUSTER1'>airport</span>",
    "<span class='CLUSTER1'>airports</span>", "<span class='CLUSTER2'>animals</span>", "<span class='CLUSTER3'>atmosphere</span>", "<span class='CLUSTER1'>aviation</span>",
    "<span class='CLUSTER2'>bag</span>", "<span class='CLUSTER3'>ban</span>", "<span class='CLUSTER0'>beach</span>", "<span class='CLUSTER2'>bike</span>",
    "<span class='CLUSTER4'>millionaires</span>", "<span class='CLUSTER4'>billionaire</span>", "<span class='CLUSTER4'>billionaires</span>",
    "<span class='CLUSTER2'>bottle</span>", "<span class='CLUSTER4'>boycott</span>", "<span class='CLUSTER4'>brands</span>", "<span class='CLUSTER5'>bryant</span>",
    "<span class='CLUSTER2'>bus</span>", "<span class='CLUSTER4'>business</span>", "<span class='CLUSTER2'>ca</span>", "<span class='CLUSTER2'>california</span>",
    "<span class='CLUSTER5'>cam</span>", "<span class='CLUSTER5'>camarillo</span>", "<span class='CLUSTER2'>cans</span>", "<span class='CLUSTER4'>capitalism</span>",
    "<span class='CLUSTER2'>car</span>", "<span class='CLUSTER2'>cars</span>", "<span class='CLUSTER3'>carbon</span>", "<span class='CLUSTER5'>celeb</span>",
    "<span class='CLUSTER5'>celebrities</span>", "<span class='CLUSTER5'>celebrity</span>", "<span class='CLUSTER5'>celebs</span>", "<span class='CLUSTER3'>change</span>",
    "<span class='CLUSTER1'>charter</span>", "<span class='CLUSTER2'>chickpeas</span>", "<span class='CLUSTER3'>china</span>", "<span class='CLUSTER4'>elite</span>",
    "<span class='CLUSTER3'>climate</span>", "<span class='CLUSTER0'>company</span>", "<span class='CLUSTER0'>companies</span>", "<span class='CLUSTER3'>consequences</span>",
    "<span class='CLUSTER2'>consumption</span>", "<span class='CLUSTER4'>corporations</span>", "<span class='CLUSTER2'>cosmetics</span>", "<span class='CLUSTER2'>makeup</span>",
    "<span class='CLUSTER5'>culture</span>", "<span class='CLUSTER3'>damage</span>", "<span class='CLUSTER5'>dicaprio</span>", "<span class='CLUSTER5'>leo</span>",
    "<span class='CLUSTER5'>leonardo</span>", "<span class='CLUSTER5'>drake</span>", "<span class='CLUSTER5'>drakes</span>", "<span class='CLUSTER5'>drive</span>",
    "<span class='CLUSTER5'>driving</span>", "<span class='CLUSTER2'>drought</span>", "<span class='CLUSTER4'>eat</span>", "<span class='CLUSTER2'>electric</span>",
    "<span class='CLUSTER5'>elon</span>", "<span class='CLUSTER3'>emissions</span>", "<span class='CLUSTER3'>environmental</span>", "<span class='CLUSTER0'>environment</span>",
    "<span class='CLUSTER3'>europe</span>", "<span class='CLUSTER5'>fan</span>", "<span class='CLUSTER5'>fans</span>", "<span class='CLUSTER3'>fault</span>",
    "<span class='CLUSTER3'>fire</span>", "<span class='CLUSTER3'>fires</span>", "<span class='CLUSTER0'>floyd</span>", "<span class='CLUSTER1'>fly</span>",
    "<span class='CLUSTER0'>flying</span>", "<span class='CLUSTER1'>flight</span>", "<span id='food' class='CLUSTER2'>food</span>", "<span class='CLUSTER3'>footprint</span>",
    "<span class='CLUSTER3'>france</span>", "<span class='CLUSTER1'>fuel</span>", "<span class='CLUSTER2'>garbage</span>", "<span class='CLUSTER3'>gas</span>",
    "<span class='CLUSTER4'>government</span>", "<span class='CLUSTER3'>green</span>", "<span class='CLUSTER5'>hamilton</span>", "<span class='CLUSTER1'>hangar</span>",
    "<span class='CLUSTER0'>hanger</span>", "<span class='CLUSTER3'>heat</span>", "<span class='CLUSTER5'>helicopters</span>", "<span class='CLUSTER5'>henderson</span>",
    "<span class='CLUSTER0'>hills</span>", "<span class='CLUSTER5'>hollywood</span>", "<span class='CLUSTER2'>hour</span>", "<span class='CLUSTER2'>hours</span>",
    "<span class='CLUSTER5'>hypocrites</span>", "<span class='CLUSTER0'>ig</span>", "<span class='CLUSTER3'>impact</span>", "<span class='CLUSTER3'>india</span>",
    "<span class='CLUSTER3'>industry</span>", "<span class='CLUSTER5'>jack</span>", "<span class='CLUSTER0'>jets</span>", "<span class='CLUSTER0'>joke</span>",
    "<span class='CLUSTER5'>kardashian</span>", "<span class='CLUSTER5'>kardashians</span>", "<span class='CLUSTER5'>kim</span>", "<span class='CLUSTER5'>kimkardashian</span>",
    "<span class='CLUSTER5'>kourtney</span>", "<span class='CLUSTER5'>kenny</span>", "<span class='CLUSTER5'>kobe</span>", "<span class='CLUSTER5'>kylie</span>",
    "<span class='CLUSTER5'>kyliejenner</span>", "<span class='CLUSTER5'>jenner</span>", "<span class='CLUSTER5'>jenners</span>", "<span class='CLUSTER0'>la</span>",
    "<span class='CLUSTER4'>law</span>", "<span class='CLUSTER4'>laws</span>", "<span class='CLUSTER4'>lifestyle</span>", "<span class='CLUSTER1'>maintenance</span>",
    "<span class='CLUSTER0'>mayweather</span>", "<span class='CLUSTER2'>meat</span>", "<span class='CLUSTER0'>media</span>", "<span class='CLUSTER5'>miles</span>",
    "<span class='CLUSTER5'>minute</span>", "<span class='CLUSTER5'>minutes</span>", "<span class='CLUSTER4'>money</span>", "<span class='CLUSTER5'>musk</span>",
    "<span class='CLUSTER2'>ocean</span>", "<span class='CLUSTER4'>oil</span>", "<span class='CLUSTER5'>oxnard</span>", "<span class='CLUSTER2'>paper</span>",
    "<span class='CLUSTER4'>pay</span>", "<span class='CLUSTER0'>peasants</span>", "<span id='people' class='CLUSTER4'>people</span>", "<span class='CLUSTER4'>peoples</span>",
    "<span class='CLUSTER4'>ppl</span>", "<span class='CLUSTER1'>pilot</span>", "<span class='CLUSTER0'>pilots</span>", "<span class='CLUSTER1'>planes</span>",
    "<span class='CLUSTER0'>plane</span>", "<span class='CLUSTER3'>planet</span>", "<span class='CLUSTER3'>world</span>", "<span class='CLUSTER3'>earth</span>",
    "<span class='CLUSTER2'>plastic</span>", "<span class='CLUSTER4'>politicians</span>", "<span class='CLUSTER4'>politician</span>", "<span class='CLUSTER3'>polluting</span>",
    "<span class='CLUSTER3'>pollution</span>", "<span class='CLUSTER0'>privacy</span>", "<span class='CLUSTER2'>recycle</span>", "<span class='CLUSTER2'>recycling</span>",
    "<span class='CLUSTER1'>repositioning</span>", "<span class='CLUSTER4'>rich</span>", "<span class='CLUSTER5'>ride</span>", "<span class='CLUSTER5'>rides</span>",
    "<span class='CLUSTER4'>rules</span>", "<span class='CLUSTER4'>scam</span>", "<span class='CLUSTER5'>scott</span>", "<span class='CLUSTER0'>seinfeld</span>",
    "<span class='CLUSTER1'>service</span>", "<span class='CLUSTER4'>shame</span>", "<span class='CLUSTER2'>society</span>", "<span class='CLUSTER2'>straw</span>",
    "<span class='CLUSTER2'>straws</span>", "<span class='CLUSTER4'>tax</span>", "<span class='CLUSTER4'>taxed</span>", "<span class='CLUSTER4'>taxes</span>",
    "<span class='CLUSTER5'>taylor</span>", "<span class='CLUSTER0'>tiktok</span>", "<span class='CLUSTER3'>tons</span>", "<span class='CLUSTER5'>toronto</span>",
    "<span class='CLUSTER1'>town</span>", "<span class='CLUSTER2'>traffic</span>", "<span class='CLUSTER0'>trip</span>", "<span class='CLUSTER0'>trips</span>",
    "<span class='CLUSTER3'>turtles</span>", "<span class='CLUSTER0'>twitter</span>", "<span class='CLUSTER3'>uk</span>", "<span class='CLUSTER0'>valley</span>",
    "<span class='CLUSTER5'>van nuys</span>", "<span class='CLUSTER2'>vegan</span>", "<span class='CLUSTER5'>vegas</span>", "<span class='CLUSTER5'>ventura</span>",
    "<span class='CLUSTER5'>county</span>", "<span class='CLUSTER2'>waste</span>", "<span class='CLUSTER2'>water</span>", "<span class='CLUSTER4'>wealth</span>", "<span class='CLUSTER5'>wedding</span>"]

  
  for (let i = 1; i < 4484; i++) {
    let identificatore = i.toString();
    for (let k = 0; k < 185; k++) {
      document.getElementById(identificatore).innerHTML = document.getElementById(identificatore).innerHTML.replace(keywords[k], change[k]);
    }
  }