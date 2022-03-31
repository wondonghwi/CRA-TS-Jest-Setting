module.exports = {
    //verbose 옵션 추가 시 상세 테스트 내역 확인 가능
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        // jest가 절대경로를 인식하기 위함
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    // 테스트환경을 jsdom으로 설정함.
    testEnvironment: 'jsdom',
    "setupFilesAfterEnv": [
        "<rootDir>/jest.setup.js"
    ]
};