import React, { Component } from 'react'
import data from '../assets/data/rebel_leaders_org.csv'
import * as d3 from 'd3'


export default class Visualization extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        }
    }

  render() {
    // SVG PATH
    const rebel_icon = ['M 0 0 A 1 1 0 0 0 5 0 A 1 1 0 0 0 0 0 Z M -15 0 A 1 1 0 0 0 2 0 A 1 1 0 0 0 -10 0 Z']

    // RENDER DATA
    d3.csv(data).then(showData)

    // ICONS GRID
    const perRow = 10;
    const size = 14;
    const sizeY= 14;
    
    function showData(data){

      data.forEach(d => {
          d.english_translation = d.english_translation;
          d.area_of_operation = d.area_of_operation;
          d.foughtincivilwar = d.foughtincivilwar;
          d.transitioned_to_organized_crime = d.transitioned_to_organized_crime;
          d.transitioned_from_organized_crime_to_resistance = d.transitioned_from_organized_crime_to_resistance;
          d.drugtrade = d.drugtrade;
          d.outcome_goal = d.outcome_goal;
          d.leader_s = d.leader_s;
      })
      // MAKING SURE THE DATA IS HERE
      // console.log('the data', data)
    
      // __________________________________________________________
      // - - - - - - - - - - - - 
      // REGIONS
      // - - - - - - - - - - - - 

      // COUNT NUMBER FOR REBEL GROUPS THAT MEET EACH ATTRIBUTE
      let count = 0;

      // FUNCTION RENDERS DATA BY REGION
      let renderRegion = (d, regionName) => {
        // console.log("dataset:",d)
        const keys = [];
        d.map((key,value) => {
          // console.log("map", key)
          if(key[regionName] == 1){
            keys.push(key);
          }
        })
        return keys;
      }

      // 1. LATIN AMERICA
      window.latinAmericaData = renderRegion(data, 'latinamerica')
      // console.log("latin america:",window.latinAmericaData)

      // 2. AFRICA 
      window.africaData = renderRegion(data, 'africa')
      // console.log("africa:",window.africaData)

      // 3. MID EASTERN AFRICA REGIONS = SWANA
      window.midEasternAfricaData = renderRegion(data, 'mideastnafrica')
      // console.log("swana:",window.midEasternAfricaData)

      // 4. WEST
      window.westData = renderRegion(data, 'west')
      // console.log("west:",window.westData)

      // 5. CENTRAL EURASIA
      window.centralEurasiaData = renderRegion(data, 'centraleurasia')
      // console.log("central eurasia:",window.centralEurasiaData)

      // 6. SOUTH ASIA
      window.southAsiaData = renderRegion(data, 'southasia')
      // console.log("south asia:",window.centralEurasiaData)

      // 7. SOUTH EAST ASIA
      window.southEastAsiaData = renderRegion(data, 'seasia')
      // console.log("south east asia:",window.southEastAsiaData)

      // 8. EAST ASIA
      window.southEastAsiaData = renderRegion(data, 'seasia')
      // console.log("east asia:",window.centralEurasiaData)


    // __________________________________________________________
    // - - - - - - - - - - - - - - - - -
    // ATTRIBUTES
    // - - - - - - - - - - - - - - - - - 
    
    // FUNCTION TO RENDER ATTRIBUTES BY REGION
    let renderAttribute = (region, attrName) => {
      const dataforRegion = []
      const updatedData = region.filter(Boolean) // the filter boolean removes all undefined objects within the array
      
      updatedData.map((key, value) => {
        if(key[attrName] == 1){
          dataforRegion.push(key) 
        }
      })
      return dataforRegion
    }

    const foughtCivilWar = renderAttribute()






    }
    
    return (
      <section>
        {/* REGION */}
        <div id="c0-r2">
          <h5 className="region-title"> LATIN AMERICA</h5>
        </div>
      </section>
    )
  }
}
