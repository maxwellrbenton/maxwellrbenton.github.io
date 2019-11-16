import React from 'react';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import profile from "../assets/profile.png";

function Home() {
    return(<div>
        
        <img className="profilePic" src={profile} alt="profile" />
        <h1>Maxwell Benton</h1>
        <h2 className="occupation">Senior Curriculum Designer, Software Engineering</h2>
        <h3 className="company">
            <a className="navlink" href="https://flatironschool.com/">
                <svg className="companyLogo" id="svg__logo--mono" viewBox="0 0 233.2 113.2" fill="currentColor">
                    <path d="M18.4 0h8.1L8.1 61.4H0L18.4 0zM35 0h8.1L24.7 61.4h-8.1L35 0zM51.7 61.5V19.7h20.1v6.2H58.9v10.8h9.6V43h-9.6v18.6h-7.2v-.1zM75.6 61.5V19.7h7.2v35.6h11.3v6.3l-18.5-.1zM105.1 61.5h-7l7.7-41.9h8.9l7.7 41.9h-7l-1.3-9.3h-7.9l-1.1 9.3zm2.3-15.5h5.8l-2.8-18h-.1l-2.9 18zM128 25.9h-7v-6.3h21.1v6.3h-7v35.6h-7.2l.1-35.6zM145.3 61.5V19.7h7.2v41.9l-7.2-.1zM164.7 61.5h-7.2V19.7h10.1c8.1 0 12.2 3.4 12.2 12.4 0 6.7-2.6 9.5-5 10.6l6.1 19h-7.3l-5.1-17.3c-.9.1-2.4.2-3.7.2l-.1 16.9zm0-23.1h2.6c3.9 0 5.3-1.4 5.3-6.4s-1.5-6.4-5.3-6.4h-2.6v12.8zM184.3 29.8c0-5.9 3.5-10.7 11-10.7s11 4.8 11 10.7v21.6c0 5.9-3.5 10.7-11 10.7s-11-4.8-11-10.7V29.8zm7.1 21.4c0 3.1.9 4.6 3.8 4.6s3.8-1.5 3.8-4.6V30c0-3.1-.9-4.6-3.8-4.6s-3.8 1.5-3.8 4.6v21.2zM211.1 61.5V19.7h6.7l8.8 24h.1v-24h6.5v41.9h-6.3l-9.2-26.2h-.1v26.2l-6.5-.1zM64.8 81.1c-.3-3.6-2.2-4.6-3.8-4.6-2.3 0-3.6 1.5-3.6 4.1 0 7.1 14.6 10.6 14.6 21.9 0 6.9-4.6 10.7-11.4 10.7-6.7 0-10.5-5.3-10.8-11.6l6.8-1c.3 4.2 2 6.3 4.3 6.3 2.5 0 4.2-1.3 4.2-3.8 0-8.3-14.6-10.5-14.6-22.5 0-6.7 4.1-10.4 11.1-10.4 5.9 0 9.3 4.2 10 10.2l-6.8.7zM90.5 84.7v-3.2c0-3.5-1.6-5-3.5-5-2.9 0-3.8 1.5-3.8 4.6v21.2c0 3.1.9 4.6 3.8 4.6 2.6 0 3.5-1.5 3.5-4.2v-5h7.2v4.8c0 5.9-3.5 10.7-10.7 10.7-7.5 0-11-4.8-11-10.7V80.9c0-5.9 3.5-10.7 11-10.7 7.2 0 10.7 5.2 10.7 11.5v3.1l-7.2-.1zM102 112.6V70.7h7.2v17.1h7.7V70.7h7.2v41.9h-7.2V94h-7.7v18.6H102zM128.8 80.9c0-5.9 3.5-10.7 11-10.7s11 4.8 11 10.7v21.6c0 5.9-3.5 10.7-11 10.7s-11-4.8-11-10.7V80.9zm7.2 21.4c0 3.1.9 4.6 3.8 4.6s3.8-1.5 3.8-4.6V81.1c0-3.1-.9-4.6-3.8-4.6S136 78 136 81.1v21.2zM155.6 80.9c0-5.9 3.5-10.7 11-10.7s11 4.8 11 10.7v21.6c0 5.9-3.5 10.7-11 10.7s-11-4.8-11-10.7V80.9zm7.2 21.4c0 3.1.9 4.6 3.8 4.6s3.8-1.5 3.8-4.6V81.1c0-3.1-.9-4.6-3.8-4.6s-3.8 1.5-3.8 4.6v21.2zM182 112.6V70.7h7.2v35.6h11.3v6.3H182z">
                    </path>
                </svg>  
            </a>
        </h3>
        <section className="externalLinks">
            <span><a target="_blank" href="https://github.com/maxwellrbenton"><img src={github} alt="github"/></a></span>
            <span><a target="_blank" href="https://www.linkedin.com/in/maxwellbenton/"><img src={linkedin} alt="linkedin"/></a></span>
        </section>
    </div>)
}
export default Home;