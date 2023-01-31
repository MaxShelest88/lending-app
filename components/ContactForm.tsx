'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-white px-8 py-8 shadow-xl dark:bg-blue-500"
    >
      <h1 className="text-2xl font-bold dark:text-gray-50">
        Отправить мне сообщение
      </h1>

      <label
        htmlFor="fullname"
        className="mt-8 font-light text-gray-500 dark:text-gray-50"
      >
        ФИО<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
      />

      <label
        htmlFor="email"
        className="mt-4 font-light text-gray-500 dark:text-gray-50"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
      />

      <label
        htmlFor="subject"
        className="mt-4 font-light text-gray-500 dark:text-gray-50"
      >
        Тема<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
      />

      <label
        htmlFor="message"
        className="mt-4 font-light text-gray-500 dark:text-gray-50"
      >
        Сообщение<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <button type="submit" className="button">
          Отправить
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
