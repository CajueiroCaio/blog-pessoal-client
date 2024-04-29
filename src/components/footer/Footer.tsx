import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-purple-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog Pessoal | Copyright: {data}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer