
The contact form on `/contact` currently does **not** send or store messages anywhere. Looking at `src/components/ContactForm.tsx`, the `handleSubmit` function only:

1. Prevents the default form submission
2. Shows a toast notification saying "Message Sent!"
3. Clears the form fields

There is no email delivery, no database insert, no webhook — the message data is discarded the moment the form resets. Nothing is displayed anywhere because nothing is saved.

## To actually capture messages, here are the options

**Option A — Save to database (recommended)**
Create a `contact_messages` table in Lovable Cloud and insert each submission. Build a simple admin view (e.g. extend the existing `/admin` page) that lists all messages with name, email, subject, message, and timestamp. Protect it with authentication so only you can view them.

**Option B — Email forwarding**
Use an edge function with Resend (or similar) to email each submission to your inbox (e.g. info@truenorth.et). Messages arrive directly in your email — nothing to log into.

**Option C — Both**
Store in the database AND send an email notification, so you have a permanent record plus instant alerts.

## Recommended plan

1. Create `contact_messages` table (id, name, email, subject, message, created_at, is_read).
2. Add RLS so only admins can read; anyone can insert.
3. Update `ContactForm.tsx` to insert into the table instead of just showing a toast.
4. Add a "Messages" section on the `/admin` page listing all submissions, newest first, with read/unread status.
5. (Optional) Add basic auth-gating for `/admin` so it isn't public.

Let me know which option you want and I will implement it.
