# BrainyEdHub Website

A 5-page static site: `index.html`, `subjects.html`, `pricing.html`, `about.html`, `contact.html`, plus `assets/style.css` and `assets/script.js`. No build tools or frameworks — it runs as-is in any browser and on any web host.

## Launch on your own hosting/domain

1. **Upload the files.** Use your host's File Manager (cPanel, Plesk, etc.) or an FTP client (e.g. FileZilla) to upload every file and the `assets/` folder into your domain's public web folder (usually named `public_html` or `www`).
2. **Keep the folder structure.** `assets/style.css` and `assets/script.js` must stay inside an `assets` folder alongside the HTML files, or the styling and menu won't work.
3. **Set the homepage.** Most hosts automatically serve `index.html` as the homepage — no extra config needed.
4. **Point your domain.** If the domain isn't already pointed at this hosting account, update its DNS (A record or nameservers) from your domain registrar — your host's support page will have the exact values to use.
5. **Test the contact form.** It uses [FormSubmit](https://formsubmit.co) (free, no signup) to send enquiries straight to `info.brainyedhub@gmail.com`. The **first submission** will trigger a one-time confirmation email from FormSubmit to that inbox — click the activation link in it, then the form works for all future visitors.

## Editing content later

- Text content for each page lives in `build.py` as Python strings (`INDEX_BODY`, `SUBJECTS_BODY`, etc.) — edit there and rerun `python3 build.py` to regenerate the HTML, **or** edit the `.html` files directly (they're plain HTML, safe to hand-edit).
- Colors and fonts are defined once at the top of `assets/style.css` under `:root` — change a value there and it updates across every page.
- Pricing in `pricing.html` is placeholder copy ("Weekly sessions / month" etc.) since exact rates weren't specified — replace with real figures before launch.

## Alternative: free instant hosting

If you want it live in minutes before your own domain is ready, drag the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop) — no account required for a first preview link.
