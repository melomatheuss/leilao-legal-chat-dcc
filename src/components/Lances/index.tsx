"use client";

import React from "react";
import drone from '../../assets/images/drone.jpg';
import { Card } from "flowbite-react";

export const Lances = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-purple-900 text-2xl font-bold mb-4">
        Leilões Online
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {Array(3)
          .fill(1)
          .map((item, index) => (
            <Card
              key={item + index}
              imgAlt=""
              imgSrc={'drone.jpg'}
            >
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <p>Drone m1  </p>
                </h5>
              </a>
              <span className=" w-fit mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                <p>Lance atual</p>
              </span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  1500 R$
                </span>
                <a
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  href="#"
                >
                  <p>Dar lance</p>
                </a>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
};
