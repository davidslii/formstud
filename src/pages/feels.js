import * as React from "react"

export default function AirtableUI() {
  return (
    <form action="/api/feels" method="POST">
      <h2 style={{ marginBottom: `16px` }}>Add your feels</h2>
      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="muscle">
          Muscle:
        </label>
        <input name="muscle" id="muscle" />
      </div>
      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="date"
        >
          Date:
        </label>
        <input name="Date" id="date" type="date" />
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
        <button>Submit new person</button>
      </div>
    </form>
  )
}