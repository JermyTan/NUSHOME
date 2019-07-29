

# NUSHOME - MILESTONE III
Proposed Level of Achievement: Apollo 11

Target Audience: Students staying on NUS campus

<img src="https://i.ibb.co/zbxhT5h/Poster-ms2.png"/>


### Motivation
Has booking facilities in your respective hostels been a very troublesome task? Has checking the sign-ups for an event or signing up for an event been very inconvenient? Do you feel that there are many events or CCA groups that you are not aware of? Would you want all these tasks to be convenient, fast and on-the-go? 


### Solution
No need to worry, the NUSHOME will solve all these problems! Our application is an integrated system (like LumiNUS and IVLE) with many different features such as booking facilities and checking current events for individual hostels. The centralised platform is able to provide many services with a few clicks and it makes everything fast, convenient and efficient!


### User Stories
- As a resident, it is hard to navigate the RC official websites especially with stuff pertaining to admin matters.
- As a resident, RC information and procedures are fragmented - meaning that one needs to go through multiple links and websites to obtain the information  required.
- As a resident in RC, this integrated-platform may actually be what RCs need to disseminate information and propagate student-driven events in the RC community.


### Scope of Project
The application aims to provide a common platform for all students staying in a particular NUS accommodation to efficiently and conveniently perform administrative tasks, mainly:


### Basic Features:
- Login Page - residents will have individual accounts where they can log in with their NUSNET credentials.
    - Hall/RC-specific accounts. For instance, if the user is from CAPT, their account will be under CAPT so that all the information shown will be relevant to them
- Home Events page - Includes latest announcements and event happenings (Entire RC).
    - Latest official announcements eg (27 May dining hall close for event)
    - Event happenings eg (RC IG carnival on 1 June)
    - Updates eg (renovation from xx date to yy date)
- Facilities booking page (In Progress)
    - Online booking of facilities such as Multi-purpose Sports Hall
    - Online booking of equipments such as AVA equipments for House events
- Admin matters and FAQs
	 - Check-ins and Check-outs
    - Emergency and admin hotlines eg (fault reporting - air-con leaking call hp:xxxxxxxx)
    - General FAQs
- Settings
    - Update user credentials eg (course of study, year of study, mobile number, room number, etc)


### How are we different from similar platforms?
- Official RC websites (eg: `http://rc4.nus.edu.sg/` & `http://capt.nus.edu.sg/`)
    - All RC information integrated into a single app
    - Do not need to look up the website specifically and search for the details
- Email
    - There will be notifications on the latest important announcements (eg closure of dining hall on specific dates) reflected on the homepage of the app
    - More organised notifications and announcements as compared to the discrete and scattered emails

### Technology Stack
#### Front end:
- React Native
- JSX
- CSS 
- Javascript

#### Back end:
- Firebase
- Async Storage


### Workflow
#### Users
- Users log in with their NUS email and password
- Users can see events to sign up, facilites to book etc (fetched from firebase database)
- Users sign up or book through the application and it will be keyed in the database, users can also withdraw/delete their sign-ups and bookings and the database will be updated

#### Admin
- Admins can create events, manage bookings etc
- Database will be updated and if successfully signed up/booked, the user will be notified


### Problems and Bugs Encountered 
- We did not realise that we can use component-based programming for React Native. As such, our source code started to become messy and we had to reorganise and rewrite certain portions of the codes and follow component-based development practices to promote greater reusability and readability of codes.
- There are varying screen sizes for mobile phones. Thus, using absolute pixels to position the components on the display may cause the screen to appear differently on phones of different screen sizes. As such, right now, we are trying to reorganise and re-position the components using ratios with respect to the phone screen’s dimensions.
- Once the user logs in, when he exits (but not kill) the application, he will be automatically logged out. So we implemented a flag in the AsyncStorage to indicate whether the user is logged in or not. We also forgot to include a log-out function as well.
- Our events rendering from the event information stored in our database produced a lot of errors such as it not rendering or images/events missing. We fixed it by using flatlist and the storage into the props in the Events Class (See code if interested)
- Firebase was re-initalising too many times and this cause our application to crash randomly. Added a special line of code to make sure firebase does not get initialized more than once.


### User-Testing (Link: `https://docs.google.com/forms/d/e/1FAIpQLSfAFyXP_lhDlGttzz32MsfauRu_8p2fmE9xPFUSE5_OD9kH5A/viewanalytics`)
- 85.5% of respondents indicate that signing for events, knowing what events are there, booking facilities a hassle when you are staying in NUS.
- In addition, 88.7% of respondents also indicated that the application will benefit their experience during their duration of stay in NUS
- As for what other additional features they like to see, most put supper gathering or sports gathering, we may implement the ability for users to create own events as well :)
- Overall the UI/UX of the application was well received by the respondents but more can be done to improve it.
- Overall, majority of respondents view this application as useful and will utilise the functionalities of the application.
- About 93.5% of respondents are inclined to use the NUSHOME application during their stay in NUS.

### Edge Features Developed
- We allow admin to create and write new events.
- We created a withdrawal and cancel bookings (we did not consider that initially).
- Added in log in status instead of having to log in everytime the application is launched from background.
- Added avatar and log out feature.

## Installation Process & Testing

Git clone the repo into your local machine. `git clone https://github.com/kester-ng/NUSHOME.git`

### Dependencies
- [`React-Native`] (https://facebook.github.io/react-native/)
- [`React-Native-Elements`] (https://react-native-training.github.io/react-native-elements/)
- [`React`] (https://reactjs.org/)
- [`Native-Base`] (https://nativebase.io/)
- [`AsyncStorage`] (https://facebook.github.io/react-native/docs/asyncstorage)
- [`Watchman`] (https://facebook.github.io/watchman/docs/install.html)
- [`React-Navigation`] (https://reactnavigation.org/)

Simply run `npm install` to install all important dependencies.

Install `android studio` or other mobile phone emulator to test out the application.

To start the application, make sure you are at the same directory as `App.js` before running this on command line: `react-native run-android` after you have installed all important dependencies.

### Accounts to use:
- For user account, please use Username: `user_test@u.nus.edu` and Password: `password`.
- For admin account, please use Username: `admin@u.nus.edu` and Password: `password`.













 














