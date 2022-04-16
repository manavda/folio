// Next.js API route support: https://nextjs.org/docs/api-routes/introduc,tion
import type { NextApiRequest, NextApiResponse } from 'next'
import { Skill } from '../../@types/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skill[]>
) {
  res.status(200).json([
    {
      name: 'React',
      description: 'A Frontend Javascript Framework',
      experience:
        "4 years. I've been working extensively with react on a number of projects. Comfortable with hooks and React 18.",
      iconClass: 'fa-brands fa-react'
    },
    {
      name: 'Redux',
      description: 'A Javascript State Management Framework',
      experience:
        "3 years. I've worked with redux on a few projects. Comfortable with redux-thunk."
    },
    {
      name: 'NodeJS',
      description: 'A Javascript Server Side Framework',
      experience: `5 years. I've worked with Node on the server side on numerous projects ranging from scripted headless browsing with puppeteer to a full stack application with Next.js.`,
      iconClass: 'fa-brands fa-node-js'
    },
    {
      name: 'Docker',
      description: 'A Container Management Platform',
      experience: `3 years. I've worked with Docker on a number of projects, deployed to Azure, Heroku, Render and AWS`,
      iconClass: 'fa-brands fa-docker'
    },
    {
      name: 'GraphQL',
      description: `An API Query Language`,
      experience: `3 years. I've worked with GraphQL on two key projects that lasted over a year, including a full stack application with Next.js.`
    },
    {
      name: `TypeScript`,
      description: `A Superset of Javascript for type-safe code`,
      experience: `3 years. Love working with Typescript and would find it difficult to go back to vanilla JS now.`
    },
    {
      name: `Python`,
      description: `A Programming Language`,
      experience: `1 year. I've worked with Python in some machine learning experimentation as well as deploying an scalable API for running OCR on images.`,
      iconClass: 'fa-brands fa-python'
    },
    {
      name: `Terraform`,
      description: `A Cloud Infrastructure Management Platform`,
      experience: `1 year. I've used Terraform to manage extensive AWS infrastructure on two projects in 2022.`
    },
    {
      name: `AWS`,
      description: `A Cloud Platform(Amazon)`,
      experience: `2 years. Several Projects, applications and services deployed to AWS.`,
      iconClass: 'fa-brands fa-aws'
    },
    {
      name: `Azure`,
      description: `A Cloud Platform(Microsoft)`,
      experience: `3 years. Several Projects, applications and services deployed to Azure.`
    },
    {
      name: `Heroku`,
      description: `A Cloud Platform`,
      experience: `3 years. Several projects and applications and services deployed to Heroku.`
    },
    {
      name: `Git`,
      description: `A Version Control System`,
      experience: `5 years. Significant experience using Git on multiple projects, working with teams.`,
      iconClass: 'fa-brands fa-git-alt'
    },
    {
      name: `Bitbucket`,
      description: `Git service provider`,
      experience: `4 years. Numerous projects hosted in private repositories on Bitbucket. Extensive experience with Bitbucket pipelines for CI/CD deployment.`,
      iconClass: 'fa-brands fa-bitbucket'
    },
    {
      name: 'JIRA',
      description: 'A Project Management System',
      experience: `3 years. I've worked with JIRA on a number of projects. Experience creating sprints, assigning & estimating tasks & managing scope.`,
      iconClass: 'fa-brands fa-jira'
    },
    {
      name: 'HTML5',
      description: 'A Markup Language',
      experience: '5 years',
      iconClass: 'fa-brands fa-html5'
    },
    {
      name: 'CSS3',
      description: 'Cascading Style Sheets',
      experience: '5 years',
      iconClass: 'fa-brands fa-css3'
    },
    {
      name: 'MeteorJS',
      description: 'A Javascript Framework',
      experience: '1 year. One major project deployed with this framework',
      iconClass: 'fa-solid fa-meteor'
    },
    {
      name: 'NextJS',
      description: `A Javascript Framework`,
      experience: `3 years. Three major projects deployed with this framework`
    },
    {
      name: 'Postgraphile',
      description: `A GraphQL Framework`,
      experience: `3 years. Three major projects deployed with this framework`
    },
    {
      name: 'Apollo Graphql Client',
      description: 'Graphql Client for React',
      experience: '3 years. Used alongside Postgraphile and Graphql server.'
    },
    {
      name: 'ExpressJS',
      description: 'A NodeJS Server Library',
      experience: '3 years. Used in a number of projects'
    },
    {
      name: 'Koa',
      description: 'A NodeJS Server Library',
      experience: '1 Year'
    },
    {
      name: 'MySQL',
      description: 'A Database Server',
      experience: '3 years'
    },
    {
      name: `TransactSQL`,
      description: `A Database Server`,
      experience: `4 years`
    },
    {
      name: `PostgreSQL`,
      description: `A Database Server`,
      experience: `4 years`
    },
    {
      name: 'JSON Datastructures',
      description: 'JavaScript Object Notation',
      experience: '4 years'
    },
    {
      name: 'Javascript',
      description: 'A Programming Language',
      experience: '5 years',
      iconClass: 'fa-brands fa-js'
    },
    {
      name: 'Java',
      description: 'A Programming Language',
      experience: '1 year',
      iconClass: 'fa-brands fa-java'
    },
    {
      name: 'REST:API',
      description: 'RESTful web APIs',
      experience:
        '4 years, used in a number of projects. Comfortable using and deploying REST APIs in NodeJS/Python'
    },
    {
      name: 'Problem Solving',
      description: 'Problem Solving',
      experience:
        'Love solving complex problems and simplifying the solution for other people',
      iconClass: 'fa-solid fa-hexagon-exclamation'
    },
    {
      name: 'Communication',
      description: 'Communication',
      experience: 'Love communicating with other people and sharing knowledge',
      iconClass: 'fa-solid fa-comment-check'
    },
    {
      name: 'Teamwork',
      description: 'Teamwork',
      experience: 'Love working with other people and sharing skills/expertise',
      iconClass: 'fa-solid fa-users-medical'
    },
    {
      name: 'Leadership',
      description: 'Leadership',
      experience:
        'Love trying to bring out the best in other people and motivating them'
    },
    {
      name: 'Project Management',
      description: 'Managing projects and people',
      experience: '2 Years. I prefer coding to management.',
      iconClass: 'fa-solid fa-diagram-project'
    },
    {
      name: 'Agile',
      description: 'Agile Methodology',
      experience: '2 years',
      iconClass: 'fa-solid fa-arrows-split-up-and-left'
    },
    {
      name: 'Scrum',
      description: 'Scrum Methodology',
      experience: '2 years'
    },
    {
      name: 'Confluence',
      description: 'Documentation management platform',
      experience: '2 years',
      iconClass: 'fa-brands fa-confluence'
    }
  ])
}
