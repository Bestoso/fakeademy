import React from 'react';
import { Course } from './Course';
import { Gallery } from './Gallery';
import { SchedulesComponent } from './SchedulesComponent';

export const Home = () => {
  return (
    <>
      <Course />
      <Gallery />
      <SchedulesComponent />
    </>
  )
}