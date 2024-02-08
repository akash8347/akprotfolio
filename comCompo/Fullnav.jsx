
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Mynav from './Mynav'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcher } from '@/app/Components1/ThemeSwitcher'





export default function Fullnav() {
    return (
        <>
            <nav className="bg-purple-500  h-14 lg:h-16  " >
                <ul className="lg:bg-purple-500 bg-purple-500 h-14 lg:h-16  py-3 lg:items-center px-9 lg:flex lg:justify-between lg:pr-40 ">
                    <div className='LOGOMENU flex justify-between md:ml-20'>
                        <Link href="/">
                    <div className='IMAGE'>
                            <Image src="/akashvgohillogo.png"
                                height={50}
                                width={35} className='rounded-3xl ' alt="my logo" />
                    </div>
                    </Link>
                    <div className="MENU flex  items-center  lg:hidden">
                    <ThemeSwitcher/>
                        <Mynav />
                    </div>
                    </div>
                    <div className='LINKS hidden lg:flex  lg:justify-center lg:items-center sm:space-x-12 sm:font-medium sm:align-middle '>
                        <li><ThemeSwitcher/></li>
                        <li>
                            <Link href="/about"> About me</Link>
                        </li>
                        <li>
                            <Link href="/blog"> Blogs</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects </Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact </Link>
                        </li>
                        <li>
                            <Link href="/blogeditor">Blogeditor </Link>
                        </li>
                    </div>


                </ul>
            </nav>

        </>
    )
}