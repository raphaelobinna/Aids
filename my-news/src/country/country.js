import React, { Component } from 'react';
import pan from '../images/p1.JPG';
import pad from '../images/p2.JPG';
import pat from '../images/p3.JPG'
import './country.css'

class country extends Component {
    state = {
        Location : null
    }

    onlocationHandler = event => {
        this.setState({Location : event.target.value})
    }
    render () {

let capping = (<p>
                    this is it
            </p>)

        switch (this.state.Location) {
            case "Chad":
                capping= (<div class="Dope">
                    <h1>OUR WORK IN CHAD</h1>
                <p>
                    
I travelled to southern Chad where humanitarian needs have increased because of an influx of people who fled from fighting between rival armed groups in neighbouring Central African Republic (C.A.R.). The area is littered with villages where refugees and local communities live together. 
<br/>The hosts have been sharing the little they have with those who crossed the border to find safety.
<b>“We were welcomed by the people here. 
<br/>Some of us had family members already in Chad, the same way as there are Chadians living in C.A.R.,” </b>says Mbaindorou Ledingard Elisée, Representative of the new refugees in the village of Beakoro.
Around 30,000 refugees have arrived in southern Chad from C.A.R. since late December 2017. 
<br/>Host communities who are themselves poor, vulnerable to climate change and affected by interruptions in cross-border trade, ended up with extra mouths to feed. They quickly ran out of food and other basic needs. By February, an Emergency Food Security Assessment showed alarming levels of food insecurity among people.
<br/>

The United Nations World Food Programme (WFP) has mounted an urgent response to support people in need. With most of them spread out in numerous, small villages along the border that are hard to access, especially in the rainy season, WFP had to rethink its tactics to serve people. 
<br/>It partnered with local traders, who can transport food from their main shops to distribution sites in every village.
Refugees receive a value voucher, tailored to the size of their family, which they redeem against a list of products. 
<br/>This strengthens choice, convenience and dignity.
At a distribution site in Don, a village located 2km away from the River Logone that separates both countries, refugees choose between some 15 to 20 products, including flours and canned food cans.
<br/>
<img src={pad} alt=""/>
<br/>
Most of the refugees say the conditions are not conducive for their return to C.A.R. 
Fighting may have reduced because of rainy season that hampers movement, but insecurity is still rife.
Staying in Chad comes with its own challenges, though. 
<br/>Limited funding means aid groups cannot cater to their vital needs in a country which is reeling from a severe economic crisis. Humanitarian partners are thus considering to progressively move to early recovery and self-sufficiency programmes that strengthen livelihoods and provide income-generating opportunities.
In the meantime, rain has now enabled cereals to grow. 
<br/>Villagers will be able to collect the long-awaited harvest in a few weeks. It may not be enough, but it is better than nothing.
WFP is able to deliver emergency food assistance to newly arrived refugees from C.A.R in Chad 
<br/>thanks to the support of the United Nation’s Central Emergency response Fund (CERF), the United Kingdom (DFID), the European Union (ECHO) and the United States (USAID-Food for Peace).
<br/><b>Please donate today and help life-saving food reach those families who need it the most in the Sahel.</b>

                </p>
                </div>)
                break;
            case "Mozambique":
                capping = (<div class="Dope">
                    <h1>OUR WORK IN MOZAMBIQUE</h1>
                    <p>
                    Humanitarian relief often comes down to the last mile, that flooded stretch of road that stands between food assistance and a desperate community. 
                    The last mile is the hiccup that can undermine an entire operation, 
                    <br/>its size no indication of the trouble it can cause.
                    Buzi, a rural area in northern Mozambique, was isolated after Cyclone Idai. Surrounded by water on all sides, homes were flooded for seven days and a high proportion of farms are still submerged. 
                    Families waited for emergency assistance in treetops, some for up to three days. 
                    <br/>Grain storehouses were flooded. Livestock drowned or escaped to higher ground.
                    A Sherp crosses flooded plains to deliver 26 tons of food to Buzi in Northern Mozambique. 
                    
                    <br/>
For the first two weeks following the cyclone, some 100,000 people received World Food Programme (WFP) assistance from helicopters and boats only. 
But when that many people need urgent help, trucks are the fastest, cheapest way to get it to them.
<br/>
Two WFP trucks set out for Buzi on 4 April, but the dirt road was so waterlogged that the first truck sank, unable to move forward. 
When the second attempted to drive around, both vehicles fell together like playing cards, touching at the top. 
<br/>Lighter and faster, a 4x4 in the convoy tried to pass, but only got as far as the front of the pile-up. Instead of bringing relief, the convoy itself had become a blockade.
“This is a cost-effective supply chain innovation that goes directly to the target — the population in need. 
<br/>
<img src= {pan}  alt=""/>
<br/>We are changing the idea that we have to use a helicopter or an airlift.”
For the first time in a sudden-onset emergency, WFP had a new option: an amphibious truck, like a tank with inflatable wheels, called a Sherp — a name that suggests the fortitude of one who scales Mt. Everest loaded with a pack.
<b>“It’s like a humanitarian monster truck,” </b>explains Adam Marlatt, an expert on mission with WFP, who sat in the passenger seat.
<b>“It’s like operating a forklift,” </b>says driver and Regional Fleet Manager, Nobuyoshi Kida. 
                    <br/>
After field-testing two Sherps in the Democratic Republic of Congo and three in South Sudan in 2018, WFP included two of the Ukraine-made vehicles in the response to Cyclone Idai. <b>“This is a cost-effective supply chain innovation that goes directly to the target — the population in need. 
    <br/> We are changing the idea that we have to use a helicopter or an airlift,” </b>adds Kida.
Shortly after the trucks got stuck, two Sherps arrived from Beira on the back of a flat-bed truck to solve the problem of the blockade and get supplies to Buzi. 
Before the Sherp could proceed, however, crucial navigational information was needed. Sherps can’t climb a vertical wall, so the driver needed to know where the slopes tapered off. It was also imperative to avoid rapids that could push the vehicle towards the Indian Ocean.
A drone was sent up for a bird’s eye view of the area.
<br/>
Images from the drone, piloted by Marlatt in the passenger seat, were broadcast onto his phone screen, so he could ‘see’ past the tree tops and the swamp, and was able to navigate the remaining 30 kilometers to Buzi. <b> “It’s interesting to pair an emerging solution in the logistics world like the Sherp with an emerging solution in the tech world, like drones. The two complement each other,” </b>reflects Marlatt.
In the following 48 hours, 26 metric tons of food were moved into Buzi, one ton at a time, the drone leading the Sherp across the unpredictable river.



                </p>
                </div>)
                break;
                case "Tanzania" : 
                capping = (<div  class="Dope">
                    <h1>OUR WORK IN TANZANIA</h1>
                    <p>
                    Many of the children in Kwediloko, a sub-village of Komsanga, have a hard time regularly attending school due to the 16 kilometer round-trip.
<b>“It can take students two to three hours to walk one way with the rough terrain,” </b>said Pili. 
<br/><b>“This is too much, especially for the young ones, and it can cause them to quickly fall behind in school.”</b>
Falling behind affects children’s chances of finishing school or even learning key skills such as reading, writing and using basic math.
“This is a problem we can and must solve,” said Emily Church, Executive Director, Global Learning XPRIZE.
<br/> “We can harness the power of technology so that children everywhere — regardless of circumstance — have the opportunity to thrive and build a better future for themselves and all of us.”
<br/>
<b>Impact</b>
<br/>
The 15-month field test for the competition began in December 2016 and so far 2,700 children have been able to improve their education and learning through access to educational content on the XPRIZE competition software.
The impact has not gone unnoticed by the communities and particularly the parents of the children who received the tablets.
<br/>
<b>“Within six months of using the tablet, I could see so much progress,”</b> said Zahari Omari, one of whose four children received an XPRIZE tablet. 
<br/><b>“Juma was able to read and write. I couldn’t believe it. I had never seen him do that before.”</b>
Juma only attended school for one year when he was younger. Waking up at 4 a.m. to walk to school as a young child became too much and he stopped going. 
<br/>Now he uses the tablet every day and takes it to Pili at the solar-charging station when the battery runs out.
<b>“The tablets are fun, I look forward to playing with them and learning,” </b>said Juma.
<br/>
<img src={pat} alt=""/>
<br/>After using the tablet for 15 months, one of Juma’s favourite things to do now is to help his mom by typing and reading her text messages for her.
Second chances
If you travel from Kwediloko north and then turn east in Muheza onto the dirt road to Pangani, you will pass by the village of Mkuzi, with another sub-village named Maweni. This is where Mboni and Twaha live. They also received tablets under the XPRIZE project.
<br/>
Mboni is currently attending kindergarten. She’s a year older than the other students as she was enrolled late.
<b>“The tablet has helped her to catch up on school,” </b>says Rehema, her mother. <b>“She’s doing so well now. We are checking to see if she can move up to study with students her age. I think she’s ready.”</b>
Fortunately, Mboni is only a year behind and might more easily be able to catch up with her peers. 
<br/>That however, is not the case for Twaha, who is older and only received one year of formal schooling.
“He was really struggling. I couldn’t get him interested in anything, especially not school,” said Frida, his mother.
<br/><b> “The tablet has given him a second chance. He has a new-found confidence.”</b>
Twaha is now enrolled and regularly attending a special school for students like him who are too old to study in the regular classroom. His mother says that he is doing very well and that he has even shown interest in things that he didn’t before, such as playing games and soccer.
“He loves soccer,” she says.
<br/> <b>“Now you can always find him either at school studying, playing with his friends or at home with his tablet.”</b>



                    </p>
                </div>)
                break;
            default:
                capping= (<div class="Dope">
                    <h1>OUR WORK IN CHAD</h1>
                <p>
                    
I travelled to southern Chad where humanitarian needs have increased because of an influx of people who fled from fighting between rival armed groups in neighbouring Central African Republic (C.A.R.). The area is littered with villages where refugees and local communities live together. 
<br/>The hosts have been sharing the little they have with those who crossed the border to find safety.
<b>“We were welcomed by the people here. 
<br/>Some of us had family members already in Chad, the same way as there are Chadians living in C.A.R.,” </b>says Mbaindorou Ledingard Elisée, Representative of the new refugees in the village of Beakoro.
Around 30,000 refugees have arrived in southern Chad from C.A.R. since late December 2017. 
<br/>Host communities who are themselves poor, vulnerable to climate change and affected by interruptions in cross-border trade, ended up with extra mouths to feed. They quickly ran out of food and other basic needs. By February, an Emergency Food Security Assessment showed alarming levels of food insecurity among people.
<br/>

The United Nations World Food Programme (WFP) has mounted an urgent response to support people in need. With most of them spread out in numerous, small villages along the border that are hard to access, especially in the rainy season, WFP had to rethink its tactics to serve people. 
<br/>It partnered with local traders, who can transport food from their main shops to distribution sites in every village.
Refugees receive a value voucher, tailored to the size of their family, which they redeem against a list of products. 
<br/>This strengthens choice, convenience and dignity.
At a distribution site in Don, a village located 2km away from the River Logone that separates both countries, refugees choose between some 15 to 20 products, including flours and canned food cans.
<br/>
<img src={pad} alt=""/>
<br/>
Most of the refugees say the conditions are not conducive for their return to C.A.R. 
Fighting may have reduced because of rainy season that hampers movement, but insecurity is still rife.
Staying in Chad comes with its own challenges, though. 
<br/>Limited funding means aid groups cannot cater to their vital needs in a country which is reeling from a severe economic crisis. Humanitarian partners are thus considering to progressively move to early recovery and self-sufficiency programmes that strengthen livelihoods and provide income-generating opportunities.
In the meantime, rain has now enabled cereals to grow. 
<br/>Villagers will be able to collect the long-awaited harvest in a few weeks. It may not be enough, but it is better than nothing.
WFP is able to deliver emergency food assistance to newly arrived refugees from C.A.R in Chad 
<br/>thanks to the support of the United Nation’s Central Emergency response Fund (CERF), the United Kingdom (DFID), the European Union (ECHO) and the United States (USAID-Food for Peace).
<br/><b>Please donate today and help life-saving food reach those families who need it the most in the Sahel.</b>

                </p>
                </div>)
                break;
        }
        
        return (<div>
            <div class="label">
                        <label >LOCATIONS : </label>
                        <select value={this.state.Location} onChange={this.onlocationHandler}>
                            <option value="Chad">Chad</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Tanzania">Tanzania</option>
                        </select>
                    </div>

                    {capping}
        </div>)
    }
};

export default country;