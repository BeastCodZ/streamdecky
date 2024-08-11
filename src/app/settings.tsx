// pages/settings.tsx
import React, { useEffect, useState } from 'react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<any[]>([]);

  useEffect(() => {
    fetch('/settings.json')
      .then(response => response.json())
      .then(data => setSettings(data))
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  return (
    <div>
      <h1>Settings</h1>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
    </div>
  );
};

export default Settings;
