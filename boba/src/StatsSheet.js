import React from 'react';
import './index.css';
import { StatsEntryFields } from './StatsEntryFields.js';

export class StatsSheet extends React.Component {
  render() {
    return (
      <div className="module-space">
        <div className="form-entry">
          <StatsEntryFields />
        </div>
      </div>
    );
  }
}
