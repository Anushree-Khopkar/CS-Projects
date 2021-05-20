import React from 'react';

function Blog3(){
    return(
        <div style= {{
                width:'70%',
                height:'auto',
                float:'left'
            }}
            >
            <div style={{
                margin:'2%',
				background: 'linear-gradient(to right,#ada996, #f2f2f2, #dbdbdb, #eaeaea)',
				boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'            
            }}>
                <h1 style={{
                    textAlign:'center',
					fontFamily:'Cinzel,serif',
					paddingTop:'1%'                 
                    }}
                >
                    Leh Ladakh
                </h1>
                <img style={{
                    width:'auto',
					height:500,
					marginLeft:'12%',
					border:'2px solid white',
					borderRadius:'5%'}} 
                    src='https://indiasomeday.com/wp-content/uploads/2018/05/Pangong2.jpg'
                />
                <div style={{
                    padding:'2%',
					fontFamily:'Martel,serif',
					fontWeight:'lighter',
                }}>
                    <p >
                        Ladakh might be a small region within India, but it’s actually double the size of Switzerland. Nevertheless, the unpopulated 
                        mountains occupy most part of it. If you arrive by plane, the capital is going to be your first destination. Leh is a fantastic place to 
                        explore. Leh palace, the most iconic building of the city, is definitely worth a visit. You can also watch the sunset from Shanti stupa, 
                        visit Tibetan refugee markets or simply wander around its narrow alleys and streets. In Leh, you will get a first glimpse of what 
                        Tibetan culture is like. A vast sea of sand dunes in the Himalaya itself. Can you believe it? Nubra Valley is a desert similar to those 
                        of Arabia but located at 4,000 meters above sea level and surrounded by the Himalayan range. Here you also find two-humped hairy camels. 
                        Tibetans claim that the origin of this desert comes from Tethys, a sea from the depths from which the Himalayas are supposed to have risen.
                    </p>
                    <p>
                        This is nothing less than the highest motorable road in the world. It connects Leh with Nubra Valley and its highest point passes over 
                        5,600 meters. A lake located at 4,350m above sea level which extends across India and China. People go to this lake to see the stunning 
                        landscape and for hiking. In my opinion, the most beautiful gompa out there in Ladakh, having been built and perfectly shaped on the 
                        top of a steep hill. Looking at it is merely impressive. The highest lake in Ladakh (4,522m) and one of the most beautiful ones owing to 
                        its surroundings, green pastures and white peaks. Though the most touristic gompa, this fortification is almost like a small town. 
                        It has shops, restaurants, a hotel and a huge monk community living there.
                    </p>
                    <p>
                        If you travel to Ladakh during July, Hemis monastery is a must to visit since it’s where the Hemis Festival takes place, a popular 
                        festival famous for its masked parade. It’s one of the most sacred rituals in Ladakh. Hiking around the unique Himalayan range of Ladakh 
                        is one of the biggest highlights of the trip. There are an endless number of treks adapted for any kind of traveler. Ladakh region is 
                        already off the path, but during high season (July & August), some spots may get busy. Places like Leh, popular gompas, Khardung La pass 
                        and Nubra Valley are probably among the most crowded ones. If you want to avoid the crowds, Pangong Tso Lake and Tso Moriri Lake are the 
                        perfect options. 
                    </p>
                    <p>
                        Trekking is also a good way to get off the beaten track, even in popular treks like Markha Valley. Last, if you are 
                        renting a vehicle, driving the empty roads of Ladakh is an awesome experience and there are endless unexplored villages where you can 
                        randomly stop and look around. I suggest you drive to Chemrey and explore the surrounding area. By the way, if you decide to visit popular 
                        gompas like Thiksey or Hemis, it’s better to go in the afternoon or early evening to avoid the crowds.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Blog3;