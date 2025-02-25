import React, { useState } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  projectBudget: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    projectType: '',
    projectBudget: '',
    message: '',
  });

  // Tracks successful submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Tracks error state
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Reset submission states anytime the user changes something
    setIsSubmitted(false);
    setIsError(false);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://to3krsu4hlclor2az3t2hvgawa0igqtv.lambda-url.us-east-1.on.aws/',
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.error('Error submitting form');
        setIsError(true);
        return;
      }

      // Reset the form after a successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        projectType: '',
        projectBudget: '',
        message: '',
      });

      setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-1/2 bg-zinc-300 py-16 px-8 sm:px-16 lg:py-12 xl:px-24">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="firstName"
              id="first-name"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="lastName"
              id="last-name"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            Phone number
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phoneNumber"
              id="phone-number"
              autoComplete="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            />
          </div>
        </div>

        {/* Project Type dropdown */}
        <div className="sm:col-span-2">
          <label
            htmlFor="project-type"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            Project Type
          </label>
          <div className="mt-2.5">
            <select
              name="projectType"
              id="project-type"
              value={formData.projectType}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            >
              <option value="">Select</option>
              <option>Tech Strategy Consulting</option>
              <option>Custom Website</option>
              <option>Custom Software</option>
              <option>Branding/SEO</option>
              <option>E-Commerce</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Project Budget dropdown */}
        <div className="sm:col-span-2">
          <label
            htmlFor="project-budget"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            Project Budget
          </label>
          <div className="mt-2.5">
            <select
              name="projectBudget"
              id="project-budget"
              value={formData.projectBudget}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            >
              <option value="">Select</option>
              <option value="Free Consultation">I want a free, no-risk consultation</option>
              <option value="2,000-5,000">$1,000 - $5,000</option>
              <option value="5,000-10,000">$5,000 - $10,000</option>
              <option value="10,000-20,000">$10,000 - $20,000</option>
              <option value="20,000+">$20,000+</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-slate-950"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md bg-zinc-100 px-3.5 py-2 text-base text-slate-950 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition-all duration-300"
        >
          Send message
        </button>
      </div>

      {/* Success message */}
      {isSubmitted && (
        <div className="mt-6 text-emerald-700 font-semibold text-center text-lg sm:text-xl">
          Thank you, your form has been submitted! We'll be in touch soon.
        </div>
      )}

      {/* Error message */}
      {isError && (
        <div className="mt-6 text-red-700 font-semibold text-center text-lg sm:text-xl">
          An error occurred submitting the form - please reach out to us via phone or email.
        </div>
      )}

      <div className="text-slate-800 text-sm text-center mt-10">
        By contacting us, you agree to our{' '}
        <a className="font-semibold text-sky-500 hover:text-sky-600" href="/privacy/">
          privacy policy
        </a>
      </div>
    </form>
  );
};
