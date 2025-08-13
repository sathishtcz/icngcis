import React from 'react'
import Conferencetracks from '../../shared/components/Conferencetracks/Conferencetracks'
import Helmetcomponent from '../../component/Helmetcomponent'

export default function Conferencetrackspage() {
  return (
    <>
      <Helmetcomponent title="Conference Tracks - International Conference on Next-Gen Computing & Intelligent Systems" canonical="https://icngcis.org/conferenceTracks" />
      <Conferencetracks />
    </>
  )
}
