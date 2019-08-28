import React from 'react';

function Home() {
    return(<div>
        
        <img className="profilePic" src="/profile.png" alt="profile" />
        <h1>Maxwell Benton</h1>
        <h2 className="occupation">Senior Curriculum Designer, Software Engineering</h2>
        <h3 className="company"><a className="navlink" href="https://flatironschool.com/">Flatiron School</a></h3>
        <section className="externalLinks">
            <span><a target="_blank" href="https://github.com/maxwellrbenton"><img src="/github.png" alt="github"/></a></span>
            <span><a target="_blank" href="https://www.linkedin.com/in/maxwellbenton/"><img src="/linkedin.png" alt="linkedin"/></a></span>
        </section>
    </div>)
}
export default Home;