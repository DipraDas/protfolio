import React, { useEffect, useState } from 'react';
import SkillBar from 'preact-skillbar';
import 'preact-skillbar/dist/index.css';
import '../App.css';
import guitar from '../images/guitar.png';
import art from '../images/art.png';
import { Link } from 'react-router-dom';

const Right = ({ section }) => {



    useEffect(() => {

        const delay = 1;

        setTimeout(function () {
            document.getElementById("html-pourcent").innerHTML = "80%";
        }, delay * 4);

        setTimeout(function () {
            document.getElementById("css-pourcent").innerHTML = "75%";
        }, delay * 5);

        setTimeout(function () {
            document.getElementById("javascript-pourcent").innerHTML = "70%";
        }, delay * 6);

        setTimeout(function () {
            document.getElementById("bootstrap-pourcent").innerHTML = "80%";
        }, delay * 7);

        setTimeout(function () {
            document.getElementById("tailwind-pourcent").innerHTML = "90%";
        }, delay * 8);

        setTimeout(function () {
            document.getElementById("react-pourcent").innerHTML = "80%";
        }, delay * 9);

        setTimeout(function () {
            document.getElementById("next-pourcent").innerHTML = "70%";
        }, delay * 10);

        setTimeout(function () {
            document.getElementById("native-pourcent").innerHTML = "70%";
        }, delay * 11);

        setTimeout(function () {
            document.getElementById("redux-pourcent").innerHTML = "60%";
        }, delay * 12);

        setTimeout(function () {
            document.getElementById("node-pourcent").innerHTML = "50%";
        }, delay * 13);
        setTimeout(function () {
            document.getElementById("mongodb-pourcent").innerHTML = "60%";
        }, delay * 14);
        setTimeout(function () {
            document.getElementById("photoshop-pourcent").innerHTML = "50%";
        }, delay * 15);
        setTimeout(function () {
            document.getElementById("illustrator-pourcent").innerHTML = "70%";
        }, delay * 16);
        setTimeout(function () {
            document.getElementById("premierpro-pourcent").innerHTML = "50%";
        }, delay * 17);
        setTimeout(function () {
            document.getElementById("filmora-pourcent").innerHTML = "85%";
        }, delay * 18);
    }, []);

    useEffect(() => {
        scrollToSpecificSection(section);
    }, [section])

    const scrollToSpecificSection = section => {
        if (section === 'about') {
            const experienceSection = document.getElementById('about-section');
            if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (section === 'experience') {
            const experienceSection = document.getElementById('experience-section');
            if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (section === 'project') {
            const experienceSection = document.getElementById('project-section');
            if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (section === 'education') {
            const experienceSection = document.getElementById('education-section');
            if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (section === 'skill') {
            const experienceSection = document.getElementById('skill-section');
            if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className='py-20 md:ml-[100%] w-full'>
            <section id='about-section'>
                <h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8'>ABOUT</h1>
                <p className='ml-4 text-gray-300 mb-5 font-medium'>Back in 2020, it was the time of Corona. Everything was stop and the life also stucked. At that  time I though, how I my this leasure time effective. From then I explored diffent section of computer engineering and software development make me fun to do. The journey started . . . </p>
                <p className='ml-4 text-gray-300 mb-5 font-medium'>Now I am working in Cloudone, a reknowned ISP(Internet Service Provider) of Chattogram. Here we have our own CRM (Customer Relationship Management) system. Everyday we try to make our system more user friendly. Our team always concern about any unusual activity or bug in our system. We also have Cloudone app. Not only that, we also have Automart (an ecommerce site). Now our team are dedicatedly working on a flight booking system. </p>
                <p className='ml-4 text-gray-300 font-medium mb-28'>I always try to explore new technologies or new tools. It may programming or graphical or trading! I love to play guitar in my leasure time.</p>
            </section>
            <section id='experience-section' className='mb-28'>
                <h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8'>EXPERIENCE</h1>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <Link to="/cloudone" className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>ARP 2023 ~ PRESENT</h1>
                            <h1 className='text-white text-sm font-semibold mt-3 tracking-wider animationFading'>Show Details</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>Junior Software Engineer</h1>
                            <p className='text-gray-400 text-lg mb-2'> ~ Cloudone</p>
                            <p className='text-gray-300'>As a Junior Software Engineer at Cloudone, I dive deep into the fascinating realm of mobile app development, focusing on both Android and iOS platforms. Crafting seamless mobile experiences is my passion, but I also lend my skills to building internal CRM software and websites.  I really enjoy working with my team to bring our ideas to life. Click through this section to explore the exciting projects we've been working on!</p>
                            <div className='flex flex-wrap mt-1 pb-2'>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>ReactJs</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>NextJs</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>React-Native</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Redux</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>RTK Query</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Redux Thunk</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Tailwind</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Vanila CSS</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>PHP</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Debugging</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <Link to="/dyfuso" className='grid grid-cols-12 px-4 py-3 mt-10'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>DEC 2022 ~ FEB 2023</h1>
                            <h1 className='text-white text-sm font-semibold mt-3 tracking-wider animationFading'>Show Details</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>Frontend Web Developer</h1>
                            <p className='text-gray-400 text-lg mb-2'> ~ Dyfuso (Remote)</p>
                            <p className='text-gray-300'>During my internship at Dyfuso, I had the opportunity to dive into Vue.js and put my skills to work by designing the admin panel for the company's website. It was an enriching experience where I learned firsthand about front-end development and user interface design. </p>
                            <div className='flex flex-wrap mt-1 pb-2'>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>VueJs</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Quasar</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Vanilla CSS</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Api Integration</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section id='project-section' className='mb-28'>
                <h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8'>PROJECTS</h1>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px] mb-4'>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <img src={guitar} style={{ width: '85%', border: '1.5px solid #3d4a6d', marginTop: '5px' }} />
                            <p className='text-white text-sm mt-1'>Explore More</p>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>Guitar.BD</h1>
                            <p className='text-gray-400 text-lg mb-2'> ~ Guitar reselling website</p>
                            <div className='flex flex-wrap mt-1 pb-2'>
                                <Link to='https://guitar-bd.web.app/'><div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Live Site</div></Link>
                                <Link to='https://github.com/DipraDas/Guitar-BD-Client'><div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Github (Client)</div></Link>
                                <Link to='https://github.com/DipraDas/Guitar-BD-Server'><div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Github (Server)</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px] mb-4'>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <img src={art} style={{ width: '85%', border: '1.5px solid #3d4a6d', marginTop: '5px' }} />
                            <p className='text-white text-sm mt-1'>Explore More</p>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>Red Art</h1>
                            <p className='text-gray-400 text-lg mb-2'> ~ Art is the exploration</p>
                            <div className='flex flex-wrap mt-1 pb-2'>
                                <Link to='https://red-art-f4093.firebaseapp.com/'><div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Live Site</div></Link>
                                <Link to='https://github.com/DipraDas/Red-Art-Client'><div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Github (Client)</div></Link>
                                <Link to='https://github.com/DipraDas/Red-Art-Server'><div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Github (Server)</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='education-section' className='mb-28'>
                <h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8'>EDUCATION</h1>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>SEP 2018 ~ SEP 2022</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>B.Sc. in Computer Science & Engineering</h1>
                            <p className='text-gray-400 text-lg'> ~ East Delta University</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p>
                            <p className='text-gray-300'> At East Delta University, I immersed myself in the dynamic world of Computer Science & Engineering. Through rigorous coursework and hands-on projects, I honed my skills in programming languages, algorithm design, database management, and system architecture. Beyond technical proficiency, I learned the importance of collaboration, adaptability, and continuous learning in navigating the ever-evolving field of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3 mt-10'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>2017 ~ 2018</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>Higher Secondary</h1>
                            <p className='text-gray-400 text-lg'> ~ Hajera Taju Degree College</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p>
                            <p className='text-gray-300'>During my Higher Secondary education in Chattogram, I engaged with a diverse curriculum that included mathematics and science. This period was pivotal in honing my analytical skills and fostering a passion for learning, setting the stage for my academic journey ahead.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3 mt-10'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>2016 SESSION</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'> Secondary</h1>
                            <p className='text-gray-400 text-lg'> ~ Ctattogram Govt. High School</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p>
                            <p className='text-gray-300'>A part of my life where I passed a golden moment. That was nothing just a stressless and joyable time where you can fly like a bird and feel the smell of heaven. If time travel exists, I should dare to try!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='skill-section' className='mb-28'>
                <h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8'>EDUCATION</h1>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>SEP 2018 ~ SEP 2022</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>B.Sc. in Computer Science & Engineering</h1>
                            <p className='text-gray-400 text-lg'> ~ East Delta University</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p>
                            <p className='text-gray-300'> At East Delta University, I immersed myself in the dynamic world of Computer Science & Engineering. Through rigorous coursework and hands-on projects, I honed my skills in programming languages, algorithm design, database management, and system architecture. Beyond technical proficiency, I learned the importance of collaboration, adaptability, and continuous learning in navigating the ever-evolving field of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3 mt-10'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>2017 ~ 2018</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'>Higher Secondary</h1>
                            <p className='text-gray-400 text-lg'> ~ Hajera Taju Degree College</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p>
                            <p className='text-gray-300'>During my Higher Secondary education in Chattogram, I engaged with a diverse curriculum that included mathematics and science. This period was pivotal in honing my analytical skills and fostering a passion for learning, setting the stage for my academic journey ahead.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3 mt-10'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>2016 SESSION</h1>
                        </div>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-semibold text-[#5EEAD3]'> Secondary</h1>
                            <p className='text-gray-400 text-lg'> ~ Ctattogram Govt. High School</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p>
                            <p className='text-gray-300'>A part of my life where I passed a golden moment. That was nothing just a stressless and joyable time where you can fly like a bird and feel the smell of heaven. If time travel exists, I should dare to try!</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className='mb-28'>
                <h1 h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8' >SKILL</h1>
                <div>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-2'>Development</h1>
                        </div>
                        <div className='col-span-9'>
                            <ul className="skills-bar-container">
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>HTML5</h3>
                                            <span className="percent" id="html-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar progressred" id="progress-html"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>CSS3</h3>
                                            <span className="percent" id="css-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar  progresscss" id="progress-css"></span>
                                        </div>
                                    </li>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>JavaScript</h3>
                                            <span className="percent" id="javascript-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressjavascript"
                                                id="progress-javascript"
                                            ></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Bootstrap</h3>
                                            <span className="percent" id="bootstrap-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar  progressbootstrap" id="progress-bootstrap"></span>
                                        </div>
                                    </li>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Tailwind</h3>
                                            <span className="percent" id="tailwind-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progresstailwind"
                                                id="progress-tailwind"
                                            ></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>ReactJs</h3>
                                            <span className="percent" id="react-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressreact"
                                                id="progress-react"
                                            ></span>
                                        </div>
                                    </li>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>NextJS</h3>
                                            <span className="percent" id="next-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressnext"
                                                id="progress-next"
                                            ></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>React Native</h3>
                                            <span className="percent" id="native-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressnative"
                                                id="progress-native"
                                            ></span>
                                        </div>
                                    </li>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Redux</h3>
                                            <span className="percent" id="redux-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressredux"
                                                id="progress-redux"
                                            ></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>NodeJs / ExpressJs</h3>
                                            <span className="percent" id="node-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressnode"
                                                id="progress-node"
                                            ></span>
                                        </div>
                                    </li>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>MongoDB</h3>
                                            <span className="percent" id="mongodb-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progressmongodb"
                                                id="progress-mongodb"
                                            ></span>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-2'>Tools</h1>
                        </div>
                        <div className='col-span-9'>
                            <ul className="skills-bar-container">
                                <div className='grid grid-cols-2 gap-3'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Photoshop</h3>
                                            <span className="percent" id="photoshop-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar progressphotoshop" id="progress-photoshop"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Illustrator</h3>
                                            <span className="percent" id="illustrator-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar  progressillustrator" id="progress-illustrator"></span>
                                        </div>
                                    </li>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Premier Pro</h3>
                                            <span className="percent" id="premierpro-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span
                                                className="progressbar  progresspremierpro"
                                                id="progress-premierpro"
                                            ></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h3>Filmora</h3>
                                            <span className="percent" id="filmora-pourcent"></span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar  progressfilmora" id="progress-filmora"></span>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
            <section id='education-section' className='mb-28'>
                <h1 style={{ letterSpacing: '5px' }} className=' text-white font-bold ms-4 text-sm mb-5 underline underline-offset-8'>CONTACT</h1>
                <div className='hover:bg-[#ffffff05] hover:rounded-[10px]'>
                    <div className='grid grid-cols-12 px-4 py-3'>
                        <div className='col-span-3'>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>Phone</h1>
                            <h1 className='text-gray-400 text-sm font-semibold mt-1'>Email</h1>
                        </div>
                        <div className='col-span-9'>
                            {/* <h1 className='text-xl font-semibold text-[#5EEAD3]'>B.Sc. in Computer Science & Engineering</h1>
                            <p className='text-gray-400 text-lg'> ~ East Delta University</p>
                            <p className='text-gray-400 text-lg mb-2'> ~ Chattogram</p> */}
                            <a href='tel:+8801876704498' className='text-white block'> +880 1876704498</a>
                            <a href='mailto:dipradas5940@gail.com' className='text-white '> dipradas5940@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Right;