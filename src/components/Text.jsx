import { createElement } from 'react'

function Text({ as = "p", className, text, props = {} }) {
    return createElement(as, { className, ...props }, text)
}

export default Text