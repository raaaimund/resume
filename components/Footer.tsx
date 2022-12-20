import Link from "next/link";
import {SlSocialGithub} from "react-icons/sl";
import React from "react";

export default function Footer() {
    return (
        <footer className="text-center lg:text-left text-gray-600">
            <div className="text-center p-6">
                <Link className="text-blue-600 hover:text-blue-700 hover:underline"
                      href="https://github.com/raaaimund/resume" target="_blank">
                    Code on <SlSocialGithub/>
                </Link>
            </div>
        </footer>
    )
}