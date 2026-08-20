# Service Booking Web App

A clean, responsive, and intuitive interactive web application that allows users to browse available cleaning services, add or skip items in real time, view a dynamically updated cart, and submit a service booking.

---

## Features

* **Interactive Navigation Bar**: Displays branding, quick navigation links, username indicator, and a functioning logout button.
* **Service Showcase Carousel**: Browse services one by one with details including title, pricing, and visual representations.
* **Skip & Add Controls**:
  * **Add Item**: Instantly adds the current service to the user's cart and advances to the next available service.
  * **Skip Item**: Bypasses the active service and displays the next one.
* **Dynamic Cart Management**:
  * Displays an empty state notice when no services are selected.
  * Automatically populates a itemized breakdown table when services are added.
  * Dynamically calculates and displays the live total cost.
* **Booking Form Validation**:
  * Collects user details (Full Name, Email ID, Phone Number).
  * Automatically enables the "Book Now" submission button only when at least one item is present in the cart.
  * Resets the application state upon successful form submission.

---

## File Structure

```text
├── index.html   # Main HTML structure and static service cards
├── styles.css   # Modern UI styling and layout design
└── script.js    # DOM manipulation, dynamic cart math, and event logic
