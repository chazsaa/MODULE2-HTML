import { useState } from 'react';

function Skills({ skills }) {
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
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;