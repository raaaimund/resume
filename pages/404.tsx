// pages/404.js
import React from "react";
import Link from "next/link";

export default function Custom404() {
    return (
        <header>
            <div
                className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover h-screen"
                style={{backgroundImage: "url(404.jpg)"}}
            >
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white bg-gray-100 bg-opacity-50 rounded p-10">
                            <h2 className="font-semibold text-8xl mb-4">
                                404
                            </h2>
                            <h4 className="font-semibold text-xl mb-6">
                                Resource not found
                            </h4>
                            <Link
                                className="inline-block px-6 py-3 border border-white text-sm
                                        uppercase font-semibold
                                        hover:bg-blue-100 hover:shadow-lg hover:text-gray-500
                                        focus:shadow-lg focus:outline-none focus:ring-0
                                        active:bg-blue-200 active:bg-blue-200 active:shadow-lg
                                        transition duration-150 ease-in-out"
                                href="/"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >Go home</Link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}