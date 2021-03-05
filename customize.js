/* Customization Guide available on: 
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `dany dodson`,
  description: `This is my blog`,
  maxWidth: 768,
  enableAbout: true,
  siteUrl: `https://danys.art`,
  useScrollIndicator: true,

  /* Profile
  ========================================= */
  author: `Dany Dodson`,
  profileDescription: '{ Full Stack Developer }',
  profileImageName: `profile.jpg`,
  location: 'Evansville, IN',
  footerLink: 'about',

  /* Social Media Links
  ========================================= */
  socialMediaLinks: {
    email: {
      emailAddress: 'hi@danydodson.dev',
      showHeaderIcon: true,
      showFooterIcon: false
    },
    github: {
      accountName: 'danydodson',
      showHeaderIcon: true
    },
    facebook: {
      accountName: 'danydodson',
      showHeaderIcon: true
    },
    instagram: {
      accountName: 'ugly_casanova',
      showHeaderIcon: true
    },
    twitter: {
      accountName: 'dany_dodson',
      showHeaderIcon: true
    },
    linkedIn: {
      accountName: 'in/danydodson',
      showHeaderIcon: true
    },
    medium: {
      accountName: 'danydodson',
      showHeaderIcon: true
    }
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: {
    email: true,
    facebook: true,
    twitter: true,
    reddit: true,
    linkedIn: true
  },

  /* Comments
  ========================================= */
  comments: {
    facebook: {
      enabled: false,
      appId: process.env.FB_APP_ID
    },
    disqus: {
      enabled: true,
      shortName: process.env.DISQUS_NAME
    },
    utterances: {
      enabled: true,
      repoUrl: 'danydodson/danys-art-comments'
    }
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: 'light',
  breakCodeLines: true, // Breaks lines instead of having horizontal scroll
  showTimeToRead: true,
  faviconSrc: `static/favicon.png`,
  gaTrackingId: process.env.GOOGLE_TRACKING_ID,
  googleAdSenseId: process.env.GOOGLE_AD_SENSE_ID
}

module.exports = config
