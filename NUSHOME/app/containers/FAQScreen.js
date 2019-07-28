import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Container, Content, Accordion } from "native-base";
import MyHeader from "../components/header";

const academicsDataArray = [
  {
    title: "Can I use S/U on CAPT Modules?",
    content:
      "All JS modules are CS/CU (i.e., pass/fail). You can S/U the rest, including Capstone."
  },
  {
    title: "What is the difference between bidding\nand balloting?",
    content:
      "You will need to bid for your faculty modules and unrestricted electives (UEs). This is done through CORS, where you use points to get modules that you want. On the other hand, balloting is where you rank your choices, and the school will try to give you your top few choices. This is done for both CAPT modules, and for the tutorial slots for your faculty modules (after you have successfully gotten your faculty modules)."
  }
];

const bookingOfFacilities = [
  {
    title: "What facilities can I book in CAPT?",
    content:
      "You can book the MPSH, Theme Rooms, Flying Seed and the Seminar Rooms."
  },
  {
    title: "How can I book a facility in CAPT?",
    content: "You can do so at the Facilities Page of NUSHOME"
  },
  {
    title:
      "What are the criteria / requirements if I\nwant to book a facility in CAPT?",
    content:
      "The event should be College or Neighbourhood-related (that is, you should not be booking for your faculty, etc.). You are however allowed to book the MPSH for personal use (games with friends) but the group using the MPSH must be majority (more than 50%) CAPTains. Please also make your booking a few weeks in advance."
  }
];

const diningHall = [
  {
    title: "General",
    content:
      "All CAPTains are required to purchase meal plan, which provides breakfast and dinner in the Dining Hall. The Dining Hall is located on the first floor of the College."
  },
  {
    title: "When are the meal times?",
    content:
      "Breakfast: Monday to Saturday, 7.00am – 10.30am\nDinner: Sunday to Friday, 5.30pm – 9.30pm"
  },
  {
    title:
      "Oh no, I need to leave very early and\nthe Dining Hall isn’t open in time! What\nto do?",
    content:
      "Not to worry, you can make a request for an early breakfast (served at 6:30am)! You may approach Dining Hall Assistant Managers, they can be found in the Dining Hall during meal hours. You will need to make the request at least two days in advance!"
  },
  {
    title: "Oh no, I missed a meal! Can I claim it\nat another time?",
    content:
      "Yes! You can have your meal credits carried forward for up to 2 weeks before they are forfeited. However, note that you can only tap a maximum of 3 times per meal each day."
  },
  {
    title: "How do I get a meal in the Dining Hall?",
    content:
      "You can tap your card at the card reader near the entrance of the food serving area in the dining hall (next to the computer). You will then receive a coupon, which you place in the bowl at the counter for whichever cuisine you want."
  },
  {
    title: "What kinds of meals are provided in\nthe Dining Hall?",
    content:
      "Chinese, Indian, Malay and Western cuisines are provided (you will need to use one coupon for each serving). There is also a free-flow of drinks and side dishes (such as soup or salad)."
  },
  {
    title: "Is there a menu that I can view?",
    content:
      "Yes there is! There is a Telegram bot created by a very talented CAPTain, and you can find it at @rcmealbot."
  },
  {
    title: "Can I check how many meal credits I\nhave left?",
    content: "Yes you can! You can use the RC Meal Bot as stated above!"
  }
];

const mailroom = [
  {
    title: "General",
    content:
      "We have a mailroom in CAPT! It is located on L1 at the pickup point, beside the Office of Housing Management (OHS). The mailbox can be used to receive letters and small packages (which can fit in the slot). You can also post mail out from here.\n\nPlease note that parcels will NOT fit into the mailbox and neither the College office nor OHS is able to receive parcels on your behalf. You may wish to arrange for a personal delivery via courier.\n\nIf you’re buying products online, you can consider using the POPStation service as we have a POPStation conveniently located at the Stephen Riady Centre (SRC)."
  },
  {
    title: "What is the address of CAPT?",
    content:
      "College of Alice & Peter Tan\n8 College Avenue East\nSingapore 138615"
  }
];

