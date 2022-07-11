import self from "../img/self.jpeg"
import mock1 from "../img/mockk1.png"
import mock2 from "../img/mockk2.png"
import mock3 from "../img/mockk3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Tolulope",
    lastName: "Faleye",
    initials: "tf", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by music'
        },
        {
            emoji: '🌎',
            text: 'based in Nigeria'
        },
        {
            emoji: "💼",
            text: "Front end developer for Amazon"
        },
        {
            emoji: "📧",
            text: "tolulopefaleyejanet@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github"
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Tolulope. I'm a front end developer for Amazon. I studied mathematical science at the Federal University of Technology, I enjoy listening to good music, and I believe technology will rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css'],
            exposedTo: ['nodejs', 'python', 'django']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'surfing the internet',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://tolulopejanet.github.io/Aklab-ng/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/tolulopejanet/Aklab-ng", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://tolulopejanet.github.io/movie-site/",
            source: "https://github.com/tolulopejanet/movie-site",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://tolulopejanet.github.io/dad-jokes/",
            source: "https://github.com/tolulopejanet/dad-jokes",
            image: mock3
        },
       
    ]
}