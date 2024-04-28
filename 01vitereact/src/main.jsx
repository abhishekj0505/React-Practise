import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )

}

/*
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
*/


const anotherElement = (
    <a href="https//:www.google.com" target='_blank'>Visit google.</a>
)

const anotherUser = "Aditya"

const reactelement = React.createElement(
    'a',
    { href: 'https//:google.com', target: '_blank' },
    'Click me to visit google.',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactelement

)
