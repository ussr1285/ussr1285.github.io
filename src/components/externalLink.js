import React from "react"
import { 
    navLinkText
} from './layout.module.css'

const ExternalLink = ({ URL, children }) => (
    <a href={URL} className={navLinkText}>
        {children}
    </a>
    
)
export default ExternalLink