const theFlyingSeed = [
  {
    title: "General",
    content:
      "The Flying Seed is the CAPT common lounge located on L1, right outside the lifts. Facilities include a TV, a piano, and a printing / photocopying station."
  },
  {
    title: "Do I need to book the Flying Seed to use\nthe TV?",
    content:
      "No you don’t have to! But please also be considerate when you are using the TV. Bring down your own VGA or HDMI cable."
  }
];

const lifts = [
  {
    title: "General",
    content:
      "We have three lifts that service the College. They’re often decorated with posters and articles about the happenings in CAPT, do keep an eye out for them!"
  },
  {
    title:
      "Oops I accidentally pressed a button /\nI changed my mind. How do I unpress a\nlift button?",
    content:
      "No worries! You can always cancel any level by holding the button for the respective level while the lift door is open."
  }
];

const laundryRooms = [
  {
    title: "General",
    content:
      "Similar to the pantry, each neighbourhood has one laundry room that contains two washers and two dryers. Laundry rooms are located on the top floor of each neighbourhood, specifically Levels 5 (Roc), 8 (Dragon), 11 (Garuda), 14 (Phoenix), 17 (Tulpar). 1 washer and dryer are coin­ operated and use the new $1 coins while the other washer and dryer are Ez-link operated."
  },
  {
    title: "Oh no, I ran out of new $1 coins!",
    content:
      "If you run out of coins, coin changing machines are available in the laundry room on Levels 8 and 14. You can also ask your friends!"
  },
  {
    title: "How long does the washing machine\nand dryer take?",
    content:
      "The washing machine takes 3 minutes, while the dryer takes 40 minutes!"
  }
];

