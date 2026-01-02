import { useState } from 'react';
import Typography from '@/components/general/typography';

const ContactForm = () => {
  return (
    <form 
      action="https://formspree.io/f/mojqoayl" 
      method="POST"
      className="mx-auto flex w-full max-w-xl flex-col gap-4"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="first-name">Primeiro Nome</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            required
            placeholder="Ex: Ana"
            className="rounded-lg border border-gray-200 p-3 outline-none focus:border-black"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="last-name">Segundo Nome</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            required
            placeholder="Ex: Ferreira"
            className="rounded-lg border border-gray-200 p-3 outline-none focus:border-black"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email@exemplo.com"
          className="rounded-lg border border-gray-200 p-3 outline-none focus:border-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Número</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(11) 99999-9999"
          className="rounded-lg border border-gray-200 p-3 outline-none focus:border-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Escreva sua mensagem aqui..."
          className="rounded-lg border border-gray-200 p-3 outline-none focus:border-black"
        />
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" name="terms" required className="h-4 w-4 cursor-pointer" />
        <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
          I accept the terms
        </label>
      </div>

      <button
        type="submit"
        className="mt-2 rounded-xl bg-gray-700 p-3 font-semibold text-white transition-all hover:bg-black active:scale-95"
      >
        Submit
      </button>

      <input type="hidden" name="_subject" value="Novo contato do Portfólio!" />
    </form>
  );
};

export default ContactForm;