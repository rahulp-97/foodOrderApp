import { useEffect, useState } from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact us</h1>
      <form>
        <input type="text" className="border border-black rounded p-4 m-4" placeholder="name" />
        <input type="text" className="border border-black rounded p-4 m-4" placeholder="message" />
        <button type="submit" className="border border-black rounded-lg bg-black text-white p-4 m-4">submit</button>
      </form>
    </div>
  )
}

export default Contact;