const facilities = [
  {
    title: "Printing",
    content:
      "There are printing stations at the Flying Seed which allow you to print using your portable USB device(You can use your phone to store documents as well) or wireless through the NUS server and requires you to use an Ezlink Card for payment. Please refer to the instructions at the Flying Seed for more info. Other printing options in UTown include printers at PC Commons and Mac Commons at SRC, which also require an Ezlink card. However, you’ll need to follow instructions at those printing stations on how to transfer your document through the NUS server to the printing unit.\nExact printer connection instructions should be placed here"
  },
  {
    title: "Theme Rooms (TRs)",
    content:
      "The Theme Rooms are located on level B1. We have three Theme Rooms:\n\nThe Workshop (Theme Room 1)\nRoom meant for baking and cooking.\n\nThe Black Box (Theme Room 2)\nRoom meant for jamming and making music.\n\nThe Arena (Theme Room 3)\nThe games room.\n\nTRs 1 and 2 are open for CAPTains to book! Booking can be done through the Booking Page of NUSHOME.\nThe Arena (Theme Room 3) is open to all CAPTains, 24/7! Just use your Student Card to access the room. Please do take care of the equipment in the room!"
  },
  {
    title: "Reading Room",
    content:
      "The Reading Room is dedicated to reading and quiet studying. This room is located on Level 1, around the corner from the MPSH, next to Seminar Rooms 1 and 2.\n\nThe Room is furnished with study tables and a wide variety of books that you can peruse while you are there. The Reading Room is open to all CAPTains and can be accessed with your Student Card. Do visit the Reading Room if you are looking for some silence and solitude!"
  },
  {
    title: "Seminar Rooms (SRs)",
    content:
      "The courses taught at CAPT are usually held in one of the six Seminar Rooms within the College. These Seminar Rooms come fully equipped with audiovisual equipment and can also be used for student activities (subject to availability and approval). You may book an SR through the Booking Page of NUSHOME.\nSeminar Rooms 1 and 2 are located on L1, behind the Multi-Purpose Hall, whereas Seminar Rooms 3 to 6 are located at B1 under the Dining Hall."
  },
  {
    title: "Pantry",
    content:
      "The pantry is arguably the most important place you need to know, because it is where the water coolers are located (and common fridge, too). Pantries are located on the middle floor of each neighbourhood, specifically Levels 4 (Roc), 7 (Dragon), 10 (Garuda), 13 (Phoenix), and 16 (Tulpar).\n\nShould you decide to cook, please turn on the stove hood and avoid sudden generation of smoke and steam. The pantry has a smoke detector, and smoke or steam from cooking is the most frequent cause of fire alarms in CAPT. Each neighbourhood may have its own policies and equipment regarding the use of the pantry, so please check with your Neighbourhood Committee and ensure that you comply with them."
  },
  {
    title: "Common Bathrooms",
    content:
      "On every floor, there are two sets of bathrooms, with one on each wing (near Rooms #57 and #64, respectively). Each bathroom is equipped with three shower rooms, toilets and washbasins.\n\nOn single gender floors, the bathrooms on both wings are allocated for the gender of that floor. However, on mixed gender floors, each wing’s bathroom will be allocated for the gender of that wing."
  },
  {
    title: "Refuse Room",
    content:
      "Every floor has a refuse room for you to dispose of your trash. It is located opposite room #62. There are three different chutes for general waste, paper, and plastic. Please separate your waste into these categories and dispose of them accordingly (Save the Earth!).\n\nFor the purpose of hygiene, put all your general rubbish into a plastic bag and dispose of it in the refuse chute, instead of the pantry/toilet bin. You may, however, dispose of paper and plastic recyclables straight into their respective chutes. For plastics, please wash containers first before throwing. For items that do not fit into the refuse chute, please bring them to the main waste disposal area on Level 1 (between Level 1 washroom and OHS).\n\nImportant: Please do not leave rubbish on the floor of the Refuse Room and remember to turn off the lights."
  },
  {
    title: "The Bermuda Triangle",
    content:
      "The Bermuda Triangle is located between the Dining Hall and the Lift Lobby, at Level 1. The Bermuda Triangle is a very interesting place, with a Facebook Wall (where we have Polaroids of all current CAPTains), vending machines, a machine for topping up your aircon credits, and a water dispenser. The Bermuda Triangle is also very interesting, because you will need your Student Card in order to get out of the area.\n\nIMPORTANT: Please remember to bring your Student Card when you visit or pass through the Bermuda Triangle! (or else you will be stranded - hence the name!)"
  }
];

