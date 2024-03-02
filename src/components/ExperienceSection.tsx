const ExperienceSection = ({
  title,
  companies,
  responsibilities,
  dates,
  achievements,
}: any) => {
  return (
    <div key={title}>
      <h4>{title}</h4>
      <h4 className="company">
        {companies.map((company: any, index: number) => {
          if (index < companies.length - 1)
            return (
              <>
                <a target="_blank" rel="noopener noreferrer" href={company.url}>
                  {company.title}
                </a>, {" "}
              </>
            );
          return (
            <a target="_blank" rel="noopener noreferrer" href={company.url}>
              {company.title}
            </a>
          );
        })}{" "}
        &mdash;{" "}
        <i>
          {dates[0]} to {dates[1]}
        </i>
      </h4>
      <ul>
        {responsibilities.map((responsibility: string) => (
          <li>{responsibility}</li>
        ))}
        {!!achievements.length && <h4>Notable Achievements</h4>}
        {!!achievements.length
          ? achievements.map((achievement: string) => <li>{achievement}</li>)
          : null}
      </ul>
    </div>
  );
};

export default ExperienceSection;
