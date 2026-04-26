"use client";

import { FormEvent, useState } from "react";
import styles from "@/app/site.module.css";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = "Please enter at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 12) nextErrors.message = "Message should be at least 12 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please review the highlighted fields.");
      return;
    }

    form.reset();
    setStatus("Thank you. We will contact you shortly.");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input name="name" aria-invalid={Boolean(errors.name)} required />
        {errors.name ? <span className={styles.muted}>{errors.name}</span> : null}
      </label>

      <label>
        Email
        <input name="email" type="email" aria-invalid={Boolean(errors.email)} required />
        {errors.email ? <span className={styles.muted}>{errors.email}</span> : null}
      </label>

      <label>
        Message
        <textarea name="message" aria-invalid={Boolean(errors.message)} required />
        {errors.message ? <span className={styles.muted}>{errors.message}</span> : null}
      </label>

      <button type="submit">Send message</button>
      {status ? <p className={styles.muted}>{status}</p> : null}
    </form>
  );
}
