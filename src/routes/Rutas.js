import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import { Home, formAlumno,FormPersonas, AdminPersonas, Palapas, Salones, Albercas } from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    <Route path='/' element={loadLayouts(Layout, Home)}/>
    <Route path='/alumno' element={loadLayouts(Layout, formAlumno)}/>
    <Route path='/persona' element={loadLayouts(Layout, AdminPersonas)}/>
    <Route path='/formpersona' element={loadLayouts(Layout, FormPersonas)}/>
    <Route path='/formpersona/:id' element={loadLayouts(Layout, FormPersonas)}/>
    <Route path='/formpersona/:id' element={loadLayouts(Layout, FormPersonas)}/>
    <Route path='/palapas' element={loadLayouts(Layout, Palapas)}/>
    <Route path='/salones' element={loadLayouts(Layout, Salones)}/>
    <Route path='/albercas' element={loadLayouts(Layout, Albercas)}/>

  </Routes> 
  )
}
