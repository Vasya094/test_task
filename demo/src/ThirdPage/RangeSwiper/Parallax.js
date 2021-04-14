import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";
import ControlledCarousel from "./SideBar";
import CarouselPage from "./SideBar";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const Swiper = () =>  {
 
 const  [   values, setValues ] = useState([50])
 const [number, setNumber] = useState(2);
  console.log( values )
  const onMouseDown = () => {
    if ( x > 75 && x < 100 )
    {
      setValues([100])
    }
    if ( x < 75 && x > 25 )
    {
      setValues([50])
    }
    if ( x < 25 )
    {
      setValues([0])
    }
  }
  const x =  values[0] 
  useEffect( () => {
    if ( x > 75 && x < 100 )
    {
      setNumber( 2 )
    }
    if ( x < 75 && x > 25 )
    {
      setNumber( 1 )
    }
    if ( x < 25 )
    {
      setNumber( 0 )
    }
 }, [x]) 
  return (
    <div>
      <ControlledCarousel values={number} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em"
        }}
      >
        
        <Range
          values={[values]}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues( [values])}
          renderTrack={({ props, children }) => (
            <div
              style={{
                ...props.style,
                height: "56px",
                display: "flex",
                width: "100%"
              }}
              onMouseUp={onMouseDown}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: [values],
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "30px" }} id="output">
          {values}
        </output>
      </div>
      </div>
    );
  }


export default Swiper;