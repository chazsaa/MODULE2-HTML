import { useState } from 'react';

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>

      {visible && (
        <section className="card">
          <h2>SKILLS</h2>
          <ul>
            <li>
              TECHNICAL SKILLS
              <ul>
                <li>Programming</li>
                <li>Networking Basics</li>
                <li>Database Management</li>
              </ul>
            </li>

            <li>
              SOFT SKILLS
              <ul>
                <li>Problem-Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
              </ul>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;