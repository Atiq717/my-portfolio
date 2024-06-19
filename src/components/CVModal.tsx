import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './css/CVModal.css';

interface CVModalProps {
  show: boolean;
  handleClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="cv-modal-header">
        <Modal.Title>Curriculum Vitae</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cv-content">
          <div className="cv-header-details">
            <p><strong>MOHAMMED KHAN</strong></p>
            <p>Personal Website: <a href="https://mohammedkhan.me" target="_blank" rel="noopener noreferrer">https://mohammedkhan.me</a></p>
            <p>Driving Licence: Full UK licence/car owner</p>
          </div>

          <h5>PERSONAL PROFILE</h5>
          <p>My personal strengths include determination, generosity, and consideration for others. I am a hardworking individual, trustworthy with a warm personality. I am highly confident and have the ability to work independently as well as part of a team. I possess the right attitude, aptitude, and charisma to be successful in any given position. With innovative ideas and a strong understanding of stakeholder requirements, I am committed to achieving my goals, persisting with tasks and new challenges, and making a positive impact in the workplace.</p>
          
          <h5>SKILLS/ACHIEVEMENTS</h5>
          <ul>
            <li>Web Development: Proficient in HTML, CSS, JavaScript, TypeScript, Bootstrap, jQuery, React, Redux, PHP, and Python.</li>
            <li>Backend Development: Experienced with Node.js, Express, API development, PostgreSQL, and Docker.</li>
            <li>Version Control & Deployment: Skilled in using Git, GitHub, and deploying applications with cURL frontend and server-side.</li>
            <li>Networking & Architecture: Knowledgeable in networking principles, IT architecture, and cloud services.</li>
            <li>Communication & Teamwork: Strong communication skills, able to work effectively as part of a team or independently.</li>
            <li>Project Management: Organised and managed a charity event for Cancer Research, involving promotion, ticket sales, staff management, and overall event coordination.</li>
            <li>Software Proficiency: Familiar with Microsoft Excel (including PivotTables and V-Lookups), Quickbooks, VT Transaction, Sage Line 50, Payroll Manager, and BC Easy TaxFiler.</li>
            <li>Problem-Solving: Thrive under pressure, meeting multiple deadlines and embracing challenges.</li>
            <li>Adaptability: Quick to learn and adapt to new systems and technologies.</li>
          </ul>

          <h5>EDUCATION</h5>
          <ul>
            <li><strong>2022 - Present</strong> Codecademy / IT Career Switch
              <ul>
                <li>Full Stack Development: HTML, CSS, JavaScript, TypeScript, Git, Docker, Node.js, Express, API, React, Redux, jQuery</li>
                <li>SQL: PostgreSQL</li>
                <li>PHP: cURL frontend and serverside</li>
                <li>Python</li>
              </ul>
            </li>
            <li><strong>2021</strong> Netcom Training BTec/ COMPTIA A+
              <ul>
                <li>Networking and Architecture</li>
                <li>Mobile and Operating Systems</li>
                <li>Cloud Services</li>
                <li>Business Processes</li>
                <li>Cisco: IT Essentials: PC Hardware and Software, Cybersecurity Essentials</li>
              </ul>
            </li>
            <li><strong>2005 - 2007</strong> Sutton Coldfield College
              <ul>
                <li>AS-Level: Accounts – B</li>
                <li>AAT – Pass, and Health & Safety vocational course</li>
              </ul>
            </li>
            <li><strong>2000 - 2005</strong> Joseph Leckie CTC GCSE
              <ul>
                <li>English – B</li>
                <li>Mathematics – A</li>
                <li>Science Double Award – CC</li>
                <li>ICT – B</li>
                <li>OCR Level 1 and Level 2: Finance and Accounting</li>
              </ul>
            </li>
          </ul>

          <h5>EMPLOYMENT</h5>
          <ul>
            <li><strong>Waiter - The Village Lodge Restaurant (2020 - Present)</strong>
              <ul>
                <li>Customer liaison, handling face-to-face and telephone queries and complaints.</li>
                <li>Ensuring satisfactory service and attending to customer needs.</li>
                <li>Full bookkeeping duties, including organisation of all accounts and payroll.</li>
              </ul>
            </li>
            <li><strong>Assistant Accountant and Payroll Manager – Accountants for Professionals (2017 - 2020)</strong>
              <ul>
                <li>Managed payroll, processed new starters and leavers, and handled payroll queries.</li>
                <li>Liaised with clients, pension providers, and HMRC.</li>
                <li>Prepared accounts, VAT returns, and bank reconciliations.</li>
                <li>Recorded client data, produced pivot tables, and submitted tax returns.</li>
                <li>Supervised and trained trainees.</li>
              </ul>
            </li>
            <li><strong>Accounting Assistant – Black Book Accountants (2012 - 2016)</strong>
              <ul>
                <li>Managed payroll, processed new starters and leavers, and handled payroll queries.</li>
                <li>Conducted bookkeeping, bank reconciliations, and authorised expenses.</li>
                <li>Prepared tax returns, corporation tax, self-assessment, and PAYE using QuickBooks.</li>
              </ul>
            </li>
            <li><strong>Financial Associate – Voluntary Office Clerk (2011 - 2012)</strong>
              <ul>
                <li>Worked as a payroll clerk, organised accuracy and payment of wages, pensions, and insurances.</li>
                <li>Handled deductions, bonuses, pay rises, and discrepancies.</li>
              </ul>
            </li>
            <li><strong>Systems Clerk – Tesco Distribution (2008 - 2011)</strong>
              <ul>
                <li>Managed system checks, stock control, driver booking, and workload volume analysis.</li>
                <li>Analysed staff time data and managed staff rotas.</li>
              </ul>
            </li>
            <li><strong>Waiter – Laboni Balti Restaurant (2005 - 2008)</strong>
              <ul>
                <li>Full operational and financial accountability.</li>
                <li>Promoted and advertised the restaurant, managed stock control, and trained new starters.</li>
                <li>Waited tables, dealt with complaints, and managed orders and deliveries.</li>
              </ul>
            </li>
          </ul>

          <h5>REFERENCES</h5>
          <p>Available on request.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <a href="src/assets/pdf/MohammedKhan.c.v.pdf" download className="btn btn-primary">
          Download CV
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default CVModal;