const studentLife = [
  {
    title: "Residential Fellows (RFs)",
    content:
      "The College Fellowship includes both resident and non-resident fellows these are professors and faculty members of the University, all of whom are involved in teaching modules and in the living and learning programmes of the College both in and out of the classroom.\n\nResident Fellows not only teach in CAPT, they also live in the College all year round to provide pastoral care, advice, and mentorship for students. They stay in the #61 suite on the top floor of each neighbourhood.\n\nWorking together with the RAs and Neighbourhood Committees, they play a very important role in creating a secure and supportive environment for communal living and for learning. Our RFs are happy to chat about their own passion, research and hobbies, or about studies and life in general. Do get to know your RF through Neighbourhood bonding activities, along the corridors, or over a meal!"
  },
  {
    title: "Residential Assistants (RAs)",
    content:
      "Resident Assistants (RAs) are friendly and approachable CAPTains who help to oversee the residential life aspect at CAPT. There is an RA designated for each floor and you can find them in room #69 (although this may vary for different floors, check with your house comm to be sure!). Having battled (and survived) at least four semesters of NUS life, the RAs are people who want to share their experiences and make life better for those around them.\n\nThe RA team works throughout the year for CAPTains’ safety and wellbeing, so that everyone can enjoy their time in CAPT. So, don’t hesitate to approach any RA if you need someone to talk to or for some advice on university matters. They are more than happy to have a chat or heart-to-heart talk!"
  },
  {
    title: "College Students' Committee (CSC)",
    content:
      "The College Students’ Committee (CSC) is elected by the student body each year, and represents the interests of all the student members of the College. It looks into their welfare, oversees student-led initiatives and interest groups and works with the Master, Fellows and staff to build a vibrant and cohesive community. The CSC also represents the College to other student organisations in NUS.\n\nThe structure of the CSC can be categorised into 3 main committees: the Standing Committee, the Internal Committee, and the External Committee.\n\nStanding Committee\n\nThe Standing Committee consists of the President, External Vice President (EVP), Internal Vice President (IVP), General Secretary & Finance Secretary. They oversee the various groups in CAPT and serve as the link between the Internal & External Directors, Resident Fellows, Resident Assistants and Neighbourhood Heads.\n\nInternal Committee\n\nThe Internal Committee plans and executes initiatives, activities or events to engage with CAPTains within the college, striving to create a vibrant and dynamic college community. The committee helmed by the IVP, includes the Director of Sports, Director of Clubs and Societies, Director of Student Affairs, Director of Publicity, and their respective committees.\n\nSports Committee\nSports Comm oversees the sports scene here in CAPT. We have two main roles in CAPT – one is to maintain the existing Sports Interest Groups like Basketball, Tchoukball, Soccer and etc. while also facilitating and guiding any CAPTains that would like to start a new Sports Interest Group. The second role is to plan for both the intra and inter college sporting events such as Inter Neighbourhood Games and Inter College Games.\n\nThrough these roles, Sports Committee aims to unite CAPT through sports by providing a common platform for different neighbourhoods to come together for Inter neighbourhood friendships to be forged. Sports Committee also aims to use sports as an avenue for CE and health advocacy through our annual events like CE Sports Week and Health Awareness Week respectively.\n\nClubs and Societies (Clubsocs) Committee\nClubsocs promotes the arts and culture scene in CAPT, as well as various interests of CAPTains such as gardening, baking and coffee! There are three main areas of focus: the Clubsocs IGs that span a wide range of interests, events such as Arts Showcase and the management of Theme Rooms 1 and 2.\n\nClubsocs members join IGs regularly to understand what’s happening on the ground (and have fun of course!), set up for college events and help plan for Clubsocs CE and Arts Showcase. For the Theme Rooms, Clubsocs manages the booking of the rooms and ensures their cleanliness by conducting periodic spot checks to catch errant users, as well as having regular cleaning and purging.\n\nStudent Affairs Committee (SAC)\nThe Student Affairs Committee (SAC) manages and enhances the college welfare within CAPT. This is done via various events such as Inter-College Halloween, Welcome-Back Dinner, Inter-Neighbourhood Shield and CAPT Buddy. SAC is also in charge of the Flying Seed, CAPT Card and the End of Semester Welfare Packs. SAC enables the coverage of both tangible and intangible ways of enhancing the welfare of CAPTains through the means as described above.\n\nPublicity (Pubs) Committee\nPubs is in charge of the image of CAPT, both internally and externally. We aim to accurately capture and portray the CAPT spirit and culture, and create a warm, friendly, and inclusive environment for CAPTains. It is through this environment that we strive to create and sustain an feeling of homeliness for all CAPTains who step into CAPT.\n\nPubs takes care of the decor and content in the lifts and the level 1 lobby, and also sets up decorations for large scale college events as well. We are also in charge of all publicity and information dissemination platforms, which include the CAPTlife website, the @captnus Instagram account, the official CAPT Facebook page, and the CAPT in the Loop Telegram broadcast channel. We also manage the CAPT yearbook (CAPTsule), and all official CAPT merchandise.\n\nPubs is also in charge of media coverage for college events. We work very closely with CAPTure to ensure that coverage runs smoothly, and photos and videos are properly processed before dissemination.\n\nExternal Committee\n\nThe External Committee is led by the EVP, and consists of the Director of Active Community Engagement (ACE), Director of Social Innovation (SI), Director of External Affairs (EXA), and their respective committees. They function to coordinate and manage ties and relations between CAPT and our external stakeholders/partners. They also facilitate opportunities for CAPTains to engage with such partners.\n\nActive Community Engagement (ACE) Wing\nThe Active Community Engagement (ACE) Wing of CAPT supports CAPT’s ethos of active citizenship and community engagement by providing opportunities and platforms for CAPTains to engage with the community around them. Under ACE Wing, students take the lead in planning meaningful CE events with communities such as elderly, youth, migrants and even animal welfare groups for their peers. Through such engagements, we hope to build more empathetic, compassionate and active citizens who make a positive impact on society.\n\nSocial Innovation (SI) Wing\nHere at the SI Wing, we seek to discuss and address real social issues through innovative yet feasible means. Using Community Engagement as a medium to understand communities, we then work towards uncovering unmet needs and act on them. From empathising with the disadvantaged groups, to coming up with novel solutions and then implementing them, we are guided by the Design Thinking framework, specifically adapted to suit our unique objectives.\n\nThis year, the SI Wing has for the first time, partnered with external organisations to co-create projects for CAPTains to work on, realising our vision of applying Design Thinking to solve real social problems and creating a positive impact to the world we live in. If you are passionate about the community and have burning ideas to make a difference, the SI Wing welcomes you.\n\nFind out more about us on our blog at www.captsocialinnovation.com!\n\nExternal Affairs (EXA) Committee\nThe External Affairs (EXA) Committee aims to build sustainable relationships as well as forge friendships with external parties, mainly with our two main areas of focus: Outreach (other residential colleges) and Alumni. EXA acts as the main liaison between CAPT and other colleges as well as CAPT alumni.\n\nIn addition, EXA is in charge of planning events which provide opportunities as well as a platform for current CAPTains to interact with students from other residential colleges and our CAPT alumni. EXA has organised events like the Alumni Brunch, Graduand’s Party, and CAPTure the Fl4g. Furthermore, EXA also ensures that the CAPT Alumni is regularly updated on the current CAPT events through various platforms."
  },
  {
    title: "Neighbourhoods",
    content:
      "CAPT consists of five neighbourhoods, each named after an Asian mythological winged creature. Neighbourhoods form close familial bonds and create a vibrant living community for all CAPTains. Each neighbourhood consists of 3 floors of residents.\n\nNeighbourhood Committees\n\nNeighbourhood committees work to create a sense of family within CAPT, and foster a cohesive and vibrant environment within each neighbourhood. These committees work closely with the Fellows, Resident Assistants and the CSC to organise and conduct activities at a neighbourhood level to allow for deeper interaction at a personal level amongst CAPTains.\n\nEach neighbourhood committee, helmed usually by two Neighbourhood Heads, has its own unique structure but all work towards the same goal of cultivating a warm and inclusive community."
  },
  {
    title: "Interest Groups",
    content:
      "Interest groups refer to a community of CAPTains who come together with a common interest for various activities! Bonded by their interest and not proficiency levels, IGs are good platforms where CAPTains can take their time to either learn new skills, or improve on them!\n\nThere is a wide plethora of IGs in CAPT, ranging from sports, to music, and even crafts. No need to fear if you've never thrown a dodgeball or cooked an egg before in your life, for IGs are open to all CAPTains regardless of your current skill level!\n\nIGs are all self initiated - 'For CAPTains, by CAPTains' - and are good platforms to meet CAPTains from other neighbourhoods/houses!"
  },
  {
    title: "Supper and Food",
    content:
      "If you, or your friends happen to feel hungry at night and want some food (happens very often hehe), here are some easily accessible food places for you! Remember to jio your friends!\n\nRestaurants/Stalls\n\nAmeens (Al Amaans)\nAmeens is our common go-to delivery service which offers Indian food and other common staples like Nasi Goreng Pattaya and Teh Cino. Call 6777 0555 to place your order and arrange for a delivery!\n\nSalted Egg Chicken Rice (XDNYJ)\nThere are multiple stalls that CAPTains order from to get their XDNYJ fix! Here are some of the most common ones:\nCui Xiang Yuan ($6 XDNYJ): +65 9866 5128\nEunos $8 XDNYJ (Buttermilk): +65 9712 0259\nIf you spot an inaccuracy or have a new contact that you want to share, please approach any CSC Pubs member!\n\nMcDonald's\n\nMiscellaneous\n\nSheng Siong at Casa Clementi\nSheng Shiong is about 10 minutes walk away from CAPT via Dover Road (exit at RC4) is open 24/7. Grab a few friends and got for a Sheng Siong run to get some groceries, snacks, fruits, etc.!\n\nFairprice Express at UTown\nThe closest supermarket to CAPT, Fairprice Express opens until 9.30pm everyday\n\nStarbucks at SRC\nOpen 24/7! Don’t miss their one-for-one promos!\n\nCheers near the UTown Bus Stop\nOpen 24/7 as well!"
  }
];

