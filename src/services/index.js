const JSON_URL = 'https://api.reportahealth.org/v1/covid';
const TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVlYTUyYTQ4OWE2MTgyNTkyOGY5MmRjMzI5OTY2OTZhZGFjMmIzZmY2YWVlNjI3YzM4ZmJjZjczNzE0OWRjMjI2ZmY4MTRhNTI3ZDljZThlIn0.eyJhdWQiOiIxIiwianRpIjoiZWVhNTJhNDg5YTYxODI1OTI4ZjkyZGMzMjk5NjY5NmFkYWMyYjNmZjZhZWU2MjdjMzhmYmNmNzM3MTQ5ZGMyMjZmZjgxNGE1MjdkOWNlOGUiLCJpYXQiOjE1NjI5MzI0MTQsIm5iZiI6MTU2MjkzMjQxNCwiZXhwIjoxNTk0NTU0ODE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wO1a18RNdgC4qLEyBiw8bnOGwfrD5TPGIiEDtCrgpDQEkyeswGVeNmdldkwFOuFXmtrFkwM2uV7tKkmI2ti-wawlpcAClmgYZuIowN_ol1ejZZEAOuWhgTEl1ijkEnwiCJEn6lpuxlCgFcbFetL9CcGrJhuFExyRFDGiEIdgLlSEZdjMBI523rqrypMh6QSfXbB0CzKlECrSWCw9ve6ATKZlVYpuSsjuuJtBG9Cd6F-YvruKwsc4cyw8UMeZPVEPjSyWSqOiMA0R8m6Xj2miJ7XcAZzccaI5qNaWazpdNy5lo8Q9nqJoZygDQni-_JOBkCTP2z9l0GoqQ8eJSPBBRGTDT3NTcdyVZhjLsUV8NYBBIld2OgNXZoIbIw9n9L8fwTemdRIFbeAsX7NBo1pGiU7MaTi9Q5nByqqeTKhycTBmYisnsdWZrZdn4e3T0QvAah3kKq3M5yTypVJnfMx8iAyb8D1ou7OFl9FoBD3XF7hDL3F1192C3bW_Q2G5BqLpEk15yMlr3hYngIt0RfLp3YL6FqAKmlS_hyj8ENH_X17p5mdovASjGXT1dwyxtk_21PLD48YGx6082rUYfFVOFr5Q6kApeV0HS4HSunyQgUPvJzJk6tAU8bGxl1_exS3Plr4NZ2bMeJteUCHcjf9UBkdkznCc0P9dAccYHu9ez9A`;

export default {
  getCovid() {
    return fetch(
      JSON_URL,
      {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ TOKEN
        }
      }
    )
  }
}
