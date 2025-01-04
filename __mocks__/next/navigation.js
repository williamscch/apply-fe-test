const useRouter = jest.fn(() => ({
  push: jest.fn(),
}));

const useSearchParams = jest.fn(() => ({
  get: jest.fn(),
  toString: jest.fn(),
}));

export { useRouter, useSearchParams };