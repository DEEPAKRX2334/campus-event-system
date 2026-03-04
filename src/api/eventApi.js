const API = "http://localhost:8080/api";

export const createRegistration = async (data) => {

  const res = await fetch(`${API}/registrations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
};

export const getRegistrations = async () => {

  const res = await fetch(`${API}/registrations`);

  return res.json();
};