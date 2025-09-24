
import { Mail } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setValues({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (err) {
      setStatus('Error: Network issue. Please try again.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacts" className="min-h-[calc(100vh-6rem)]">
      <div>
        <div className="flex flex-col gap-8 items-center">
          <h2 className="font-bold text-4xl">
            Get In <span className="text-purple-800">Touch</span>
          </h2>
          <p className="text-center w-[450px] md:w-[550px]">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities
          </p>
          <div className="bg-black w-[450px] max-w-lg p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-6">Send a message</h3>
            <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block font-semibold mb-2">
                  Your name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Your email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-white text-purple-800 font-semibold rounded-lg px-8 py-3 disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Submit now'}
                </button>
              </div>
              {status && (
                <p
                  className={`mt-4 p-2 rounded ${
                    status.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="items-center mx-auto flex flex-col gap-3 py-12">
          <h2 className="text-purple-800 text-4xl font-bold">
            Awobona<span className="text-white text-2xl">&#9679;</span>
          </h2>
          <div className="flex gap-2">
            <Mail className="text-purple-800" />
            <p>awobonayetunde4@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
