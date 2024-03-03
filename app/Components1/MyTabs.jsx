import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyTabs() {
  let [categories] = useState({
    Education: [
      {
        id: 1,
        title: `<h1 style="font-size:0.9rem">I am currently pursuing post graduation in Masters in Computer aplication<h1>
        <br> <div style="font-size:0.9rem"> I have done graduation in bachelor of Computer application </div> `,
       
      }
      
    ],
    Programmig: [
      {
        id: 1,
        title: `<h1 style="font-size:0.9rem">I have an excellence coding skills and my computer science core concepts are very strong.<h1>
        <br> <div style="font-size:0.9rem">I can learn any programming laguage as i do not believe in techstack,rather i beileve in core concepts.  </div> `,
      
      }
      
    ],
    Hobbies: [
      {
        id: 1,
        title: `<div style="font-size:15px">&#128073 I love travelling as i travell a lot between college and Home &#128540 &#128652; <div>
        <br><div style="font-size:15px">&#128073 I love eating street food as it is very yummy  <b>&#128523</b> </div>
        `,
     
      }
     
    ],
  })

  return (
    <div className="w-full  md:max-w-2xl  px-2 md:px-5 py-2 md:py-2 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : ' hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category.replace(/_/g, ' ')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <div dangerouslySetInnerHTML={{ __html: post.title }}  className="text-sm dark:text-black font-medium leading-5">
                      
                    </div>

                    

                    {/* <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    /> */}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
