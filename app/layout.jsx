import React, { Children } from 'react'
import '@styles/global.css'

export const metadata = {
    title: "AI Factory",
    description: "Come to the newest AI TECH "
}

const RootLayout = ({ children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
                <main>
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout