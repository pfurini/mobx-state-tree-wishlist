import React from 'react';
import App from './App';
import { Group } from '../models';
import { SnapshotHelper } from 'react-jest-snapshot-helper';

export const testGroupInput = {
  users: {
    a342: {
      id: 'a342',
      name: 'Homer',
      gender: 'm'
    },
    '5fc2': {
      id: '5fc2',
      name: 'Marge',
      gender: 'f'
    },
    '663b': {
      id: '663b',
      name: 'Bart',
      gender: 'm'
    },
    '65aa': {
      id: '65aa',
      name: 'Maggie',
      gender: 'f'
    },
    ba32: {
      id: 'ba32',
      name: 'Lisa',
      gender: 'f'
    }
  }
};

describe('App', () => {
  it('should render correctly', () => {
    SnapshotHelper.test(<App group={Group.create(testGroupInput)} />);
  });
});
