
function Employee({
  name = "Unknown",
  department = "Not Assigned",
  salary = 15000
}) {
  return (
    <div className="example-card">
      <h3>Employee Details</h3>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Salary: Rs. {salary}</p>
    </div>
  );
}

function DefaultPropsExample() {
  return (
    <section>
      <h2>2. Default Properties Example</h2>

      <Employee
        name="Arun"
        department="IT"
        salary={30000}
      />

      <Employee name="Sneha" />
    </section>
  );
}

export default DefaultPropsExample;
