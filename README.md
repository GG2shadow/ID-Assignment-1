# League of Legends World Championship Finals Website (ID Assignment 1)

An informative website for League of Legends (LOL) fans to receive latest updates for the LOL World Championship Finals (LOLWC) and all other LOL-related content so that they do not miss out on exciting news that they are interested in.

Through this website, Riot Games (developer of LOL) can hype fans up for the big day and increase conversion rate of visitors into summoners (Riot Games' way of calling their avid LOL gamers) by gaining massive publicity.
 
## Design Process

This website was first ideated and visualised using a high-fidelity wireframe, and then coded from scratch using HTML, CSS and Javascript. As a LOL fan myself, I thought it would be great for me to visit a consolidated and comprehensive website to learn about all the LOLWC-related information I wish to learn about without having to scroll through thousands of social media accounts with information all over the place. It is a bonus if I can interact with certain elements on the website to gain a greater sense of community and participation in LOLWC.

To take a look at the wireframe, please search for the file "Wireframe for LOLWC Finals.xd". 

## Features

Following is a list of all existing features and features left to implement that are available on both laptop and mobile.
 
### Existing Features

- Animated Navigation Bar - Adds some fun to surfing the website as it changes styles depending on the part of the website the user is looking at.
- Cheer For Your Team Voting Section - Enables users to vote for their favourite team. 
- Contact Form - Enables users to contact Riot Games.
- Back To Top Button - Enables users to quickly jump back to the top of the page by clicking this button located at the footer.
- Social Media Bar - Enables users to quickly teleport to Riot Games' social media accounts.
- News Catalog and News Articles - Houses latest articles published by Riot Games regarding LOLWC.
- Champions Collection with Filter - Enables users to take a quick look at the champions available in LOL. Users can filter by the champions' class.
- Champions Information Page - Enables users to quickly learn about the champion they selected.
- ... LOTS OF CONTENT FOR THE USERS - Provides the information the users want and need through iframes, auto-play videos, images, texts etc.

### Features Left to Implement

- Items Page - Enables users to quickly learn about all the items available in the Summoner's Rift.
- Livestream and Donation - Enables users to watch the finals directly from the website and donate money to support their favourite teams.
- Merch - Enables users to buy LOLWC-related merch.
- Forum - Facilitates users' discussion of LOLWC.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - The project uses **HTML** to build the structure of the website.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - The project uses **CSS** to style the looks of the website on both laptop and mobile.
- [JS](https://www.javascript.com/)
    - The project uses **JS** to add interactivity to the webste.
- [Google_Fonts](https://fonts.google.com)
    - The project uses fonts "Bebas Neue" and "Outfit" for its customised fonts.
- [Form_Submit](https://formsubmit.co/)
    - The project uses formsubmit.co to email users' content in the contact form to a predetermined email address without using PHP.


## Testing

1. Contact Form:
    1. Go to the "Contact Us" section.
    2. Try to submit the empty form and verify that an error message about the required fields appears.
    3. Try to submit the form with an invalid name (contains numbers) and verify that a relevant error message appears.
    4. Try to submit the form with an invalid email address and verify that a relevant error message appears.
    5. Try to submit the form with an empty email address and verify that an error message about the required fields appears.
    6. Try to submit the form with an empty message and verify that an error message about the required fields appears.
    7. Try to type more than 500 words in the message section and verify that it is impossible to continue input beyond 500 words.
    8. Try to submit the form with all inputs valid and verify that a success message appears.
2. Cross-platform Optimisation:
    1. Go to laptop view and verify that all included content are visible, as intended and working.
    2. Go to iPhone 6/7/8 Plus view and verify that all included content are visible, as intended and working.
    Note that when the website is switched to mobile view, features might be displayed differently such that it makes more sense for a smaller screen. This includes changing row-viewed content into column-viewed content using flex boxes etc.

## Credits

### Content
- The text for the Meet The Teams section was derived by watching the finals livestream from [Twitch](https://www.twitch.tv/videos/1197592207?filter=all&sort=time)
- The text for the News Catalog and News Articles was copied from [LOL_Esports_News](https://lolesports.com/news)
- The text for the Champions Information for Ahri was copied from [LOL_Website](https://www.leagueoflegends.com/en-us/champions/ahri/)

### Media
- The video used for the hero banner on index.html was obtained from [YouTube](https://www.youtube.com/watch?v=YGsZQgqRzCE)
- The video used for the News Article on LOLWC 2021 Championship Ring was obtained from [YouTube](https://www.youtube.com/watch?v=3Zyq5EIWxg4&t=1s)
- The video used for the champion spotlight on the Champions Information page for Ahri was obtained from [YouTube](https://www.youtube.com/watch?v=hlalkAUkwqE&t=36s)
- The images (including logos) used in this site were obtained from [LOL_Esports_Media_Center](https://www.lolesportsmedia.com/League-of-Legends-Esports#FileCollectionTabsForm), [Riot_Games_Media_Library](https://www.riotgames.com/en/press?category=hq-photos#assets), [Getty_Images](https://dam.gettyimages.com/riotgames-esports/league-of-legends-world-championship)
- The icons used for the social media bar was obtained from [Icon_Finder](https://www.iconfinder.com/social-media-icons?category=social-media)

### Acknowledgements

- I received inspiration for this project from watching the LOLWC finals on [Twitch](https://www.twitch.tv/videos/1197592207?filter=all&sort=time)
