import React from 'react';

const ExperienceSection = ({title, companies, responsibilities, dates, achievements}) => {
  return (
    <div>
      <h4>{title}</h4>
      <h4 className="company">{companies.map((company,index) => {
        if(index < companies.length - 1) return <><a target="_blank" rel="noopener noreferrer" href={company.url}>{company.title}</a> / </>
        return <a target="_blank" rel="noopener noreferrer" href={company.url}>{company.title}</a>
      })} &mdash; <i>{dates[0]} to {dates[1]}</i></h4>
      <ul>
        {responsibilities.map(responsibility => <li>{responsibility}</li>)}
        {achievements.map(achievement => <li>{achievement}</li>)}
      </ul>
      
    </div>
  )
}

export default ExperienceSection;