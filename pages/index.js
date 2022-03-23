import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Link from 'next/link';
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router';

import Map from './components/Map';


export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => { 
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
          mobile: user.phoneNumber,
          email: user.email

        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })

  }, [])

  return (
    < Wrapper>
    <ButtonContainer>
    <SignOutButton onClick={() => signOut(auth)} src="https://www.clipartmax.com/png/full/264-2640924_log-out-icon-red.png" />
    </ButtonContainer>
    <Map />
    
     <ActionItems> 
     {/* Header */}
     <Header> 
     <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" />
     <Profile> 
     <Name> {user && user.name} </Name>
     <UserImage  src={user && user.photoUrl}  /> 
     {/* <MobileNo > mobile {user && user.mobile}  {user && user.email} </MobileNo> */}
     </Profile>
     
     </Header>

     {/* Action Button */}
     <ActionButtons> 
     <Link href="/Search" >
     <ActionButton> 
     <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" /> Ride
 </ActionButton>
 </Link>
     <ActionButton> 
     <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" /> 2-Wheels </ActionButton>
     <ActionButton>
     <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" /> Reserve </ActionButton>
     

     </ActionButtons>

     {/* Input Button */}
     <InputButton> Where to go?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}
const Wrapper = tw.div`
flex flex-col h-screen
` 
const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-12
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-18 text-m text-gray-500 font-bold
`
const UserImage = tw.img`
h-14 w-14 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
flex
` 
const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5 
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 
`

const SignOutButton = tw.img` h-8 object-contain cursor-pointer `
const ButtonContainer = tw.div`rounded-full absolute top-2 right-4 z-10 bg-white shadow-md cursor-pointer`
