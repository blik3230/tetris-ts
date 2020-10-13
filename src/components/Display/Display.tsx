import React from 'react';
import './Display.css';
import { Bitmap } from './Display.types';
import { bitmapColorEnum } from '../../hooks/useTetris/useTetris';

interface Prop {
  bitmap?: Bitmap | null;
}

const mapBitmapColorClasses = {
  [bitmapColorEnum.empty]: '',
  [bitmapColorEnum.grey]: 'Display__item_grey',
  [bitmapColorEnum.red]: 'Display__item_red',
}

const Display = (props: Prop) => {
  const { bitmap } = props;

  if(!bitmap) return null;

  return (
    <div className="Display">
      {
        bitmap.map((lineItems, lineIndex) => {

          return (
            <div className="Display__line" key={lineIndex}>
              {
                lineItems.map((itemValue, itemIndex) => {
                  const classColorModifier = mapBitmapColorClasses[itemValue];
                  return (
                    <div
                      key={itemIndex}
                      className={ `Display__item ${classColorModifier}` }
                    />
                  )
                })
              }
            </div>
          );
        })
      }
    </div>
  )
};

export default Display;