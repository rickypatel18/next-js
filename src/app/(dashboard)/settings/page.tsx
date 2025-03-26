export default function SettingsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-4">Manage your account settings here.</p>
    </main>
  );
}

// [id] when goes to particular id
// so use this [[...slug]] when multiple segments may or may not exist. 
// so use this [...slug] when multiple segments must exist. 
// (dashboard) Useful when you have multiple sections (e.g., dashboard, auth, admin) but don't want those names in the final URL. like /profile/dashboard