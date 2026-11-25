<script>
  let students = [];

  async function loadStudents() {
    const res = await fetch('/api/students');
    if (!res.ok) throw new Error('Failed to load students');
    students = await res.json();
  }

  loadStudents();
</script>

<div class="container">
  <h1>Students</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      {#each students as student}
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.course}</td>
          <td>{student.grade}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  :global(body) {
    font-family: system-ui, -apple-system, sans-serif;
    margin: 2rem;
    background: #f9fafb;
  }
  .container {
    max-width: 720px;
  }
  h1 {
    text-align: center;
    color: #111827;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background: #ffffff;
  }
  th,
  td {
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    text-align: left;
  }
  th {
    background: #f3f4f6;
    color: #374151;
  }
  tr:nth-child(even) {
    background: #f9fafb;
  }
</style>
