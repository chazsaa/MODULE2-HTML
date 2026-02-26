function Education() {
  return (
    <section className="card">
      <h2>EDUCATION</h2>

      <table
        border="1"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Year</th>
            <th>School</th>
            <th>Program / Level</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2025 - Present</td>
            <td>USTP - CDO Campus</td>
            <td>Bachelor of Science in Information Technology</td>
          </tr>

          <tr>
            <td>2022 - 2024</td>
            <td>Holy Child High School</td>
            <td>Senior High School - GAS</td>
          </tr>

          <tr>
            <td>2018 - 2022</td>
            <td>Holy Child High School</td>
            <td>High School</td>
          </tr>

          <tr>
            <td>2012 - 2018</td>
            <td>Kinoguitan Central School</td>
            <td>Elementary School</td>
          </tr>

          <tr>
            <td>2010 - 2012</td>
            <td>Kinoguitan Kindergarten</td>
            <td>Kindergarten</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;