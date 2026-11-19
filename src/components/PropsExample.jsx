
function Student(props) {
  return (
    <div className="example-card">
      <h3>Student Details</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

function PropsExample() {
  return (
    <section>
      <h2>1. React Props Example</h2>

      <Student
        name="Rahul"
        age={21}
        course="Computer Science"
      />

      <Student
        name="Priya"
        age={20}
        course="Information Technology"
      />
    </section>
  );
}

export default PropsExample;
