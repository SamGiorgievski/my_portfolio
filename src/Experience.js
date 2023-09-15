import React from 'react'
import { Typography, Container, Paper } from '@mui/material';

export default function Experience() {
  return (
    <Container sx={{ marginTop: '40px' }}>

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h4">Skills</Typography>
        <Typography variant="body1">
          <strong>LANGUAGES:</strong> JavaScript, Ruby on Rails, HTML, CSS, SQL
          <br />
          <strong>FRAMEWORKS AND LIBRARIES:</strong> NodeJS, ReactJS, Express,
          EJS, jQuery, Ajax
          <br />
          <strong>SYSTEMS AND DATABASES:</strong> Git, PostreSQL
          <br />
          <strong>TESTING:</strong> Cypress, Jest, Storybook, Mocha & Chai
          <br />
          <strong>SOFTWARE:</strong> Jira, Miro, monday.com
        </Typography>
      </Paper>

      

      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
  <Typography variant="h4">Employment</Typography>
  <Typography variant="body1">
    <strong>Coinsquare</strong>
    <br />
    <em>Project Delivery Manager (July 2020 - August 2022)</em>
    <ul>
      <li>Scrum Master of the team responsible for developing the Coinsquare Trade mobile and web apps</li>
      <li>Lead multiple cross-functional projects to build key processes for regulation</li>
      <li>Create and manage project documents: Charter, Project plan, Risk register, communication (RACI), etc.</li>
      <li>Monitor scope changes and priority shifts as key issues arise</li>
    </ul>
  </Typography>
  <Typography variant="body1">
    <em>Team Lead, Client Success Manager (Jan 2019 – July 2020)</em>
    <ul>
      <li>Lead a team of CS reps to provide 24/7 support across tickets, phones, and live chat</li>
      <li>Utilize data and customer feedback to improve the customer experience and guide product development</li>
      <li>Create workflows across customer journey (Onboarding, KYC, Funding, Trading) to optimize admin and client side</li>
    </ul>
  </Typography>

  <Typography variant="body1">
    <strong>Top Hat</strong>
    <br />
    <em>Account Director (Nov 2017 – Dec 2018)</em>
    <ul>
      <li>Create and maintain a book of business with colleges and universities across the US and Canada</li>
      <li>Maintain long-lasting relationships to ensure a smooth customer journey from on-boarding to renewal</li>
      <li>Leverage relationships for upsell opportunities, referrals, and to speak/attend at events</li>
      <li>Lead data analysis projects and A/B test process and product offerings to optimize revenue</li>
    </ul>
  </Typography>

  <Typography variant="body1">
    <strong>FlashStock/Shutterstock Custom</strong>
    <br />
    <em>Brand Partnerships (Sept 2015 – Oct 2017)</em>
    <ul>
      <li>Create and maintain a book of business with Fortune 500 companies such as McDonald's, RBC, Loblaw</li>
      <li>Use expertise and client relationships to develop a product roadmap with the development team</li>
      <li>12th employee of high-growth start-up (now at 150+) which was acquired by Shutterstock for $50m US</li>
    </ul>
  </Typography>
</Paper>
    </Container>
  )
}
