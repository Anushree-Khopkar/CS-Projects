import React, {Component} from 'react';
import{
	Link
} from 'react-router-dom';

class Main extends Component {
	render(){
		return(
		
		  <main>
          <ul>
          <li> <Link exact to="/Blog1"> <b> <h1> Taj Mahal </h1> </b></Link>
          <p> <b> <i> <h3> Dated: 2015-01-01 </h3> </i> </b> </p>
          <p id="a">
          <img src={process.env.PUBLIC_URL + '/Taj.jpg'}  />
               
          I’ve probably known about the Taj Mahal since I was seven years old; it’s one of those iconic monuments whose form is 
          burned into your world imagery at childhood. I never really considered actually seeing it, until I planned this trip to Asia. 
          Of course, if I was going to India, I’d go to the Taj Mahal – you have to right? My travel mates and I were actually more willing 
          to skip the Taj than you might imagine. The draw of the classic “sightseeing” destination is not particularly strong for me, or my friends, 
          for whatever reason. I don’t travel to “say I’ve been there” or show people pictures of myself in front of some monument. 
          But seriously, the Taj Mahal is one of those works of genius that when you actually experience it in person you finally get it. 
          You get why you’ve seen pictures of this place since you were a kid; you get why millions of people come here every year; you get 
          why it’s a UNESCO World Heritage Site and on the New Seven Wonders of the World list. I felt the same way when I saw Michelangelo’s 
          David in Florence: Ah, okay, that’s incredibly beautiful (and makes me feel like a failure in life).
          </p>
          </li>

          <li> <Link exact to="/Blog2"> <b> <h1> Golden Temple </h1> </b></Link>
          <p> <b> <i> <h3> Dated: 2013-13-06 </h3> </i> </b> </p>
          <p id="a">
          <img src={process.env.PUBLIC_URL + '/golden.jpg'}  />
                   
          The Golden Temple in Amritsar. Incredible place, incredible people, incredible experience. And that’s why we consider it to be the 
          best place to visit in India. We travelled in India 2 months and although we didn’t go everywhere, the impressive Golden Temple 
          in Amritsar was definitely a place that stood out, left us with unforgettable memories and now holds a very special place in our hearts.
          Sprawling and hectic Amritsar, Sikhs’ holiest city in the world, is situated in the north west of India in Punjab, close to the border 
          with Pakistan. The city was founded in 1577 by Ram Das, the fourth Sikh guru, by a bathing pool with healing power. The main reason 
          we travelled to Amritsar was to visit the Golden Temple, however there are other interesting historical sites to see in the city. 
          The Amritsar Travel Guide by Expedia India is a great source of information. We’ve contributed to this guide too, so don’t forget to 
          check out our recommendations. Amritsar is home to Sikhism’s most important shrine; the glamorous Golden Temple (Darbar Sahib or Harmandir 
          Sahib) stands in the hearth of the old town as a part of a complex that has traditionally been the seat of the Sikh religious authority.
          The Golden Temple is a holy place for both the Sikhs and Hindu. The Golden Temple is open 24 hours a day, 365 days a year.
          </p>
          </li>
          
          <li> <Link exact to="/Blog3"> <b> <h1> Leh Ladakh </h1> </b></Link>
          <p> <b> <i> <h3> Dated: 2013-13-06 </h3> </i> </b> </p>
          <p id="a">
          <img src={process.env.PUBLIC_URL + '/leh.jpg'}  />
                   
          Ladakh is a remote place belonging to a northern Indian state, which for some reason doesn’t receive as many tourists as the rest of the 
          country. I was wondering: Why is that i wonder? This region is a bit remote and of difficult access. Normally, people don’t know about it 
          or haven’t even heard of it. Why? Maybe it’s because Hindu culture can’t be enjoyed here, which is one of the mains reasons for going to 
          India. So what can you do and find in there? Ladakh is basically a Himalayan region where authentic Tibetan people live in. It’s often 
          called the little Tibet, and for the Indians themselves, this is the best spot where to spend their vacations in India. Why? In India chaos 
          rules, it’s overpopulated and there’s traffic everywhere. Ladakh is a different place which differs from all these stereotypes. Here you 
          find peace and silence, which combined with the stunning Himalayan landscape and the Tibetan culture visible in every corner, sometimes you 
          may even forget that you are actually in India. 
          </p>
          
          </li> 

          
          </ul>
          </main>

			);
	}
}
export default Main;