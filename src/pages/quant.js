import * as React from "react"

export default function AirtableUI() {
  return (
    <form action="/api/quant_feels" method="POST">
      <h2 style={{ marginBottom: `16px` }}>How do you feel?</h2>
      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
          Date:
        </label>
        <input name="date" id="date" type="date" />
      </div>
      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="muscle"
        >
          Muscle:
        </label>
        <input name="muscle" id="muscle" />
      </div>
      <div style={{ marginBottom: `24px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="rating"
        >
          Rating:
        </label>
        <input name="rating" id="rating" type="Rating" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}