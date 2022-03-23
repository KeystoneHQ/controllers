import 'isomorphic-fetch';

// some libraries (e.g. uuid) use defineProperty to export, so jest.mock and sinon.stub won't work.
// add this to make the properties configurable and we can mock the library.
const _defineProperty = Object.defineProperty;
Object.defineProperty = function (obj, prop, descriptor) {
  descriptor.configurable = true;
  return _defineProperty(obj, prop, descriptor);
};
