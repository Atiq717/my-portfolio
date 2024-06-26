import React, { useEffect } from 'react';
import './css/About.css';

const About: React.FC = () => {
  const opentab = (event: React.MouseEvent<HTMLParagraphElement>, tabname: string) => {
    const tablinks = document.getElementsByClassName('tab-links');
    const tabcontents = document.getElementsByClassName('tab-contents');

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].classList.remove("active-tab");
    }
    (event.currentTarget as HTMLElement).classList.add("active-link");
    document.getElementById(tabname)?.classList.add("active-tab");
  };

  useEffect(() => {
    const defaultTab = document.querySelector('.tab-links') as HTMLElement;
    defaultTab.click();
  }, []);

  return (
    <section id="about" className='container-fluid'>
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={picture} alt="picture" />
          </div>
          <div className="about-col-2">
            <h2 className="sub-title">About <span>Me!</span></h2>
            <p className="para">
              My personal strengths include determination, generosity, and consideration for others. I am a hardworking individual, who is trustworthy with a warm personality. I am highly confident and have the ability to work on my own as well as a team. I have the right attitude, aptitude and charisma to be successful in the position given. I have innovative ideas and a strong understanding of what stakeholders are requesting. I am a hardworking individual with excellent communication skills and I am comfortable communicating at all levels. I am determined to achieve my goals, willing to persist with tasks and new challenges, with an urge to succeed and make a positive impact within the workplace.
            </p>
            <div className="tab-titles">
              <p className="tab-links active-link" onClick={(event) => opentab(event, 'skills')}>Skills</p>
              <p className="tab-links" onClick={(event) => opentab(event, 'experience')}>Experience</p>
              <p className="tab-links" onClick={(event) => opentab(event, 'education')}>Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
                <li><span>Web Development</span><br />Web App Development</li>
                <li><span>Multi Language Programming</span><br />HTML, CSS, JavaScript, Python, PHP</li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li><span>Village Lodge Restaurant</span><br />Manager Head waiter Book keeping Payroll <br />2020 - Present</li>
                <li><span>Accountants For Professionals</span><br />Accounts Assistance, Payroll Manager, Account Preparations, VAT Returns <br />2017 - 2020</li>
                <li><span>Black Book Accountants</span><br />Accounts Assistance, Payroll Manager, Account Preparations, VAT Returns <br />2012 - 2017</li>
                <li><span>Tesco Distribution</span><br />Systems Clerk, Goods-in, Warehouse Operative <br />2008 - 2011</li>
                <li><span>Laboni Restaurant</span><br />Waiter, Sales and Marketing <br />2005 - 2008</li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li><span>Codecademy</span><br />Full Stack Engineer, PHP, Bootstrap, Python, jQuery <br />2023</li>
                <li><span>Netcom Training</span><br />CompTia A+ <br />Networking and Architecture, Mobile and Operating Systems, Cloud Services, Business Processes <br />Cisco: IT Essentials, Cyber Security <br />2021</li>
                <li><span>Sutton Coldfield College</span><br />AAT Accounting, A Level Accounts</li>
                <li><span>Joseph Leckie CTC</span><br />GCSE: English, Mathematics, Science, ICT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
