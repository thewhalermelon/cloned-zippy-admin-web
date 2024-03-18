import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';

import { ConfigProvider } from 'antd';
import { queryClient } from './query/queryClient';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import './styles/_fonts.scss';
import { COLOR_333, COLOR_BUTTON_DISABLED, COLOR_DIVIDER, COLOR_F1F3F6, COLOR_PRIMARY, COLOR_WHITE } from './constant';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Pretendard', sans-serif",
          colorBgBase: COLOR_333,
          colorText: COLOR_333,
          colorBgContainer: COLOR_WHITE,
          colorPrimary: COLOR_PRIMARY,
          colorBgContainerDisabled: COLOR_BUTTON_DISABLED,
          colorTextHeading: COLOR_WHITE,
        },
        components: {
          Divider: {
            colorSplit: COLOR_DIVIDER,
          },
          Table: {
            headerColor: COLOR_333,
            headerBg: COLOR_F1F3F6,
            cellFontSize: 14,
            stickyScrollBarBg: COLOR_WHITE,
          },
          Form: {
            labelColor: COLOR_333,
          },
          Modal: {
            headerBg: COLOR_WHITE,
            titleColor: COLOR_333,
            titleFontSize: 20,
            contentBg: COLOR_WHITE,
          },
          Message: {
            contentBg: COLOR_WHITE,
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ConfigProvider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
