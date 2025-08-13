import React from 'react'
import { Helmet } from 'react-helmet'

export default function Helmetcomponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Conference 2025, Next-Gen Computing, Intelligent Systems, AI Conference, Machine Learning, Artificial Intelligence, Cloud Computing, IoT, Big Data, Data Analytics, Robotics, Cybersecurity, Computer Science, Emerging Technologies, ICNGCIS 2025, Tech Conference, Research Conference, Smart Systems, Digital Transformation" />
            <meta name="description" content="Join ICNGCIS 2025 – the International Conference on Next-Gen Computing & Intelligent Systems – to explore cutting-edge research, AI innovations, cloud computing, IoT, big data analytics, and intelligent systems. Connect with global experts, present your work, and shape the future of computing technologies." />
            <meta name="author" content="ICNGCIS Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Next-Gen Computing & Intelligent Systems" />
            <meta property="og:description" content="Join ICNGCIS 2025 – the International Conference on Next-Gen Computing & Intelligent Systems – to explore cutting-edge research, AI innovations, cloud computing, IoT, big data analytics, and intelligent systems. Connect with global experts, present your work, and shape the future of computing technologies." />
            <meta property="og:url" content="https://icngcis.org/" />
            <meta property="og:image" content="https://icngcis.org/assets/images/logo.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icngcis.org/assets/images/Fav.png" />

        </Helmet>
    )
}

