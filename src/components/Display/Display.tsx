import React from 'react';
import './Display.css';
import { Bitmap } from './Display.types';

interface Prop {
  bitmap?: Bitmap | null;
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

                  return (
                    <div
                      key={itemIndex}
                      className={`Display__item${itemValue ? " Display__item_active" : ""}`}
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