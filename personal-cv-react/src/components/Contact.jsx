function Contact() {
  return (
    <section className="card">
      <h2>CONTACT ME</h2>

      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <textarea placeholder="Message"></textarea><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;