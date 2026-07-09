# GoHighLevel form - brand-matched custom CSS

This is for a **GoHighLevel Form** (built in the Form Builder), not the calendar
widget. The two have different markup, so they need separate CSS. The calendar
CSS lives in `ghl-calendar-custom-css.md`.

By default the form renders as a white card with dark navy labels and a blue
submit button, which clashes with the dark, orange-accent site. This block
repaints it: dark card, light Montserrat labels, dark inputs with an orange
focus ring, and the submit button as an orange pill.

## Where to paste it

1. GoHighLevel -> **Sites -> Forms** -> open your form in the builder.
2. Open the **Styles** panel (or the settings gear) -> **Custom CSS**.
3. Paste the CSS, save, and reload the embed to confirm.

Alternative: most of this can also be set in the builder's Style panel directly
(field background, border, label color, button color) without any CSS. Use
whichever you prefer - the CSS route below is faster to reuse across forms.

## The CSS

```css
/* Simflow Bureau brand tokens */
:root {
  --sb-base: #111111;
  --sb-raised: #1b1b1b;
  --sb-card: #202020;
  --sb-edge: #2a2a2a;
  --sb-text: #ffffff;
  --sb-text-2: #bfbfbf;
  --sb-muted: #808080;
  --sb-accent: #ffa500;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap");

/* Form card surface */
body,
.form-builder--container,
.ghl-form,
form,
#form-wrapper {
  background: var(--sb-raised) !important;
  font-family: "Open Sans", sans-serif !important;
}

form {
  border: 1px solid var(--sb-edge) !important;
  border-radius: 16px !important;
  box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.7) !important;
}

/* Field labels */
label,
.form-label,
.field-label,
.form-builder--field-label {
  color: var(--sb-text-2) !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
}

/* Required asterisk */
.required,
.text-danger,
label span[style*="red"] {
  color: var(--sb-accent) !important;
}

/* Inputs + textarea */
input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
textarea,
select,
.form-control {
  background: var(--sb-card) !important;
  border: 1px solid var(--sb-edge) !important;
  color: var(--sb-text) !important;
  border-radius: 12px !important;
  box-shadow: none !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
}

input:focus,
textarea:focus,
select:focus,
.form-control:focus {
  border-color: var(--sb-accent) !important;
  box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.18) !important;
  outline: none !important;
}

/* Placeholders */
input::placeholder,
textarea::placeholder {
  color: var(--sb-muted) !important;
}

/* Field icons (mail, the "..." menu) */
.input-icon svg,
.field-icon svg,
.input-group-text {
  color: var(--sb-muted) !important;
}

/* Phone country dropdown (intl-tel-input) */
.iti__country-list,
.iti__dropdown-content {
  background: var(--sb-card) !important;
  border-color: var(--sb-edge) !important;
  color: var(--sb-text) !important;
}
.iti__country {
  color: var(--sb-text-2) !important;
}
.iti__country:hover,
.iti__country.iti__highlight,
.iti__country.iti__active {
  background: var(--sb-edge) !important;
}
.iti__dial-code {
  color: var(--sb-muted) !important;
}

/* "Schedule Strategy Session" submit button */
button[type="submit"],
.submit-btn,
.footer-buttons button,
form button {
  background: var(--sb-accent) !important;
  color: var(--sb-base) !important;
  border: none !important;
  border-radius: 9999px !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 700 !important;
  padding: 14px 28px !important;
  transition: filter 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease !important;
}

button[type="submit"]:hover,
.submit-btn:hover,
.footer-buttons button:hover,
form button:hover {
  filter: brightness(1.08) !important;
  box-shadow: 0 0 28px -6px rgba(255, 165, 0, 0.55) !important;
  transform: translateY(-1px) !important;
}
```

Note: GoHighLevel applies inline styles to form fields, which is why every rule
uses `!important` (a stylesheet `!important` still beats an inline style without
one). If a rule does not take effect, inspect the element, copy the class GHL is
actually using, and add it to the matching group above. The brand tokens stay
the same across any extra selectors you add.
