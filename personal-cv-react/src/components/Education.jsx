function Education({ education }) {  
  return (
    <section className="card">
      <h2>EDUCATION</h2>

      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Year</th>
            <th>School</th>
            <th>Program / Level</th>
          </tr>
        </thead>

        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.school}</td>
              <td>{item.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;