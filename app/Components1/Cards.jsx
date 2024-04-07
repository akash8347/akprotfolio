import React from 'react';
import Image from 'next/image';
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Cards = ({ data }) => {
  return (
    <div className="card-container md:mb-20 md:mt-10 mt-8 mb-8 ">
      <div className="lg:max-w-2x lg:min-w-20 max-w-2xl inline-block dark:bg-gray-900  rounded-lg   mx-auto  shadow-2xl lg:mx-auto flex-1 hover:">
        <div className="image-cont w-[full] ">
          <Image
            className="border"
            src={`/${data.imgsrc}`}
            alt="Sunset in the mountains"
            width={700}
            height={500}
          />
        </div>
        <div className="px-5   ">
          <div className=" font-medium text-xl dark:text-gray-200 mt-2 mb-2">{data.title}</div>
          <div className="icons">
            <span className="flex">
              {data.icon.map((iconName, index) => {
                let IconComponent;
                switch (iconName) {
                  case 'SiMysql':
                    IconComponent = SiMysql;
                    break;
                  case 'FaReact':
                    IconComponent = FaReact;
                    break;
                  default:
                    IconComponent = null;
                }
                return IconComponent ? (
                  <div key={index} className=" inline-block px-3 mr-2 rounded-md shadow-lg bg-blue-300">
                    <IconComponent className="text-3xl" />
                  </div>
                ) : null;
              })}
            </span>
          </div>
          <hr
            style={{ height: '2px' }}
            className="w-12/12 mx-auto my-2 bg-gray-400 border-0 rounded md:my-2 dark:bg-gray-700"
          ></hr>
          <div className="text-gray-700 dark:text-gray-300 text-base">{data.description}</div>
        </div>
        <div className="px-5 pt-3 pb-2">
          {data.niche &&
            data.niche.map((item, index) => (
              <div key={item} className="inline-block bg-purple-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
