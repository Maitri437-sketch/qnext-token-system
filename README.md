# QNext – Hospital OPD Token & Queue Management System

QNext is a web-based token and queue management system built for the
Outpatient Department (OPD) of a hospital. A patient books a token on
arrival, sees their live position in the queue, and is called to the
correct consultation room when their turn comes. Senior citizens (60+)
and patients flagged as emergency cases are moved ahead in the queue,
while regular tokens are still served fairly on a first-in, first-out
basis within their own group.

This repository is the working codebase referenced in the case study
**"Git-Based Collaborative Software Development Workflow: A Case Study
of the QNext Hospital Queue Management System"**, prepared for the
course *Open Source Technologies (01CE0526)*. It doubles as the demo
repository used to capture the real GitHub/Git screenshots (Figs. 3–9)
required by that report.

> **Note:** Sanjivani General Hospital, referenced in the report as the
> pilot site, is a fictional/composite name used for illustration only
> and does not refer to any real hospital.

---

## Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React                  |
| Backend    | Node.js + Express      |
| Database   | MongoDB                |
| Versioning | Git + GitHub           |

---

## Repository Structure

```
qnext-token-system/
├── client/                  # React frontend
├── server/                  # Node.js + Express backend
│   └── src/
│       └── services/
│           └── tokenService.js   # shared queue-ordering logic
├── docs/                    # setup notes
├── .gitignore
└── README.md
```

---

## Branching Strategy

| Branch                     | Purpose                                                        |
|-----------------------------|------------------------------------------------------------------|
| `main`                      | Always reflects the version deployed to the hospital pilot server |
| `develop`                   | Integration branch where completed modules are combined & tested |
| `feature/token-booking`     | Patient OTP login and token generation (Meera)                   |
| `feature/queue-dashboard`   | Live queue display for OPD staff (Yash)                          |
| `feature/sms-alerts`        | SMS notifications when a token is about to be called (Kavya)     |

```
main
 └── develop
      ├── feature/token-booking
      ├── feature/queue-dashboard
      └── feature/sms-alerts
```

`main` and `develop` are protected branches — changes reach them only
through a reviewed pull request, never a direct push.

---

## Team

| Name           | Role                        |
|----------------|------------------------------|
| Aditya Rathod  | Team Lead / Senior Developer |
| Meera Solanki  | Backend Developer             |
| Yash Trivedi   | Frontend Developer            |
| Kavya Bhatt    | Full-Stack Developer          |
| Om Prajapati   | QA Engineer                   |

---

## Getting Started (for reproducing the case-study screenshots)

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/qnext-token-system.git
cd qnext-token-system

# 2. Create the develop branch
git checkout -b develop
git push origin develop

# 3. Create the token-booking feature branch
git checkout -b feature/token-booking
#  add/edit server/src/services/tokenService.js with the
#  FIFO version of calculateQueueOrder() shown in the report
git add .
git commit -m "Add OTP verification and token generation"
git push origin feature/token-booking

# 4. Create the queue-dashboard feature branch from develop
git checkout develop
git checkout -b feature/queue-dashboard
#  edit the SAME function in tokenService.js with the
#  priority-queue version shown in the report
git add .
git commit -m "Add priority queue for senior citizens"
git push origin feature/queue-dashboard
```

Open a pull request for `feature/token-booking → develop`, merge it,
then open a pull request for `feature/queue-dashboard → develop` — the
second merge will surface the conflict in `tokenService.js` described
in Section VIII of the case study, ready to resolve and screenshot.

---

## Core Conflict File: `tokenService.js`

```js
function calculateQueueOrder(tokens) {
  // Combined version after conflict resolution:
  // group by priority first, then FIFO within each group
  return tokens.sort((a, b) => {
    if (a.isPriority !== b.isPriority) {
      return a.isPriority ? -1 : 1;
    }
    return a.tokenNumber - b.tokenNumber;
  });
}
```

---

## Course Mapping

- **CO2** – Version Control Tools & Collaboration
- **SDG 9** – Industry, Innovation and Infrastructure
- **SDG 17** – Partnerships for the Goals

---

## License

This is an academic case-study demo project and is not intended for
production or clinical use.
