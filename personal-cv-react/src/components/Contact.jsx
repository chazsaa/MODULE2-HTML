import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Failed to connect to server.");
      });
  }

  return (
    <section className="card">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} /><br />

        <input type="text" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} /><br />

        <textarea placeholder="Message" value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea><br />

        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}