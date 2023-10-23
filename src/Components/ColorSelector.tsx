import React, { useState } from 'react'
import Api from '../data/symbology/Api'
import Styles from './ColorSelector.module.css'
import colorbrewer from 'colorbrewer'
import { get, set } from 'lodash'

const ColorSelector = () => {    
    const colorOptions = ['YlGnBu', 'BuGn', 'YlOrRd', 'PuRd']
    const [selectedColor, setSelectedColor] = useState<string>('YlGnBu')

    const handleColorClick = (colorScheme: string) => {
        setSelectedColor(colorScheme)
        Api.setColorScheme(colorScheme)
    }

    const getBgColorFromScheme = (colorScheme: string) => {
        switch (colorScheme) {
            case 'YlGnBu':
                return colorbrewer.YlGnBu[9][3]
            case 'BuGn':
                return colorbrewer.BuGn[9][3]
            case 'YlOrRd':
                return colorbrewer.YlOrRd[9][3]
            case 'PuRd':
                return colorbrewer.PuRd[9][3]
            default:
                return colorbrewer.YlGnBu[9][3]
        }
    }
  
  return (
      <div className={Styles.colorSelectorContainer}>
          <div className={Styles.colorSelectorTitle}>Select Map Colour Scheme</div>
          <div className={Styles.colorsContainer}>
              {colorOptions.map((colorScheme, index) => (
                  <div
                      key={index}
                      className={Styles.colorItem}
                      style={{
                          backgroundColor: getBgColorFromScheme(colorScheme),
                          border: selectedColor === colorScheme ? '2px solid #000' : 'none',                    
                      }}
                      onClick={() => handleColorClick(colorScheme)}
                  />
              ))}
          </div>
    </div>
  )
}

export default ColorSelector