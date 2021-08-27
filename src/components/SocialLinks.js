import React from "react"

function SocialLinks(props) {
  return props.socialInfo.map(socItem => (
    <ul key={socItem.name}>
      <li>
        <a href={socItem.url}>{socItem.name}</a>
      </li>
    </ul>
  ))
}

export default SocialLinks
