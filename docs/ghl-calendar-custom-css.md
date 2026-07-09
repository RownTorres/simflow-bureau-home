# GoHighLevel calendar - brand-matched custom CSS

The booking calendar lives on GoHighLevel (`app.simflowbureau.com`), and its
internal design can only be changed from inside GHL, not from this website's
code (the widget runs in a cross-origin iframe that our CSS cannot reach into).

This site now embeds the widget on a branded page at `/book`, so the page
around the calendar already matches the site. To make the calendar's own
colors and fonts match too, paste the CSS below into GoHighLevel.

## Where to paste it

1. GoHighLevel -> **Calendars** -> open the "System Audit" calendar.
2. Edit the calendar -> **Advanced / Customizations** (labeled "Custom CSS" on
   the Neo widget; on some accounts it is under **Sites -> Custom CSS** or the
   calendar's **Style** tab).
3. Paste the CSS, save, and reload `/book` to confirm.

If your plan does not expose a Custom CSS field on the calendar, the branded
`/book` wrapper still gives you an on-brand booking experience without this.

## The CSS

```css
/* Simflow Bureau brand palette */
:root {
  --sb-base: #111111;
  --sb-raised: #1b1b1b;
  --sb-card: #202020;
  --sb-edge: #2a2a2a;
  --sb-text: #ffffff;
  --sb-text-2: #bfbfbf;
  --sb-accent: #ffa500;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap");

/* Surfaces */
body,
.booking-container,
.calendar-wrapper,
#wrapper {
  background: var(--sb-base) !important;
  color: var(--sb-text-2) !important;
  font-family: "Open Sans", sans-serif !important;
}

/* Headings + labels */
h1, h2, h3, h4,
.calendar-title,
.meeting-name,
.selected-date {
  color: var(--sb-text) !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 700 !important;
}

/* Day cells */
.day,
.calendar-day {
  color: var(--sb-text-2) !important;
  border-radius: 9999px !important;
}

.day:hover,
.calendar-day:hover {
  background: var(--sb-card) !important;
}

/* Available / selected day */
.day.active,
.calendar-day.selected,
.day--selected {
  background: var(--sb-accent) !important;
  color: var(--sb-base) !important;
  font-weight: 700 !important;
}

/* Time-slot buttons */
.time-slot,
button.slot {
  background: transparent !important;
  border: 1px solid var(--sb-edge) !important;
  color: var(--sb-accent) !important;
  border-radius: 12px !important;
  transition: all 0.25s ease !important;
}

.time-slot:hover,
button.slot:hover {
  border-color: var(--sb-accent) !important;
  box-shadow: 0 0 20px -6px var(--sb-accent) !important;
}

/* Primary buttons (Continue / Confirm / Schedule) */
.btn-primary,
button[type="submit"],
.confirm-button {
  background: var(--sb-accent) !important;
  color: var(--sb-base) !important;
  border: none !important;
  border-radius: 9999px !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
}

/* Inputs on the details step */
input,
textarea,
select {
  background: var(--sb-card) !important;
  border: 1px solid var(--sb-edge) !important;
  color: var(--sb-text) !important;
  border-radius: 12px !important;
}

input::placeholder,
textarea::placeholder {
  color: #808080 !important;
}
```

Note: GoHighLevel changes its widget class names between versions, so if a
rule does not take effect, open the calendar in the browser, inspect the
element, and swap in the class name GHL is actually using. The color variables
above are the brand tokens - reuse them for any extra selectors you add.

## The details form ("Enter Details" step)

By default GHL renders the contact form as a white card with dark labels and a
plain orange button, which fights the dark site. This block repaints the whole
step - card surface, labels, inputs, the phone country dropdown, and the submit
button - to the Simflow Bureau palette. Paste it into the same Custom CSS field
(it is safe to keep alongside the calendar CSS above; the brand `:root`
variables are shared).

```css
/* ===== Simflow Bureau - "Enter Details" form ===== */

/* Widget surface */
body,
#app,
.widget-booking,
.booking-container {
  background: var(--sb-base) !important;
  font-family: "Open Sans", sans-serif !important;
}

/* White form card -> dark panel */
.form-container,
.appointment-form,
.booking-form,
.contact-form,
form {
  background: var(--sb-raised) !important;
  border: 1px solid var(--sb-edge) !important;
  border-radius: 16px !important;
  box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.7) !important;
}

/* "Enter Details" title */
.form-title,
.step-title,
h1, h2, h3 {
  color: var(--sb-text) !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 700 !important;
}

/* Field labels */
label,
.form-label,
.field-label {
  color: var(--sb-text-2) !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
}

/* Required asterisk */
.required,
label .text-danger,
label span[style*="red"] {
  color: var(--sb-accent) !important;
}

/* Inputs / textarea / select */
input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
textarea,
select,
.form-control,
.input-field {
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

/* Icons inside fields (mail, the "..." menu, dropdown caret) */
.input-icon svg,
.field-icon svg,
.input-group-text svg,
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

/* Country / generic select dropdown panel */
.dropdown-menu,
.select-options,
.country-list {
  background: var(--sb-card) !important;
  border: 1px solid var(--sb-edge) !important;
  color: var(--sb-text) !important;
}
.dropdown-menu li:hover,
.select-options li:hover,
.country-list li:hover {
  background: var(--sb-edge) !important;
}

/* "Schedule Appointment" button */
button[type="submit"],
.appointment-btn,
.btn-primary,
.submit-btn {
  background: var(--sb-accent) !important;
  color: var(--sb-base) !important;
  border: none !important;
  border-radius: 9999px !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  padding: 12px 28px !important;
  transition: filter 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease !important;
}

button[type="submit"]:hover,
.appointment-btn:hover,
.btn-primary:hover,
.submit-btn:hover {
  filter: brightness(1.08) !important;
  box-shadow: 0 0 28px -6px rgba(255, 165, 0, 0.55) !important;
  transform: translateY(-1px) !important;
}
```

If the card stays white after saving, the wrapper class is the one to fix:
inspect the white panel, copy its class, and add it to the `.form-container`
group above. Same drill for any rule that does not take - GHL's form markup
shifts between versions, but the brand tokens stay the same.
