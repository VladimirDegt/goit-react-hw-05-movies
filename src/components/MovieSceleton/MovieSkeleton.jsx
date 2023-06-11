import React from "react"
import ContentLoader from "react-content-loader"

export const MovieSceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="315" y="6" rx="5" ry="5" width="163" height="7" /> 
    <rect x="89" y="113" rx="0" ry="0" width="2" height="0" /> 
    <rect x="5" y="5" rx="0" ry="0" width="300" height="450" /> 
    <rect x="317" y="18" rx="5" ry="5" width="163" height="7" /> 
    <rect x="319" y="31" rx="5" ry="5" width="163" height="7" /> 
    <rect x="317" y="87" rx="5" ry="5" width="163" height="7" /> 
    <rect x="317" y="45" rx="5" ry="5" width="163" height="7" /> 
    <rect x="315" y="99" rx="5" ry="5" width="163" height="7" /> 
    <rect x="315" y="112" rx="5" ry="5" width="163" height="7" /> 
    <rect x="315" y="59" rx="5" ry="5" width="163" height="7" /> 
    <rect x="318" y="73" rx="5" ry="5" width="163" height="7" />
  </ContentLoader>
)


