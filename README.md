# 📜 Zendesk Sidebar App with React

## 🏰 Introduction

Welcome, brave developer! This repository houses a **React-powered Zendesk Sidebar App**, designed to integrate seamlessly into the Zendesk Agent Workspace. If you're ready to embark on this epic quest, follow the steps below to wield its power!

---

## 🛠️ Prerequisites

Before starting your journey, ensure you have the following installed on your system:

- **Node.js** (v14+ recommended) ⚡
- **npm** (bundled with Node.js) 📦
- **Zendesk CLI (zcli)** 🏹

### Installing Zendesk CLI

Run this command in your terminal to install **zcli**, the command-line tool for Zendesk apps:

```bash
npm install -g @zendesk/zcli
```

Once installed, log in to your Zendesk account:

```bash
zcli login -i
```

During this step, you’ll need an **API Token** for authentication.

---

## 🔑 Obtaining Your Zendesk API Token

1. Navigate to **Admin Center** in your Zendesk instance.
2. Go to **Apps and Integrations → Zendesk API**.
3. Find the **API Token** section.
4. Click **Create API Token**, copy it, and **paste it into your terminal** when prompted.

---

## 🏗️ Installation & Setup

Clone this repository and install dependencies:

```bash
git clone https://github.com/felipeimp22/123.git
cd 123
npm install
```

To start the development server, run:

```bash
npm run dev
```

🚨 **Ignore** the browser window that opens automatically! Our battlefield is elsewhere.

---

## 🏹 Testing Your Sidebar App in Zendesk

Once your app is running, open your Zendesk instance in your browser:

```bash
https://{instance}.zendesk.com/agent/dashboard
```

Replace `{instance}` with your **Zendesk subdomain**. Then, select a ticket and **append the following query string to the URL**:

```bash
?zcli_apps=true
```

### Example:

```bash
https://{instance}.zendesk.com/agent/tickets/42?zcli_apps=true
```

Press **Enter**, and your sidebar app shall be revealed! 🎉

---

## 📜 Additional Resources

- [Official Zendesk Developer Docs](https://developer.zendesk.com/)
- [Project Repository](https://github.com/felipeimp22/123)

If you have questions or seek guidance, open an issue in this repository. May your code be clean and your customer support legendary! 🏰✨

