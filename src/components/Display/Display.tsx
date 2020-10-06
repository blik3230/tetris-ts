import React from 'react';
import './Display.css';

interface Prop {
  screenData?: Array<boolean[]>;
}

const Display = (props: Prop) => {
  const { screenData = [] } = props;

  return (
    <div className="Display">
      {
        screenData.map((lineItems, lineIndex) => {

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