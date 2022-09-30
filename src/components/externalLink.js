import React from "react"
import { 
    linkText
} from './layout.module.css'

const ExternalLink = ({ URL, children }) => (
    <a href={URL} className={linkText}>
        {children}
    </a>
    
)
export default ExternalLink