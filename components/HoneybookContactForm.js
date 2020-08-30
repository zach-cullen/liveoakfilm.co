import { useEffect, useState } from 'react'
import styled from 'styled-components'

const ContactFormWrapper = styled.div`
  box-sizing: border-box;
  max-width: 720px;
  margin: 40px auto;
  padding: 10px;
  background-color: #fff;
  box-shadow: ${props => props.theme.effects.mdBoxShadow};
`

// original snippet provided by Honeybook (project management software) and reformatted as react component
// this snippet loads external script after page load to display contact form in iframe
export default function HoneybookContactForm () {
  const HBfunction = (h, b, s, n, i, p, e, t) => {
    h._HB_ = h._HB_ || {}
    h._HB_.pid = i
    t = b.createElement(s)
    t.type = 'text/javascript'
    t.async = !0
    t.src = n
    t.id = 'hb-script' // add identifier to script tag so dom can be checked on subsequent visits
    e = b.getElementsByTagName(s)[0]
    e.parentNode.insertBefore(t, e)
  }
  const loadHoneybookForm = () => {
    HBfunction(window, document, 'script', 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js', '5ddd9d57b70f6e00700bf232')
  }

  useEffect(() => {
    const honeybookScriptLoaded = !!document.querySelector('#hb-script')
    // external script prevents multiple calls, so we must reload page if this is not the first visit and next has cached script
    honeybookScriptLoaded ? document.location.reload() : loadHoneybookForm()
  })

  return (
    <ContactFormWrapper>
      <div className='hb-p-5ddd9d57b70f6e00700bf232-1' />
      <img height='1' width='1' style={{ display: 'none' }} src='https://www.honeybook.com/p.png?pid=5ddd9d57b70f6e00700bf232' />
    </ContactFormWrapper>
  )
}
