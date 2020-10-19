import React from 'react'
import PropTypes from 'prop-types'

const CardTextNumber = ({ children, color }) => (
  <svg width="80" height="100" style={{ marginLeft: '-10px' }}>
    <text
      fill="transparent"
      fillOpacity="0"
      fontSize="72"
      x="40"
      y="60"
      textAnchor="middle"
      stroke={color}
      fontFamily="Roboto"
      letterSpacing="-8px"
    >
      {children}
    </text>
  </svg>
)

CardTextNumber.propTypes = {
  children: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['black', 'white'])
}

CardTextNumber.defaultProps = {
  color: 'black'
}

export default CardTextNumber
