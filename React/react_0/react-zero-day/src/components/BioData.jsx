
/* 
props = {
name: "SR Setu",
email: "srsetu@gmail.com",
phone: +245456452132452",
github: "github.com/srsetu",
skills: ["JS", "WP", "CSS", "REACT", "Next"],
interests: ["Chess", "Football", "Entrepreneurship"],
socialLinks: [{platformName: "FB", handle: "fb/srsetu"}, {platformName:
Twitter", handle: "x/srsetu"}, {platformName: "LinkedIn", handle: "linkedin.com/srsetu"}]

}
*/
const BioData = (props) => {
    return (
        <>
            <div className="bio-data">BioData of {props.name}</div>
            <div className='personal-info'>
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Phone:</strong> {props.phone}</p>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <ul>
                    {props?.skills?.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='interests'>
                <h2>Interests</h2>
                <ul>
                    {props?.interests?.map((interest) => (
                        <li key={interest}>{interest}</li>
                    ))}
                </ul>
            </div>
            <div className='social-media'>
                <h2>Social Media</h2>
                <ul>
                    {props?.socialLinks?.map((sociallink) => (
                        <li key={sociallink}>
                            <strong>{sociallink.platformName}:</strong>{sociallink.handle}
                        </li>
                    ))}
                </ul>
                </div>

        </>
    );
};

export default BioData