import React, { useState } from 'react';

interface TabProps {
  tabTitle: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ tabTitle, children }) => {
  return <div>{children}</div>;
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // Состояние для активной вкладки

  const handleTabClick = (index: number) => {
    setActiveTab(index); // Обновляем активную вкладку
  };

  return (
    <div>
      {/* Панель вкладок */}
      <div style={{ display: 'flex', borderBottom: '2px solid #ccc', marginBottom: '10px' }}>
        <div
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 0 ? '2px solid blue' : 'none',
            fontWeight: activeTab === 0 ? 'bold' : 'normal',
          }}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 1 ? '2px solid blue' : 'none',
            fontWeight: activeTab === 1 ? 'bold' : 'normal',
          }}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 2 ? '2px solid blue' : 'none',
            fontWeight: activeTab === 2 ? 'bold' : 'normal',
          }}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
      </div>

      {/* Контент вкладок */}
      <div>
        {activeTab === 0 && (
          <Tab tabTitle="Tab 1">
            <h2>Content for Tab 1</h2>
            <p>This is the content of the first tab.</p>
          </Tab>
        )}
        {activeTab === 1 && (
          <Tab tabTitle="Tab 2">
            <h2>Content for Tab 2</h2>
            <p>This is the content of the second tab.</p>
          </Tab>
        )}
        {activeTab === 2 && (
          <Tab tabTitle="Tab 3">
            <h2>Content for Tab 3</h2>
            <p>This is the content of the third tab.</p>
          </Tab>
        )}
      </div>
    </div>
  );
};

export default Tabs;
