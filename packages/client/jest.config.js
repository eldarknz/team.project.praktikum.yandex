import dotenv from 'dotenv';
dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    // '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@routers/(.*)$': '<rootDir>/src/routers/$1',
    '^@service/(.*)$': '<rootDir>/src/service/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@shared/(.*)$': '<rootDir>/../shared/$1',
    '^@public/(.*)$': '<rootDir>/src/public/$1',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '.*\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
