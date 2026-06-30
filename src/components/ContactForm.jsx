import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    projectDescription: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 text-green-800 border border-green-200 p-6 rounded-xl font-medium shadow-sm" role="alert">
        Thank you for contacting Egg Geo. We will respond to your inquiry shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-navy mb-2">First Name *</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
            id="firstName"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-bold text-navy mb-2">Last Name *</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
            id="lastName"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">Email *</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="organization" className="block text-sm font-bold text-navy mb-2">Organization</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
            id="organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="projectDescription" className="block text-sm font-bold text-navy mb-2">Project Description *</label>
          <textarea
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-y"
            id="projectDescription"
            name="projectDescription"
            rows="5"
            required
            value={form.projectDescription}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="w-full md:w-auto bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg shadow-primary/30">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
