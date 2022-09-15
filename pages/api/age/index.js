export default function handler(req, res) {
  if (req.method === "GET") {
    const age = getAge(process.env.DOB);
    res.status(200).json({ age });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

function getAge(dateString) {
  var ageInMilliseconds = new Date() - new Date(dateString);
  return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
}
