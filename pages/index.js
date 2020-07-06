import React from 'react'
import {NextSeo} from 'next-seo'
import { Grid } from 'theme-ui'

import ProjectTeaser from '../components/ProjectTeaser'
import DefaultLayout from '../components/DefaultLayout'


export default function Home() {
  return (
    <DefaultLayout>
      <NextSeo title="Green Mountain Design & Development" />
      <Grid gap={[2, 3]} columns={[1, 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
        <ProjectTeaser title="IAS"
                       slug="institute-for-advanced-studies"
                       meta="web development, web design, complex workflows"
                       image="static/images/projects/IAS/1500x1080 for Institute for Advanced Study.png"/>
        <ProjectTeaser title="Baker Artist Portfolio"
                       meta="web development, complex workflows"
                       image="static/images/projects/Baker/Desktop-Homepage.png"/>
        <ProjectTeaser title="Power To Decide"
                       meta="data visualizations, art direction"
                       image="static/images/projects/PTD/1920x1080 for Power to Decide, the campaign to prevent unplanned pregnancy | Power to Decide.png"/>
        <ProjectTeaser title="IntelTrak"
                       meta="data visualizations, web development"
                       image="static/images/projects/RWR/Homepage.png"/>
        <ProjectTeaser title="Clarifi"
                       meta="web development"
                       image="static/images/projects/Clarifi/Desktop-Homepage.png"/>
        <ProjectTeaser title="Direxion"
                       meta="web development"
                       image="static/images/projects/Direxion/Homepage.png"/>
        <ProjectTeaser title="Direxion"
                       meta="web development, complex workflows"
                       image="static/images/projects/Eos/Desktop-Homepage.png"/>
        <ProjectTeaser title="Greatist"
                       meta="performance tuning, web development"
                       image="static/images/projects/Greatist/1024x768 for Greatist | Health and Fitness News, Tips, Recipes, and Exercises.png"/>
        <ProjectTeaser title="Senator Harry Reid"
                       meta="performance tuning, web development, complex workflows"
                       image="static/images/projects/Harry Reid/Desktop-Homepage.png"/>
        <ProjectTeaser title="hoopla"
                       meta="performance tuning, web development, complex workflows"
                       image="static/images/projects/hoopla/1024x768 for hoopla | streaming audiobooks, music, video & ebooks.png"/>
        <ProjectTeaser title="IHE"
                       meta="web development, complex workflows"
                       image="static/images/projects/IHE/Desktop-Homepage.png"/>
        <ProjectTeaser title="LSAC"
                       meta="web development, art direction"
                       image="static/images/projects/LSAC/1024x768 for The Law School Admission Council (LSAC) | The Law School Admission Council.png"/>
        <ProjectTeaser title="Probo.ci"
                       meta="web development, complex workflows, art direction"
                       image="static/images/projects/Probo/1024x768-Doc-Homepage.png"/>
        <ProjectTeaser title="Zivtech"
                       meta="web development, art direction"
                       image="static/images/projects/Zivtech/1024x768 for Zivtech | Open Source Web Development.png"/>
      </Grid>
    </DefaultLayout>
  )
}