const newInitiatives = [
  {
    title: "Can I start a new IG?",
    content:
      "CAPTains are known for our wide-ranging interests and their passion in starting communities. Here in CAPT, the CSC and various RFs work towards a space where CAPTains are allowed to pursue their passions. As long as you feel that your idea aligns with CAPT’s vision and will greatly benefit the community within CAPT, feel free to submit your ideas to the respective CSC committee directors.\n\nShould you wish to start a new sports IG, you may approach the Director of Sports. Otherwise, you may approach the Director of Clubs and Societies for non-sports IGs. Both directors will be more than happy to offer their expertise."
  },
  {
    title:
      "I have an idea for an event/engagement\nopportunity/project! How do I proceed?",
    content:
      "Do you have an awesome idea you’d like to carry out? First steps of starting something new is definitely approaching like-minded individuals and talking to seniors (RAs, CSC members, House Heads etc.) to get a better picture on how your initiative can be created within CAPT. Do take note of the college’s emphasis on Active Citizenship and Community Engagement when you set out to formulate a new initiative. Once you have a plan, you can approach the relevant Director if it clearly falls under their purview. (e.g. approach the Director of ACE or SI if your initiative involves a project with a new partner)"
  }
];

const misc = [
  {
    title:
      "What do I do if I lost my matriculation\ncard? Can I still get into CAPT?",
    content:
      "Approach OHS office for a temporary card which allows access. If its after office hours, contact the RA on duty (refer to signs outside the lifts on B1 and Level 1)."
  }
];

