import * as React from "react"

export default function AirtableUI() {
  return (
    <form action="/api/airtable" method="POST">
      <h2 style={{ marginBottom: `16px` }}>Add person to Airtable</h2>
      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
          Name:
        </label>
        <input name="name" id="name" />
      </div>
      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="email"
        >
          Video:
        </label>
        <input name="email" id="email" type="URL" />
      </div>
      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
          Muscle:
        </label>
        <input name="muscle" id="muscle" />
      </div>
      <div style={{ marginBottom: `24px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="message"
        >
          Message:
        </label>
        <textarea name="message" id="message" />
      </div>
      <div>
        <button>Submit new</button>
      </div>
    </form>
  )
}