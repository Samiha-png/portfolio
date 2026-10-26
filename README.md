# Samiha Khan — 3D Developer Portfolio

A responsive React + Vite portfolio with a custom 3D-inspired female developer avatar, scroll reveals, service cards, project filtering, experience, technology badges, and a project-scale inquiry form.

## Run locally

1. Install Node.js LTS if it is not already installed.
2. Open this folder in VS Code.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the localhost URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Important project notes

- The first four projects are shown by default; the button reveals the additional portfolio entries.
- Project artwork is illustrative and should be replaced with real screenshots when available.
- GitHub actions currently link to the profile because exact per-project repository URLs and live demo URLs were not supplied. Add verified URLs before presenting those buttons as project-specific links.
- The private “Our Little World” project is intentionally excluded from this public portfolio.
- The contact form opens the visitor's default email app with a prepared message. It does not submit to a backend or store form data.


## Contact form email delivery (EmailJS)

The contact form uses EmailJS to send submissions to your inbox (it no longer opens the visitor's email app). To enable real delivery:

1. In your existing EmailJS account, retrieve the Service ID, Template ID, and Public Key.
2. Copy `.env.example` to `.env` and fill in the three values. Never put a private key in frontend code.
3. Configure your EmailJS email template with these variables: `{{from_name}}`, `{{reply_to}}`, `{{project_type}}`, `{{project_scale}}`, and `{{message}}`. Set the template's reply-to field to `{{reply_to}}`.
4. Run `npm install` and `npm run dev` to test. Submit a test inquiry and confirm it reaches your inbox.
5. For Vercel, add the same three variables under Project Settings → Environment Variables, then redeploy.

The old website's EmailJS credentials were not present in the supplied redesign source, so they must be copied from your existing EmailJS setup. Until configured, the form will display a setup message instead of falsely claiming the email was sent.