export default class FAQScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <MyHeader navigation={this.props.navigation} />
        <Content padder style={styles.container}>
          <Text style={styles.title}>General Matters & FAQs</Text>
          <Text style={styles.subtitle}>Academics</Text>
          <Accordion
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
            dataArray={academicsDataArray}
            icon="add"
            expandedIcon="remove"
          />
          <Text style={styles.subtitle}>Facilities</Text>
          <Accordion
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
            dataArray={[{ title: "Booking of Facilities" }]}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={bookingOfFacilities} />}
          />
          <Accordion
            dataArray={[{ title: "Dining Hall" }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={diningHall} />}
          />
          <Accordion
            dataArray={[{ title: "Mailroom" }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={mailroom} />}
          />
          <Accordion
            dataArray={[{ title: "The Flying Seed" }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={theFlyingSeed} />}
          />
          <Accordion
            dataArray={[{ title: "Lifts" }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={lifts} />}
          />
          <Accordion
            dataArray={[{ title: "Laundry Rooms" }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={laundryRooms} />}
          />
          <Accordion
            dataArray={facilities}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
          />
          <Text style={styles.subtitle}>Student Life</Text>
          <Accordion
            dataArray={studentLife}
            style={styles.accordion}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
          />
          <Accordion
            dataArray={[{ title: "New Initiatives" }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={newInitiatives} />}
          />
          <Accordion
            dataArray={[{ title: "Misc." }]}
            headerStyle={styles.accordionHeader}
            icon="add"
            expandedIcon="remove"
            renderContent={() => <Accordion dataArray={misc} />}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003D7C"
  },
  title: {
    color: "white",
    fontSize: 28,
    alignSelf: "center"
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",
    paddingTop: 15
  },
  accordion: {
    paddingTop: 10
  },
  accordionHeader: {
    backgroundColor: "#D3D3D3"
  }
});
