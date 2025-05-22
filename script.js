document.getElementById("tradeForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const data = {
    date: formData.get("date"),
    direction: formData.get("direction"),
    entry: formData.get("entry"),
    exit: formData.get("exit"),
    rr: formData.get("rr"),
    pnl: formData.get("pnl"),
    openingScreenshotLinks: formData.get("openingScreenshotLinks")
      .split("\n")
      .map(s => s.trim())
      .filter(s => s),
    closingScreenshotLinks: formData.get("closingScreenshotLinks")
      .split("\n")
      .map(s => s.trim())
      .filter(s => s),
    notes: formData.get("notes")
  };

  const endpoint = "YOUR_APPSCRIPT_URL_HERE"; // ← Replace this with your real AppScript URL

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(data)
    });

    const text = await res.text();
    alert("Submission result: " + text);
    form.reset();
  } catch (err) {
    alert("Submission failed: " + err.message);
  }
});

