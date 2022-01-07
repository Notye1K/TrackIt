import Head from './style'
import { useContext } from 'react'
import UserContext from '../../context'

export default function Header() {
    const { api } = useContext(UserContext)

    return (
        <>
            <Head img={api.image}>
                <span>TrackIt</span>
                <div></div>
            </Head>
        </>
    )
}