import { Component, Grid, Grid2x2, LucideProps } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {

  type Tabs = {
    id: number,
    label: string,
    component: React.ReactNode,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    submenu: {
      id: number,
      label: string,
      component: React.ReactNode,
      icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    }[]
  }[]

  const tabs: Tabs = [
    {
      id: 1,
      label: "Document",
      component: ,
      icon: Grid,
      submenu: [
        {
          id: 10,
          label: "Articles",
          component: ,
          icon: Grid2x2,
        }
      ]
    },
    {
      id: 2,
      label: "Project",
      component: ,
      icon: Grid,
      submenu: [
        {
          id: 10,
          label: "Articles",
          component: ,
          icon: Grid2x2,
        }
      ]
    },
    {
      id: 1,
      label: "Links",
      component: ,
      icon: Grid,
      submenu: [
        {
          id: 10,
          label: "Articles",
          component: ,
          icon: Grid2x2,
        }
      ]
    },
    {
      id: 1,
      label: "Visitors",
      component: ,
      icon: Grid,
      submenu: [
        {
          id: 10,
          label: "Articles",
          component: ,
          icon: Grid2x2,
        }
      ]
    },

  ]

  const [tab, setTab] = useState<string>("")

  return (
    <div>
      <div className="sidebar">

      </div>
      <div className="actual-content">

      </div>

    </div>
  )
}

export default Page